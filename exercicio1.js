const nums = [9,-1, -2, 10 , 0];

function ordenaArrayOrdemDesc(array){
    array.sort((a,b) => b-a)
    console.log(array, 'array ordenado')
};

function verificaNumerosNegativos(array) {
    const ultimo_num =  array[array.length-1]
    const penultimo_num = array[array.length-2]
    if (ultimo_num < 0 && penultimo_num < 0){
        let neg_nums = []
        neg_nums.push(ultimo_num)
        neg_nums.push(penultimo_num)
        return neg_nums
    }
    return false
};

function escolheMaiorProduto(array){
    const maior_num = array[0]
    let dois_maiores_nums = array.slice(1,3)
    if (verificaNumerosNegativos(array)){
        console.log("tem numeros negativos")
        if (multiplicaValores(verificaNumerosNegativos(array)) > multiplicaValores(dois_maiores_nums)){
            const maior_produto = maior_num * multiplicaValores(verificaNumerosNegativos(array))
            return maior_produto
        }
    }
    const maior_produto = maior_num * multiplicaValores(dois_maiores_nums)
    return maior_produto
};

function multiplicaValores(sliced_array){
    const produto  = sliced_array.reduce((acumulador, numero) => acumulador * numero,1)
    return produto
};

ordenaArrayOrdemDesc(nums);
verificaNumerosNegativos(nums);
console.log(escolheMaiorProduto(nums))

