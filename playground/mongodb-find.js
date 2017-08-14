const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MOngodb server');
    }
    console.log('connected to mongodb');

    /*db.collection('Todos').find({
        _id: new ObjectID('59898f60e9b7c23d293a92eb')
    }).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log(`Error occured ${err}`);
    });*/

    db.collection('Todos').find().count().then((count) => {
        console.log('Todos');
        console.log(count)
    }, (err) => {
        console.log(`Error occured ${err}`);
    });

    //db.close();
});