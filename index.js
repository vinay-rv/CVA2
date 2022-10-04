const y=document.getElementById("sen");
const x=document.getElementById("let");
function result(){
    var str = y.value;
    var letter=x.value;
    var strIndex=str.indexOf(letter)+1;
    if(str.indexOf(letter) == -1){
        document.querySelector("h2").innerHTML="Result: The letter does not exist in the sentence";
    }
    else{
    var trimString=str.slice(strIndex);
    document.querySelector("h2").innerHTML="Result: "+trimString;
    };
}