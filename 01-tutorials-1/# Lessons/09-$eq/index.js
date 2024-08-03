/*
  $eq
  - equality

      { <field>: { $eq: <value> } }

  - The query is equivalent to the following:

      {<field>: <value>}



*/

// uses the $eq operator to query the products collection to select all documents where the value of the price field equals 899:
db.products.find(
  {
    price: {
      $eq: 899,
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// The query is equivalent to the following:
db.products.find(
  {
    price: 899,
  },
  {
    name: 1,
    price: 1,
  }
)

// uses the $eq operator to search for documents where the value of the ram field in the spec document equals 4:
db.products.find(
  {
    'spec.ram': {
      $eq: 4,
    },
  },
  {
    name: 1,
    'spec.ram': 1,
  }
)

// It is equivalent to the following:
db.products.find(
  {
    'spec.ram': 4,
  },
  {
    name: 1,
    'spec.ram': 1,
  }
)

// uses the $eq operator to query the products collection to find all documents where the array color contains an element with the value "black":
db.products.find(
  {
    color: {
      $eq: 'black',
    },
  },
  {
    name: 1,
    color: 1,
  }
)

// It’s equivalent to:
db.products.find(
  {
    color: 'black',
  },
  {
    name: 1,
    color: 1,
  }
)

// uses the $eq operator to select documents in the widget collection with the published date is 2020-05-14:
db.products.find(
  {
    releaseDate: {
      $eq: new ISODate('2020-05-14'),
    },
  },
  {
    name: 1,
    releaseDate: 1,
  }
)
