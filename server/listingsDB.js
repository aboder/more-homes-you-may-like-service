const mongoose = require('mongoose');
mongoose.promise = require('bluebird');

mongoose.connect('mongodb://localhost/listingFetcher');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('connected to the db');
});


// create listingSchema
// reminder: mongoose adds a '_id' property to every document (type: ObjectId);
const listingSchema = new mongoose.Schema({
  images: [String],
  name: String,
  title: String,
  size: String,
  description: String,
  price: Number,
  reviewScore: Number,
  reviewCount: Number,
});


// create Listing model
const Listing = mongoose.model('Listing', listingSchema);

// save method for a single listing
const save = (data) => {
  const newListing = new Listing({
    images: data.images,
    name: data.name,
    title: data.title,
    size: data.size,
    description: data.description,
    price: data.price,
    reviewScore: data.reviewScore,
    reviewCount: data.reviewCount,
  });

  // console.log('about to save this newListing to the db: ', JSON.stringify(newListing));

  const promise = newListing.save().then((result) => {
    console.log('saved result: ', result);
  }).catch((err) => {
    console.log('there was an error: ', err);
  });
  return promise;
};

// method to fetch all listings
const getAllListings = () => Listing.find();


module.exports = {
  save,
  getAllListings,
};
