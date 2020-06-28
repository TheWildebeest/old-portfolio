const latinCharset = [
  `A`,
  `B`,
  `C`,
  `D`,
  `E`,
  `F`,
  `G`,
  `H`,
  `I`,
  `J`,
  `K`,
  `L`,
  `M`,
  `N`,
  `O`,
  `P`,
  `Q`,
  `R`,
  `S`,
  `T`,
  `U`,
  `V`,
  `W`,
  `X`,
  `Y`,
  `Z`,
  `0`,
  `1`,
  `2`,
  `3`,
  `4`,
  `5`,
  `6`,
  `7`,
  `8`,
  `9`,
  `.`,
  `,`,
  `?`,
  `'`,
  `!`,
  `/`,
  `(`,
  `)`,
  `&`,
  `:`,
  `;`,
  `=`,
  `+`,
  `-`,
  `_`,
  `"`,
  `@`,
  ` `,
  `
`,
];

const morseCodeCharset = [
  `·− `,
  `−··· `,
  `−·−· `,
  `−·· `,
  `· `,
  `··−· `,
  `−−· `,
  `···· `,
  `·· `,
  `·−−− `,
  `−·− `,
  `·−·· `,
  `−− `,
  `−· `,
  `−−− `,
  `·−−· `,
  `−−·− `,
  `·−· `,
  `··· `,
  `− `,
  `··− `,
  `···− `,
  `·−− `,
  `−··− `,
  `−·−− `,
  `−−·· `,
  `−−−−− `,
  `·−−−− `,
  `··−−− `,
  `···−− `,
  `····− `,
  `····· `,
  `−···· `,
  `−−··· `,
  `−−−·· `,
  `−−−−· `,
  `·−·−·− `,
  `−−··−− `,
  `··−−·· `,
  `·−−−−· `,
  `−·−·−− `,
  `−··−· `,
  `−·−−· `,
  `−·−−·− `,
  `·−··· `,
  `−−−··· `,
  `−·−·−· `,
  `−···− `,
  `·−·−· `,
  `−····− `,
  `··−−·− `,
  `·−··−· `,
  `·−−·−· `,
  ` `,
  `<br>`,
];

let userInput = document.querySelector('.user-input');

let userOutput = document.querySelector('.user-output');

translateText = () => {
  userOutput.innerHTML = '';
  let thisArray = Array.from(userInput.value.toUpperCase());
  console.log(thisArray);
  for (let i = 0; i < thisArray.length; i++) {
    let n = latinCharset.findIndex((character) => character == thisArray[i]);
    console.log(n, latinCharset[n], morseCodeCharset[n]);
    userOutput.innerHTML += morseCodeCharset[n];
  }
};

userInput.addEventListener('click', () => (userInput.value = ''));
const translateButton = document.querySelector('.translate-button');
translateButton.addEventListener('click', translateText);

/// Event Listener ///
