var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text:{
        type:String,
        require:true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type: Number,
        default:null
    }
});

/*var newTodo = new Todo({
    text:'Cook dinner'
});

newTodo.save().then((doc)=>{
    console.log('Saved todo',JSON.stringify(doc,undefined,2))
},(err)=>{
    console.log('unable to save todo');
});


var otherTodo = new Todo({
    text:'Clean the vehicle',
});



otherTodo.save().then((doc) => {
    console.log('Saved todo',JSON.stringify(doc, undefined, 2))
}, (err) => {
    console.log('unable to save todo');
});*/

var User = mongoose.model('User',{
    email:{
        type:String,
        require:true,
        minlength:1,
        trim:true
    }
});

var user1 = new User({
    email:'dhairyanadapara98@gmail.com'
});

user1.save().then((doc) => {
    console.log('Saved todo', JSON.stringify(doc, undefined, 2))
}, (err) => {
    console.log('unable to save todo');
});