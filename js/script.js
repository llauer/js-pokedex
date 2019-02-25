//pokemon repository JS app.

//iife to contain the array.
var pokemonRepository = (function() {
  var pokemonList = [
    {
      name: "Bulbasaur",
      height: 0.7,
      type: ["grass", "poison"]
    },
    {
      name: "Ivysaur",
      height: 1,
      type: ["grass", "poison"]
    },
    {
      name: "Wartortle",
      height: 1,
      type: ["water"]
    },
    {
      name: "Venusaur",
      height: 2,
      type: ["grass", "poison"]
    },
    {
      name: "Charmander",
      height: 1,
      type: ["fire"]
    },
    {
      name: "Charmeleon",
      height: 1.1,
      type: ["fire"]
    },
    {
      name: "Paras",
      height: 0.3,
      type: ["grass", "bug"]
    },
    {
      name: "Gastly",
      height: 1.3,
      type: ["ghost", "poison"]
    },
    {
      name: "Golem",
      height: 1,
      type: ["rock", "ground"]
    }
  ];

  function add(pokemon) {
    pokemon.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }
  //this is defined but not read currently.
  function showDetails(pokemon) {
    console.log("pokemon");
  }

  //function to add items to the dom.
  function addListItem(pokemonList) {
    var $ul = document.querySelector("ul");
    var $li = document.createElement("li");
    $ul.appendChild($li);

    //create buttons for li elements.
    var $button = document.createElement("button");
    $li.appendChild($button);

    //could i use innerHtml here.
    $button.innerText = pokemonList.name;

    //fix button styles.

    //would it be better to assign variable here
    $button.addEventListener("click", function(event) {
      console.log(pokemonList.name + "  height: " + pokemonList.height);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

//loop through pokemonRepository and return name to the page.

pokemonRepository.getAll().forEach(function(currentPokemon) {
  pokemonRepository.addListItem(currentPokemon);
});
