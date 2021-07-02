 function  home(req, res)
{
    return res.render("home" , {
        title : "code little",
        name : "shubahm"
    })
}

module.exports = {
    home : home
}