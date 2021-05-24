

const readline = require("readline");

const age = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getAge() {

    age.question('Digite a sua idade (em anos, meses e dias) separada por vírgulas: \n', function(ageOutput) {

        const fullAge = ageOutput.split(",");

        const years = parseInt(fullAge[0]) * 365;
        const months = parseInt(fullAge[1]) * 30;
        const days = parseInt(fullAge[2]);

        const total = years + months + days;

        console.log(`Você tem ${total} dias de idade`);

        age.close();
    })
}

getAge();