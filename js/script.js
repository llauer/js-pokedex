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

  //display modal with name height and image of the pokemon.

  var $modalContainer = document.querySelector('#modal-container');

  function showModal(item) {
    // Clear all existing modal content
    $modalContainer.innerHTML = '';

    var modal = document.createElement('div');
    modal.classList.add('modal');

    // Add the new modal content
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    var titleElement = document.createElement('h1');
    titleElement.innerText = item.name;

    //display image of the pokemon
    var imageElement = document.createElement('img');
    imageElement.setAttribute('src', item.imageUrl);

    var contentElement = document.createElement('p');
    contentElement.innerText = 'Height: ' + item.height;

    // var contentElement1 = document.createElement('p');
    // contentElement.innerHTML = 'URL ' + detailsUrl;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    $modalContainer.appendChild(modal);

    $modalContainer.classList.add('is-visible');
  }
  // hide the modal
  function hideModal() {
    $modalContainer.classList.remove('is-visible');
  }

  // document.querySelector('#show-modal').addEventListener('click', () => {
  //   showModal('Modal title', 'This is the modal content!');
  // });

  //if the user presses the ESC key the modal will close.
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  //close the modal if the user clicks outside of the container.
  $modalContainer.addEventListener('click', (e) => {
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      showModal(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    addListItem: addListItem,
    showModal: showModal,
    hideModal: hideModal
  };
})();

//load data with promise
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(currentPokemon) {
    pokemonRepository.addListItem(currentPokemon);
  });
});
