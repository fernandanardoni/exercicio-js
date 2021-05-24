const readline = require("readline");

const votos = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getVotes() {
  votos.question("Digite o número de eleitores \n", function (total) {

    votos.question("Digite o número de votos em branco \n", function (brancos) {
      var totalBrancos = Math.round((brancos / total) * 100);

      votos.question("Digite o número de votos nulos \n", function (nulos) {
        var totalNulos = Math.round((nulos / total) * 100);

        votos.question("Digite o número de votos válidos \n", function (validos) {
            var totalValidos = Math.round((validos / total) * 100);

            const porcentagem = {
              eleitores: total,
              brancos: totalBrancos.toFixed(1),
              nulos: totalNulos.toFixed(1),
              válidos: totalValidos.toFixed(1),
            };

            const sumVotes =
              parseInt(brancos) + parseInt(nulos) + parseInt(validos);
            console.log(
              "Total de votos:",
              sumVotes,
              "Total de eleitores:",
              total
            );

            if (sumVotes > total) {
              console.log(
                "O número de votos deve ser menor ou igual ao número de eleitores"
              );

              getVotes();
            } else {
              console.log(
                "O município possui um total de",
                porcentagem.eleitores,
                "eleitores \n",
                porcentagem.brancos,
                "% dos votos em branco \n",
                porcentagem.nulos,
                "% dos volots nulos \n",
                "e",
                porcentagem.válidos,
                "% dos votos válidos"
              );

              votos.close();
            }
          }
        );
      });
    });
  });
}

getVotes();
