
var ordi1 = {
  model: 'acer',
  chip: 'intel i5'
};

var ordi2 = {
  model: 'hp',
  chip: 'intel i3000'
};

var showOrdi = function() {
  console.log('this:', this);
  // console.log("L'ordi est de la marque " + this.model + ' et son proc est un ' + this.chip);
  console.log(`L'ordi est de la marque ${this.model} et son proc est un ${this.chip}.`);
}

// ordi1.showOrdi();    // error
showOrdi();
//  showOrdi.call();        // c'est idem

console.log("%cNow we bind showOrdi to ordi1", 'color: red; background-color: white');
showOrdi.call(ordi1);
// showOrdi.call(ordi1, arg1, arg2); // = showOrdi.apply(ordi1, [arg1, arg2]);

console.log("%cNow we bind showOrdi to ordi2", 'color: red; background-color: white');
showOrdi.call(ordi2);
