function isPalindrome(str) {
    // Remove todos os espaços em branco da string original.
    // Converte toda a string resultante para minúsculas.
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

const testString = 'A man a plan a canal Panama';
const result = isPalindrome(testString);
console.log(result); 
