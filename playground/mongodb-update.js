const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MOngodb server');
    }
    console.log('connected to mongodb');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5991888f3af18182787e94d2") 
    },{
        $set:{
            completed : true
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(`Error occured ${err}`)
    });

    //db.close();
});