function clicked(){
    let a=document.getElementById("code").value;
    
    if(a==2762){
        window.open("main.html")
    }
    else if(a==7474){
        window.open("main2.html")
    }
    else{
        document.getElementById("text").innerHTML = "INVALID CODE";
    }
}