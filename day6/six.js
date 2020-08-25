//global(variable define globally)
var firstname = "Michal"
var lastname = "Zoe"

var sayhi = {
    //local(variable define locally)
    firstname:"John",
    lastname:'Ammy',
    greet: function(){
        return `Say hi to ${firstname} ${this.lastname}`
        //this word give the chance whatever in local to excute.
    }
}

console.log(sayhi.greet())