console.log(" digite um número para gerar sua tabuada ")
let num = 0;
let tabuada =[];

process.stdin.on("data",function(data) {
    if(!num){num= Number(data.toString().trim());

        for (let i = 1; i <=10; i++) {
            let resultado = i * num 
            tabuada.push(resultado); 
            console.log(num +"x" +i + "=" + resultado)
        }
    }
});

