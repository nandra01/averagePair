const averagePair = (arr, expectedValue) => {
    let firstValue = 0;
    let secondValue = arr.length -1;

    for (let i = 0; i <= arr.length; i++) {
      for (let j = 0; j <= arr.length; j++) {
          if (arr[i] < arr[j]) {
              let average = (arr[firstValue] + arr[secondValue]) / 2;
              //console.log(arr[firstValue]);
              //console.log(arr[secondValue]);
              if (average === expectedValue) {
                  return true;
              }
              else if (average > expectedValue) {
                  secondValue--;
              }
              else {
                  firstValue++;
              }
          } 
      } 
      return false
    }
}

console.log(averagePair([-1,0,3,4,5,6], 4.1)); //false
console.log(averagePair([1,2,3], 2.5)); //true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)); //true