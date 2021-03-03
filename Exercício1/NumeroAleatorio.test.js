const Random = require('../lib/NumeroAleatorio');
const NumeroAleatorio = require('./NumeroAleatorio');
const random = new Random();

describe('Numero Aleatorio',()=>{

    Test('início negativo',()=>{
        expect(()=>{
            random.NumeroAleatorio(-100,100);
        }). toThrow('Início negativo')
    })
    Test('Fim negativo',()=>{
        expect(()=>{
            random.NumeroAleatorio(100,-100);
        }). toThrow('Fim negativo')
    })
    Test('Fim e início iguais em um intervalo entre 200 e 3000',()=>{
        random.NumeroAleatorio(200,3000);
        expect(random.n).toBe(random.n);
        console.log(random.n)
    })

});
