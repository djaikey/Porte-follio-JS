const logo = document.getElementById('logo');


const optionsTitles = [
  { id: 1, name: 'À propos de moi' },
  { id: 2, name: "Mes compétences" },
  { id: 3, name: "Modèles de Projets" },
  { id: 4, name: "Formulaire de contact" }
];

function navOptionsTitle() {
  for (let i = 0; i < optionsTitles.length; i++) {
    const titleName = optionsTitles[i];
    const navOptions = document.getElementById('Nav-option')
    let option = document.createElement("a");
    option.id = "option";
    option.value = (titleName.id)
    option.innerText = (titleName.name);
    option.href = "#";
    option.addEventListener("click", (e) => {
      console.log(e.target.value);
    });
    navOptions.appendChild(option);

  }

}
navOptionsTitle();



logo.addEventListener("click", (e) => {
    
    console.log(e.target);
  });




