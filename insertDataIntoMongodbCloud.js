var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://anju:anju@cluster0-gcx2m.mongodb.net/test?retryWrites=true&w=majority";

// Connect to the db
MongoClient.connect(uri, function (err, db) {
    db=db.db("Sampledb1")
    db.collection('Persons', function (err, collection) {
        
        collection.insertOne({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insertOne({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insertOne({ id: 3, firstName: 'James', lastName: 'Bond' });
        
        

        db.collection('Persons').countDocuments(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });
                
});