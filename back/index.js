var express=require('express');
var multer=require('multer');
var mysql=require('mysql');
var bodyParser=require('body-parser');
var uuid=require('uuid/v4');
var cors=require('cors');
var fs=require('fs');
var nodemailer = require('nodemailer');
var app=express();
var http=require('http').createServer(app);
var io=require('socket.io')(http);
var fs = require("fs");


const TelegramBot = require('node-telegram-bot-api');

const token = '941084042:AAFV8c5901ULoC6Hl7EnWC2IvD6rlM1dRSY';

const bot = new TelegramBot(token, {polling: true});



var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'pervyi.cifrovoi@gmail.com',
           pass: 'Kizilorda-2000'
       }
   });


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public');
    },
    filename: function (req, file, cb) {
      cb(null, uuid()+file.originalname);
    }
});
var upload=multer({storage:storage});

app.use(cors());
app.use(bodyParser.json({limit: '100mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}))
app.use(express.static('public'));

var connection=mysql.createConnection({
    host     : 'localhost',
    user     : 'bekzat',
    password : 'Kizilorda-2000',
    database : 'jcb'
});
connection.connect();



var chatIdMain=0;

connection.query("select * from bot",(err,res)=>{
    if (err) {
        console.log(err);
        res.status(400).send(err);
    }
    console.log(res[0].chat_id);
    chatIdMain=res[0].chat_id;
    console.log(chatIdMain);
});
console.log(chatIdMain);


bot.onText(/\/startBot/,(msg) => {
    connection.query("update bot set chat_id=? where id=1",[msg.chat.id],(err,res)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        chatIdMain=msg.chat.id;
    }); 
     bot.sendMessage(chatIdMain,'Бот успешно подключен. Теперь сюда будут приходить сообщения от сайта porsche-almaty.kz')
});

var connections=[];
io.sockets.on('connection',function(socket){
    connections.push(socket);
    
    socket.emit('message',{sendBy:'m',id:Math.floor(Math.random()*(999-100+1)+100),msg:'Добрый день, можем ли мы вам чем то помочь?'});
    socket.on('message',function(msg){
        socket.emit('message',{sendBy:'c',id:msg.id,msg:msg.msg});
        bot.sendMessage(chatIdMain,'Клиент '+msg.id+': '+msg.msg);       
    });
    bot.on('message', (msg) => {
        if (msg.reply_to_message) {
            console.log(msg);
            var id=msg.reply_to_message.text.split(':')[0].split(' ')[1];
            socket.emit('message',{id:parseInt(id),sendBy:'m',msg:msg.text});
        }
    });
    socket.on('disconnect',function(){
        connections.splice(connections.indexOf(socket),1);
    });
});




app.get('/contacts',(req,res)=>{
    connection.query("select * from contacts",(err,result)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.json(result);
    });
});
app.get('/finance_properties',(req,res)=>{
    connection.query("select * from finance_properties",(err,result)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.json(result);
    });
});

app.get('/map',(req,res)=>{
    connection.query("select * from map",(err,result)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.json(result);
    });
});

app.post('/map/:id',(req,res)=>{
    connection.query("update map set city_name=?,address=?,x_coord=?,y_coord=? where city_id=?",[req.body.city_name,req.body.address,req.body.x_coord,req.body.y_coord,req.params.id],(err,result)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.json(result);
    });
});


app.post('/contacts/:id',(req,res)=>{
    connection.query("update contacts set value=? where id=?",[req.body.update_value,req.params.id],(err,result)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.json(result);
    });
});

app.post('/finance_properties/:id',(req,res)=>{
    connection.query("update finance_properties set value=? where id=?",[req.body.update_value,req.params.id],(err,result)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.json(result);
    });
});

app.get('/slider',(req,res)=>{
    let select="SELECT * FROM slider ";
    let where="WHERE 1=1";
    for(const key in req.query){
        where+=" AND "+key+"="+req.query[key];
    }
    connection.query(select+where,(err,result)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.json(result);
    });
});

