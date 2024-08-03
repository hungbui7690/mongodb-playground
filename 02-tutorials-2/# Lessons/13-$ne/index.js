/*
  $ne
  - not equal

      { field: {$ne: value}}

*/

// uses the $ne operator to select documents from the products collection where the price is not equal to 899:
db.products.find(
  {
    price: {
      $ne: 899,
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// uses $ne operator to select documents where the value of the screen field in the spec document is not equal to 9.7:
db.products.find(
  {
    'spec.screen': {
      $ne: 9.7,
    },
  },
  {
    name: 1,
    'spec.screen': 1,
  }
)

// uses the $ne operator to query the products collection to find documents where the array storage does not have any element that equals 128:
db.products.find(
  {
    storage: {
      $ne: 128,
    },
  },
  {
    name: 1,
    storage: 1,
  }
)

// uses the $ne operator to find documents from the products collection where the release date is not 2015-01-14:
db.products.find(
  {
    releaseDate: {
      $ne: new ISODate('2015-01-14'),
    },
  },
  {
    name: 1,
    releaseDate: 1,
  }
)
