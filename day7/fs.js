var fs = require('fs');
//fs= variable name and 'fs'= pakage name
//Object.writeFile('anyfile name','any text',fuction bcos we need to knw the cofirmation as call back)
/*fs.writeFile('MyFile.txt','This is from FS Node',function(err){
    if(err) throw err;
    console.log('File Created')
})*/




/*fs.appendFile('MyFile.txt',`${Math.floor(Math.random()*(100-1)+1)} This is from FS Node \n`,(err)=>{
    if(err) throw err;
    console.log('File Created')
});


//there are two param 1.err and 2.data by default read file send this.
fs.readFile('MyFile.txt','utf-8',(err,data) => {
    if(err) throw err;
    console.log(data)
})

fs.readFile('db.json','utf-8',(err,data) => {
    if(err) throw err;
    console.log(data)
})*/

fs.rename('MyFile.txt','MyText.txt',(err) => {
    if(err) throw err;
    console.log('File Remaned')
})

/*fs.unlink('MyText.txt',(err) => {
    if(err) throw err;
    console.log('File Deleted')
})




