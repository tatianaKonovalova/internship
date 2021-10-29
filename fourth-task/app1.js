// Mission: Hidden Message
let message = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.';

function decoder(message) {
    let msg = message;
    // удаляем все знаки пунктуации, кроме апострофа.
    const deletedPunctuationMarks = msg.replaceAll(/[,?"\-]/ig, '');
    // получаем первое предложение.
    const firstSentence = deletedPunctuationMarks.split('.')[0]; 
    // разбиваем первое предложение на отдельные элементы для подсчета длины каждого слова.
    let arr = firstSentence.split(' ');
    // массив с длинами каждого слова.
    let theLength = []; 
    for (let i = 0; i < arr.length; i++) {
        if (/'/.test(arr[i])) { // если в слове содержится апостроф, то его общая длина сокращается на 1 элемент для получения правильной длины
            theLength.push(arr[i].length - 2);
        } else {
            theLength.push(arr[i].length - 1);
        }
    }
    // получаем массив всех предложений.
    let allSentences = deletedPunctuationMarks.split('. ');
    // удаляем первое предложение. 
    allSentences.shift();
    //получили двумерный массив с каждым отдельным словом каждого предложения. 
    let words = []; 
    for (let i = 0; i < allSentences.length; i++) {
        words.push(allSentences[i].split(' '));
    }
    // записываем финальное предложение в массив
    let finalSentence = []; 
    for (let i = 0, k = 0; i < words.length, k < theLength.length; i++, k++) {
        finalSentence.push(words[i][theLength[k]]);
    }
    //преобразование финальной строки
    let finalString = finalSentence.join(' ');
    finalString = finalString.replace(/$/g, '.');
    finalString = finalString[0].toUpperCase() + finalString.slice(1);
    return finalString;
}
decoder(message);