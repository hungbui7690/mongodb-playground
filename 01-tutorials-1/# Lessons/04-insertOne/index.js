/*
  insertOne

  Introduction to MongoDB insertOne() method
  - The insertOne() method allows you to insert a single document into a collection.
  - The insertOne() method has the following syntax:

      db.collection.insertOne(
        <document>,
        { writeConcern: <document>}
      )

  + document is a document that you want to insert into the collection. The document argument is required.
  + writeConcern is an optional argument that describes the level of acknowledgment requested from MongoDB for insert operation to a standalone MongoDB server or to shared clusters. We’ll discuss the writeConcern another tutorial.


  - The insertOne() method returns a document that contains the following fields:
    + acknowledged is a boolean value. It is set to true if the insert executed with write concern or false if the write concern was disabled.
    + insertedId stores the value of _id field of the inserted document.

  
  # Note that if the collection does not exist, the insertOne() method will also create the collection and insert the document into it.
  # If you don’t specify the _id field in the document, MongoDB will add the _id field and generate a unique ObjectId for it before insert.


*/

db.books.insertOne({
  title: 'MongoDB insertOne',
  isbn: '0-7617-6154-3',
})

db.books.find()

//*********************
db.books.insertOne({
  _id: 1,
  title: 'Mastering Big Data',
  isbn: '0-9270-4986-4',
})

//*********************
db.books.insertOne({
  _id: 1,
  title: 'MongoDB for JS Developers',
  isbn: '0-4925-3790-9',
})
