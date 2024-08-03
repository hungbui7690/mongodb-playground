/*
  upsert 
  - Upsert is a combination of update and insert. Upsert performs two functions:
    + Update data if there is a matching document.
    + Insert a new document in case there is no document matches the query criteria.

  - To perform an upsert, you use the following updateMany() method with the upsert option set to true:

      document.collection.updateMany(query, update, { upsert: true} )

  - The upsert field in the third argument is set to false by default. This means that if you omit it, the method will only update the documents that match the query.

  - Notice that the updateOne() method also can upsert with the { upsert: true }.

*/

// uses the update() method to update the price for the document _id 6:
db.products.updateMany({ _id: 6 }, { $set: { price: 999 } })
/*
  {
    acknowledged: true,
    insertedId: null,
    upsertedCount: 0
  }
*/

// If you pass the { upsert: true } to the updateMany() method, it’ll insert a new document. For example:
db.products.updateMany({ _id: 6 }, { $set: { price: 999 } }, { upsert: true })
/*
  {
    acknowledged: true,
    matchedCount: 0,
    insertedId: 6,
    upsertedCount: 1
  }

  - The output indicates that there was no matching document (matchedCount is zero) and the updateMany() method didn’t update any document.
  - However, the updateMany() method inserted one document and returned the id of the new document stored in the upsertedId field.
*/

// If you query the document with _id 6 from the products collection, you’ll see the new document with the price field:
db.products.find({ _id: 6 })
