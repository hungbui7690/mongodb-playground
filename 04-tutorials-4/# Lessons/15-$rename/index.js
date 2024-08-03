/*
  $rename 
  - rename a field in a document.

      { $rename: { <field_name>: <new_field_name>, ...}}

*/

// uses the $rename operator to rename the misspelled field nmea to name:
db.products.updateMany(
  {},
  {
    $rename: {
      nmea: 'name',
    },
  }
)

// To verify the update, you can use the find() method to select all documents from the products collection:
db.products.find({}, { name: 1 })

// uses the $rename operator to change the size field of the spec embedded document to screenSize:
db.products.updateMany(
  {},
  {
    $rename: {
      'spec.screen': 'spec.screenSize',
    },
  }
)

// This query uses the find() method to select all documents from the products collection:
db.products.find(
  {},
  {
    spec: 1,
  }
)

// uses the $rename operator to move the cpu field out of the spec embedded document in the document _id 1:
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $rename: {
      'spec.cpu': 'cpu',
    },
  }
)

// The following query selects the document with _id 1 to verify the rename:
db.products.find({ _id: 1 })
// As you can see clearly from the output, the cpu field becomes the top-level field.

// Rename the field color to storage in the document with _id 2.
// However, the storage field already exists. Therefore, the $rename operator removes the storage field and renames the field color to storage:
db.products.updateOne(
  {
    _id: 2,
  },
  {
    $rename: {
      color: 'storage',
    },
  }
)

// Let’s check the document _id 2:
db.products.find({ _id: 2 })