app.post("/slider",upload.single('file'),(req,res)=>{
    connection.query('insert into slider(title,text,background,link) values(?,?,?,?)',[req.body.title,req.body.text,req.file.filename,req.body.link],(err)=>{
        if (err) {
            console.log(err);
        }
        else{
            res.status(200);
            res.send("Successfully inserted");  
        }
    });
});

app.post('/slider/update',upload.single('file'),(req,res)=>{
    var insBody="";
    var arr=[];
    if (req.file) {
        insBody="update slider set background=?, link=?, title=?,text=? where id=?";
        arr=[req.file.filename,req.body.link,req.body.title,req.body.text,req.body.id];
    }
    else{
        insBody="update slider set link=?,text=?,title=? where id=?";
        arr=[req.body.link,req.body.text,req.body.title,req.body.id];
    }
    connection.query(insBody,arr,(error,result)=>{
        if (error) {
            console.log(error);
            
            res.status(403);
            res.send();
        }
        res.status(200);
        res.send();
    });
});


app.post("/slider/delete",(req,res)=>{
    console.log(req.body.info);
    
    connection.query('delete from slider where id=?',[req.body.info.id],(err)=>{
        if (err) {
            console.log(err);
        }
        else{
            fs.unlink('./public/'+req.body.info.background,(err)=>{
                if (err) {
                    console.log(err);
                }
                res.status(200);
                res.send("Successfully deleted");
            });
        }
    });
});


app.get('/youtube_link',(req,res)=>{
    connection.query("SELECT path FROM links where id=1",(err,result)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.send(result[0].path);
    });
});

app.post('/youtube_link',(req,res)=>{
    connection.query("update links set path=? where id=1",[req.body.link],(err,result)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send();
    });
});

app.get('/finance_text',(req,res)=>{
    connection.query("SELECT * FROM finance_text where id=1",(err,result)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.send(result);
    });
});

app.post('/finance_text',(req,res)=>{
    connection.query("update finance_text set text=? where id=1",[req.body.text],(err,result)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send();
    });
});

app.get('/aboutus_text',(req,res)=>{
    connection.query("SELECT * FROM aboutus_text where id=1",(err,result)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.send(result);
    });
});

app.post('/aboutus_text',(req,res)=>{
    connection.query("update aboutus_text set text=? where id=1",[req.body.text],(err,result)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send();
    });
});


app.post('/special_offers',upload.single('file'),(req,res)=>{
    
    var insBody ="insert into special_offers(title,text,main_photo,date) VALUES (?,?,?,?)";
    connection.query(insBody,[req.body.title,req.body.text,req.file.filename,new Date().toISOString().slice(0, 10)],(error,result)=>{
        if (error) {
               console.log(error.message);
               res.status(401);
               res.send("Произошла ошибка!");
       }
       else{
               res.status(200);
               res.send("Добавлено!");
           }
       });
});

app.post('/special_offers/delete',(req,res)=>{
   connection.query("delete from special_offers where id=?",[req.body.info.id],(error,result)=>{
       if (error) {
           console.log(error);
       }
       else{
           console.log(result);
           fs.unlink('./public/'+req.body.info.main_photo,(err)=>{
               if (err) {
                   console.log(err);
               }
               res.status(200);
               res.send("Successfully deleted");
           });
       }
   });
});


app.get('/special_offers',(req,res)=>{
    connection.query("select * from special_offers order by id desc",(error,result)=>{
        res.json(result);
    });
});


app.get('/special_offers/:id',(req,res)=>{
    connection.query("select * from special_offers where id=?",[req.params.id],(error,results)=>{
        if (error) {
            res.status(404);
            res.send("Not found");
        }
        res.json(results);
    });
});

app.post('/special_offers/update',upload.single('file'),(req,res)=>{
    var insBody="";
    var arr=[];
    if (req.file) {
        insBody="update special_offers set title=?, text=?, main_photo=? where id=?";
        arr=[req.body.title,req.body.text,req.file.filename,req.body.id];
    }
    else{
        insBody="update special_offers set title=?, text=? where id=?";
        arr=[req.body.title,req.body.text,req.body.id];
    }
    connection.query(insBody,arr,(error,result)=>{
        if (error) {
            res.status(403);
            res.send();
        }
        res.status(200);
        res.send();
    });
});

