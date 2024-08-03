/*
  $or
  - $or:[{expression1}, {expression2},...]


*/

// uses the $or operator to select all documents in the products collection where the value in the price field equals 799 or 899:
db.products.find(
  {
    $or: [
      {
        price: 799,
      },
      {
        price: 899,
      },
    ],
  },
  {
    name: 1,
    price: 1,
  }
)

// Since this example checks equality for the same price field, you should use the $in operator instead:
db.products.find(
  {
    price: {
      $in: [799, 899],
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// uses the $or operator to select all documents where the price is less than 699 or greater than 799:
db.products.find(
  {
    $or: [{ price: { $lt: 699 } }, { price: { $gt: 799 } }],
  },
  {
    name: 1,
    price: 1,
  }
)
