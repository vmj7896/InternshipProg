var a= [2,4,6,8,10]
a.map((data) =>{return(data)})
(5) [2, 4, 6, 8, 10]
var a= [2,4,6,8,10]
a.filter((data) =>{return(data)})

(5) [2, 4, 6, 8, 10]
var a= [2,4,6,8,10]
a.filter((data) =>{return(data*2)})
(5) [2, 4, 6, 8, 10]
var a= [2,4,6,8,10]
a.map((data) =>{return(data*2)})
(5) [4, 8, 12, 16, 20]
var a=[40,52,80,65,12]
a.filter((data)=>{return(data>20)})
(4) [40, 52, 80, 65]
var a=[40,52,80,65,12]
a.map((data)=>{return(data>20)})
(5) [true, true, true, true, false]


////////////
for(i=0;i<5;i++){
    console.log(i)
}

var city = ["London","Newyork","Delhi","Boston"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

/////While////
var i = 0;
while(i<5){
    console.log(i);
    i++;
}

///DoWhile////
var i = 0;
do{
    console.log(i);
    i++
}
while(i<5)


//////for of//////
var colors=["Red","Yellow","Green"]

for(abc of colors){
    console.log(abc)
}











