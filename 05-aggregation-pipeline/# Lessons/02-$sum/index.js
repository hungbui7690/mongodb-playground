/*
  $count
  - return the number of documents in a group.
  - MongoDB $count returns the number of documents in a group. Here’s the syntax of the $count:

      { $count: {} }

  - Note that the $count does not accept any parameters.
  - The $count is functionally equivalent to using the following $sum in the $group stage:

      { $sum: 1 }


*/

// use coffeeshop

// We’ll use the following sales collection to demonstrate the $sum:
db.sales.insertMany([
  {
    _id: 1,
    item: 'Americanos',
    price: 5,
    size: 'Short',
    quantity: 22,
    date: ISODate('2022-01-15T08:00:00Z'),
  },
  {
    _id: 2,
    item: 'Cappuccino',
    price: 6,
    size: 'Short',
    quantity: 12,
    date: ISODate('2022-01-16T09:00:00Z'),
  },
  {
    _id: 3,
    item: 'Lattes',
    price: 15,
    size: 'Grande',
    quantity: 25,
    date: ISODate('2022-01-16T09:05:00Z'),
  },
  {
    _id: 4,
    item: 'Mochas',
    price: 25,
    size: 'Tall',
    quantity: 11,
    date: ISODate('2022-02-17T08:00:00Z'),
  },
  {
    _id: 5,
    item: 'Americanos',
    price: 10,
    size: 'Grande',
    quantity: 12,
    date: ISODate('2022-02-18T21:06:00Z'),
  },
  {
    _id: 6,
    item: 'Cappuccino',
    price: 7,
    size: 'Tall',
    quantity: 20,
    date: ISODate('2022-02-20T10:07:00Z'),
  },
  {
    _id: 7,
    item: 'Lattes',
    price: 25,
    size: 'Tall',
    quantity: 30,
    date: ISODate('2022-02-21T10:08:00Z'),
  },
  {
    _id: 8,
    item: 'Americanos',
    price: 10,
    size: 'Grande',
    quantity: 21,
    date: ISODate('2022-02-22T14:09:00Z'),
  },
  {
    _id: 9,
    item: 'Cappuccino',
    price: 10,
    size: 'Grande',
    quantity: 17,
    date: ISODate('2022-02-23T14:09:00Z'),
  },
  {
    _id: 10,
    item: 'Americanos',
    price: 8,
    size: 'Tall',
    quantity: 15,
    date: ISODate('2022-02-25T14:09:00Z'),
  },
])

// 1. The following example calculates the total quantity of coffee sales in the sales collection:
db.sales.aggregate([
  {
    $group: {
      _id: null,
      totalQty: { $sum: '$quantity' },
    },
  },
])
/*
  Output:
    [ { _id: null, totalQty: 185 } ]
*/

// 2. To remove the _id field from the output document, you can use the $project like this:
db.sales.aggregate([
  {
    $group: {
      _id: null,
      totalQty: { $sum: '$quantity' },
    },
  },
  { $project: { _id: 0 } },
])
/*
  Output:
    [ { totalQty: 185 } ]
*/

// 3. The following example uses the $sum to calculate the sum of quantity grouped by items:
db.sales.aggregate([
  {
    $group: {
      _id: '$item',
      totalQty: { $sum: '$quantity' },
    },
  },
])
/*
  Output:
    [
      { _id: 'Cappuccino', totalQty: 49 },
      { _id: 'Lattes', totalQty: 55 },
      { _id: 'Americanos', totalQty: 70 },
      { _id: 'Mochas', totalQty: 11 }
    ]

  - In this example, the $group groups the documents by items and the $sum returns the total quantity for each group.
*/

// 4. The following example uses the $sum to returns the total quantity of each item and sorts the result documents by the totalQty in descending order:
db.sales.aggregate([
  {
    $group: {
      _id: '$item',
      totalQty: { $sum: '$quantity' },
    },
  },
  { $sort: { totalQty: -1 } },
])
/*
  Output:
    [
      { _id: 'Americanos', totalQty: 70 },
      { _id: 'Lattes', totalQty: 55 },
      { _id: 'Cappuccino', totalQty: 49 },
      { _id: 'Mochas', totalQty: 11 }
    ]
*/

// 5. The following example uses the $sum to return the total quantity of each item and $match to include only items with a total quantity greater than 50:
db.sales.aggregate([
  {
    $group: {
      _id: '$item',
      totalQty: { $sum: '$quantity' },
    },
  },
  { $match: { totalQty: { $gt: 50 } } },
  { $sort: { totalQty: -1 } },
])
/*
  Output:
    [
      { _id: 'Americanos', totalQty: 70 },
      { _id: 'Lattes', totalQty: 55 }
    ]
*/

// 6. The following example uses the $sum to calculate the total amount by multiplying price with quantity for coffee sales group by sizes:
db.sales.aggregate([
  {
    $group: {
      _id: '$size',
      totalAmount: { $sum: { $multiply: ['$price', '$quantity'] } },
    },
  },
  { $sort: { totalAmount: -1 } },
])
/*
  Output:
    [
      { _id: 'Tall', totalAmount: 1285 },
      { _id: 'Grande', totalAmount: 875 },
      { _id: 'Short', totalAmount: 182 }
    ]
*/
