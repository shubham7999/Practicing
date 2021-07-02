module.exports.profile = function(req, res)
{
     res.render('profile' , {
        name : "shubham"
    })
}

module.exports.post = function(req, res)
{
    res.send('<h1> User post is here </h1>');
}