app.get("/test_drive",(req,res)=>{
    connection.query("select * from test_drive  order by id desc",(error,result)=>{
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});


app.post('/test_drive',(req,res)=>{
    connection.query("insert into test_drive(name,email,phone_number,car_model) values(?,?,?,?)",
        [req.body.name,req.body.email,req.body.phone_number,req.body.car_model]
        ,(error,result)=>{
        if (error) {
            console.log(error);
        }
        else{
            const mailOptions = {
                from: 'pervyi.cifrovoi@gmail.com', // sender address
                to: 'lalita@jcb-kz.com', // list of receivers lalita@jcb-kz.com
                subject: 'Поступила заявка', // Subject line
                html: `<p>${req.body.name} оставил заявку на сайте JCB <br/> Номер телефона: ${req.body.phone_number} <br/> E-mail: ${req.body.email} <br/> На продукт: ${req.body.car_model}</p>`// plain text body
            };
        
            transporter.sendMail(mailOptions, function (err, info) {
                if(err)
                  console.log(err)
                else{
                   
                }
            });
            res.status(200);
            res.send("Inserted");
        
        }
    }); 
});

app.post('/test_drive/delete',(req,res)=>{
    connection.query("delete from test_drive where id=?",[req.body.id],(error,result)=>{
        if (error) {
            console.log(error);
        }
        else{
            res.status(200);
            res.send("Deleted");
        }
    });
});

app.get('/files/:cat_id/:car_id',(req,res)=>{
    connection.query('select * from files where cat_id=? and car_id=?',[req.params.cat_id,req.params.car_id],(error,result)=>{
        if (error) {
            res.status(404);
            res.send("Not Found");
        }
        res.send(result);
    });
});
app.get('/files_models/:cat_id/:car_id',(req,res)=>{
    connection.query('select * from files_models where cat_id=? and car_id=?',[req.params.cat_id,req.params.car_id],(error,result)=>{
        if (error) {
            res.status(404);
            res.send("Not Found");
        }
        res.send(result);
    });
});
app.get('/category_models_fon/:cat_id',(req,res)=>{
    connection.query('select * from category_models_fon where cat_id=?',[req.params.cat_id],(error,result)=>{
        if (error) {
            res.status(404);
            res.send("Not Found");
        }
        res.send(result);
    });
});


app.get('/text_models/:cat_id/:car_id',(req,res)=>{
    connection.query('select * from text_models where cat_id=? and car_id=?',[req.params.cat_id,req.params.car_id],(error,result)=>{
        if (error) {
            res.status(404);
            res.send("Not Found");
        }
        res.send(result);
    });
});

app.get('/files',(req,res)=>{
    connection.query('select * from files',(error,result)=>{
        if (error) {
            res.status(404);
            res.send("Not Found");
        }
        res.send(result);
    });
});
app.get('/files_models',(req,res)=>{
    connection.query('select * from files_models',(error,result)=>{
        if (error) {
            res.status(404);
            res.send("Not Found");
        }
        res.send(result);
    });
});
app.get('/category_models_fon',(req,res)=>{
    connection.query('select * from category_models_fon',(error,result)=>{
        if (error) {
            res.status(404);
            res.send("Not Found");
        }
        res.send(result);
    });
});
app.get('/category_fon',(req,res)=>{
    connection.query('select * from category_fon',(error,result)=>{
        if (error) {
            res.status(404);
            res.send("Not Found");
        }
        res.send(result);
    });
});
app.get('/category_fon/:id',(req,res)=>{
    connection.query('select * from category_fon where cat_id=?',[req.params.id],(error,result)=>{
        if (error) {
            res.status(404);
            res.send("Not Found");
        }
        res.send(result);
    });
});
app.get('/text_models',(req,res)=>{
    connection.query('select * from text_models',(error,result)=>{
        if (error) {
            res.status(404);
            res.send("Not Found");
        }
        res.send(result);
    });
});
app.get('/files_finance',(req,res)=>{
    connection.query('select * from files_finance',(error,result)=>{
        if (error) {
            res.status(404);
            res.send("Not Found");
        }
        res.send(result);
    });
});


app.post('/files',upload.single('file'),(req,res)=>{
    var insBody="insert into files(filename,title_of_file,cat_id,car_id) values(?,?,?,?)";
    connection.query(insBody,[req.file.filename,req.body.title_of_file,req.body.cat_id,req.body.car_id],(error,result)=>{
        if (error) {
            console.log(error);
            
            res.status(403);
            res.send("Error");
        }
        res.status(200);
        res.send("Good");
    });
});


app.get('/news_background',(req,res)=>{
    connection.query('select * from news_background',(error,result)=>{
        if (error) {
            res.status(404);
            res.send("Not Found");
        }
        console.log(result);
        
        res.send(result);
    });
});

app.post('/news_background',upload.single('file'),(req,res)=>{
    var insBody="update news_background set filename=? where id=1";
    connection.query(insBody,[req.file.filename],(error,result)=>{
        if (error) {
            console.log(error);
            res.status(403);
            res.send("Error");
        }
        res.status(200);
        res.send("Good");
    });
});

app.get('/aboutus_background',(req,res)=>{
    connection.query('select * from aboutus_background',(error,result)=>{
        if (error) {
            res.status(404);
            res.send("Not Found");
        }
        console.log(result);
        
        res.send(result);
    });
});

app.post('/aboutus_background',upload.single('file'),(req,res)=>{
    var insBody="update aboutus_background set filename=? where id=1";
    connection.query(insBody,[req.file.filename],(error,result)=>{
        if (error) {
            console.log(error);
            res.status(403);
            res.send("Error");
        }
        res.status(200);
        res.send("Good");
    });
});

app.post('/finance_background',upload.single('file'),(req,res)=>{
    var insBody="update finance_properties set value=? where id=1";
    connection.query(insBody,[req.file.filename],(error,result)=>{
        if (error) {
            console.log(error);
            res.status(403);
            res.send("Error");
        }
        res.status(200);
        res.send("Good");
    });
});


app.get('/catalog_background',(req,res)=>{
    connection.query('select * from catalog_background',(error,result)=>{
        if (error) {
            res.status(404);
            res.send("Not Found");
        }
        console.log(result);
        
        res.send(result);
    });
});

app.post('/catalog_background',upload.single('file'),(req,res)=>{
    var insBody="update catalog_background set filename=? where id=1";
    connection.query(insBody,[req.file.filename],(error,result)=>{
        if (error) {
            console.log(error);
            res.status(403);
            res.send("Error");
        }
        res.status(200);
        res.send("Good");
    });
});





app.post('/files_models',upload.single('file'),(req,res)=>{
    var insBody="insert into files_models(filename,cat_id,car_id) values(?,?,?)";
    connection.query(insBody,[req.file.filename,req.body.cat_id,req.body.car_id],(error,result)=>{
        if (error) {
            console.log(error);
            
            res.status(403);
            res.send("Error");
        }
        res.status(200);
        res.send("Good");
    });
});
app.post('/category_models_fon',upload.single('file'),(req,res)=>{
    var insBody="insert into category_models_fon(filename,cat_id,car_id) values(?,?,?)";
    connection.query(insBody,[req.file.filename,req.body.cat_id,req.body.car_id],(error,result)=>{
        if (error) {
            console.log(error);
            
            res.status(403);
            res.send("Error");
        }
        res.status(200);
        res.send("Good");
    });
});
app.post('/category_fon',upload.single('file'),(req,res)=>{
    console.log("hello");
    
    var insBody="insert into category_fon(filename,cat_id) values(?,?)";
    connection.query(insBody,[req.file.filename,req.body.cat_id],(error,result)=>{
        if (error) {
            console.log(error);
            
            res.status(403);
            res.send("Error");
        }
        res.status(200);
        res.send("Good");
    });
});
app.post('/text_models',(req,res)=>{
    console.log(req.body);
    
    var insBody="insert into text_models(text,title,cat_id,car_id) values(?,?,?,?)";
    connection.query(insBody,[req.body.text,req.body.title,req.body.cat_id,req.body.car_id],(error,result)=>{
        if (error) {
            console.log(error);
            
            res.status(403);
            res.send("Error");
        }
        res.status(200);
        res.send("Good");
    });
});
app.post('/text_models/update',(req,res)=>{
    console.log(req.body);
    
    var insBody="update text_models set title=?,text=? where id=?";
    connection.query(insBody,[req.body.title,req.body.text,req.body.id],(error,result)=>{
        if (error) {
            console.log(error);
            
            res.status(403);
            res.send("Error");
        }
        res.status(200);
        res.send("Good");
    });
});
app.post('/files_finance',upload.single('file'),(req,res)=>{
    var insBody="insert into files_finance(filename,title_of_file) values(?,?)";
    connection.query(insBody,[req.file.filename,req.body.title_of_file],(error,result)=>{
        if (error) {
            console.log(error);
            
            res.status(403);
            res.send("Error");
        }
        res.status(200);
        res.send("Good");
    }); 
});

app.post('/files/delete:file_id',(req,res)=>{
    connection.query("delete from files where file_id=?",[req.params.file_id],(error,result)=>{
        if (error) {
            res.status(404);
            res.send();
        }
        else{
            fs.unlink('./public/'+req.body.info.filename,(err)=>{
                if (err) {
                    console.log(err);
                }
                res.status(200);
                res.send("Successfully deleted");
            });
        }
    });
});


app.post('/files_finance/delete:file_id',(req,res)=>{
    connection.query("delete from files_finance where file_id=?",[req.params.file_id],(error,result)=>{
        if (error) {
            res.status(404);
            res.send();
        }
        else{
            fs.unlink('./public/'+req.body.info.filename,(err)=>{
                if (err) {
                    console.log(err);
                }
                res.status(200);
                res.send("Successfully deleted");
            });
        }
    });
});
app.post('/files_models/delete:file_id',(req,res)=>{
    connection.query("delete from files_models where file_id=?",[req.params.file_id],(error,result)=>{
        if (error) {
            res.status(404);
            res.send();
        }
        else{
            fs.unlink('./public/'+req.body.info.filename,(err)=>{
                if (err) {
                    console.log(err);
                }
                res.status(200);
                res.send("Successfully deleted");
            });
        }
    });
});
app.post('/category_models_fon/delete:file_id',(req,res)=>{
    connection.query("delete from category_models_fon where file_id=?",[req.params.file_id],(error,result)=>{
        if (error) {
            res.status(404);
            res.send();
        }
        else{
            fs.unlink('./public/'+req.body.info.filename,(err)=>{
                if (err) {
                    console.log(err);
                }
                res.status(200);
                res.send("Successfully deleted");
            });
        }
    });
});
app.post('/category_fon/delete:file_id',(req,res)=>{
    connection.query("delete from category_fon where file_id=?",[req.params.file_id],(error,result)=>{
        if (error) {
            res.status(404);
            res.send();
        }
        else{
            fs.unlink('./public/'+req.body.info.filename,(err)=>{
                if (err) {
                    console.log(err);
                }
                res.status(200);
                res.send("Successfully deleted");
            });
        }
    });
});
app.post('/text_models/delete:id',(req,res)=>{
    connection.query("delete from text_models where id=?",[req.params.id],(error,result)=>{
        if (error) {
            res.status(404);
            res.send();
        }
        else{
          
                res.status(200);
                res.send("Successfully deleted");
        }
    });
});




app.get('/live_link',(req,res)=>{
    connection.query("select * from live_link",(error,result)=>{
        if (error) {
            res.status(404);
            res.send();
        }
        else{
            res.send(result)
        }
    });
});

app.post('/live_link',(req,res)=>{
    connection.query("update live_link set title=?,text=?,link=? where id=1",[req.body.title,req.body.text,req.body.link],(err,result)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send();
    });
});




http.listen(5000,'localhost',(err)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log("Listening 5000");
    }
});