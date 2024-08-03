/*
  $nin
  - not in

      { field: { $nin: [ <value1>, <value2> ...]} }

*/

// uses the $nin operator to select documents from the products collection whose price is neither 599 or 799:
db.products.find(
  {
    price: {
      $nin: [699, 799],
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// uses the $nin operator to select documents where the color array doesn’t have an element that is either "black" or "white":
db.products.find(
  {
    color: {
      $nin: ['black', 'white'],
    },
  },
  {
    name: 1,
    color: 1,
  }
)

// uses the $nin operator to find documents where the color array doesn’t have an element that matches /^g+/ and /^w+/ regular expression:
db.products.find(
  {
    color: {
      $nin: [/^g+/, /^w+/],
    },
  },
  {
    name: 1,
    color: 1,
  }
)
