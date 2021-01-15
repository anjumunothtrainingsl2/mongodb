var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/", function (err, db) {
    db=db.db("Sampledb1")
    db.collection('Persons', function (err, collection) {
        
        collection.insertOne({ id: 1, firstName: 'Steve', lastName: 'Jobs' },(err)=>{
            if(err)
                console.log("Error inserting the doc")
            else
                console.log("Doc has been inserted successfully")

        });
        collection.insertOne({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insertOne({ id: 3, firstName: 'James', lastName: 'Bond' });
        
        

        db.collection('Persons').countDocuments(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });
                
});