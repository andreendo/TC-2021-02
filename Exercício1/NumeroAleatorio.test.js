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
    describe('Fim e Ínicio', () => {
        random.NumeroAleatorio(200, 3000);
        Test('Fim e início iguais', () => {
            expect(random.n).toEqual(random.n);
            console.log(random.n)
        })
    })
    Test('Entre 200 e 3000',()=>{
        toBeWithinRange(200,3000);
        console.log(random.n)
    })

});
