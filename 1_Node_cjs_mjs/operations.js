// this is for common js cjs


const addition = (a,b) =>{
    return a +b;
}

const subtraction = (a, b) =>{
    return a -b;
}

const multiplication =() =>{
    return a*b;
} 

// console.log(module);
module.exports = { addition,subtraction,multiplication};
// this is for exporte with cjs - common js a default sistem of modules for js



//  this is for module js esmascript  / .mjs

// export const addition = (a,b) =>{
//     return a +b;
// }

// export const subtraction = (a, b) =>{
//     return a -b;
// }

// export const multiplication =() =>{
//     return a*b;
// } 
//  export {addition,subtraction,multiplication}-> is the same if you don put the export