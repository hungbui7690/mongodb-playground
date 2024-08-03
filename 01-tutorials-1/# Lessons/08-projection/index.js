/*
  Projection
  - By default, the find() and findOne() methods return all fields in matching documents. Most of the time you don’t need data from all the fields.
  - To select fields to return from a query, you can specify them in a document and pass the document to the find() and findOne() methods. This document is called a projection document.


*/

// returns all fields from all documents in the products collection where the price is 899:
db.products.find({ price: 899 })

// returns all documents from the products collection. However, its result includes only the name, price, and _id field in the matching documents:
db.products.find(
  {},
  {
    name: 1,
    price: 1,
  }
)

// To suppress the _id field, you need to explicitly specify it in the projection document like this:
db.products.find(
  {},
  {
    name: 1,
    price: 1,
    _id: 0,
  }
)

// returns all fields of the document _id 1 except for releaseDate, spec, and storage fields:
db.products.find(
  { _id: 1 },
  {
    releaseDate: 0,
    spec: 0,
    storage: 0,
  }
)

// returns the name, price, and _id fields of document _id 1. It also returns the screen field on the spec embedded document:
db.products.find(
  { _id: 1 },
  {
    name: 1,
    price: 1,
    'spec.screen': 1,
  }
)

// specify embedded fields using the nested form like this:
db.products.find(
  { _id: 1 },
  {
    name: 1,
    price: 1,
    spec: { screen: 1 },
  }
)

db.products.find(
  {},
  {
    name: 1,
    'inventory.qty': 1,
  }
)
