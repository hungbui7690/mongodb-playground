/*
  updateMany


*/

// uses the updateMany() method to update the documents where the value of the price field is 899:
db.products.updateMany({ price: 899 }, { $set: { price: 895 } })

// To check the update, you can use the find() method to select the documents where the value of the price field is 895 as follows:
db.products.find(
  {
    price: 895,
  },
  {
    name: 1,
    price: 1,
  }
)

// uses the find() method to select the documents where the value in the price field is greater than 700:
db.products.find(
  {
    price: { $gt: 700 },
  },
  {
    name: 1,
    price: 1,
    spec: 1,
  }
)

// The following example uses the updateMany() method to update the values of the ram, screen, and cpu fields in the spec embedded documents of these documents:
db.products.updateMany(
  {
    price: { $gt: 700 },
  },
  {
    $set: {
      'spec.ram': 32,
      'spec.screen': 9.8,
      'spec.cpu': 5.66,
    },
  }
)

// uses the updateMany() method to update the first and second elements of the storage array of the documents where the _id is 1, 2 and 3:
db.products.updateMany(
  {
    _id: {
      $in: [1, 2, 3],
    },
  },
  {
    $set: {
      'storage.0': 16,
      'storage.1': 32,
    },
  }
)

// If you query the documents whose _id is 1, 2, and 3 from the products collection, you’ll see that the first and second elements of the storage array have been updated:
db.products.find({ _id: { $in: [1, 2, 3] } }, { name: 1, storage: 1 })
