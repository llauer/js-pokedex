//pokemon repository JS app.
//adjust me
//iife to contain the array.
var pokemonRepository = (function() {
	var repository = [];
	var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

	function add(pokemon) {
		repository.push(pokemon);
	}

	function getAll() {
		return repository;
	}

	function showDetails(item) {
		pokemonRepository.loadDetails(item).then(function() {
			console.log(item);
		});
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

		$button.addEventListener('click', function(event) {
			console.log(newPokemon.name + '  height: ' + newPokemon.height);
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

	return {
		add: add,
		getAll: getAll,
		loadList: loadList,
		loadDetails: loadDetails,
		showDetails: showDetails,
		addListItem: addListItem
	};
})();

//load data with promise
pokemonRepository.loadList().then(function() {
	pokemonRepository.getAll().forEach(function(currentPokemon) {
		pokemonRepository.addListItem(currentPokemon);
	});
});
