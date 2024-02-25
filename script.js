// score sistem in if else//
let age = 60;

if(age > 86){
    console.log('A');
} else if( age >61){
    console.log('B');
} else if( age > 50){
    console.log('C');
} else if(age <50) {
  console.log('F');
} 

// meva narxlari in if else//
let meva = 'behi'

if( meva === 'olma'){
    console.log('10000');
} else if( meva === 'nok'){
    console.log('12000');
} else if ( meva === 'tarvz'){
    console.log('20000');
} else{
    console.log('unday meva yoq');
}
// 3ga bo'linadigan sonla //
let num = 9;

if (num% 3 === 0 && num% 5 ===0){
    console.log('3 and 5ga bolinadiganla');
} else if ( num% 3 === 0) {
    console.log('3ga bolinadiganla');
}else if ( num% 5 === 0) {
    console.log('5ga bolinadiganla');
}

// ifga o'zgartirish //
// let browser = 'Firefox';
// switch (browser) {
//     case 'Edge':console.log('You have got the Edge!'); break
//     case 'Chrome': console.log('Okey we support these browsers too');break
//     case 'Firefox': console.log ('Okey we support these browsers too');break
//     case 'Safari': console.log ('Okey we support these browsers too');break
//     case 'Opera': console.log('Okey we support these browsers too');break
//     default: console.log('We hope that this page looks ok!');
//     }



let browser = 'Edge'

if(browser === 'Edge'){
    console.log('You have got the Edge');
} else if ( browser === 'Chrome'){
    console.log('Okey we support these browsers too');
} else if ( browser === 'Firefox') {
    console.log('Okey we support these browsers too');
}else if ( browser === 'Safari') {
    console.log('Okey we support these browsers too');
}else if (browser === 'Opera'){
    console.log('Okey we support these browsers too');
} else
{console.log('We hope that this page looks ok!');}


// ternary ga o'girish //

let login = 'Employee'

login === 'Employee' ? console.log('Hello') : console.log('No login') && login === 'Director' ? console.log('Greetings') : console.log('No login') && login === '' ? console.log('') : console.log('No login');
