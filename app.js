const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
    name : String,
    // {
    //     type : String,
    //     required : [true,"ye to apun ko chahiye he"]
    // },
    rating : {
        type : Number,
        min : 1,
        max : 10
    },
    review : String
});

const Fruity = mongoose.model("Fruit",fruitSchema);  // changes "Fruit" to its plural form  and lowercase the letter also ie "fruits" when u run it 

const fruit = new Fruity({
    //name : "Apple",
    rating : 10,
    review : "without name nya apple very good"
});

//fruit.save();

const personschema = new mongoose.Schema({
    name : String,
    age : Number
});

const aadmi  = mongoose.model("Person",personschema);   // changes "person" to its plural form ie "people" when u run it 

const person = new aadmi({
    name : "Akash_Kumar",
    age : 20
});
//person.save();

// person.save().then(
//     () => console.log('chl gya')
// );

// const kiwi = new Fruity({
//     name : "kiwi",
//     rating : 10,
//     review : "awesom"
// });
// const banana = new Fruity({
//     name : "banana",
//     rating : 8,
//     review : "long "
// });
// const orange = new Fruity({
//     name : "orange",
//     rating : 5,
//     review : "colorful"
// });

// Fruity.insertMany([kiwi,banana,orange],function(err){     // it saves data everytime we run 
//     if(err)
//         console.log(err);
//     else
//         console.log("run succesfully");
// });
Fruity.find(function(err,fruits){
    if(err)
        console.log(err);
    else
        //console.log(fruits);
        //mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit);
        });
    
        mongoose.connection.close();
});


Fruity.updateOne({_id : "62d39a5982f630751cb748e5"},{name : "apple ka bap"},function(err){
    if(err)
        console.log(err);
    else
        console.log("success run");
});

Fruity.deleteOne({name : "orange"},function(err){
    if(err)
        console.log(err);
    else
        console.log("success run for deleting orange");

});

Fruity.deleteMany({name : "Apple"},function(err){
    if(err)
        console.log(err);
    else
        console.log("success run");

});