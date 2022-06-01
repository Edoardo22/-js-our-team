//Definiamo un array di oggetti che rappresentano i membri del team.
//Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

let team = [
    {
        name: "Gianluca",
        role: "Front-End Developer",
        photo: "img/new-team-member-01.jpg"
    },
    {
        name: "Francesco",
        role: "Back-End Developer",
        photo: "img/new-team-member-02.jpg"
    },
    {
        name: "Marco",
        role: "Front-End Developer",
        photo: "img/new-team-member-03.jpg"

    },
    {
        name: "Francesco",
        role: "Back-End Developer",
        photo: "img/new-team-member-04.jpg"
    }
];

console.table(team);

let teamContainer = document.getElementById("team-container");
let teamCard = document.createElement("div");
let cardImage = document.createElement("div");
let cardImg = document.createElement("img");
let cardText = document.createElement("div");
cardImg.setAttribute("src", "img/new-team-member-01.jpg");
cardImage.classList.add("card-image");
teamCard.classList.add("team-card");
cardImage.classList.add("card-text");
teamContainer.append(teamCard);
teamCard.append(cardImage);
cardImage.append(cardImg);
teamCard.append(cardText);



