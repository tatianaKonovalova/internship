//Task 1 (Meeting)
let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
function sortList(arr) {
    let newArr = arr.toUpperCase().split(';');
    let reversedArr = newArr.map( el => el.split(':').reverse().join(':')); // поменять местами имя с фамилией
    let sortedArr = reversedArr.sort(); // отсортировать по алфавиту фамилию и имя
    let finalArr = sortedArr.reduce( (acc, name) => (
        acc += `(${name.split(':')[0]}, ${name.split(':')[1]})` // здесь через сплит отделяется и берется первая часть имени до запятой, потом добавляется запятая и через сплит берется вторая часть имени после запятой
    ), '');
    return finalArr;
}
console.log(sortList(s));

//Task 2 (Find a Chair)
function meeting(arr, need) {
    if (!need) return 'Game On';
    let spareChairs = []; //результирующий массив
    let totalSpareChairs = ''; // общее количество дополнительных стульев
    for (let i = 0; i < arr.length; i++) {
        if (need > totalSpareChairs) {
            let stools = arr[i][1] - arr[i][0].length; //записываем в переменную разницу между количеством стульев в переговорке и количество людей
            spareChairs.push( stools > 0 ? stools : 0); //добавляем это число в результирующий массив, если это число меньше 0, то добавляется 0
            if (stools > 0) totalSpareChairs = +totalSpareChairs + stools; // обновляем переменную общее кол-во доп.стульев
        } else if (need === totalSpareChairs) { //если переменная need уже равна общему количеству дополнительных стульев, цикл возвращает результирующий массив
            return spareChairs;
        }
    }
    if (totalSpareChairs < need) { // если общее количество дополнительных стульев после прохождения по всем переговоркам меньше, чем было нужно
        return 'Not enough!';
    }
    return spareChairs;
} 
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5));
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));