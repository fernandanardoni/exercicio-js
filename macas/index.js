
const readline = require("readline");

const appleAmount = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function buyApples() {
    const appleTax = 0.30;
    const apple = 1.00;
        
    appleAmount.question('Quantas maças você vai comprar?\n', function(amount) {

        if (parseInt(amount) >= 12 ) {

            const total = (apple * amount).toFixed(2);
            const discount = (amount * appleTax).toFixed(2);

            console.log(`O valor final é ${total} reais e você economizou ${discount} reais`)
        } else {

            const total = ((apple * amount) + (appleTax * amount)).toFixed(2);

            console.log(`O valor final é ${total} reais`)
        }

        appleAmount.close();
    })
    
}

buyApples();