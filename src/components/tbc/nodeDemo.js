var EventProxy = require('eventproxy');
var proxy = new EventProxy();
var status = "ready";
var select = function (callback) {
    proxy.once("selected", callback);
    if (status == "ready") {
        status = "pending";
        db.select("SQL", function (results) {
            proxy.emit("selected", results);
            status = "ready";
        });
    }
}
//https://blog.csdn.net/j2IaYU7Y/article/details/81623516 nodejs 原理


var async = require('async');
 
var send_data = function(req,res){
    sql = 'SELECT gid,name,image_url,price,create_time,describes,selluid FROM goods WHERE status=? LIMIT ?,?';
    connection.query(sql, [0,0,6], function(err, rows, fields) {
        if (err) throw err;
        async.map(rows, function(item, callback) {
            sql = "SELECT tag_name FROM tag,tag_goods WHERE tag_goods.gid=? AND tag_goods.tagid=tag.tagid";
            connection.query(sql, item.gid, function(err, tags, fields){
                item.tags = tags;
                callback(null, item);
            });
        }, function(err,results) {
            res.render('index', {supplies:results, login:req.session.login});
        });
    }); 
}
    //这里我们可以使用map函数来实现我们的需求。该方法的原型为：map(arr, iterator(item, callback), callback(err, results))；
    //也就是说，我们用arr中的每一个元素item迭代调用iterator()方法，并把每次的结果保存下来，当迭代完之后，
    //()方法。

//深入浅出mongoose-----包括mongoose基本所有操作,非常实用!!!!!
//https://www.cnblogs.com/chris-oil/p/9142795.html