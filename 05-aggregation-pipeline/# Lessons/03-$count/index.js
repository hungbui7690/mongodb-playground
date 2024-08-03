/*
  $sum
  - MongoDB $sum returns the sum of numeric values. Here’s the syntax of the $sum:

      { $sum: <expression> }

  - Typically, you apply the $sum to the numeric values. However, if a field contains a non-numeric value, the $sum ignores that value. Also, if the field doesn’t exist in any document, the $sum returns 0 for that field.


*/

// The following example uses the MongoDB $count to return the number of items in the sales collection:
db.sales.aggregate([
  {
    $group: {
      _id: '$item',
      itemCount: { $count: {} },
    },
  },
])
/*
  Output:
    [
      { _id: 'Mochas', itemCount: 1 },
      { _id: 'Americanos', itemCount: 4 },
      { _id: 'Lattes', itemCount: 2 },
      { _id: 'Cappuccino', itemCount: 3 }
    ]

  - In this example:
      _id: "$item" groups the documents by the item field value. It returns four groups for Mochas, Americanos, Lattes, and Cappuchino.
      $count: {} assigns the number of documents that have the same item field value to the itemCount field.
*/

// The following example uses the $count to calculate the number of documents per item and returns the item with a count greater than two:
db.sales.aggregate([
  {
    $group: {
      _id: '$item',
      itemCount: { $count: {} },
    },
  },
  {
    $match: { itemCount: { $gt: 2 } },
  },
])
/*
  Output:
    [
      { _id: 'Americanos', itemCount: 4 },
      { _id: 'Cappuccino', itemCount: 3 }
    ]
*/
