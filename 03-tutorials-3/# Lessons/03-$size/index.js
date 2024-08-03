/*
  $size
  - match documents that have an array containing a specified number of elements.


*/

// uses the $size operator to select documents whose color array has two elements:
db.products.find(
  {
    color: {
      $size: 2,
    },
  },
  {
    name: 1,
    color: 1,
  }
)

// use $size operator with the $or operator to select documents whose the color array has one or two elements:
db.products.find(
  {
    $or: [
      {
        color: {
          $size: 1,
        },
      },
      {
        color: {
          $size: 2,
        },
      },
    ],
  },
  {
    name: 1,
    color: 1,
  }
)
