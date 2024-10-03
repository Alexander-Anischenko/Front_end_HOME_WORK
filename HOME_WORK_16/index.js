
// Создание объекта
const spaceship = {
    name: 'Rocinante',
    manufacturer: 'Martian space shipyard',
    crew:[
        {name: 'James Holden', position: 'Captain'}, 
        {name: 'Naomi Nagata', position: 'Chief Engineer'}, 
        {name: 'Amos Burton', position: 'Mechanic'}, 
        {name: 'Alex Kamal', position: 'Pilot'}, 
    ],
    maxSpeed: '≈15000 km/c',
};

// Получение переменных из объекта spaceship
let rociKey = Object.keys(spaceship)[0];
let shipName = spaceship.name;
/* console.log(shipName); */

let shipyardKey = Object.keys(spaceship)[1];
let shipManufacture = spaceship.manufacturer;
/* console.log(shipyardKey); */

// Переменные ключей экипажа
let keyThree = Object.keys(spaceship)[2];
console.log(keyThree);

let memberKeyOne = Object.keys(spaceship.crew[0])[0];
let memberKeyTwo = Object.keys(spaceship.crew[0])[1];
/* console.log(memberKeyOne); */

let crewMemberFirstName = spaceship.crew[0].name;
let crewMemberFirstPosition = spaceship.crew[0].position;

let crewMemberSecondName = spaceship.crew[1].name;
let crewMemberSecondPosition = spaceship.crew[1].position;

let crewMemberThirdName = spaceship.crew[2].name;
let crewMemberThirdPosition = spaceship.crew[2].position;

let crewMemberFourthName = spaceship.crew[3].name;
let crewMemberFourthPosition = spaceship.crew[3].position;

let kmcKey = Object.keys(spaceship)[3];
let shipMaxSpeed = spaceship.maxSpeed;
/* console.log(shipMaxSpeed); */

// Получение переменных из HTML для привязки к обьекту из JS
let spaceshipName = document.querySelector("#name-spaceship");
let spaceshipManufacture = document.querySelector("#manufacturer-spaceship");
let spaceshipCrew = document.querySelector("#crew-spaceship");
let spaceshipMaxSpeed = document.querySelector("#maxSpeed-spaceship");
let hideManufacturerDataButton = document.querySelector("#hide-button");
/* console.log(spaceshipName); */

// Привязка объекта к HTML
spaceshipName.children[0].textContent = `${rociKey}: ${shipName}`;
spaceshipManufacture.children[0].textContent = `${shipyardKey}: ${shipManufacture}`;
spaceshipCrew.children[0].children[0].textContent = `${memberKeyOne}: ${crewMemberFirstName}`;
spaceshipCrew.children[0].children[1].textContent = `${memberKeyTwo}: ${crewMemberFirstPosition}`;
spaceshipCrew.children[1].children[0].textContent = `${memberKeyOne}: ${crewMemberSecondName}`;
spaceshipCrew.children[1].children[1].textContent = `${memberKeyTwo}: ${crewMemberSecondPosition}`;
spaceshipCrew.children[2].children[0].textContent = `${memberKeyOne}: ${crewMemberThirdName}`;
spaceshipCrew.children[2].children[1].textContent = `${memberKeyTwo}: ${crewMemberThirdPosition}`;
spaceshipCrew.children[3].children[0].textContent = `${memberKeyOne}: ${crewMemberFourthName}`;
spaceshipCrew.children[3].children[1].textContent = `${memberKeyTwo}: ${crewMemberFourthPosition}`;
spaceshipMaxSpeed.children[0].textContent = `${kmcKey}: ${shipMaxSpeed}`;

const hideManufacturerData = () => {
    spaceshipManufacture.classList.add('hide')
};

hideManufacturerDataButton.addEventListener('click', hideManufacturerData);


