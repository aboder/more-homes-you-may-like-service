const mongoose = require('mongoose');
mongoose.promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/listingFetcher', {useNewUrlParser: true});


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
  location: String,
  title: String,
  size: String,
  description: String,
  price: Number,
  reviewScore: Number,
  reviewCount: Number,
  },
  // mongoose schema options:
  {collection: 'listings'}
);


// create Listing model
const Listing = mongoose.model('Listing', listingSchema);

// save method for a single listing
const save = (data) => {
  const newListing = new Listing({
    images: data.images,
    name: data.name,
    location: data.location,
    title: data.title,
    size: data.size,
    description: data.description,
    price: data.price,
    reviewScore: data.reviewScore,
    reviewCount: data.reviewCount,
  });


  const promise = newListing.save().then((result) => {
    console.log('saved result: ', result);
    return result;
  }).catch((err) => {
    console.log('there was an error: ', err);
  });
  return promise;
};

const disconnect = () => {
  return mongoose.disconnect();
};

// method to fetch all listings
const getAllListings = () => {
  return Listing.find();
};

const deleteAllListings = () => {
  let promise = Listing.deleteMany()
    .then(console.log("All listings deleted"))
    .catch((err) => {
      console.log("There was an error deleting all listings: ", err);
    });
  return promise;
}

// fetch all listings that share a location property with the roomID
const getTwelve = (roomID) => {
  let currentListing = Listing.findOne({_id: roomID});
  let currentLocation = currentListing.location;
  let promise = Listing.find({location: currentLocation}).limit(12);
  return promise;
}


module.exports = {
  save,
  getAllListings,
  deleteAllListings,
  disconnect
};
