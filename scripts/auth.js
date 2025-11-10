const signup_form = document.getElementById("signup_form")
const login_form = document.getElementById("login_form")
const signup_page = document.getElementById("signup_page")
const login_page = document.getElementById("login_page")

const register_now_button = document.getElementById("register_now_button");
const go_to_login_button = document.getElementById("go_to_login_button");

function hideshow() {
    signup_page.classList.add("hidden");
    login_page.classList.remove("hidden");
}
// Clic sur "Register Now"
register_now_button.addEventListener("click", () => {
    login_page.classList.add("hidden");
    signup_page.classList.remove("hidden");
})

// Clic sur "Login"
go_to_login_button.addEventListener("click", () => {
    hideshow()
})

signup_form.addEventListener("submit", (event) => {
    event.preventDefault()
    const signup_password = document.getElementById("signup_password")
    const signup_confirm_password = document.getElementById("signup_confirm_password")
    const signup_first_name = document.getElementById("first_name_signup")
    const signup_last_name = document.getElementById("last_name_signup")
    const message_erreur = document.getElementById("message_erreur")

    message_erreur.textContent = '';
    const password = signup_password.value
    const password_confirm = signup_confirm_password.value
    const first_name = signup_first_name.value
    const last_name = signup_last_name.value

    let pwd_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]$)/
    // regex verifications
    if (password === "" || password_confirm === "" || first_name === "" || last_name === "") {
        message_erreur.style.color = "red"
        message_erreur.textContent = "All fields are required"
        return
    }

    if (password !== password_confirm) {
        message_erreur.style.color = "red"
        message_erreur.textContent = "Passwords doesn't match"
        return
    }
    if (password.length < 8) {
        message_erreur.style.color = "red"
        message_erreur.textContent = "Password must have at least 8 caracters"
        return
    }

    if (pwd_regex.test(password)) {
        console.log("Password Is Valid")
        return
    }
    else {
        message_erreur.style.color = "red"
        message_erreur.textContent = "Check info, your Password doesn't match password requirements"
        return
    }

    // Stocker ce nouvel utilisateur dans le local storage

    let users = JSON.parse(localStorage.getItem("users")) || []

    const new_user = {
        prenom: first_name,
        nom: last_name,
        mot_de_passe: password
    }
    users.push(new_user)

    localStorage.setItem("users", JSON.stringify(users))
    message_erreur.style.color = "green"
    message_erreur.textContent = "Sign up success ! You will be redirected to Login Page in 3"

    setTimeout(hideshow, 3000)
    console.dir(users)
    signup_form.reset()
})