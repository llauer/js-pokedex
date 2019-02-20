//pokemon repository JS app.

//iife to contain the array. 
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

})();

//loop through pokemonRepository and return name and height to the page.
pokemonRepository.getAll().forEach(function (repository) {
  //comment out document.write
  // document.write("<br>" + repository.name + " (height: " + repository.height + ")" + "  ");

  //check if height is larger than #.
  if (repository.height >= 0.9) {
    //comment out document.write
    //document.write(" Wow, Thats big!")

  }
});