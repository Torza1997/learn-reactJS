let mysql = require('mysql');
let express =require('express');
var router = express.Router();
//create connection
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "learn"
});


//connect database
con.connect((err)=>{
    if (err) throw err;
    console.log('connected!');
    
});
router.get('/db_con',function(req,res,next){
    req.json([
        {id:1,user:"somebody"},
        {id:2,user:"somebody"}])
});
module.exports = router;
