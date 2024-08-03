/*
  $type
  - select documents where the value of a field is an instance of a BSON type.
  - The $type operator has the following syntax:

      { field: { $type: <BSON type> } }

  - The $type operator also accepts a list of BSON types like this:

      { field: { $type: [ <BSON type1> , <BSON type2>, ... ] } }


*******************************

  - MongoDB provides you with three ways to identify a BSON type: string, number, and alias. The following table lists the BSON types identified by these three forms:

      Type	              Number	  Alias
      Double	            1	        “double”
      String	            2	        “string”
      Object	            3	        “object”
      Array	              4	        “array”
      Binary data	        5	        “binData”
      ObjectId	          7	        “objectId”
      Boolean	            8	        “bool”
      Date	              9	        “date”
      Null	              10	      “null”
      Regular Expression	11	      “regex”
      JavaScript	        13	      “javascript”
      32-bit integer	    16	      “int”
      Timestamp	          17	      “timestamp”
      64-bit integer	    18	      “long”
      Decimal128	        19	      “decimal”
      Min key	            -1	      “minKey”
      Max key	            127	      “maxKey”

  - The $type operator also supports the number alias that matches against the following BSON types:

      double
      32-bit integer
      64-bit integer
      decimal


*******************************

  - The products collection contains the price field that has int, double, long values.

*/

// uses the $type operator to query documents from the products collection where the price field is the string type or is an array containing an element that is a string type.
db.products.find(
  {
    price: {
      $type: 'string',
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// Since the string type corresponds to the number 2 (see the BSON types table above), you can use the number 2 in the query instead:
db.products.find(
  {
    price: {
      $type: 2,
    },
  },
  {
    name: 1,
    price: 1,
  }
)

// uses the $type operator with the number alias to select documents where the value of the price field is the BSON type int, long, or double or is an array that contains a number:
db.products.find(
  {
    price: {
      $type: 'number',
    },
  },
  {
    name: 1,
    price: 1,
  }
)
/*
  { "_id" : 2, "name" : "xTablet", "price" : 899 }
  { "_id" : 3, "name" : "SmartTablet", "price" : NumberLong(899) }
  { "_id" : 4, "name" : "SmartPad", "price" : [ 599, 699, 799 ] }
  { "_id" : 5, "name" : "SmartPhone", "price" : [ "599", 699 ] }
*/

// use the $type operator to select the documents in which the price field is an array:
db.products.find(
  {
    price: {
      $type: 'array',
    },
  },
  {
    name: 1,
    price: 1,
  }
)
/*
  { "_id" : 4, "name" : "SmartPad", "price" : [ 599, 699, 799 ] }
  { "_id" : 5, "name" : "SmartPhone", "price" : [ "599", 699 ] }
*/

// uses the $type operator to select documents where the price field is either number or string or an array that has an element is number or string:
db.products.find(
  {
    price: {
      $type: ['number', 'string'],
    },
  },
  {
    name: 1,
    price: 1,
  }
)
/*
  { "_id" : 1, "name" : "xPhone", "price" : "799" }
  { "_id" : 2, "name" : "xTablet", "price" : 899 }
  { "_id" : 3, "name" : "SmartTablet", "price" : NumberLong(899) }
  { "_id" : 4, "name" : "SmartPad", "price" : [ 599, 699, 799 ] }
  { "_id" : 5, "name" : "SmartPhone", "price" : [ "599", 699 ] }
*/
