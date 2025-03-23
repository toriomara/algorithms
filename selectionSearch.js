let arr = [2, 3, 6, 90, 34, 2, 5, 39, 64, 4, 7, 0, 24, 68]

let count = 0

function selectionSort(arr) { 
  for(let i = 0; i < arr.length; i++) {
      // Поиск наименьшего числа в правой части массива
      let min = i;
      for(let j = i; j < arr.length; j++) {
          if(arr[j] < arr[min]) {
              min=j; 
          }
          count += 1;
       }
       if (min !== i) {
           // Замена элементов
           let tmp = arr[i]; 
           arr[i] = arr[min];
           arr[min] = tmp;      
      }
  }
  return arr;
}

console.log(selectionSort(arr))
console.log('count = ', count)
