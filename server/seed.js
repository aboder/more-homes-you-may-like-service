const faker = require('faker');
const listingsDB = require('./listingsDB');
const Promise = require('bluebird');

fakeTitles = [
    "Josh Elder's World Famous Treehouse",
    "Fred Zirdung's Very Luxurious Treehouse",
    "Marcus's Extremely Intense Treehouse",
    "Treehouse of the Elder Wizard",
    "Treehouse of the Gods",
    "Best Damn Treehouse On The Planet",
    "Vinnie's Very Viewable Treehouse",
    "Jin's Ju-Jin-Su Treehouse",
    "Alex's Anime Kingdom Treehouse"
];

roomDescriptors01 = [
    'Amazing',
    'Beautiful little',
    'Very stable',
    'Large',
    'Dirt-nasty',
    'Disgusting',
    'Adorable',
    'Ugly little',
    'Jenky AF'
];
  // "treehouse" 
roomDescriptors02 = [
    'in the middle of the woods.',
    'in the middle of nowhere.',
    'in my backyard.',
    'in the middle of a squirrel colony.',
    'infested with interesting creatures.',
    'on top of a redwood tree.',
    'inside the trunk of Giant Sequia tree.',
    '400 miles from the nearest city.',
    'in the middle of the desert, no food or water provided.',
    'full of snakes.',
    'to be shared with an old man named Clyde'
];

const locations = [
    'Bangladesh',
    'Seattle, WA',
    'Jackson County, MI',
    'Los Angeles, CA',
    'Boulder, CO',
    'San Diego, CA',
    'Paris',
    'Babylon'
];

const deleteAllDatabaseEntries = () => {
    return listingsDB.deleteAllListings()
        .catch((err) => {
            console.log('There was an error clearing the db: ', err);
            throw err;
        })
        .then((result) => {
            console.log('database cleared');
            return result;
        });
};

const seedDatabase = () => {
    let count = 00;
    let promises = [];
    for (let i=0; count<20; i++) {
        let document = {
            images: [`fakeImageURL/${count}`, `fakeImageURL/${count+200}`],
            title: `${faker.random.arrayElement(fakeTitles)}`,
            size: `${faker.random.number({min: 1, max: 5})} bedrooms`,
            location: `${faker.random.arrayElement(locations)}`,
            description: `${faker.random.arrayElement(roomDescriptors01)} treehouse ${faker.random.arrayElement(roomDescriptors02)}`,
            price: faker.random.number({min: 40, max:500}),
            reviewScore: faker.random.number(50),
            reviewCount: faker.random.number(40)
        }
        promises.push(listingsDB.save(document));
        count += 1;
    }
    return Promise.all(promises)
        .catch((err) => {
            console.log("There was an error seeding the db: ", err);
            throw err;
        })
        .then((result) => {
            console.log('done seeding database');
            return result;
        });
};


const disconnectFromDB = () => {
    return listingsDB.disconnect()
        .catch((err) => {
            console.log('There was an error disconnecting from the DB: ', err);
            throw err;
        })
        .then((result) => {
            console.log('successfully disconnected from DB');
            return result;
        });
};

deleteAllDatabaseEntries()
    .then(seedDatabase)
    .then(disconnectFromDB)
    .catch((err) => {
        console.log('There was an error somewhere: ', err);
    });
    
