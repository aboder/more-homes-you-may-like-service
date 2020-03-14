const { assert } = require('chai');
const mongooseORM = require('../server/listingsDB');

// describe('database tests', function() {
//   describe('test database', function() {
//     it('should save an entry to the database', function(done) {
//       const data = {
//         images: ['image1', 'image2'],
//         title: 'my amazing treehouse',
//         size: '3 bedrooms',
//         description: '1 mile from route 90 NOTHIN',
//         price: 70000,
//         reviewScore: 38,
//         reviewCount: 16,
//       };
//       mongooseORM.save(data)
//         .then((data) => {
//           console.log('data saved to the db: ', data);
//           done();
//         })
//         .catch((err) => {
//           done(new Error(`There was an error adding data to the database: ${err}`));
//         });
//     });
//   });
// });


describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', (done) => {
      assert.equal([1, 2, 3].indexOf(4), -1);
      done();
    });
  });
});
