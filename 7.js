let count = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`

let word = count.replace(/\n/g,' ').split(' ').length;

console.log(word);

// function count(str){
//     return str.split(``);
// }

// console.log(count(`Aku ingin begini
// Aku ingin begitu
// Ingin ini itu banyak sekali

// Semua semua semua
// Dapat dikabulkan
// Dapat dikabulkan
// Dengan kantong ajaib

// Aku ingin terbang bebas
// Di angkasa
// Hei… baling baling bambu

// La... la... la...
// Aku sayang sekali
// Doraemon

// La... la... la...
// Aku sayang sekali`));