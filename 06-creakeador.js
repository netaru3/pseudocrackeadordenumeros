function crakeador(){let contraseña=Number(document.getElementById("numero").value); let fecha1=new Date()
let i=0
let id=setInterval(() => {
if(contraseña!=i){i++; document.getElementById("crakeo").textContent=i}
else{document.getElementById("crakeo").textContent='su contraseña es:'+i;let fecha2=new Date();
    let tiempototal=fecha2-fecha1
document.getElementById("tiempo").textContent="el tiempo que demoró crakearlo fue:" +tiempototal +"ms "+"o "+(fecha2-fecha1)/1000+"sg"
clearInterval(id);return i}; 
}, 1);}
