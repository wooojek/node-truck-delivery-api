const CargoInfoSeed = {
    "data": [
        { "id": "ID-1", "weight": 345 },
        { "id": "OTHER-ID-2", "weight": 500 },
        { "id": "CLIENT-ID-3", "weight": 300 }
    ]
};

const TruckInfoSeed1 = {
    "trucks": [
        {
            "load": [
                {
                    "id": "ID-1",
                    "weight": 345
                },
                {
                    "id": "OTHER-ID-2",
                    "weight": 500
                }
            ],
            "truckID": "f81fa764-afc8-4d58-8beb-2a0b0bd2bfa5"
        },
        {
            "load": [
                {
                    "id": "CLIENT-ID-3",
                    "weight": 300
                }
            ],
            "truckID": "8ebf63b6-dd5d-47bf-b61c-e497651a130f"
        }
    ],
    "price": 10.95,
};

const TruckInfoSeed2 = {
    "trucks": [
        {
            "load": [
                {
                    "id": "OTHER-ID-2",
                    "weight": 500
                },
                {
                    "id": "CLIENT-ID-3",
                    "weight": 300
                }
            ],
            "truckID": "c1506aa2-c383-4ff0-82c7-0425de13e274"
        }
    ],
    "price": 7.5,
};

module.exports = { 
    CargoInfoSeed, 
    TruckInfoSeed1, 
    TruckInfoSeed2 
};