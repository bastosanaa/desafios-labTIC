const nums = [-1,4,3,0];

function ordenaArrayOrdemDesc(array){
    array.sort((a,b) => b-a)
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
    let dois_maiores_nums = array.slice(1,3)
    if (verificaNumerosNegativos(array)){
        console.log("tem numeros negativos")
        if (multiplicaValores(array,verificaNumerosNegativos(array)) > multiplicaValores(array,dois_maiores_nums)){
            const maior_produto = multiplicaValores(array,verificaNumerosNegativos(array))
            return maior_produto
        }
    }
        const maior_produto = multiplicaValores(array,dois_maiores_nums)
        return maior_produto
};

function multiplicaValores(array,sliced_array){
    const maior_num = array[0]
    const produto  = sliced_array.reduce((acumulador, numero) => acumulador * numero,1)*maior_num
    return produto
};

ordenaArrayOrdemDesc(nums);
verificaNumerosNegativos(nums);
console.log(escolheMaiorProduto(nums))

