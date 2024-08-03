/*
  $gt
  - greater than

      { field: { $gt: value}}


*/

// uses the $gt operator to select documents from the products collection where price is greater than 699:
db.products.find(
  {
    price: {
      $gt: 699,
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// uses $gt operator to select documents where the value of the ram field in the spec document is greater than 8:
db.products.find(
  {
    'spec.ram': {
      $gt: 8,
    },
  },
  {
    name: 1,
    'spec.ram': 1,
  }
)

// uses the $gt operator to query the products collection to find all documents where the storage array has at least one element greater than 128:
db.products.find(
  {
    storage: {
      $gt: 128,
    },
  },
  {
    name: 1,
    storage: 1,
  }
)

// uses the $gt operator to query documents from the products collection to find all documents where the release date is after 2015-01-01:
db.products.find(
  {
    releaseDate: {
      $gt: new ISODate('2015-01-01'),
    },
  },
  {
    name: 1,
    releaseDate: 1,
  }
)
