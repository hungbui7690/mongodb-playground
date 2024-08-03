/*
  $gte
  - greater than or equal to

      {field: {$gte: value} }

*/

// uses the $gte operator to select documents from the products collection where price is greater than 799:
db.products.find(
  {
    price: {
      $gte: 799,
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// uses $gte operator to select documents where the value of the screen field in the spec document is greater than or equal to 9.5:
db.products.find(
  {
    'spec.screen': {
      $gte: 9.5,
    },
  },
  {
    name: 1,
    'spec.screen': 1,
  }
)

// uses the $gte operator to query the products collection to find all documents where the array storage has at least one element greater than or equal to 512:
db.products.find(
  {
    storage: {
      $gte: 512,
    },
  },
  {
    name: 1,
    storage: 1,
  }
)

// uses the $gte operator to select documents from the products collection to find all documents where the release date is after or on 2020-05-14:
db.products.find(
  {
    releaseDate: {
      $gte: new ISODate('2020-05-14'),
    },
  },
  {
    name: 1,
    releaseDate: 1,
  }
)
