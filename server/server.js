var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text:{
        type:String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type: Number
    }
});

var newTodo = new Todo({
    text:'Cook dinner'
});

var otherTodo = new Todo({
    text:'Check Emails',
    completed:true,
    completedAt:9
});

newTodo.save().then((doc)=>{
    console.log('Saved todo',JSON.stringify(doc,undefined,2))
},(err)=>{
    console.log('unable to save todo');
});

otherTodo.save().then((doc) => {
    console.log('Saved todo',JSON.stringify(doc, undefined, 2))
}, (err) => {
    console.log('unable to save todo');
});