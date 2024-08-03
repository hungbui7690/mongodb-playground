/*
  $mul
  - multiply the value of a field by a number.



*/

// uses the $mul operator to multiply the price of the document _id 5 by 10%:
db.products.updateOne({ _id: 5 }, { $mul: { price: 1.1 } })

// The following query verifies the update:
db.products.find(
  {
    _id: 5,
  },
  {
    name: 1,
    price: 1,
  }
)

// uses the $mul operator to double the values of the first, second, and third array elements in the storage array of the document _id 1:
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $mul: {
      'storage.0': 2,
      'storage.1': 2,
      'storage.2': 2,
    },
  }
)

// uses the findOne() method to select the document with _id 1 to verify the update:
db.products.findOne({ _id: 1 }, { name: 1, storage: 1 })

// uses the $mul operator to double the values of the ram field in the spec embedded documents of all documents from the products collection:
db.products.updateMany(
  {},
  {
    $mul: {
      'spec.ram': 2,
    },
  }
)

// The following query returns all documents from the products collection:
db.products.find({}, { name: 1, 'spec.ram': 1 })
