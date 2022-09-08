const num = Number(prompt("Digite um número:"));
// parte 1
if (num % 2 === 0) {
    console.log("O número é divisível por 2.");
}
else{
    if (num % 3 === 0) {
    console.log("O número é divisível por 3.");        
    }
    else{
        console.log("O número não é divisível por 2 e nem por 3.");
    }
}    

//parte 2

if (num % 2 === 0 || num % 3 === 0){
    console.log("O número é divisível por 2 ou por 3.");
}else{
    console.log("O número não é divisível por 2 ou por 3.");
}

