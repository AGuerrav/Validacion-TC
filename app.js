do { //es para que no se salte ese paso
  var numTc= prompt("Ingresa tu número de Tarjeta de Credito");
  if (numTc !=="") /*&& (typeof numTc !== "string") )*/{ //si la frase es distinta a vacio
    isValidCard(numTc);

  }else {
    alert("error, debes ingresar un número");
  }
  }
  while (numTc === ""); //si la frase esta vacia vuelve a preguntar

function isValidCard(numTc){
  var strToDig = Array.from(numTc); ////me separa endigitos los numeros pero en string (pone comas a cada elemento del str)
  console.log(strToDig); ["3", "4", "5"]
  //paso los digitos str a digitos numeros
  var finalArray = []; //array vacio para crear mi nuevo array
  for ( var i = 0; i< strToDig.length; i++){ //recorro los elementos de mi array para que sean transformados en numeros
      finalArray.push(parseInt(strToDig[i])); //a cada valor de i lo transformo en numero, y lo pusheo a finalArray
      //console.log(finalArray); [3,4,5]
// crear array inverso desde mi array recien obtenido
    }
      var revArray= finalArray.reverse();
      //console.log(revArray) ; [5,4,3]
              //multiplico x dos las posiciones pares para eso
        //paso el array a str
        //var newArrayToStr = revArray.toString();
        //console.log(newArrayToStr);
        var segundoNum = [] //obtengo los numeros pares para multiplicar
  for (var i=0;i < revArray.length ;i+=2){
          segundoNum.unshift(revArray[i]);
          //console.log(segundoNum);
        }

         var sumImpar = 0;
         var sumPar= 0;
         if (revArray[i]%2 !== 0){
           sumImpar += revArray[i];

         }else if (((revArray[i]%2)===0) {

           }
         }
         }


             //secNum.unshift((revArray[i])*2);
             //console.log(secNum);// [2, 4, 6, 8]

             //poner el 10< y bla bla

               /*if ((suma % 10) == 0){
                alert("Número de tarjeta correcto");
               } else {
                alert("El número de tarjeta no es válido");
               }
             }*/

        }



    }
}
