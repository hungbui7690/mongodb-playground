/*
  $min
  - use the MongoDB $min operator in the update() method to update the values of one or more fields.
  - The $min operator is a field update operator that allows you to update the value of a field to a specified value if the specified value is less than (<) the current value of the field.


*/

// uses the $min operator to update the price of the document _id 5:
db.products.updateOne(
  {
    _id: 5,
  },
  {
    $min: {
      price: 699,
    },
  }
)
// The query found a matching document. However, it didn’t update any -> The reason is that the new value 699 is greater than the current value 599.

// The following example uses the $min operator to update the price of the document _id 5:
db.products.updateOne(
  {
    _id: 5,
  },
  {
    $min: {
      price: 499,
    },
  }
)
// In this case, the price field of the document _id 5 is updated to 499

// This query verifies the update:
db.products.find({ _id: 5 }, { name: 1, price: 1 })
