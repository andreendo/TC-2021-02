function gerarEstatisticas(arr){

    if( arr.length === 0 ) throw 'empty array';

    let menor = arr[0];
    let maior = arr[0];

    allIntegers = true;

    for(let i = 1 ; i < arr.length; i++){

        if(!Number.isInteger(arr[i])) allIntegers = false;

        if (arr[i] < menor)
            menor = arr[i];

        if (arr[i] > maior)
            maior = arr[i];
    }

    if(allIntegers === false) throw "Not Just Integer"

    return{ maior, menor };
}

module.exports = gerarEstatisticas;