/*
  $inc
  - Sometimes, you need to increment the value of one or more fields by a specified value. In this case, you can use the update() method with the $inc operator.


*/

// uses the $inc operator to increase the price of the document _id 1 from the products collection by 50:
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $inc: {
      price: 50,
    },
  }
)

// If you query the document _id 1, you’ll see that the price has been increased:
db.products.find({ _id: 1 }, { name: 1, price: 1 })

// uses the $inc operator to decrease the price by 150:
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $inc: {
      price: -150,
    },
  }
)

// The price of the document _id 1 has been decreased as shown in the output of the following query:
db.products.find({ _id: 1 }, { name: 1, price: 1 })

// uses the $inc operator to increase the value of the price field as well as the ram field of the spec embedded document:
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $inc: {
      price: 50,
      'spec.ram': 4,
    },
  }
)

// Note that to specify a field in an embedded document, you use the dot notation e.g., "spec.ram".
// This query selects the document _id 1 to verify the update:
db.products.find({ _id: 1 }, { name: 1, price: 1, 'spec.ram': 1 })
