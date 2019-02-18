//pokemon repository JS app.

// let repository = [
//   {"name":"Bulbasaur", "height":"0.7 m", "type":["grass", "poison"]},
//   {"name":"Ivysaur", "height": "1 m", "type":["grass", "poison"]},
//   {"name":"Wartortle", "height":"1 m", "type":"water"}
// ];

//iife 
var pokemonRepository = (function () {

  var repository = [{
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


  function add(pokemon) {
    repository.push(pokemon);
  }



  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll
  };

}());


pokemonRepository.getAll().forEach(function (repository) {
  document.write(repository.name + " (height: " + repository.height + ")");
  if (repository.height >= 0.9) {
    document.write(" Wow, Thats big!" + '<br>')
  }
});


// Object.keys(pokemonRepository).forEach(function (key) {

//   console.log(key, pokemonRepository[key]);
//   document.write(pokemonRepository.name);


// });
// //example from lesson notes
// Object.keys(pokemonRepository).forEach(function () {
//   // document.write(pokemonRepository.getAll());
//   document.write(pokemonRepository.name + " (height: " + pokemonRepository.height + ")");
// });






// Object.keys(pokemonRepository);

// Object.keys(pokemonRepository).forEach(function (key) {
//   document.write(key); // The object key
//   document.write(pokemonRepository[key]); // The object value
// });


// var pokemonName = Object.keys(pokemonRepository).filter(function (name) {

//   return pokemonRepository[name];
// });

// Logs ["pokemon names"]
// console.log(pokemonRepository.getAll());
//not working
// document.write(pokemonRepository.getAll());








// pokemonRepository.forEach(myFunction);

// function myFunction(item, index) {
//   console.log(item);
// }

// hamzas example
// pokemonRepository.forEach(function (IamTheCurrentObjectInThisIteration) {
//   console.log(IamTheCurrentObjectInThisIteration.name);
// });

// pokemonRepository.forEach(function (pokemon) {
//   console.log(pokemon);
// });



// Object.entries(pokemonRepository).forEach(function (property) {
//   document.write(property.name + ': ' + pokemonRepository[property.height] + '<br>');

// });


// original code
// document.write(repository[i].name + " (height: " + repository[i].height + ")") ;
// if (repository[i].height >= 0.9) {
//   document.write("  **Wow, that's big!**");



//trial and error
// Object.keys(pokemonRepository).forEach(function (key) {
//       document.write(key[i].name + " (height: " + key[i].height + ")");

//       });




// [pokemonRepository].forEach(function (pokemon) {
//   document.write(pokemon + ': ' + pokemon.name + '<br>');

// });

// Object.keys(pokemonRepository).forEach(function (property) {
//   document.write(property + ': ' + pokemonRepository[property] + '<br>');
// });



// pokemonRepository.forEach(function (pokemon, i) {
//   var x = pokemon.name;
//   console.log(x);
// });


// pokemonRepository.forEach((pokemon, index) => {
//   console.log(pokemon);
// });
// Object.keys(pokemonRepository).forEach(function (key) {
//   document.write(pokemonRepository[key]);
// });


// pokemonRepository.forEach(function (current_value) {
//   console.log(current_value);

// });



// pokemonRepository.array.forEach(function (pokemon, i) {
//   document.write(pokemonRepository.name + " (height: " + pokemonRepository.height + ")");
//   if (pokemon.height >= 0.9) {
//     document.write("  **Wow, that's big!**");
//   }


//object.keys again

// Object.keys(pokemonRepository).forEach(function (pokemon) {
//   document.write(pokemon + ': ' + pokemon[name] + '<br>');
// });
// document.write(pokemonRepository[pokemon].name + " (height: " + pokemonRepository[pokemon].height + ")");
// if (pokemonRepository[pokemon].height >= 0.9) {
//   document.write("  **Wow, that's big!**");
// }




// pokemonRepository.forEach(element => {
//   console.log(element);
// });

// pokemonRepository.forEach(function (stats) {
//   console.log(stats);
//   document.write(stats.name + " (height: " + stats.height + ")");
//   if (stats.height >= 0.9) {
//     document.write("  **Wow, that's big!**");
//   };
// });
// Object.keys(repository).forEach(function (pokemon) {




// this just ends up showing the first item. Also need to figure out how to change colors.
// else if (repository[i].type = 'grass'){
//   console.log("I am grass")
// };
// document.write("<br>");


// console.log(repository[0]);




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