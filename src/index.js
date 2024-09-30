
//console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
//console.log(data[0]);



const cardContainer = document.querySelector(".cards");

function renderCards(){
    cardContainer.innerHTML ='';

    data.forEach(data => {
       console.log(data);
        const li = document.createElement('li');
 li.classList.add('card');
 
 const h2 = document.createElement('h2');
 h2.classList.add('card--title');
 h2.textContent = data.name;

 const img = document.createElement('img');
 img.classList.add('card--img');
console.log(data.sprites)
 img.src = data.sprites.front_default
 img.width =256;

 const ul = document.createElement('ul');
 ul.classList.add('card--text');
 
 
const stats = [
    
    `HP: ${data.stats[0].base_stat}`,
    `ATTACK: ${data.stats[1].base_stat}`,
    `DEFENSE: ${data.stats[2].base_stat}`,
    `SPECIAL-ATTACK: ${data.stats[3].base_stat}`,
    `SPECIAL-DEFENSE: ${data.stats[4].base_stat}`,
    `SPEED: ${data.stats[5].base_stat}`,
    `GAMES: ${data.game_indices[0].version.name}`

    

];

stats.forEach(stat => {
    const statLi = document.createElement('li');
    statLi.textContent = stat;
    ul.appendChild(statLi);
});


li.appendChild(h2);
li.appendChild(img);
li.appendChild(ul);

cardContainer.appendChild(li);
});
}
renderCards(data);


/*const pokemon = {
    name: "Bulbasaur",
    hp: 45,
    attack: 49,
    defense: 49,
    specialAttack: 65,
    specialDefense: 65,
    speed: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
};

 const li = document.createElement('li');
 li.classList.add('card');
 
 const h2 = document.createElement('h2');
 h2.classList.add('card--title');
 h2.textContent = pokemon.name;

 const img = document.createElement('img');
 img.classList.add('card--img');
 img.src = pokemon.image;
 img.width =256;

 const ul = document.createElement('ul');
 ul.classList.add('card--text');

const stats = [
    `HP: ${pokemon.hp}`,
    `ATTACK: ${pokemon.attack}`,
    `DEFENSE: ${pokemon.defense}`,
    `SPECIAL-ATTACK: ${pokemon.specialAttack}`,
    `SPECIAL-DEFENSE: ${pokemon.specialDefense}`,
    `SPEED: ${pokemon.speed}`
];

stats.forEach(stat => {
    const li = document.createElement('li');
    li.textContent = stat;
    ul.appendChild(li);
});
li.appendChild(h2);
li.appendChild(img);
li.appendChild(ul);


cardContainer.appendChild(li);


function renderCards() {
    data.forEach((card) => {
      const li = renderItem(card);
      storeList.appendChild(li);
    });

}

function renderItem(cardItem) {
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    const ul = document.createElement("ul");
    
    //const img = document.createElement("img");
   // img.setAttribute("src", `./assets/icons/${}.svg`);
    img.setAttribute("src", `./PokeAPI/sprites/master/sprites/pokemon/other/${cardItem.name}/1.png`);

  
  
    
  
    
    li.appendChild(li);
    li.appendChild(h2);
    li.appendChild(ul)

  
    return li;
  }
  
  renderItem();
*/

