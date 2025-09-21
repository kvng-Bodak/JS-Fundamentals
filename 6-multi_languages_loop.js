const languages = ['C', 'Python', 'JavaScript'];
let i = 0;
let output = '';

while (i < languages.length) {
  output += languages[i] + '\n';
  i++;
}

console.log(output.slice(0, -1)); // remove last newline


