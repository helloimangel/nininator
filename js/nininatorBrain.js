// SILLY PROJECT MADE BY: ANTIHEROE.COM
function nininator2000Brain() {
    
        let niniMsg = document.getElementById("preNini").value;

        let smallOnes = ['a', 'e', 'i', 'o' ,'u', 'á', 'é', 'í', 'ó', 'ú', 'à', 'è', 'ì', 'ò', 'ù', 'ä', 'ë', 'ï', 'ö', 'ü'];
        let smalliOnes= ['i', 'i', 'i', 'i' ,'i', 'i', 'í', 'í', 'í', 'í', 'ì', 'ì', 'ì', 'ì', 'ì','ï', 'ï', 'ï', 'ï' ,'ü'];
        let niniFinalMsg = '';
        
        for ( let i = 0; i < niniMsg.length; i++ ) {
            
            let actualChar = niniMsg[i];
            let lowerCase = true;
            
            // Check lowercase / uppercase
            if (actualChar === actualChar.toUpperCase()) {
                    lowerCase = false;
                } else if (actualChar === actualChar.toLowerCase()) {
                    lowerCase = true;
                }
             
            // Set as lowercase
            actualChar = actualChar.toLowerCase();
            
            let haveIt = smallOnes.includes(actualChar);
            
            if (haveIt) {
                for (let chars in smallOnes) {
                    if (smallOnes[chars] === actualChar && lowerCase === true) {
                            if (smallOnes[chars] === 'u' && niniMsg[i - 1] === 'g' || niniMsg[i - 1] === 'q' || niniMsg[i - 1] === 'Q' || niniMsg[i - 1] === 'G') {
                                    niniFinalMsg += smallOnes[chars];
                                } else {
                                    niniFinalMsg += smalliOnes[chars];
                                }
                    } else if (actualChar === smallOnes[chars] && lowerCase === false) {
                         if (smallOnes[chars] === 'u' && niniMsg[i - 1] === 'G' || niniMsg[i - 1] === 'Q' || niniMsg[i - 1] === 'q' || niniMsg[i - 1] === 'g') {
                                    niniFinalMsg += smallOnes[chars].toUpperCase();
                                } else {
                                    niniFinalMsg += smalliOnes[chars].toUpperCase();
                                }
                    }
                }
            } else {
                niniFinalMsg += niniMsg[i];
            }
            
        }
      
    return document.getElementById("printBox").value = niniFinalMsg;

}

function copyNini() {

  let copyText = document.getElementById("printBox");
  copyText.select("printBox");
  document.execCommand("Copy");

}

