// 1.getArraysEqualElementsCount, которая принимает два аргумента - массивы, и возвращает количество одинаковых элементов


function getArraysEqualElementsCount(arr1, arr2) {
    let length1 = arr1.length;
    let length2 = arr2.length;
    let info;

    for (let i = 0; i < length1; i++) {
        info = arr1[i];

        for (let j = 0; j < length2; i++){
            if (info == arr2[j]) {
                console.log('найдено совпадение' + info)
            }
        }
    }

}
console.log(getArraysEqualElementsCount(['кросовки', 'кеды','ботинки','угги','шлепки'], ['конверсы', 'броги', 'кросовки', 'шузы', 'топсвйдеры']))





// 2.getArraysNotEqualElementsCount, которая принимает два аргумента - массивы, и возвращает количество  элементов,
//у которых нет пары



// 3.getArraysEqualElementsCountHard, которая принимает два аргумента - массивы, и возвращает количество одинаковых элементов
//но теперь элементы массива могут идти не подряд, а как попало, но функция должна работать правильно ( написать цикл в цикле)



// 4.getArrayElementsInARowAmount, которая возвращает количество раз, когда встретились два одинаковых элемента подряд.

// 5.getArrayElementByType, которая принимает 2 параметра - массив и строку, строка  указывает тип элементов, которые должны
//остаться в массиве

// 6.Функция getPairsAmount, которая принимает 2 массива, и возвращает кол-во пар, которые есть в обоих массивах, порядок не важен