const fs = require('fs');



fs.readFile('names.txt', function(err, data) {
  
    if(err) throw err;

    var buff = Buffer.from(data).toString().split("\n");
    
    var array = buff.map((item)=>{return item.split("\r").join("")});
    var written = JSON.stringify(array);


    fs.appendFile('name.json', written, function (err) {
        if (err) throw err;
        console.log('Updated!');
      });
    
    
    
  });