/*
Explication de la fonction foo :

La fonction foo permet de prendre plusieurs plages de valeurs en entrée pour avoir en sortie une version optimisée de ces plages de valeurs.
C'est à dire fusioner les plages de valeurs qui se chevauchent et retirer les plages de valeurs qui sont déjà compries dans d'autres. 
On se retrouve donc avec des plages de valeurs independantes les unes des autres et triées dans l'ordre croissant.

Par exemple : [[2,5], [14,20], [1,6], [3, 10]] va donner [[1,10], [14,20]]
*/


function isLowerNumberBetweenTheBoth(arr1, arr2) {
  if(arr1[0] >= arr2[0]) {
    if(arr1[0] <= arr2[1]) {
      return true;
    }
  }  
  return false;  
}

function isGreaterNumberBetweenTheBoth(arr1, arr2) {
  if(arr1[1] >= arr2[0]) {
    if(arr1[1] <= arr2[1]) {
      return true;
    }
  }  
  return false;  
}

function foo(array) {
  const finalArray = [];
  array.forEach((arr) => {
    if(finalArray.length === 0) {
      finalArray.push(arr);
    }
    else {
      let finalArrayChanged = false;
      finalArray.forEach((arrBis, index) => {
        if(!finalArrayChanged) {
          if(isLowerNumberBetweenTheBoth(arr, arrBis)) {
            if(arr[1] > arrBis[1]) {
              arrBis[1] = arr[1];
              finalArrayChanged = true;
            }
          }
          if(isGreaterNumberBetweenTheBoth(arr, arrBis)) {
            if(arr[0] < arrBis[0]) {
              arrBis[0] = arr[0];
              finalArrayChanged = true;
            }
          }
          if(isLowerNumberBetweenTheBoth(arr, arrBis) && isGreaterNumberBetweenTheBoth(arr, arrBis)) {
            finalArrayChanged = true;
          }
          else if (index === finalArray.length - 1) {
            finalArray.push(arr);
          }
        }
      })
    }
  })
  return finalArray.sort();
}

// Affichage des résulats - Ici, les exemples utilisés dans l'énoncé.
console.log(foo([[0, 3], [6, 10]]))
console.log(foo([[0, 5], [3, 10]]))
console.log(foo([[0, 5], [2, 4]]))
console.log(foo([[7, 8], [3, 6], [2, 4]]))
console.log(foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]]))