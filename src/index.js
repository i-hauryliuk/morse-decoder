const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const encodedChars = [];
  
    for (let i = 0; i < expr.length / 10; i++ ) {
      encodedChars.push(expr.substring(i * 10, i * 10 + 10).replace(/^0+/, ''));
    }
    
    return encodedChars.map(char => {
      if (char === "**********") return ' ';
      else return char.match(/[01]{2}/g).map(pair => {
        switch (pair) {
          case '10': return '.';
          case '11': return '-';
        }
      }).join('');
    }).map(code => code in MORSE_TABLE ? MORSE_TABLE[code] : code).join('');
}

module.exports = {
    decode
}
