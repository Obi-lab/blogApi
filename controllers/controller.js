const dbConn= require('../db.config');

const fetchAll =(req,res)=>{
    dbConn.query('SELECT * FROM articles', function(error,results,fields){
        if(error) throw error;
        return res.send({error: false, data: results,message:'All posts'})
    });
}

const fetchColumn =(req,res) =>{

    let column = req.params.column
    console.log(column)
    if(! column){
        return res.status(400).send({error: column, message:'Please provide the column'})
    }
    dbConn.query(`SELECT ${column} FROM articles`, function(error,results){
        if(error) throw error;
        return res.send({error:false,data:results,message:`Column ${column}`})
    })

}
module.exports ={
    fetchAll,
    fetchColumn
}