(function () {
    const togglePassword = document.getElementById("acessarSenha");
    const inputSenha = document.getElementById("input-senha");
    const inputUser = document.getElementById("input-user");
    const buttonSubmit = document.getElementById("button-submit");
    const ancora = document.querySelector(".ancora");
    const divUserPasswordIncorrect = document.querySelector(".alert-danger");
    const divFieldEmpty = document.querySelector(".alert-warning");
    const urlDashboard = "./dashboard.html";

    buttonSubmit.addEventListener("click", function () {

        const user = inputUser.value;
        const password = inputSenha.value;

        console.log(typeof inputSenha.value);

        if (user === "admin" && password === "admin") {
            ancora.setAttribute("href", urlDashboard);
        } else if (user === "" && password === "") {
                divUserPasswordIncorrect.classList.add("d-none");
                divFieldEmpty.classList.remove("d-none")
        } else {
            divFieldEmpty.classList.add("d-none");
            divUserPasswordIncorrect.classList.remove("d-none");
        }
    });

    if (togglePassword) {
        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = inputSenha.getAttribute("type") === "password" ? "text" : "password";
            inputSenha.setAttribute("type", type);
            // toggle the eye icon
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    };

})();