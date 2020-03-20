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
  roomID: Number,
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
    roomID: data.roomID,
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


  const promise = newListing.save()
    .then((result) => {
      console.log('saved result: ', result);
      return result;
    })
    .catch((err) => {
      console.log('there was an error: ', err);
    });
    
  return promise;
};

const disconnect = () => {
  return mongoose.disconnect();
};

// method to fetch all listings
const getAllListings = () => {
  return Listing.find()
    .catch((err) => {
      console.log('There was an error retrieving all the listings')
      throw err;
    })
    .then((result) => {
      return result;
    });
};

// delete all listings from database. Used before re-seeding.
const deleteAllListings = () => {
  return Listing.deleteMany()
    .then(console.log("All listings deleted"))
    .catch((err) => {
      console.log("There was an error deleting all listings: ", err);
    });
};


// get a listing by roomID
const getListingByID = (roomID) => {
  return Listing.findOne({"roomID": roomID})
    .catch((err) => {
      console.log('There was an error getting the listing by ID');
      throw err;
    })
    .then((result) => {
      return result;
    })
};


// get all the listings with matching location parameter (limit 12)
const getTwelve = (location) => {
  return Listing.find({"location": location}).limit(12)
    .catch((err) => {
      console.log('There was an error finding 12 listings by location: ', err);
    })
    .then((result) => {
      return result;
    });
};

module.exports = {
  save,
  getAllListings,
  deleteAllListings,
  disconnect,
  getTwelve,
  getListingByID
};
