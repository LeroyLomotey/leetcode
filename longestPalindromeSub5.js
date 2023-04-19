 function isPalindrome(s)
 {
    const len = s.length;

    for (let i = 0; i < len / 2; i++) {
        if(s[i] !== s[len - 1 - i]) {
            return "";
        }
    }
    return s;
 }
var longestPalindrome = function(s) {
    const cache = {};
    if(s.length == 1)
    {
        return s;
    }
    var buildPal = (build, i) =>
    {
        var key = build + "_" + i;

        if(key in cache)
        {
            return "";
        }
 
        if(i == s.length-1)
        {
            return isPalindrome(build);
        }

        
        let next = i + 1;
        let leftBuild = build + s.charAt(next);
        let rightBuild = s.charAt(next)
        //console.log(leftBuild + " " + rightBuild)
        let left = isPalindrome(buildPal(leftBuild, next)) //left child
        let right = isPalindrome(buildPal(rightBuild, next)) //right child
        let current  = isPalindrome(build) //current Node
        let temp = left.length >= right.length ? left : right; // returns longest of children
        
        if(current.length >= temp.length)
        {
            cache[key] = current
            return cache[key];
        }else
        {
            cache[key] = temp
            return temp;
        }
    }
    return buildPal(s.charAt(0), 0)
};
longestPalindrome("babad")

/*
Input: s = "cbbd"

Recursive Tree :
build from empty string
Left rule = add character to string
right rule = add character to empty string

                              "c", i = 1
                        /1                  \1
                    "cb"                    "b"
               /2        \2              /2      \2
             "cbb"       "b"           "b"       "bb"
          /3     \3    /3    \3      /3   \3    /3   \3
      "cbbd"     "d"  "bd"   "d"   "bd"   "d" "d"     "d"

     base cases : reach last character in string ex: "d" where i = s.length-1
                  or
                  already visited / in cache
    
    memoization: string_index ex: key = bb_2 value = "" or "bb" -if palindrome save string, else ""
*/

