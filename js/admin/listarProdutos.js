let produtos = [
    { id: 1, nome: 'dipirona', codigoBarra: 15165156161, tipo: 'remedio', unidade: 'vitoria', valor: 10, desconto: 10},
    { id: 2, nome: 'naftalina', codigoBarra: 15165156161, tipo: 'remedio', unidade: 'vitoria', valor: 670, desconto: 10 },
    { id: 3, nome: 'ubuprofeno', codigoBarra: 15165156161, tipo: 'remedio', unidade: 'vitoria', valor: 50, desconto: 10 }
]

let listagemProdutos = document.getElementById('listagem-produtos');
let list = '';

function listProdutos(produtos) {

    produtos.forEach((produto, index) => {
        list += `
        <tr>
        <td>${produto.id}</td>
        <td>${produto.codigoBarra}</td>
        <td>${produto.nome}p</td>
        <td>${produto.tipo}</td>
        <td>${produto.unidade}</td>
        <td>R$${produto.valor}</td>
        <td class="d-flex align-content-center justify-content-center gap-1">
            <button type="button" data-bs-target="#modalVisualizarProduto${produto.id}" data-bs-toggle="modal"
                class="btn btn-success justify-content-center d-flex align-content-center">
                <span class="material-symbols-outlined">
                    visibility
                </span>
            </button>
            <button type="button" data-bs-target="#modalEditarProduto${produto.id}" data-bs-toggle="modal"
                class="btn btn-primary d-flex justify-content-center align-content-center">
                <span class="material-symbols-outlined">
                    edit_square
                </span>
            </button>
            <button type="button"
                class="btn btn-danger d-flex justify-content-center align-content-center">
                <span class="material-symbols-outlined">
                    close
                </span>
            </button>
        </td>
        </tr>

        <div class="modal fade" id="modalEditarProduto${produto.id}" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Editar Produto</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <form method="get">

                    <div class="row">

                    <div class="col">
                        <div class="mb-3">
                            <label for="inputEditarCodigoBarraProduto${produto.codigoBarra}" class="form-label">Código
                                de barras</label>
                            <input type="number" class="form-control"
                                id="inputEditarCodigoBarraProduto${produto.codigoBarra}" value="${produto.codigoBarra}">
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label for="inputEditarNomeProduto${produto.nome}" class="form-label">Nome do
                                produto</label>
                            <input type="text" class="form-control"
                                id="inputEditarNomeProduto${produto.nome}" value="${produto.nome}">
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="mb-3">
                            <label for="inputEditarTipoProduto${produto.tipo}"
                                class="form-label">Tipo</label>
                            <input type="text" class="form-control"
                                id="inputEditarTipoProduto${produto.tipo}" value="${produto.tipo}">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-3">
                        <div class="mb-3">
                            <label for="inputEditarValorProduto${produto.valor}"
                                class="form-label">Valor</label>
                            <input type="number" class="form-control"
                                id="inputEditarValorProduto${produto.valor}" value="${produto.valor}">
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="mb-3">
                            <label for="inputEditarDescontoProduto${produto.desconto}"
                                class="form-label">Desconto %</label>
                            <input type="number" class="form-control"
                                id="inputEditarDescontoProduto${produto.desconto}" value="${produto.desconto}">
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label for="inputEditarEstabelecimentoProdutoinputEditarDescontoProduto${produto.unidade}"
                                class="form-label">Estabelecimento</label>
                            <input type="text" class="form-control"
                                id="inputEditarEstabelecimentoProdutoinputEditarDescontoProduto${produto.unidade}" value="${produto.unidade}">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="m3-3">
                            <label for="inputImagemProdutoCadastrar"
                                class="form-label">Imagem</label>
                            <input type="file" class="form-control"
                                id="inputImagemProdutoCadastrar"
                                accept="image/*">
                        </div>
                    </div>
                    <div class="col">
                        <div id="preview"></div>
                    </div>
                </div>

                        <button type="submit" class="btn btn-success">Cadastrar</button>

                        <button type="reset" class="btn btn-danger"
                            data-bs-dismiss="modal">Fechar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Box Visualizar Produto -->

        <div class="modal fade" id="modalVisualizarProduto${produto.id}" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Visualizar
                        Produto</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form method="get">

                    <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label for="inputVisualizarCodBarrasProduto${produto.id}" class="form-label">ID</label>
                            <input type="number" class="form-control"
                                id="inputVisualizarCodBarrasProduto${produto.id}" value="${produto.id}" disabled>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label for="inputEditarCodigoBarraProduto${produto.codigoBarra}" class="form-label">Código
                                de barras</label>
                            <input type="number" class="form-control"
                                id="inputEditarCodigoBarraProduto${produto.codigoBarra}" value="${produto.codigoBarra}" disabled>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label for="inputEditarNomeProduto${produto.nome}" class="form-label">Nome do
                                produto</label>
                            <input type="text" class="form-control"
                                id="inputEditarNomeProduto${produto.nome}" value="${produto.nome}" disabled>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="mb-3">
                            <label for="inputEditarTipoProduto${produto.tipo}"
                                class="form-label">Tipo</label>
                            <input type="text" class="form-control"
                                id="inputEditarTipoProduto${produto.tipo}" value="${produto.tipo}" disabled>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-3">
                        <div class="mb-3">
                            <label for="inputEditarValorProduto${produto.valor}"
                                class="form-label">Valor</label>
                            <input type="number" class="form-control"
                                id="inputEditarValorProduto${produto.valor}" value="${produto.valor}" disabled>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="mb-3">
                            <label for="inputEditarDescontoProduto${produto.desconto}"
                                class="form-label">Desconto %</label>
                            <input type="number" class="form-control"
                                id="inputEditarDescontoProduto${produto.desconto}" value="${produto.desconto}" disabled>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label for="inputEditarEstabelecimentoProdutoinputEditarDescontoProduto${produto.unidade}"
                                class="form-label">Estabelecimento</label>
                            <input type="text" class="form-control"
                                id="inputEditarEstabelecimentoProdutoinputEditarDescontoProduto${produto.unidade}" value="${produto.unidade}" disabled>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="m3-3">
                            <label for="inputImagemProdutoCadastrar"
                                class="form-label">Imagem</label>
                            <input type="file" class="form-control"
                                id="inputImagemProdutoCadastrar"
                                accept="image/*">
                        </div>
                    </div>
                    <div class="col">
                        <div id="preview"></div>
                    </div>
                </div>

                        <button type="submit" class="btn btn-success">Cadastrar</button>

                        <button type="reset" class="btn btn-danger"
                            data-bs-dismiss="modal">Fechar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `
    
    listagemProdutos.innerHTML = list;
    
    });
}

listProdutos(produtos);
console.log(produtos);