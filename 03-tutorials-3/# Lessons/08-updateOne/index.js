/*
  updateOne
  - update the first document in a collection that matches a condition.

      db.collection.updateOne(filter, update, options)

  - The updateOne() method returns a document that contains some fields. The notable ones are:

    + The matchedCount returns the number of matched documents.
    + The modifiedCount returns the number of updated documents. In the case of the updateOne() method, it can be either 0 or 1.

***************************

  $set operator
  - The $set operator allows you to replace the value of a field with a specified value. The $set operator has the following syntax:

      { $set: { <field1>: <value1>, <field2>: <value2>, ...}}

  - If the field doesn’t exist, the $set operator will add the new field with the specified value to the document as long as the new field doesn’t violate a type constraint.
  - If you specify the field with the dot notation e.g., embeddedDoc.field and the field does not exist, the $set will create the embedded document (embedded).


*/

// uses the updateOne() method to update the price of the document with _id: 1:

db.products.updateOne(
  {
    _id: 1,
  },
  {
    $set: {
      price: 899,
    },
  }
)
// In this result document, the matchedCount indicates the number of matching documents (1) and the modifiedCount shows the number of the updated documents (1).

// To verify the update, you can use the findOne() method to retrieve the document _id: 1 as follows:
db.products.findOne({ _id: 1 }, { name: 1, price: 1 })

// selects the documents from the products collection in which the value of the price field is 899:
db.products.find({ price: 899 }, { name: 1, price: 1 })

// uses the updateOne() method to update the first matching document where the price field is 899:
db.products.updateOne({ price: 899 }, { $set: { price: null } })

// If you query the document with _id: 1, you’ll see that its price field is updated:
db.products.find({ _id: 1 }, { name: 1, price: 1 })

// uses the find() method to select the document with _id: 4:
db.products.find({ _id: 4 }, { name: 1, spec: 1 })

// uses the updateOne() method to update the values of the ram, screen, and cpu fields in the spec embedded document of the document _id: 4:
db.products.updateOne(
  {
    _id: 4,
  },
  {
    $set: {
      'spec.ram': 16,
      'spec.screen': 10.7,
      'spec.cpu': 2.66,
    },
  }
)

// If you query the document with _id 4 again, you’ll see the change:
db.products.find({ _id: 4 }, { name: 1, spec: 1 })

// uses the updateOne() method to update the first and second elements of the storage array in the document with _id 4:
db.products.updateOne(
  { _id: 4 },
  {
    $set: {
      'storage.0': 16,
      'storage.1': 32,
    },
  }
)

// If you query the document with _id 4 from the products collection, you’ll see that the first and second elements of the storage array have been updated:
db.products.find({ _id: 4 }, { name: 1, storage: 1 })
