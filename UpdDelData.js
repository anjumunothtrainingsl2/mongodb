var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/", function (err, db) {
    db=db.db("Sampledb1")
    db.collection('Persons', function (err, collection) {
        
        collection.updateOne({id: 1}, 
        { $set: { firstName: 'James', lastName: 'Gosling'} }, {w:1},

                      function(err, result){
                          if(err) throw err;    
                     
                                                        });

        collection.deleteOne({id:2}, {w:1}, function(err, result) {
        
            if(err) throw err;    
            console.log('Document Removed Successfully');
            console.log("Result of del command"+result)
        });

    });
                
});
