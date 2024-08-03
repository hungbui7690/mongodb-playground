/*
  $lt
  - less than

      {field: {$lt: value} }

*/

// uses the $lt operator to select documents from the products collection where price is less than 799:
db.products.find(
  {
    price: {
      $lt: 799,
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// uses $lt operator to select documents where the value of the screen field in the spec document is less than 7:
db.products.find(
  {
    'spec.screen': {
      $lt: 7,
    },
  },
  {
    name: 1,
    'spec.screen': 1,
  }
)

// uses the $lt operator to query the products collection to find all documents where the array storage has at least one element less than 128:
db.products.find(
  {
    storage: {
      $lt: 128,
    },
  },
  {
    name: 1,
    storage: 1,
  }
)

// uses the $lt operator to select documents from the products collection to find all documents where the release date before 2015-01-01:
db.products.find(
  {
    releaseDate: {
      $lt: new ISODate('2015-01-01'),
    },
  },
  {
    name: 1,
    releaseDate: 1,
  }
)
