/*
  $in
  - select documents where the value of a field equals any value in an array.

      { field: { $in: [<value1>, <value2>,...] }}

*/

// uses the $in operator to select documents from the products collection whose the price is either 599 or 799:
db.products.find(
  {
    price: {
      $in: [699, 799],
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// uses the $in operator to select documents where the color array has at least one element either "black" or "white":
db.products.find(
  {
    color: {
      $in: ['black', 'white'],
    },
  },
  {
    name: 1,
    color: 1,
  }
)

// uses the $in operator to find documents where the color array has at least one element that matches either /^g+/ or /^w+/ regular expression:
db.products.find(
  {
    color: {
      $in: [/^g+/, /^w+/],
    },
  },
  {
    name: 1,
    color: 1,
  }
)

// The /^g+/ regular expression matches any string that begins with the letter g and is followed by any number of characters (+). Similarly, the /^w+/ regular expression matches any string that starts with the letter w and is followed by any number of characters (+).
