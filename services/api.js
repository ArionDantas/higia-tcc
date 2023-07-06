// export function returnC(){

//     const c = {

//         dog: async function getRandomDog() {
//             console.log("dog");
//             try {
//                 const response = await fetch("https://api-farmacia-higia-java-d263a377630d.herokuapp.com/customers/all");
//                 const data = await response.json();
//                 if (data) {
//                     return data
//                 }
//             } catch (error) {
//                 console.error('Ocorreu um erro:', error);
//             }
//         },
//         pinca: async function getRandomDog() {
//             console.log("pica");
//             try {
//                 const response = await fetch("https://api-farmacia-higia-java-d263a377630d.herokuapp.com/customers/all");
//                 const data = await response.json();
//                 if (data) {
//                     return data
//                 }
//             } catch (error) {
//                 console.error('Ocorreu um erro:', error);
//             }
//         },
//     }

//     return c;

// }

const cliente = {
    cpf: "24669119060",
    email: "hallan@teste.com",
    password: "12qwas",
    firstName: "Hallan",
    lastName: "Puts",
    phone: "27999887744",
    birthDate: "2023-07-05T22:22:15.392Z",
    recoverCode: "string",
    isActive: true,
    passwordCrypt: "string"
}


let url = 'https://api-farmacia-higia-java-d263a377630d.herokuapp.com/customers/'

function test() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
}

// test();





