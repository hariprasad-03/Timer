let runningState=false;
let valid;

function setTimer(){
    let day=parseInt(document.getElementById("daysIn").value);
    let hour=parseInt(document.getElementById("hoursIn").value);
    let mint=parseInt(document.getElementById("minsIn").value);
    let sec=parseInt(document.getElementById("secsIn").value);
    
    if(sec>=60){
        let temp=Math.floor(sec/60);
        mint+=temp;
        sec%=60;
    }
    if(mint>=60){
        let temp=Math.floor(mint/60);
        hour+=temp;
        mint%=60;
    }
    if(hour>=24){
        let temp=Math.floor(hour/24);
        day+=temp;
        hour%=24;
    }
    document.getElementById("days").innerHTML=day<10?"0"+day:day;
    document.getElementById("hours").innerHTML=hour<10?"0"+hour:hour;
    document.getElementById("mins").innerHTML=mint<10?"0"+mint:mint;
    document.getElementById("secs").innerHTML=sec<10?"0"+sec:sec;
}
function start(){
    if(!runningState){
        valid=setInterval(decrement,1000);
        runningState=true;
    }
}
function decrement(){
    let de=document.getElementById("days");
    let he=document.getElementById("hours");
    let me=document.getElementById("mins");
    let se=document.getElementById("secs");
    
    let d=parseInt(de.innerHTML);
    let h=parseInt(he.innerHTML);
    let m=parseInt(me.innerHTML);
    let s=parseInt(se.innerHTML);
    
    
    if(s>0){
        s--;
    }
    else{
        if(m>0){
            m--;
            s=59;
        }
        else{
            if(h>0){
                h--;
                m=59;
                s=59;
            }
            else{
                if(d>0){
                    d--;
                    h=23;
                    m=59;
                    s=59;
                }
                else{
                    clearInterval(valid);
                    runningState=false;
                }
            }
        }
    }
    document.getElementById("days").innerHTML=d<10?"0"+d:d;
    document.getElementById("hours").innerHTML=h<10?"0"+h:h;
    document.getElementById("mins").innerHTML=m<10?"0"+m:m;
    document.getElementById("secs").innerHTML=s<10?"0"+s:s;
}




function stop(){
    if(runningState){
        clearInterval(valid);   
        runningState=false;
    }
}



function reset(){
    runningState=false;
    document.getElementById("days").innerHTML="00";
    document.getElementById("hours").innerHTML="00";
    document.getElementById("mins").innerHTML="00";
    document.getElementById("secs").innerHTML="00";


    document.getElementById("daysIn").value=0;
    document.getElementById("hoursIn").value=0;
    document.getElementById("minsIn").value=0;
    document.getElementById("secsIn").value=0;
}