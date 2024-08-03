/*
  deleteMany 
  - delete all documents that match a condition from a collection.

      db.collection.deleteMany(filter, option)

  - The deleteOne() method returns a document containing the deleteCount field that stores the number of deleted documents.
  - To delete all documents that match a condition from a collection, you use the deleteMany() method.


*/

// uses the deleteMany() method to delete all documents where the value in the price field is 899:
db.products.deleteMany({ price: 899 })

// uses the deleteMany() method to delete all documents from the products collection:
db.products.deleteMany({})
// In this example, we passed an empty document {} into the deleteMany() method. Therefore, it deleted all documents from the products collection.
