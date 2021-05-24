
const readline = require("readline");

const votos = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function getVotes() {
    votos.question("Digite o número de eleitores \n", function (total) {

        votos.question("Digite o número de votos em branco \n", function (brancos = 0) {
          var totalBrancos = Math.round((brancos / total) * 100);
      
          votos.question("Digite o número de votos nulos \n", function (nulos) {
            var totalNulos = Math.round((nulos / total) * 100);
      
            votos.question("Digite o número de votos válidos \n", function (validos) {
                var totalValidos = Math.round((validos / total) * 100);
      
                const porcentagem = {
                    eleitores: total,
                    brancos: totalBrancos,
                    nulos: totalNulos,
                    válidos: totalValidos
                };
      
                const result = parseInt(brancos) + parseInt(nulos) + parseInt(validos);
                console.log("total votos", result, "total eleitores", total);
      
                if (result > total) {
                    console.log("O número de votos deve ser menor ou igual ao número de eleitores"); 
      
                    rl();

                } else {
                    console.log("O município possui um total de", porcentagem.eleitores, "eleitores \n" , porcentagem.brancos, "% dos votos em branco \n", porcentagem.nulos, "% dos volots nulos \n", "e", porcentagem.válidos, "% dos votos válidos");
                    
                    votos.close();
                }
      
              });
          });
        });
      });
};

getVotes();
