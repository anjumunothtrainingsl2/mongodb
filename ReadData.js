var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/", function (err, db) {
    db=db.db("Sampledb1");
    db.collection('Persons', function (err, collection) {
        console.log("First Name       Last Name")
         collection.find().toArray(function(err, items) {
            if(err) throw err;    
            //console.log(items); 
            for(var i=0;i<items.length;i++)
            {
                console.log(items[i].firstName + "   "+items[i].lastName)

            }
            
        });
        
    });
                
});