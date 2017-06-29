console.log('js');

function addSomeone() {
  console.log('in addSomeone');
  var randInt = Math.floor(Math.random() * 100);
  console.log(randInt);
  var hereString = '';
  for (var i = 0; i < randInt; i++) {
    hereString += ' here';
  }
  console.log('Hogan was' + hereString);
}
