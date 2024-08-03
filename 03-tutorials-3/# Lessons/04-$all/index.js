/*
  $all
  - allows you to find the documents where the value of a field is an array that contains all the specified elements.


  - The following expression that uses the $all operator:
      { arrayField: {$all: [element1, element2]} }

  - is equivalent to the following expression that use the $and operator:
      { $and: [{ arrayField: element1}, {arrayField: element2} ]}


*/

// uses the $all operator to query the products collection for documents where the value of the color field is an array that includes "black" and "white":
db.products.find(
  {
    color: {
      $all: ['black', 'white'],
    },
  },
  {
    name: 1,
    color: 1,
  }
)

// Functionally speaking, the above query is equivalent to the following query that uses the $and operator:
db.products.find(
  {
    $and: [{ color: 'black' }, { color: 'white' }],
  },
  {
    name: 1,
    color: 1,
  }
)
