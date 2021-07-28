 function  home(req, res)
{
     console.log(req.cookies);

    return res.render("home" , {
        title : "code little",
        name : "shubahm"
    })
}

module.exports = {
    home : home
}