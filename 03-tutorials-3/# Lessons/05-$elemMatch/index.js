/*
  $elemMatch


*/

// uses the $elemMatch operator to query documents from the products collection:
db.products.find(
  {
    storage: {
      $elemMatch: {
        $lt: 128,
      },
    },
  },
  {
    name: 1,
    storage: 1,
  }
)
// It matches the documents where the storage is an array that contains at least one element less than 128:

/*
  [
    { _id: 1, name: 'xPhone', storage: [ 64, 128, 256 ] },
    { _id: 3, name: 'SmartTablet', storage: [ 16, 64, 128 ] }
  ]
*/
