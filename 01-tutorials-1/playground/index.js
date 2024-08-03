/*
  $exists
  - When the <boolean_value> is true, the $exists operator matches the documents that contain the field with any value including null.
  - If the <boolean_value> is false, the $exists operator matches the documents that don’t contain the field.
  - The MongoDB $exists doesn’t correspond to the EXISTS operator in SQL.

  # Notice that MongoDB 4.2 or later doesn’t treat the $type: 0 as the synonym for $exists:false anymore.

*/

// uses the $exists operator to select documents where the price field exists:
db.products.find(
  {
    price: {
      $exists: true,
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// uses the $exists operator that select documents whose price field exists and has a value greater than 799:
db.products.find(
  {
    price: {
      $exists: true,
      $gt: 699,
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// uses the $exists operator to select documents that don’t have the price field:
db.products.find(
  {
    price: {
      $exists: false,
    },
  },
  {
    name: 1,
    price: 1,
  }
)
