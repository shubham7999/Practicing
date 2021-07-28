module.exports.profile = function(req, res)
{
     res.render('profile' , {
        name : "shubham"
    })
}

module.exports.signin = function(req, res)
{
    res.render('signin');
}

module.exports.signup = function(req , res)
{
    res.render('signup');
}

