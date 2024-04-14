// function encrypt() {
//     const cipherText = document.querySelector(".cipher-text").value;
//     const cipherKey = document.querySelector(".cipher-key").value;
//     const results = document.querySelector(".result");
//     const resultText = document.querySelector(".result-text");
//     resultText.value = vigenereEncrypt(cipherText, cipherKey);
//     results.classList.remove("hide");
    
//   }
  
//   function vigenereEncrypt(plainText, key) {
//     let encryptedText = "";
//     const ACode = "A".charCodeAt(0);
  
//     for (let i = 0; i < plainText.length; i++) {
//       const plainCharCode = plainText.charCodeAt(i) - ACode;
//       const keyCharCode = key.charCodeAt(i % key.length) - ACode;
//       const encryptedCharCode = ((plainCharCode + keyCharCode) % 26) + ACode;
//       encryptedText += String.fromCharCode(encryptedCharCode);
//     }
  
//     return encryptedText;
//   }
  
//   function decrypt() {
//     const decipherText = document.querySelector(".decipher-text").value;
//     const decipherKey = document.querySelector(".decipher-key").value;
//     const resultsDecrypt = document.querySelector(".result-decrypt");
//     const resultDecryptText = document.querySelector(".result-decrypt-text");
//     resultDecryptText.value = vigenereDecrypt(decipherText, decipherKey);
//     resultsDecrypt.classList.remove("hide");
//   }
  
//   function vigenereDecrypt(encryptedText, key) {
//     let decryptedText = "";
//     const ACode = "A".charCodeAt(0);
  
//     for (let i = 0; i < encryptedText.length; i++) {
//       const encryptedCharCode = encryptedText.charCodeAt(i) - ACode;
//       const keyCharCode = key.charCodeAt(i % key.length) - ACode;
//       let decryptedCharCode = (encryptedCharCode - keyCharCode) % 26;
//       if (decryptedCharCode < 0) {
//         decryptedCharCode += 26; // Modulo 26 powinno być dodatnie
//       }
//       decryptedCharCode += ACode;
//       decryptedText += String.fromCharCode(decryptedCharCode);
//     }
  
//     return decryptedText;
//   }
function loadCallback() {
  load("text.txt");
  load("key.txt");
}

function load(file) {
  console.log(file);
  const result = document.querySelector('.result');
  fetch(file)
  .then((res) => res.text())
  .then((text) => {
    result.innerHTML = text;
  })
  .catch((e) => console.error(e))
}