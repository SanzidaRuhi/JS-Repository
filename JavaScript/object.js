var app={
    version: 1.0,
    name: "brilliant app",
    getversion: function(){
        return this.version;//return app.version;
    }
};
var date=new Date();//creating an instance of the Date object
var x=5,
interval=setInterval(function() {
    console.log(x);
    if(x===1){
        clearInterval(interval);
    }
    x--;
}, 1000);//1000 is the interval counting in miliseconds means 1s
var app1={};
app1.countdown=function(settings){
    var interval, 
    counter=0,
    //start and end points
    startat=0,
    endat=0;
    if(settings===undefined){
        console.log("please provide settings");
    }else{
        if(settings.startat===undefined||settings.endat===undefined){
            console.log("start and end number are required");
        }
        else{
            console.log("ok")}
    }
}
var names = ["James", "Bruce", "Robin", "Charlie"]; 
console.log(names.push("Jackie"));