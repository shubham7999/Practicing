 function  home(req, res)
{
    return res.send('<h1> Hey there??</h1>');
}

module.exports = {
    home : home
}