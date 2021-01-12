// 1.getArraysEqualElementsCount, которая принимает два аргумента - массивы, и возвращает количество одинаковых элементов


function getArraysEqualElementsCount(arr1, arr2) {
    let length1 = arr1.length;
    let result = 0;

    for (let i = 0; i < length1; i++) {
        if (arr1[i] === arr2[i]) {
            result++;
            }
        }
    console.log(result)
    }
getArraysEqualElementsCount([5, 6, 7 ,8], [5, 6, 7, 8]);





// 2.getArraysNotEqualElementsCount, которая принимает два аргумента - массивы, и возвращает количество  элементов,
//у которых нет пары
function getArraysNotEqualElementsCount(arr1, arr2) {
    let length1 = arr1.length;
    let result = 0;

    for (let i = 0; i < length1; i++) {
        if (arr1[i] !== arr2[i]) {
            result++;
        }
    }
    console.log(result)
}
getArraysNotEqualElementsCount([5, 6, 7, 8], [5, 6, 7, 8]);


// 3.getArraysEqualElementsCountHard, которая принимает два аргумента - массивы, и возвращает количество одинаковых элементов
//но теперь элементы массива могут идти не подряд, а как попало, но функция должна работать правильно ( написать цикл в цикле)

function getArraysEqualElementsCountHard(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        for(let k = 0; k < arr2.length; k++) {
            if (arr1[i] === arr2[k]) {
                delete arr1[i];
                delete arr2[k];
                console.log(arr1, arr2)
                count++;
                break;
            }

        }
    }
    return count;
}
console.log(getArraysEqualElementsCountHard([1, 2, 3, 'e', 'e', 'd', 'e', 'e', 'd'], ['a', 'b', 'c', 'd', 'e']));

// 4.getArrayElementsInARowAmount, которая возвращает количество раз, когда встретились два одинаковых элемента подряд.
function getArrayElementsInARowAmount(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        }
    }
    return count;
}
console.log(getArrayElementsInARowAmount([1, 2, 1, 2]))

// 5.getArrayElementByType, которая принимает 2 параметра - массив и строку, строка  указывает тип элементов, которые должны
//остаться в массиве

function getArrayElementByType(arr, str) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === str) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(getArrayElementByType([1, 'asd', 2, true, false, true, 3], 'boolean'))
console.log(getArrayElementByType([1, 'asd', 2, true, false, true, 3], 'string'))
console.log(getArrayElementByType([1, 'asd', 2, true, false, true, 3], 'number'))





