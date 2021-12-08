const http = require("http");
const path = require("path");
const fs = require("fs");


const mongoose = require("mongoose");
    const uri = "mongodb+srv://sundar:sundar@cryptofinal.x8ndo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    
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
    
    const data={
        id:1,
        name: "Dodge",
        price: 1000,
        year:1996,
        inmarket: false
    
    }
    const data2={
        id:2,
        name: "Bodge",
        price: 3000,
        year:1976,
        inmarket: false
    
    }
    const data3={
        id:3,
        name: "DEodge",
        price: 30000,
        year:2006,
        inmarket: false
    
    }
    const data4={
        id:4,
        name: "DQodge",
        price: 15000,
        year:2003,
        inmarket: false
    
    }
    const data5={
        id:5,
        name: "DGodge",
        price: 12000,
        year:2004,
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
    
const server = http.createServer((req, res) => {
    
    
    /*

        

        we can Navigate to different pages via different requests. 
        if / then goto index.html
        if /about about then goto about.html
        if /api then laod the JSON file  /  ;) this might be something you need for your exam. 



    */
   
    
    
    if (req.url === '/') {
    
    
        // read public.html file from public folder
        fs.readFile(path.join(__dirname, '/', 'index.html'),
                    (err, content) => {
                                    
                                    if (err) throw err;
                                    res.writeHead(200, { 'Content-Type': 'text/html' });
                                    res.end(content);
                        }
              );
     }

    else if (req.url === '/about') {


        // read the about.html file public folder
        fs.readFile(
            path.join(__dirname, '/', 'about.html'),
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

    /*

        But what if we have  1000 pages/urls ? do we need to write 1000 if-else statements?

    /*/
});

const PORT= process.env.PORT || 5959;

server.listen(PORT,()=> console.log(`Great our server is running on port ${PORT} `));