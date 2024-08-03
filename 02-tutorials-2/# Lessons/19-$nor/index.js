/*
  $nor


*/

// uses the $nor operator to select documents from the products collection:
db.products.find(
  {
    $nor: [{ price: 899 }, { color: 'gold' }],
  },
  {
    name: 1,
    price: 1,
    color: 1,
  }
)

// It returns documents where:
// - the value is the price field is not 899
// - and the color array does not have any "gold" element.

// { "_id" : 1, "name" : "xPhone", "price" : 799, "color" : [ "white", "black" ] }
// { "_id" : 6, "name" : "xWidget", "color" : [ "black" ] }
