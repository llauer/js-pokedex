//pokemon repository JS app.

// let repository = [
//   {"name":"Bulbasaur", "height":"0.7 m", "type":["grass", "poison"]},
//   {"name":"Ivysaur", "height": "1 m", "type":["grass", "poison"]},
//   {"name":"Wartortle", "height":"1 m", "type":"water"}
// ];

var repository = [
  {
    name: 'Bulbasaur',
    height: '0.7m',
    type: ['grass', 'poison']
  },
  {
    name: 'Ivysaur',
    height: '1m',
    type: ['grass', 'poison']
  },
  {
    name: 'Wartortle',
    height: '1m',
    type: 'water'
  }
];
repository.forEach(function(repo) {
  
    for(var prop in repo){
        document.write('\n')
   
        document.write(prop + ': ' + repo[prop]);
        document.write("<br><br>")
  }
 
});