const eN="6 Jun 2025 10:00 PM"
document.getElementById("end-date").innerText=eN
const inputs=document.querySelectorAll("input")

function cl() {

    const end= new Date(eN)
    const now= new Date()
    const diff=(end-now)/1000;
   if(diff<0) return;
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;
}
setInterval(
    
  ()=>  {cl();
    },1000
)
