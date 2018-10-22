const request = require('supertest');
const expect = require('expect');
const app = require('../app');
const countMinTrucks = require('../lib/countMinTrucks');
const TruckInfo = require('../models/truckinfo');
const { CargoInfoSeed, TruckInfoSeed1, TruckInfoSeed2 } = require('./delivery.seed');

describe('GET /delivery/history', () => {
    before((done) => {
        TruckInfo.deleteMany({}).then(async () => {
            return TruckInfo.create([TruckInfoSeed1, TruckInfoSeed2]);
        }).then((() => done()));
    });
    it('should get all truck infos saved in database', (done) => {
        request(app.listen())
            .get('/delivery/history')
            .expect(200)
            .expect((res) => {
                expect(res.body[0].price).toBe(TruckInfoSeed1.price);
                expect(res.body[1].price).toBe(TruckInfoSeed2.price);
            })
            .end(done);
    });
    
    it('should return 404 Not Found if database is empty', (done) => {
        request(app.listen())
            .get('/delivery/history')
            .expect(404)
            .end(done);
    });

    afterEach((done) => {
        TruckInfo.deleteMany({}).then((() => done()));
    });
});

describe('POST /delivery', () => {
    it('should count price according to the /public/pricing.png', (done) => {
        request(app.listen())
            .post('/delivery')
            .send(CargoInfoSeed)
            .expect(200)
            .expect(res => {
                expect(res.body.price).toBe(TruckInfoSeed1.price)
            })
            .end(done);
    });
    it('should count minimal amount of trucks needed', (done) => {
        const countedTrucks = countMinTrucks(CargoInfoSeed.data, 1000);
        request(app.listen())
            .post('/delivery')
            .send(CargoInfoSeed)
            .expect(200)
            .expect(res => {
                expect(res.body.trucks.length).toBe(countedTrucks.length)
            })
            .end(done);
    });
    it('should assign unique id to every truck', (done) => {
        request(app.listen())
            .post('/delivery')
            .send(CargoInfoSeed)
            .expect(200)
            .expect(res => {
                expect(typeof res.body.trucks[0].truckID).toBe('string');
                expect(res.body.trucks[0].truckID).not.toBe(res.body.trucks[1].truckID);
            })
            .end(done);
    });
    after((done) => {
        TruckInfo.deleteMany({}).then((() => done()));
    });
});