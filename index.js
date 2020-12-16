const names = require('./name.json');

function RandomName(){

    var len = names.length;
    var random = Math.floor(Math.random() * len);
    var name = names[random];
    return name;

}

function boysname(){   
    return  RandomName();
}



module.exports = {boysname};