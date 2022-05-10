



/** Пятая задача 

let month = {
    1: 'январь',
    2: 'февраль',
    3: 'март',
    4: 'апрель',
    5: 'май',
    6: 'июнь',
    7: 'июль',
    8: 'август',
    9: 'сентябрь',
    10: 'октябрь',
    11: 'ноябрь',
    12: 'декабрь'
}

function getMonth(numb){
    if(numb == 1){
        console.log(month[1])
    };
    if(numb == 2){
        console.log(month[2])
    };
    if(numb == 3){
        console.log(month[3])
    };
    if(numb == 4){
        console.log(month[4])
    };
    if(numb == 5){
        console.log(month[5])
    };
    if(numb == 6){
        console.log(month[6])
    };
    if(numb == 7){
        console.log(month[7])
    };
    if(numb == 8){
        console.log(month[8])
    };
    if(numb == 9){
        console.log(month[9])
    };
    if(numb == 10){
        console.log(month[10])
    };
    if(numb == 11){
        console.log(month[11])
    };
    if(numb == 12){
        console.log(month[12])
    };
}

getMonth(5)

module.exports = month
*/


/** Третья задача
function repeatWord(word, count) {
    let a = word.repeat(count);
    return a 
}
repeatWord('po', 5)
module.exports = repeatWord
  */





/**Вторая задача
function getPercent(percent, number) {
    let a = (percent / number) * 100;
    return a
}
getPercent(10, 200)
module.exports = getPercent
 */
/** Функция с интервалом
function from(from){
    let a = from;
    let b = setInterval(function(){
        console.log(a);
        if(a == 1){
            clearInterval(b);
            
        }a--
    }, 1000)
}
from(5)
module.exports = from
  */