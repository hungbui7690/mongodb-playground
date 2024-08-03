/*
  $unset
  - remove one or more fields from a document.

  - The $unset operator has the following syntax:
      { $unset: {<field>: "", ... }}

  - In this syntax, you specify the field that you want to remove and its value. The field value isn’t important and doesn’t impact the operation. You can specify any value, the $unset will remove the field completely. If the <field> doesn’t exist in the document, then $unset operator will do nothing. It also won’t issue any warnings or errors.



*/

// uses the $unset operator to remove the price field from the document _id 1 in the products collection:
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $unset: {
      price: '',
    },
  }
)

// The modifiedCount indicated that one document has been modified. This query returns all documents from the products collection to verify the update:
db.products.find({}, { name: 1, price: 1 })
// As you can see clearly from the output, the $unset operator has completely removed the price field from the document with _id 1.

// uses the $unset operator to remove the ram field from the spec embedded documents of all documents in the products collection:
db.products.updateMany(
  {},
  {
    $unset: {
      'spec.ram': '',
    },
  }
)

// The following query returns all documents from the products collection:
db.products.find(
  {},
  {
    spec: 1,
  }
)
// As you can see, the ram field has been removed from spec embedded document in all documents.

// uses the $unset operator to set the first elements of the storage arrays to null:
db.products.updateMany({}, { $unset: { 'storage.0': '' } })

// The following query selects the storage array from all documents in the products collection:
db.products.find({}, { storage: 1 })
// In this example, the $unset operator sets the first elements of the storage arrays to null instead of removing them completely.

// uses the $unset operator to remove the releaseDate and spec fields from all the documents in the products collection:
db.products.updateMany(
  {},
  {
    $unset: {
      releaseDate: '',
      spec: '',
    },
  }
)

// The following query verifies the update:
db.products.find(
  {},
  {
    name: 1,
    storage: 1,
    releaseDate: 1,
    spec: 1,
  }
)
// As shown clearly from the output, the releaseDate and spec fields now are gone.
