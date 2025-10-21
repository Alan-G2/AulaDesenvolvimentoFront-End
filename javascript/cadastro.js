document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Campos obrigatórios
    const tipo = document.getElementById("tipo").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const documento = document.getElementById("documento").value.trim();
    const data = document.getElementById("data").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const email = document.getElementById("email").value.trim();
    const endereco = document.getElementById("endereco").value.trim();

    // Verificação
    if (!tipo || !nome || !documento || !data || !celular || !email || !endereco) {
      alert("⚠️ Preencha todos os campos obrigatórios antes de continuar.");
      return;
    }

    // Marca que o cadastro foi feito
    localStorage.setItem("cadastroRealizado", "true");

    alert("✅ Cadastro realizado com sucesso!");

    // Redireciona para o início
    window.location.href = "../index/index.html";
  });
});
