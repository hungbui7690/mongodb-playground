/*
  deleteOne 
  - delete a single document from a collection.

      db.collection.deleteOne(filter, option)

  - The deleteOne() method returns a document containing the deleteCount field that stores the number of deleted documents.
  - To delete all documents that match a condition from a collection, you use the deleteMany() method.


*/

// uses the deleteOne() method to delete a document with the _id is 1 from the products collection:
db.products.deleteOne({ _id: 1 })

//  uses the deleteOne() method to remove the first document returned from the products collection:
db.products.deleteOne({})
// In this example, we passed an empty document {} to the deleteOne() method. Therefore, it removed the first document from the products collection.
