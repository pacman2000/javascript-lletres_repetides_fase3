function mostrar(){
  var myName = Array.from("AMPARO");
  var newName = new Map();      
  var letter;

    //recorrem l'array
  for (i = 0; i < myName.length; i++){
    //guarda a "letter" el valor  del array indicat per la posició i
    letter = myName[i];    
    //si el valor de letter el troba dintre del map...   
    if(newName.has(letter) == true){
      //... llavors quantity recupera el valor (amb get) de letter i li suma 1
      var quantity = newName.get(letter) +1;
      //...i guarda (set) a newName els valors de letter i quantity
      newName.set(letter, quantity);
    }else{
      //...en cas contrari guarda a newName el valor de letter i 1
      newName.set(letter, 1);
    }   
  }

  console.log("Partim del nom: " + myName.join(""));
  console.log(newName);
}
