<!--

function fadein_(menua)
{
menua.filters.alpha.opacity="100";
}

function fadeout_(menua)
{
menua.filters.alpha.opacity="80";
}



// The Central Randomizer

　　rnd.today=new Date();

　　rnd.seed=rnd.today.getTime();



　　function rnd() {

　　rnd.seed = (rnd.seed*9301+49297) % 233280;

　　return rnd.seed/(233280.0);

　　};



　　function rand(number) {

　　return Math.ceil(rnd()*number);

　　}; 



function changehead(){
var num=rand(10);
pic=document.getElementById("headbg");
pic.style.backgroundImage="url(../images/bghead"+num+".jpg)";
}


-->