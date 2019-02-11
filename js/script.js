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
    type: 'water'
  }
];
repository.forEach(function(repo, i){
  document.write(repository[i].name + repository[i].height + "</p>");
});
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

//   console.log("Pokemon " + pokemonRepo);
// });
//if is not working
//spacing is not working.
// for (i = 0; i < repository.length; i++){
//   document.write(repository[i].name, + "  " + repository[i].height + "  " + "</p>");

//   if (repository[i].height >= 0.9){
//     document.write("This is a big one!    <br>")
//   }
// }



// for (i = 0; i < repository.length; i++){
//   console.log(repository);
// }
// for(let i = 0; i < repository.length; i++){

//   document.write(repository[i]);
// }



// for (i=0; i < repository.length; i++){
//   document.write("pokemon" + i + repository[i] + "<br >");
//   document.write(repository.join(" <br>"));
// }


//starting over!!!
// var isBig = "Thats a big one!";

// for (var i = 0; i < repository.length; i++) {
//  document.write(repository.name + "<br>");
// }

// console.log(repository.name);
// repository.forEach(function(repo) {
  
//     for(var prop in repo){
//       if(repo){
//         console.log("Thats a big one!")
//       }
//         // document.write('\n')
   
//         document.write(prop + ':  ' + repo[prop] );
//         document.write("<br><br>")
//         //   if (repository[1]) 0.7; {
//         //    document.write("Thats a big one")
//         // }
       
//   }

 
// });
