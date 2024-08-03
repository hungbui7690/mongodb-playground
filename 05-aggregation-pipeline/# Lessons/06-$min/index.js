/*
  $min
  - return the minimum value
  - The MongoDB $min returns the minimum value. The $min operator uses both value and type for comparing according to the BSON comparison order for values of different types.
  - Here’s the syntax of the $min operator:

      { $min: <expression> }

  - If you apply the $min to the field that has a null or missing value in all documents, the $min returns null.
  - However, if you apply the $min to the field that has a null or missing value in some documents, but not all, the $min only considers non-null and non-missing values for that field.


*/

// 1. The following example uses the $min to find the minimum quantity from all the documents:
db.sales.aggregate([
  {
    $group: {
      _id: null,
      maxQty: { $min: '$quantity' },
    },
  },
  {
    $project: {
      _id: 0,
    },
  },
])
// [ { minQty: 11 } ]

// 2. The following example uses the $min operator to group documents in the item field and returns the minimum quantity per group of documents:
db.sales.aggregate([
  {
    $group: {
      _id: '$item',
      minQty: { $min: '$quantity' },
    },
  },
])
/*
  [
    { _id: 'Mochas', minQty: 11 },
    { _id: 'Americanos', minQty: 12 },
    { _id: 'Lattes', minQty: 25 },
    { _id: 'Cappuccino', minQty: 12 }
  ]
*/

// 3. The following groups the documents by the item field and returns the minimum amount for each group of sales:
db.sales.aggregate([
  {
    $group: {
      _id: '$item',
      maxQty: { $min: { $multiply: ['$quantity', '$price'] } },
    },
  },
])
/*
  [
    { _id: 'Cappuccino', minQty: 72 },
    { _id: 'Americanos', minQty: 110 },
    { _id: 'Lattes', minQty: 375 },
    { _id: 'Mochas', minQty: 275 }
  ]
*/
