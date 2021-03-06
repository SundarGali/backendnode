const http = require("http");
const path = require("path");
const fs = require("fs");


const mongoose = require("mongoose");
    const uri = "mongodb+srv://sundar:sundar@cryptofinal.x8ndo.mongodb.net/CoinsCrpyto?retryWrites=true&w=majority";
    
    mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    });
    mongoose.connection.on('connected',()=>{
        
        const mongoose = require('mongoose');
    });
    
    const coinsschema = mongoose.Schema({
    
        id: Number,
        name:String,
        price:Number,
        year:Number,
        inmarket:Boolean,
        
        });
        
        const coinsdata =mongoose.model('Coin',coinsschema);
    
    
const server = http.createServer((req, res) => {
    
    
    
    
    if (req.url === '/') {
    
    
       
        fs.readFile(path.join(__dirname, '/', 'index.html'),
                    (err, content) => {
                                    
                                    if (err) throw err;
                                    
                                    res.end(content);
                        }
              );
     }

    else if (req.url === '/about') {


       
        fs.readFile(
            path.join(__dirname, '/', 'about.html'),
                    (err, content) => {
                                    
                                    if (err) throw err;
                                    res.writeHead(200, { 'Content-Type': 'text/html' });
                                    res.end(content);
                        }
              );
     }
     else if(req.url==='/add'){
        
            
            const data={
                id:1,
                name: "Ethereum",
                price: 4000,
                year:2015,
                inmarket: true
            
            }
            const data2={
                id:2,
                name: "Litecoin",
                price: 3000,
                year:2011,
                inmarket: false
            
            }
            const data3={
                id:3,
                name: "Cardano",
                price: 2000,
                year:2006,
                inmarket: false
            
            }
            const data4={
                id:4,
                name: "Polkadot",
                price: 15000,
                year:2021,
                inmarket: false
            
            }
            const data5={
                id:5,
                name: "Bitcoin Cash",
                price: 1000,
                year:2021,
                inmarket: false
            
            }
            const newcoinsdata= new coinsdata(data);
            const newcoinsdata2= new coinsdata(data2);
            const newcoinsdata3= new coinsdata(data3);
            const newcoinsdata4= new coinsdata(data4);
            const newcoinsdata5= new coinsdata(data5);
            
            newcoinsdata.save((error)=>{
                if (error){
                    console.log('Oops')
            
                } else {
                    console.log('Worked')
                }
            });
            newcoinsdata2.save((error)=>{
                if (error){
                    console.log('Oops')
            
                } else {
                    console.log('Worked')
                }
            });
            newcoinsdata3.save((error)=>{
                if (error){
                    console.log('Oops')
            
                } else {
                    console.log('Worked')
                }
            });
            newcoinsdata4.save((error)=>{
                if (error){
                    console.log('Oops')
            
                } else {
                    console.log('Worked')
                }
            });
            newcoinsdata5.save((error)=>{
                if (error){
                    console.log('Oops')
            
                } else {
                    console.log('Worked')
                }
            });
            fs.readFile(path.join(__dirname, '/', 'addcoin.html'),
            (err, content) => {
                            
                            if (err) throw err;
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.end(content);
                }
      );
     }
    else if (req.url==='/api')
    {
       
        res.setHeader('Access-Control-Allow-Origin', '*');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
        // Please note the content-type here is application/json
        

        
       
        coinsdata.find({

        }


        ).then(data=>{
            res.setHeader('Content-Type', 'application/json','utf-8');
            res.end(JSON.stringify(data));
        })
        
        // fs.readFile(
        //     path.join(__dirname, '/', 'db.json'),'utf-8',
        //             (err, content) => {
                                    
        //                             if (err) throw err;
        //                             res.setHeader('Access-Control-Allow-Origin', '*');

        //                             // Request methods you wish to allow
        //                             res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                                
        //                             // Request headers you wish to allow
        //                             res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                                
        //                             // Set to true if you need the website to include cookies in the requests sent
        //                             // to the API (e.g. in case you use sessions)
        //                             res.setHeader('Access-Control-Allow-Credentials', true);
        //                             // Please note the content-type here is application/json
                                    
        //                             res.end(content);
        //                 }
        //       );
        
    }
    
    else{
        res.end("<h1> 404 nothing is here</h1>");
    }

   
});

const PORT= process.env.PORT || 5959;

server.listen(PORT,()=> console.log(`Great our server is running on port ${PORT} `));