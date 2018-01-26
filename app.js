do { //  es para que no se salte ese paso
  var numTc = prompt('Ingresa tu número de Tarjeta de Credito');
  if (numTc !== '') /* && (typeof numTc !== 'string') )*/{ //  si la frase es distinta a vacio
    isValidCard(numTc);
  } else {
    alert('error, debes ingresar un número');
  }
}
while (numTc === ''); // si la frase esta vacia vuelve a preguntar

function isValidCard(numTc) {
  var strToDig = Array.from(numTc); // me separa endigitos los numeros pero en string (pone comas a cada elemento del str)
  // console.log(strToDig); ['3', '4', '5']
  // paso los digitos str a digitos numeros
  var finalArray = []; // array vacio para crear mi nuevo array
  for (var i = 0; i < strToDig.length; i++) { // recorro los elementos de mi array para que sean transformados en numeros
    finalArray.push(parseInt(strToDig[i])); // a cada valor de i lo transformo en numero, y lo pusheo a finalArray
    // console.log(finalArray); [3,4,5]
    //  crear array inverso desde mi array recien obtenido
  }
  var revArray = finalArray.reverse();
  //  console.log(revArray) ; // [5,4,3]
  for (var i = 1 ; i < revArray.length; i += 2) { //  ubico los numeros en posicion par
    // console.log(revArray); // [4]
    var doubleNum = revArray[i] * 2;
    if (doubleNum >= 10) { //  si son mayores o iguales que 10, sumo sus digitos
      num1 = doubleNum % 10;
      num2 = parseInt(doubleNum / 10);
      doubleNum = num1 + num2;
      revArray[i] = doubleNum;
    } else {
      revArray[i] = doubleNum;// Modifico el número en su misma posición
    }
  }
  var addArray = 0;
  for (var i = 0; i < revArray.length; i++) { // sumar todos los elementos de  un array
    addArray += revArray[i];
  }
  if (addArray % 10 === 0) { // Si el resto de la suma es 0, la tarjeta es válida
    return alert('Tu tarjeta de crédito es válida! ');
  } else {
    return alert('Tu tarjeta de crédito NO es válida!! ');
  }
}
