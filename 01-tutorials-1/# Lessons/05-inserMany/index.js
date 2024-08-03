/*
  insertMany

    db.collection.insertMany(
      [document1, document2, ...],
      {
          writeConcern: <document>,
          ordered: <boolean>
      }
    )

  - The writeConcern specifies the write concern. If you omit it, the insertMany() method will use the default write concern.
  - The ordered is a boolean value that determines whether MongoDB should perform an ordered or unordered insert.

  - When the ordered is set to true, the insertMany() method inserts documents in order. This is also the default option.
  - If the ordered is set to false, MongoDB may reorder the documents before inserts to increase performance. Therefore, you should not depend on the ordering of inserts if the ordered is set to false. You’ll see how the ordered affects the behaviors of the insert in the example section.


*/

// mongosh bookdb

db.books.insertMany([
  { title: 'NoSQL Distilled', isbn: '0-4696-7030-4' },
  { title: 'NoSQL in 7 Days', isbn: '0-4086-6859-8' },
  { title: 'NoSQL Database', isbn: '0-2504-6932-4' },
])
/*
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("62148d16f514a446bf1a98f1"),
    '1': ObjectId("62148d16f514a446bf1a98f2"),
    '2': ObjectId("62148d16f514a446bf1a98f3")
  }
}
*/

db.books.find()

//*******************
db.books.insertMany([
  { _id: 1, title: 'SQL Basics', isbn: '0-7925-6962-8' },
  { _id: 2, title: 'SQL Advanced', isbn: '0-1184-7778-1' },
])
db.books.insertMany([
  { _id: 2, title: 'SQL Performance Tuning', isbn: '0-6799-2974-6' },
  { _id: 3, title: 'SQL Index', isbn: '0-5097-1723-3' },
])

//*******************
db.books.insertMany(
  [
    { _id: 3, title: 'SQL Performance Tuning', isbn: '0-6799-2974-6' },
    { _id: 3, title: 'SQL Trees', isbn: '0-6998-1556-8' },
    { _id: 4, title: 'SQL Graph', isbn: '0-6426-4996-0' },
    { _id: 5, title: 'NoSQL Pros', isbn: '0-9602-9886-X' },
  ],
  { ordered: false }
)
