const mongoose = require('mongoose');

const coinsschema = mongoose.Schema({

id: Number,
name:String,
price:Number,
year:Number,
inmarket:Boolean,

});

const coinsdata =mongoose.model('Coin',coinsschema);

const data={
    id:1,
    name: "Dodge",
    price: 1000,
    year:1996,
    inmarket: false

}
const newcoinsdata= new coinsdata(data);

newcoinsdata.save((error)=>{
    if (error){
        console.log('Oops')

    } else {
        console.log('Worked')
    }
});