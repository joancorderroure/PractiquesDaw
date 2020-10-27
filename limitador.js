function limitador(){

    limit(10);

}


function limit(maximoCaracteres) {
    var elemento = document.getElementById("text").value;
    console.log(elemento);
    
    if(elemento.length >= maximoCaracteres ) {
      return false;
    }
    else {
      return true;
    }
  }
