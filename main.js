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



for (let i = 0; i < team.length; i++) {
    let teamContainer = document.getElementById("team-container");
    let teamCard = document.createElement("div");
    let cardImage = document.createElement("div");
    let cardImg = document.createElement("img");
    let cardText = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = team[i].name;
    let p = document.createElement("p");
    p.innerHTML = team[i].role;

    cardImg.setAttribute("src", team[i].photo);
    cardImage.classList.add("card-image");
    teamCard.classList.add("team-card");
    cardText.classList.add("card-text");
    teamContainer.append(teamCard);
    teamCard.append(cardImage);
    cardImage.append(cardImg);
    teamCard.append(cardText);
    cardText.append(h3, p);
}
