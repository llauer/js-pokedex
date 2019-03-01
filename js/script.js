//pokemon repository JS app.

//iife to contain the array.
var pokemonRepository = (function() {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }
  // //Messing around with the loading screen.
  // window.addEventListener('load', function() {
  //   setTimeout(function() {
  //     var load_screen = document.getElementById('load_screen');
  //     document.body.removeChild(load_screen);
  //   }, 1000);
  // });

  //function to add items to the dom.
  function addListItem(newPokemon) {
    var $ul = document.querySelector('ul');
    var $li = document.createElement('li');
    $ul.appendChild($li);

    //create buttons for li elements.
    var $button = document.createElement('button');
    $li.appendChild($button);

    $button.innerText = newPokemon.name;

    // the mouse click needs to call the showDetails function
    $button.addEventListener('click', function(event) {
      showDetails(newPokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          // //checking what is returned by
          // console.log(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = Object.keys(details.types);
      })
      .catch(function(e) {
        console.error(e);
      });
  }
  //this will print the pokemon information to the console.
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      console.log(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    // showDetails: showDetails,
    addListItem: addListItem
  };
})();

//load data with promise
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(currentPokemon) {
    pokemonRepository.addListItem(currentPokemon);
  });
});
