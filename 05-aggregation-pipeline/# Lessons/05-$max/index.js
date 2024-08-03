/*
  $max
  - return the maximum value
  - The MongoDB $max returns the maximum value. The $max operator uses both value and type for comparing according to the BSON comparison order for values of different types.
  - The $max operator has the following syntax:

      { $max: <expression> }

  - If you apply the $max to the field that has a null or missing value in all documents, the $max returns null.
  - However, if you apply the $max to the field that has a null or missing value in some documents, but not all, the $max only considers non-null and non-missing values for that field.


*/

// 1. The following example uses the $max to find the maximum quantity from all the documents:
db.sales.aggregate([
  {
    $group: {
      _id: null,
      maxQty: { $max: '$quantity' },
    },
  },
  {
    $project: {
      _id: 0,
    },
  },
])
// [ { maxQty: 30 } ]

// 2. The following example uses the $max operator to group documents in the item field and returns the maximum quantity per group of documents:
db.sales.aggregate([
  {
    $group: {
      _id: '$item',
      maxQty: { $max: '$quantity' },
    },
  },
])
/*
  [
    { _id: 'Mochas', maxQty: 11 },
    { _id: 'Americanos', maxQty: 22 },
    { _id: 'Lattes', maxQty: 30 },
    { _id: 'Cappuccino', maxQty: 20 }
  ]
*/

// 3. The following groups the documents by the item field and returns the maximum amount for each group of sales:
db.sales.aggregate([
  {
    $group: {
      _id: '$item',
      maxQty: { $max: { $multiply: ['$quantity', '$price'] } },
    },
  },
])
/*
  [
    { _id: 'Mochas', maxQty: 275 },
    { _id: 'Cappuccino', maxQty: 170 },
    { _id: 'Americanos', maxQty: 210 },
    { _id: 'Lattes', maxQty: 750 }
  ]
*/
