// let s = "abccd";
let s = "pwwkew"
let n = s.length;
let currentSubstring = [];
let left = 0, right = 0;
let maxLength = 0;

while (right < n) {
    let char = s[right];
    //siemore y cuando no exista sera -1
    let index = currentSubstring.indexOf(char);//verifica is ya existe y te da el index de donde se encuentra
    console.log(index);
    if (index !== -1) {
        // Remove characters until we remove the repeated one
        currentSubstring.splice(0, index + 1);
        left += index + 1;//basicamente solo va sumando uno
    }
    currentSubstring.push(char);
    maxLength = Math.max(maxLength, currentSubstring.length);
    right++;
}

console.log("left",left)
console.log("currentSubstring",currentSubstring)
console.log("maxLength",maxLength);