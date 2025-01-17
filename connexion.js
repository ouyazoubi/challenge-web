const submit = document.getElementById("connexion");
const mdp = document.getElementById("password");
const mail = document.getElementById("username");

submit.addEventListener("click", (event) => {
  event.preventDefault();

  if (mail.value === "") {
    alert("Veuillez remplir le champ de l'identifiant.");
  } else if (mdp.value === "") {
    alert("Veuillez remplir le champ du Mot de Passe.");
  } else {
    alert("Connexion réussie.");
    window.location.href = "index.html";
  }
});
