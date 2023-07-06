
// let clientes = [
//     { id: 1, nome: 'Arion Dantas da Silva Junior', email: 'ariondantas@gmail.com', cpf: '15891140780', endereco: 'Av Espirito Santo, n 18' },
//     { id: 2, nome: 'Arion', email: 'ariondantas@gmail.com', cpf: '15891140780', endereco: 'Av Espirito Santo, n 18' },
//     { id: 3, nome: 'Arion', email: 'ariondantas@gmail.com', cpf: '15891140780', endereco: 'Av Espirito Santo, n 18' },
//     { id: 4, nome: 'Arion', email: 'ariondantas@gmail.com', cpf: '15891140780', endereco: 'Av Espirito Santo, n 18' }
// ]

let listagemClientes = document.querySelector('#listagem-clientes');
let listaClientes = '';

async function getClientes() {
    try {
        const response = await fetch("https://api-farmacia-higia-java-d263a377630d.herokuapp.com/customers/all");
        const data = await response.json();
        if (data) {
            return data
        }
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

listClientes = async () => {
    let clientes = await getClientes()
    if (clientes) {
        console.log(clientes);
        clientes.forEach((cliente, index) => {
            listaClientes += `
            <tr>
            <td>${index}</td>
            <td>${index}</td>
            <td>${cliente.email}</td>
            <td>${cliente.cpf}</td>
            <td>${cliente.endereco}</td>
            <td class="d-flex align-content-center justify-content-center gap-1">
                <button type="button"
                    class="btn btn-success justify-content-center d-flex align-content-center">
                    <span class="material-symbols-outlined">
                        visibility
                    </span>
                </button>
                <button type="button"
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
        `   
        listagemClientes.innerHTML = listaClientes;

        });
    }
}

listClientes();




    // function listClientes(clientes) {

    //     clientes.forEach((cliente, index) => {
    //         listaClientes += `
    //         <tr>
    //         <td>${cliente.id}</td>
    //         <td>${cliente.nome}</td>
    //         <td>${cliente.email}</td>
    //         <td>${cliente.cpf}</td>
    //         <td>${cliente.endereco}</td>
    //         <td class="d-flex align-content-center justify-content-center gap-1">
    //             <button type="button"
    //                 class="btn btn-success justify-content-center d-flex align-content-center">
    //                 <span class="material-symbols-outlined">
    //                     visibility
    //                 </span>
    //             </button>
    //             <button type="button"
    //                 class="btn btn-primary d-flex justify-content-center align-content-center">
    //                 <span class="material-symbols-outlined">
    //                     edit_square
    //                 </span>
    //             </button>
    //             <button type="button"
    //                 class="btn btn-danger d-flex justify-content-center align-content-center">
    //                 <span class="material-symbols-outlined">
    //                     close
    //                 </span>
    //             </button>
    //         </td>
    //         </tr>
    //     `

    //     listagemClientes.innerHTML = listaClientes;

    //     });
    // }

   