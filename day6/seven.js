function language(name,country) { // language is created object as function name and name and country are parameters.
    this.name = name;// this keyword gives chance to local variable to excute 
    this.country = country;
    this.add = (a,b) => {return a+b}
}

/*var Hindi = new language('Hindi','India')
Hindi
language {name: "Hindi", country: "India", add: ƒ}
Hindi.add(2,4)
6*/
//////// Es6///////
class language1{
    constructor(name,country){
        this.name = name;
        this.country = country;   
    }

    add(a,b){
        return a+b
    }
}
var English = new language1('English','USA')