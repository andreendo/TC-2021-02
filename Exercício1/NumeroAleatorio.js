class NumeroAleatorio {


    Verifica(inicio, fim) {
        if (inicio < 0 || fim < 0) {
            return '-1'
        }

        if (inicio >= fim) {
            return '-1'
        }
    }

    NumeroAleatorioFunction(inicio, fim) {
        inicio = Math.ceil(inicio);
        fim = Math.floor(fim);
        const rand = (inicio - fim + 1) + inicio;
        this.numero = Math.floor(Math.random() * rand);

    }

}

module.exports = NumeroAleatorio;
