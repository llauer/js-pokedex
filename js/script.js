//pokemon repository JS app.

// let repository = [
//   {"name":"Bulbasaur", "height":"0.7 m", "type":["grass", "poison"]},
//   {"name":"Ivysaur", "height": "1 m", "type":["grass", "poison"]},
//   {"name":"Wartortle", "height":"1 m", "type":"water"}
// ];

var repository = [
  {
    name: 'Bulbasaur',
    height: 0.7,
    type: ['grass', 'poison']
  },
  {
    name: 'Ivysaur',
    height: 1,
    type: ['grass', 'poison']
  },
  {
    name: 'Wartortle',
    height: 1,
    type: ['water']
  },
  {
    name: 'Venusaur',
    height: 2,
    type: ['grass', 'poison']
  },
  {
    name: 'Charmander',
    height: 1,
    type: ['fire']
  },
  {
    name: 'Charmeleon',
    height: 1.1,
    type: ['fire']
  },
  {
    name: 'Paras',
    height: 0.3,
    type: ['grass', 'bug']
  },
  {
    name: 'Gastly',
    height: 1.3,
    type: ['ghost', 'poison']
  },
  {
    name: 'Golem',
    height: 1,
    type: ['rock', 'ground']
  }
  
];
for (i = 0; i < repository.length; i++){
  document.write(repository[i].name + " (height: " + repository[i].height + ")") ;
  if (repository[i].height >= 0.9) {
    document.write("  **Wow, that's big!**");
  }
  document.write("<br>");
};


//comeback to this later.
// repository.forEach(function(repo, i){
//   document.write(repository[i].name + repository[i].height + "</p>");
// });
// function printPokemon(repository){
//   console.log("**********************");
//   console.log(repository);
//   console.log("**********************");
// }
// repository.forEach(printPokemon);

// repository.forEach(function(repo){
//   if(repo > 0){
//     console.log("Thats a big one!");
//   }
// });
