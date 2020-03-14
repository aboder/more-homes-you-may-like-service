/*
this file will run a script that will populate the MongoDB with 100 listing documents
    each document will contain:
        a listing ID (primary key) from 0-99
        an array of url strings that point to images hosted on S3
        title: string
        size: string
        description: string
        price: integer from 00-99
        reviewScore: integer from 00-50
        reviewCount: integer from 00-10
*/      


const listingsDB = require('./listingsDB');
const Promise = require('bluebird');

const seedDatabase = () => {
    let count = 00;
    let promises = [];
    for (let i=0; count<100; i++) {
        let document = {
            images: [`fakeImageURL/${count}`, `fakeImageURL/${count+200}`],
            title: `example treehouse title ${count}`,
            size: `${count % 5} bedrooms`,
            description: `${count} miles from the beach`,
            price: count,
            reviewScore: count % 50,
            reviewCount: count % 10
        }
        promises.push(listingsDB.save(document));
        count += 1;
    }
    Promise.all(promises).then(() => {
        console.log('Done seeding database');
    });
};

seedDatabase();