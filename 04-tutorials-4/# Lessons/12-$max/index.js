/*
  $max
  - The $max is a field update operator that allows you to update the value of a field to a specified value if the specified value is greater than (>) the current value of the field.
  - If the current value of a field is less than or equal to the value that you want to update, the $max operator won’t update the value.

*/

// The following example uses the $max operator to update the price of the document _id 1:
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $max: {
      price: 699,
    },
  }
)
// The query found one matching document but it didn’t update any document as shown in the modifiedCount value -> The reason is that the new value that we want to update is 699 which is less than the current value of the price field 799.

// The following example uses the $min operator to update the price of the document _id 1 to 899:
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $max: {
      price: 899,
    },
  }
)
// In this case, the price field of the document _id 1 is updated to 899

// This query verifies the update:
db.products.find({ _id: 1 }, { name: 1, price: 1 })
