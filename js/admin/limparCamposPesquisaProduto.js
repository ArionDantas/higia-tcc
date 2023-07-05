const inputMatricula = document.querySelector("#inputMatricula");
const inputStatus = document.querySelector("#inputStatus");
const inputData = document.querySelector("#inputData");
const inputNomeCliente = document.querySelector("#inputNomeCliente");
const inputEmailCliente = document.querySelector("#inputEmailCliente");
const inputEnderecoCliente = document.querySelector("#inputEnderecoCliente");
const buttomFecharNewProduct = document.querySelector("#buttomFecharNewProduct");

buttomFecharNewProduct.addEventListener("click", function() {
    const imageProduct = document.getElementById('image-product');
    imageProduct.removeAttribute('src')
    inputMatricula.value = "";
    inputStatus.value = "";
    inputData.value = "";
    inputNomeCliente.value = "";
    inputEmailCliente.value = "";
    inputEnderecoCliente.value = "";
})
