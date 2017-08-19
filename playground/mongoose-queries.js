const {ObjectID} = require ('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} =  require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id ="5997d5b8ce073645180ef97111";

if(!ObjectID.isValid(id)){
    console.log("id not valid");
}

Todo.find({
    _id:id
}).then((todos)=>{
    console.log('Todos',todos)
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo)
});

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('ID not found');
    }
    console.log('Todo By ID', todo)
}).catch((e)=>console.log(e));

/*User.findById("").then((user)=>{
    if(!user){
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user,undefined,2));
},(e)=>{
    console.log(e);
});*/