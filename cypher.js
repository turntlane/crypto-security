let alphabet = [
    'A','B','C','D','E','F',
    'G','H','I','J','K','L',
    'M','N','O','P','Q','R',
    'S','T','U','V','W','X',
    'Y','Z'
  ];

let newAlph = [...alphabet]

newAlph[0] = 1
newAlph[1] = 2
newAlph[2] = 3
newAlph[3] = 4
newAlph[4] = 5
newAlph[5] = 6
newAlph[6] = 7
newAlph[7] = 8
newAlph[8] = 9
newAlph[9] = 10
newAlph[10] = 11
newAlph[11] = 12
newAlph[12] = 13
newAlph[13] = 14
newAlph[14] = 15
newAlph[15] = 16
newAlph[16] = 17
newAlph[17] = 18
newAlph[18] = 19
newAlph[19] = 20
newAlph[20] = 21
newAlph[21] = 22
newAlph[22] = 23
newAlph[23] = 24
newAlph[24] = 25
newAlph[25] = 26



console.log(newAlph[9], newAlph[12], newAlph[15], newAlph[22], newAlph[5], newAlph[3], newAlph[18], newAlph[25], newAlph[16], newAlph[20], newAlph[15], newAlph[7], newAlph[19], newAlph[1], newAlph[16], newAlph[8], newAlph[25])
console.log(alphabet[8], alphabet[11], alphabet[14], alphabet[21], alphabet[4], alphabet[2], alphabet[17], alphabet[24], alphabet[15], alphabet[19], alphabet[14], alphabet[6], alphabet[17], alphabet[0], alphabet[15], alphabet[7], alphabet[24])



function newWord(str) {
    str.split('')
    for(let i = 0; i < str.length; i++) {
        if (str[i] === alphabet[0]){
            console.log(1)
        }
        else if (str[i] === alphabet[1]){
            console.log(2)
        }
        else if (str[i] === alphabet[2]){
            console.log(3)
        }
        else if (str[i] === alphabet[3]){
            console.log(4)
        }
        else if (str[i] === alphabet[4]){
            console.log(5)
        }
        else if (str[i] === alphabet[5]){
            console.log(6)
        }
        else if (str[i] === alphabet[6]){
            console.log(7)
        }
        else if (str[i] === alphabet[7]){
            console.log(8)
        }
        else if (str[i] === alphabet[8]){
            console.log(9)
        }
        else if (str[i] === alphabet[9]){
            console.log(10)
        }
        else if (str[i] === alphabet[10]){
            console.log(11)
        }
        else if (str[i] === alphabet[11]){
            console.log(12)
        }
        else if (str[i] === alphabet[12]){
            console.log(13)
        }
        else if (str[i] === alphabet[13]){
            console.log(14)
        }
        else if (str[i] === alphabet[14]){
            console.log(15)
        }
        else if (str[i] === alphabet[15]){
            console.log(16)
        }
        else if (str[i] === alphabet[16]){
            console.log(17)
        }
        else if (str[i] === alphabet[17]){
            console.log(18)
        }
        else if (str[i] === alphabet[18]){
            console.log(19)
        }
        else if (str[i] === alphabet[19]){
            console.log(20)
        }
        else if (str[i] === alphabet[20]){
            console.log(21)
        }
        else if (str[i] === alphabet[21]){
            console.log(22)
        }
        else if (str[i] === alphabet[22]){
            console.log(23)
        }
        else if (str[i] === alphabet[23]){
            console.log(24)
        }
        else if (str[i] === alphabet[24]){
            console.log(25)
        }
        else if (str[i] === alphabet[25]){
            console.log(26)
        }
    }


}

newWord('I LOVE CRYPTOGRAPHY')





