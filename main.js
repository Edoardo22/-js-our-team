//Definiamo un array di oggetti che rappresentano i membri del team.
//Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

let team = [
    {
        name: "Gianluca",
        role: "Front-End Developer",
        photo: "...img/new-team-member-1.jpg"
    },
    {
        name: "Francesco",
        role: "Back-End Developer",
        photo: "...img/new-team-member-2.jpg"
    },
    {
        name: "Marco",
        role: "Front-End Developer",
        photo: "...img/new-team-member-3.jpg"

    },
    {
        name: "Francesco",
        role: "Back-End Developer",
        photo: "...img/new-team-member-4.jpg"
    }
];

console.table(team);

let teamContainer = document.getElementById("team-container");
let teamCard = document.createElement("div");
let cardImage = document.createElement("div");
let cardImg = document.createElement("img");
cardImg.setAttribute("src", "../img/new-team-member-1.jpg");
cardImage.classList.add("card-image");
teamCard.classList.add("team-card");
teamContainer.append(teamCard);
teamCard.append(cardImage);
cardImage.append(cardImg);


