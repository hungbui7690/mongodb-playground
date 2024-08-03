/*
  $avg
  - return the average value of the numeric values.
  - The MongoDB $avg returns the average value of numeric values. The syntax of the $avg is as follows:

      { $avg: <expression> }

  - The $avg ignores the non-numeric and missing values. If all values are non-numeric, the $avg returns null.


*/

// 1. The following example groups the documents by the item field and uses the $avg to calculate the average quantity for each group:
db.sales.aggregate([
  {
    $group: {
      _id: '$item',
      averageQty: { $avg: '$quantity' },
    },
  },
])
/*
  Output:
    [
      { _id: 'Americanos', averageQty: 17.5 },
      { _id: 'Lattes', averageQty: 27.5 },
      { _id: 'Mochas', averageQty: 11 },
      { _id: 'Cappuccino', averageQty: 16.333333333333332 }
    ]
*/

// 2. The following example groups the documents by the item field and use the $avg to calculate the average amount for each group:
db.sales.aggregate([
  {
    $group: {
      _id: '$item',
      averageAmount: { $avg: { $multiply: ['$quantity', '$price'] } },
    },
  },
  { $sort: { averageAmount: 1 } },
])
/*
  Output:
    [
      { _id: 'Cappuccino', averageAmount: 127.33333333333333 },
      { _id: 'Americanos', averageAmount: 140 },
      { _id: 'Mochas', averageAmount: 275 },
      { _id: 'Lattes', averageAmount: 562.5 }
    ]
*/

// 3. The following example uses the $avg to calculate the average amount per group and returns the group with the average amount greater than 150:
db.sales.aggregate([
  {
    $group: {
      _id: '$item',
      averageAmount: { $avg: { $multiply: ['$quantity', '$price'] } },
    },
  },
  { $match: { averageAmount: { $gt: 150 } } },
  { $sort: { averageAmount: 1 } },
])
/*
  Output:
    [
      { _id: 'Mochas', averageAmount: 275 },
      { _id: 'Lattes', averageAmount: 562.5 }
    ]
*/
