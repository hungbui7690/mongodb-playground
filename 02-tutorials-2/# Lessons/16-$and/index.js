/*
  $and
  - $and :[{expression1}, {expression2},...]

  - Implicit AND operator
    + When you use a comma-separated list of expressions, MongoDB will carry an implicit AND operation:

        { field: { expression1, expression2, ... }


*/

// uses the $and operator to select all documents in the products collection where:
// - the value in the price field is equal to 899 and
// - the value in the color field is either "white" or "black"
db.products.find(
  {
    $and: [
      {
        price: 899,
      },
      {
        color: {
          $in: ['white', 'black'],
        },
      },
    ],
  },
  {
    name: 1,
    price: 1,
    color: 1,
  }
)

// uses the $and operator to select all documents where:
// - the price field value equals 699 and
// - the price field value exists
db.products.find(
  {
    $and: [
      {
        price: 699,
      },
      {
        price: {
          $exists: true,
        },
      },
    ],
  },
  {
    name: 1,
    price: 1,
    color: 1,
  }
)

// uses the implicit AND operator and returns the same result:
db.products.find(
  {
    price: {
      $eq: 699,
      $exists: true,
    },
  },
  {
    name: 1,
    price: 1,
    color: 1,
  }
)
