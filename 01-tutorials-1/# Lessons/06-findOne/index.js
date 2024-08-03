/*
  findOne

      db.collection.findOne(query, projection)

  - The query is a document that specifies the selection criteria.
  - The projection is a document that specifies the fields in the matching document that you want to return.


  - If you omit the query, the findOne() returns the first document in the collection according to the natural order which is the order of documents on the disk.
  - If you don’t pass the projection argument, then findOne() will include all fields in the matching documents.
  - To specify whether a field should be included in the returned document, you use the following format:

      {field1: value, field1: value, ... }

  - If the value is true or 1, MongoDB will include the field in the returned document. In case the value is false or 0, MongoDB won’t include it.
  - By default, MongoDB always includes the _id field in the returned documents. To suppress it, you need to explicitly specify _id: 0 in the projection argument.
  - If multiple documents satisfy the query, the findOne() method returns the first document based on the order of documents stored on the data storage.


*/

// mongosh bookdb

db.products.insertMany([
  {
    _id: 1,
    name: 'xPhone',
    price: 799,
    releaseDate: ISODate('2011-05-14'),
    spec: { ram: 4, screen: 6.5, cpu: 2.66 },
    color: ['white', 'black'],
    storage: [64, 128, 256],
  },
  {
    _id: 2,
    name: 'xTablet',
    price: 899,
    releaseDate: ISODate('2011-09-01'),
    spec: { ram: 16, screen: 9.5, cpu: 3.66 },
    color: ['white', 'black', 'purple'],
    storage: [128, 256, 512],
  },
  {
    _id: 3,
    name: 'SmartTablet',
    price: 899,
    releaseDate: ISODate('2015-01-14'),
    spec: { ram: 12, screen: 9.7, cpu: 3.66 },
    color: ['blue'],
    storage: [16, 64, 128],
  },
  {
    _id: 4,
    name: 'SmartPad',
    price: 699,
    releaseDate: ISODate('2020-05-14'),
    spec: { ram: 8, screen: 9.7, cpu: 1.66 },
    color: ['white', 'orange', 'gold', 'gray'],
    storage: [128, 256, 1024],
  },
  {
    _id: 5,
    name: 'SmartPhone',
    price: 599,
    releaseDate: ISODate('2022-09-14'),
    spec: { ram: 4, screen: 5.7, cpu: 1.66 },
    color: ['white', 'orange', 'gold', 'gray'],
    storage: [128, 256],
  },
])

// select the first document from the products collection:
db.products.findOne()

// Note that omitting the query is the same as passing the query as an empty document:
db.products.findOne({})

db.products.findOne({ _id: 2 })

// returns only the _id and name fields of the matching document:
db.products.findOne({ _id: 5 }, { name: 1 })

// To completely remove _id from the returned document, you need to explicitly specify _id:0 in the projection document like this:
db.products.findOne({ _id: 5 }, { name: 1, _id: 0 })
