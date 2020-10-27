function limit(maximoCaracteres) {
    var elemento = document.getElementById("text");
    console.log(elemento);

    if(elemento.value.length >= maximoCaracteres ) {
      return false;
    }
    else {
      return true;
    }
  }