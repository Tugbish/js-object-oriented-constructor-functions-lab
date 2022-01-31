const scooter = new Scooter(year, color, model);

function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}

const driver = new Driver(name, age, experience);

function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

const pickupLocation = new PickupLocation(address, city);

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}

//PickupLocation with address and city properties