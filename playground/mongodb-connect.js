//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


//var obj = new ObjectID();
//console.log(obj);
//destructoring from ES6
/*var user = {name : 'Dhairya', age: 20};
var {name} = user;
console.log(name);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MOngodb server');
    }
    console.log('connected to mongodb');

  /*  db.collection('Todos').insertOne({
        text:"Make Todo list",
        completed: false
    },(err,result)=>{
        if(err){
            return console.log('unable to insert todo', err);
        }
        console.log(result.ops[0]._id.getTimestamp);
    });*/

    db.close();
});