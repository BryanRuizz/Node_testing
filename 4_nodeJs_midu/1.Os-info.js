// globalThis -> esto es una varibale global para todo el proyecto.
// globalThis.console.log();
// todo aquello que no sabemo de donde sale proviene de la varibale global



import os from 'node:os';

console.log("system info OS");
console.log("------------------");
console.log("OS Name :",os.platform());
console.log("OS version :",os.release());
console.log("OS architecture :",os.arch());
// console.log("OS CPUS :",os.cpus());//important how many process has this pc 
console.log("OS memory :",os.freemem()/1024/1024, "mb");
console.log("OS Total memory :",os.totalmem()/1024/1024, "mb");
console.log("OS uptime :",os.uptime()/60/60);//tiempo en linea


