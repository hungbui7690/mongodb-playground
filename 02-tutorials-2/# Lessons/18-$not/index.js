/*
  $not
  - { field: { $not: { <expression> } } }


*/

// shows how to use the $not operator to find documents where:
// - the price field is not greater than 699.
// - do not contain the price field.
db.products.find(
  {
    price: {
      $not: {
        $gt: 699,
      },
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// Notice that the { $not: { $gt: 699 } } is different from the $lte operator. The { $lte : 699 } returns documents where the price field exists and its value is less than or equal to 699.
// The following example uses the $lte operator:
db.products.find(
  {
    price: {
      $lte: 699,
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// uses the $not operator to select documents from the products collection where the value of the field does not match the regular expression /^smart+/i:
db.products.find(
  {
    name: {
      $not: /^Smart+/,
    },
  },
  {
    name: 1,
  }
)
