function byId(elementId) {
  if (typeof elementId !== 'string') {
    console.log('Erreur : elementId doit être une chaine de caractère');
    return null;
    }
  return document.getElementById( elementId);

}

function byClass(className, atIndex){
  var elements = document.getElementsByClassName('elementId');
  var tElements = Array.prototype.slice.call(elements);
  return (atIndex !== null ) ? tElements[atIndex] : tElements;
}

function byTag(){

}

function addClass(){

}

function removeClass(){

}
