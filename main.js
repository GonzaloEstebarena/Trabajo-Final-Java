const container$$=document.querySelector('[class="container"]')
const ol$$= document.querySelector('[id="pokedex"]')
fetch ('https://pokeapi.co/api/v2/pokemon/?offset-0&limit=151')
.then (data=>data.json())
.then(pokemons =>{
    pintar(pokemons)
   
});

const pintar =(pokemons)=>{
   for (let i = 0; i < pokemons.results.length; i++) {
    const pokemon = pokemons.results[i];
     
    const div$$=document.createElement('div')
    
    fetch (`${pokemon.url}`)
    .then (res=>res.json())
    .then ( detalles => {console.log(detalles.sprites.front_default)
                 div$$.classList.add('tarjeta')
                 div$$.classList.add('card-horizontal')
                 div$$.classList.add('flip-card-inner')  
              div$$.innerHTML=`<img class=pokeball src="/assets/pokemon-master-ball.gif"></img><h2 class=b-nombre>${pokemon.name}</h2> 
               <img class=b-img src="${detalles.sprites.front_shiny}"></img>
              <h4 class=b-border > ${detalles.types[0].type.name}</h4>
             
              <h4 class=b-border2 >ID : ${detalles.id}</h4>
              <h4 class=b-border2 >Skill : ${detalles.abilities[0].ability.name}</h4>`;

            
            
                
            
         


    })

    



    ol$$.appendChild(div$$);
    }
    } 