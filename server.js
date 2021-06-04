const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const app = express();
const jsonParser = express.json();
 
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useUnifiedTopology: true });
const urlencodedParser = bodyParser.urlencoded({extended: false});
 
let dbClient;
 
app.engine("hbs", hbs(
    {
        layoutsDir: "build", 
        defaultLayout: null,
        extname: "hbs"
    }
))

app.set('views', './build');
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/src"));
 
mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    dbClient = client;
    app.locals.collection = client.db("usersdb").collection("users");
    app.listen(9000, function(){
        console.log("Сервер ожидает подключения на 9000...");
    });
});

app.use('/assets', express.static('build/assets'));

app.get("/", function (request, response) {
    response.render("auth.hbs");
});

app.get("/auth", function (request, response) {
    response.render("auth.hbs");
});

app.get("/main", function (request, response) {
    response.render("main.hbs");
});

app.get("/men", function (request, response) {
    response.render("clothes1.hbs");
});

app.get("/women", function (request, response) {
    response.render("clothes2.hbs");
});

app.get("/baby", function (request, response) {
    response.render("clothes3.hbs");
});

app.get("/style", function (request, response) {
    response.render("style.hbs");
});

app.get("/about", function (request, response) {
    response.render("about.hbs");
});

app.get("/admin", function (request, response) {
    response.render("admin.hbs");
});


app.post("/auth", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    const db = mongoClient.db("usersdb");
    const collection = db.collection("users");
    collection.findOne({name: request.body.userName, password: request.body.userPassword}, function(err, results){
        if(results != null){
            response.render(__dirname+"/build/cabinet.hbs", {
                name: request.body.userName,
                password: request.body.userPassword,
				email: results.email, 
				address: results.address, 
				getting: results.getting, 
				payment: results.payment, 
				deliver: results.deliver
            });
        }
        else{
            response.sendFile(__dirname+"/build/auth.hbs");
        }
    });
});

app.get("/api/users", function(req, res){
        
    const collection = req.app.locals.collection;
    collection.find({}).toArray(function(err, users){
         
        if(err) return console.log(err);
        res.send(users)
    });
     
});
app.get("/api/users/:id", function(req, res){
        
    const id = new objectId(req.params.id);
    const collection = req.app.locals.collection;
    collection.findOne({_id: id}, function(err, user){
               
        if(err) return console.log(err);
        res.send(user);
    });
});
   
app.post("/api/users", jsonParser, function (req, res) {
       
    if(!req.body) return res.sendStatus(400);
       
    const userName = req.body.name;
    const userPassword = req.body.password;
	const userEmail = req.body.email;
	const userAddress = req.body.address;
	const userGetting = req.body.getting;
	const userPayment = req.body.payment;
	const userDeliver = req.body.deliver;
    const user = {name: userName, password: userPassword, email: userEmail, address: userAddress, getting: userGetting, payment: userPayment, deliver: userDeliver};
       
    const collection = req.app.locals.collection;
    collection.insertOne(user, function(err, result){
               
        if(err) return console.log(err);
        res.send(user);
    });
});
    
app.delete("/api/users/:id", function(req, res){
        
    const id = new objectId(req.params.id);
    const collection = req.app.locals.collection;
    collection.findOneAndDelete({_id: id}, function(err, result){
               
        if(err) return console.log(err);    
        let user = result.value;
        res.send(user);
    });
});
   
app.put("/api/users", jsonParser, function(req, res){
        
    if(!req.body) return res.sendStatus(400);
    const id = new objectId(req.body.id);
    const userName = req.body.name;
    const userPassword = req.body.password;
	const userEmail = req.body.email;
	const userAddress = req.body.address;
	const userGetting = req.body.getting;
	const userPayment = req.body.payment;
	const userDeliver = req.body.deliver;
       
    const collection = req.app.locals.collection;
    collection.findOneAndUpdate({_id: id}, { $set: {password: userPassword, name: userName, email: userEmail, address: userAddress, getting: userGetting, payment: userPayment, deliver: userDeliver}},
         {returnOriginal: false },function(err, result){
               
        if(err) return console.log(err);     
        const user = result.value;
        res.send(user);
    });
});

process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
}); 
