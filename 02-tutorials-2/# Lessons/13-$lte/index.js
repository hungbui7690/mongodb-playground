/*
  $lte
  - less than or equal

      {field: {$lte: value} }

*/

// uses the $gte operator to select documents from the products collection where price is less than 799:
db.products.find(
  {
    price: {
      $lte: 799,
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// uses $lte operator to select documents where the value of the screen field in the spec document is less than or equal to 6.5:
db.products.find(
  {
    'spec.screen': {
      $lte: 6.5,
    },
  },
  {
    name: 1,
    'spec.screen': 1,
  }
)

// uses the $lte operator to query the products collection to find all documents where the array storage has at least one element less than or equal to 64:
db.products.find(
  {
    storage: {
      $lte: 64,
    },
  },
  {
    name: 1,
    storage: 1,
  }
)

// uses the $lte operator to select documents from the products collection to find all documents where the release date is before or on 2015-01-11:
db.products.find(
  {
    releaseDate: {
      $lte: new ISODate('2015-01-01'),
    },
  },
  {
    name: 1,
    releaseDate: 1,
  }
)
