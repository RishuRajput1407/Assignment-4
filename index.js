// Q1. Count Characters------------------------------------------------------

function countCharacters(S) {
    let countA = 0;
    let countD = 0;
    
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'A') countA++;
        else if (S[i] === 'D') countD++;
    }
    
    return [countA, countD];
}
const S = "AbaDd";
console.log(countCharacters(S));



// Q2. Count the Heads------------------------------------------------------------

function countHead(A) {
    let charCount = {};
    for (let char of A) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let result = '';
    for (let char of Object.keys(charCount).sort()) {
        if (charCount[char] > 1) {
            result += char + charCount[char];
        }
    }
    return result;
}
const A = "prepbytes";
console.log(countHead(A));


// Q3. Count the Vowels-------------------------------------------------------------------

function Count_Vowel(b) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of b) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
const b = "Prepbytes";
console.log(Count_Vowel(b));


// Q4. Concatenate the Strings-----------------------------------------------------

function Concatenate_Strings(S1, S2) {
    return S1 + S2;
}
const S1 = "Prep";
const S2 = "bytes";
console.log(Concatenate_Strings(S1, S2)); 


// Q5. Find Length--------------------------------------------------------------

function findLength(c) {
    let count = 0;
    for (let char of S) {
        count++;
    }
    return count;
}
const c = "CeDqe";
console.log(findLength(c)); 


// Q6. Find the Winner-----------------------------------------------------

function Game_Winner(S) {
    let countA = 0;
    let countD = 0;
    for (let char of S) {
        if (char === 'A') countA++;
        else if (char === 'D') countD++;
    }
    if (countA > countD) {
        return "Aditya";
    } else if (countD > countA) {
        return "Danish";
    } else {
        return "Draw";
    }
}
const E1 = "ADDAAADDDDD";
console.log(Game_Winner(E1)); 
const E2 = "ADDAAADD";
console.log(Game_Winner(E2));


// Q7. Join Strings-------------------------------------------------------

function joinStrings(p, q) {
    return p + q;
}
const p = "PrepBytes";
const q = "Technologies";
console.log(joinStrings(p, q));


// Q8. Plaindrome Check----------------------------------------------

function Plain_Check(S) {
    S = S.toLowerCase();
    let reversed = S.split('').reverse().join('');
    return S === reversed ? "True" : "False";
}
console.log(Plain_Check("Naman"));  
console.log(Plain_Check("naman"));  


// Q9. Reverse the String-------------------------------------------

function Reverse_String(a) {
    return a.split('').reverse().join('');
}

const a = "I am utkarsh raj";
console.log(Reverse_String(a));


// Q10. Match the Strings---------------------------------------------------

function String_Match(S1, S2) {
    return S1 === S2 ? "YES" : "NO";
}
const b1 = "Prepbytes";
const b2 = "Prepbytes";
console.log(String_Match(b1, b2)); 


// Q11. String Replace-----------------------------------------------------

function Replace() {
    const S = "Hi, I am You."; 
    const pattern = "You"; 
    const text = "Prepbytes";  
    const updatedString = S.replace(pattern, text);
    
    return updatedString;
}
console.log(Replace()); 


// Q12. Split the Strin--------------------------------------------------

function Split_the_String() {
    const S = "I am utkarsh raj"; 
    const splittedArray = S.split(' ');
    
    return splittedArray;
}
console.log(Split_the_String());


// Q13. Count the Vowels and Consonants-------------------------------

function Count_Vowels(n) {
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";

    for (let char of n) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    
    return vowelCount;
}

function Count_Consonants(n) {
    let consonantCount = 0;
    const vowels = "aeiouAEIOU";
    for (let char of n) {
        if (char.match(/[a-zA-Z]/) && !vowels.includes(char)) {
            consonantCount++;
        }
    }
    
    return consonantCount;
}


const n = "Prepbytes";
const vowelsCount = Count_Vowels(n);
const consonantsCount = Count_Consonants(n);
console.log(vowelsCount, consonantsCount);







