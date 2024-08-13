var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";

    let pref = strs[0];
    let prefLen = pref.length;

    console.log("0", pref);
    for (let i = 1; i < strs.length; i++) {
        console.log("1", strs[i]);
        while (pref !== strs[i].slice(0, prefLen)) {
            console.log("2", pref, strs[i].slice(0, prefLen));
            prefLen--;
            if (prefLen === 0) return "";
            pref = pref.slice(0, prefLen);
            console.log("3", pref, pref.slice(0, prefLen));

        }
    }

    return pref;

};

const strs = ["flower", "flow", "flight"];
const result = longestCommonPrefix(strs);
console.log(result); // "fl"