/*
  sort
  - cursor.sort({field1: order, field2: order, ...})

  - The order takes two values: 1 and -1. If you specify { field: 1 }, the sort() will sort the matching documents by the field in ascending order:

      cursor.sort({ field: 1 })

  - It’s straightforward to compare values of the same type. However, it is not the case for comparing the values of different BSON types.
  - MongoDB uses the following comparison order from lowest to highest for comparing values of different BSON types:

      MinKey (internal type)
      Null
      Numbers (ints, longs, doubles, decimals)
      Symbol, String
      Object
      Array
      BinData
      ObjectId
      Boolean
      Date
      Timestamp
      Regular Expression
      MaxKey (internal type)


*/

// returns all documents from the products collection where the price field exists. For each document, it selects the _id, name, and price fields:
db.products.find(
  {
    price: {
      $exists: 1,
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// To sort the products by prices in ascending order, you use the sort() method like this:
db.products
  .find(
    {
      price: {
        $exists: 1,
      },
    },
    {
      name: 1,
      price: 1,
    }
  )
  .sort({
    price: 1,
  })
// In this example, the sort() method places the document whose price is null first, and then the documents with the prices from lowest to highest.

// To sort the documents in descending order, you change the value of the price field to -1 as shown in the following query:
db.products
  .find(
    {
      price: {
        $exists: 1,
      },
    },
    {
      name: 1,
      price: 1,
    }
  )
  .sort({
    price: -1,
  })
// In this example, the sort() method places the document with the highest price first and the one whose price is null last. (See the sort order above)

// uses the sort() method to sort the products by name and price in ascending order. It selects only documents where the price field exists and includes the _id, name, and price fields in the matching documents.
db.products
  .find(
    {
      price: {
        $exists: 1,
      },
    },
    {
      name: 1,
      price: 1,
    }
  )
  .sort({
    price: 1,
    name: 1,
  })
// In this example, the sort() method sorts the products by prices first. Then it sorts the sorted result set by names.
// If you look at the result set more closely, you’ll see that the products with _id 3 and 2 have the same price 899. The sort() method places the SmartTablet before the xTablet based on the ascending order specified by the name field.

// sorts the products by prices in ascending order and sorts the sorted products by names in descending order:
db.products
  .find(
    {
      price: {
        $exists: 1,
      },
    },
    {
      name: 1,
      price: 1,
    }
  )
  .sort({
    price: 1,
    name: -1,
  })
// In this example, the sort() method sorts the products by prices in ascending order. However, it sorts sorted products by names in descending order.
// Unlike the previous example, the sort() places the xTable before SmartTablet.

// sorts the documents from the products collection by values in the releaseDate field. It selects only document whose releaseDate field exists and includes the _id, name, and releaseDate fields in the matching documents:
db.products
  .find(
    {
      releaseDate: {
        $exists: 1,
      },
    },
    {
      name: 1,
      releaseDate: 1,
    }
  )
  .sort({
    releaseDate: 1,
  })
// In this example, the sort() method places the documents with the releaseDate in ascending order.

// sorts the products by the values in the releaseDate field in descending order:
db.products
  .find(
    {
      releaseDate: {
        $exists: 1,
      },
    },
    {
      name: 1,
      releaseDate: 1,
    }
  )
  .sort({
    releaseDate: -1,
  })

// sorts the products by the values in the ram field in the spec embedded documents. It includes the _id, name, and spec fields in the matching documents.
db.products
  .find(
    {},
    {
      name: 1,
      spec: 1,
    }
  )
  .sort({
    'spec.ram': 1,
  })
