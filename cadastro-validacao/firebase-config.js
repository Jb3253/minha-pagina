import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHe7C_uTXrBRtZwsL1jCF8qEk72gl-5sw",
  authDomain: "cadastro-validacao.firebaseapp.com",
  projectId: "cadastro-validacao",
  storageBucket: "cadastro-validacao.firebasestorage.app",
  messagingSenderId: "1010629727399",
  appId: "1:1010629727399:web:9ccb4e4105f839cc79b782",
  measurementId: "G-6S8RHL3E8R"
};

// Inicializando Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Cadastro de usuário no Firebase
document.getElementById("cadastroForm").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    createUserWithEmailAndPassword(auth, email, senha)
        .then(() => {
            alert("Cadastro realizado com sucesso!");
        })
        .catch((error) => {
            alert("Erro no cadastro: " + error.message);
        });
});
