/*
  limit
  - db.collection.find(<query>).limit(<documentCount>)

  - To get the predictable result set using the limit(), you need to sort the result set first before applying the method like this:

      cursor
        .sort({...})
        .limit(<documentCount>)

  - In practice, you often use the limit() with the skip() method to paginate a collection.

  - The skip() method specifies from where the query should start returning the documents:

      cursor.skip(<offset>) 

  - The following shows the documents on the page pageNo with the documentCount documents per page:

      db.collection.find({...})
      .sort({...})
      .skip(pageNo > 0 ? ( ( pageNo - 1 ) * documentCount) : 0)
      .limit(documentCount);

  @@ Note that the limit() and skip() is analogous to the LIMIT OFFSET clause in SQL.


*/

// uses the limit() method to get the most expensive product in the products collection. It includes the _id, name, and price fields in the returned documents:
db.products
  .find(
    {},
    {
      name: 1,
      price: 1,
    }
  )
  .sort({
    price: -1,
  })
  .limit(1)
// In this example, we sort the products by prices in descending order and use limit() to select the first one.
// The products collection has two products at the same price 899. The returned document depends on the order of documents stored on the disk.

// To get the predictable result, the sort should be unique. For example:
db.products
  .find(
    {},
    {
      name: 1,
      price: 1,
    }
  )
  .sort({
    price: -1,
    name: 1,
  })
  .limit(1)
// This example sorts the document by prices in descending order. And then it sorts the sorted result set by names in ascending order. The limit() returns the first document in the final result set.

// Suppose you want to divide the products collection into pages, each has 2 products.
// The following query uses the skip() and limit() to get the documents on the second page:
db.products
  .find(
    {},
    {
      name: 1,
      price: 1,
    }
  )
  .sort({
    price: -1,
    name: 1,
  })
  .skip(2)
  .limit(2)
