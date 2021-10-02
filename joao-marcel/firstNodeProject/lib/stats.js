module.exports = {
  gerarEstatisticas: function (arr) {
    if (arr.length === 0) throw "empty array";
    let menor = arr[0];
    let maior = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < menor) menor = arr[i];

      if (arr[i] > maior) maior = arr[i];
    }

    return { maior, menor };
  },
  somenteInteiros: function (arr) {
    if (arr.length === 0) throw "empty array";

    arr.forEach((number) => {
      if (!Number.isInteger(number)) {
        throw "not integer";
      }
    });
  },
};
