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

let word = count.replace(/\n/g,'').split(' ').length;

console.log(word);

let mystring = "Hello, World!"
let myregex = /Hello/;
let result = myregex.test(mystring);
console.log(result)

let waldoshiding = "Somewhere Waldo is hiding in this text";
let waldoregex = /searh/;
let result1 = waldoregex.test(waldoshiding);
console.log(result1)
//It will be false

let patstring = "James has a pet cat";
let patregex = /dog|cat|fish|bird/;
let result2 = patregex.test(patstring);
console.log(result2)
//It will be true

//Match
let extstring = "Extract the word 'coding' from this string"
let codingregex = /coding/
let result3 = extstring.match(codingregex);
console.log(result3)

let teststr = "Repeat, Repeat, Repeat";
let ourregex = /Repeat/g;
let result4 = teststr.match(ourregex);
console.log(result4);

let twinklestar = "Twinkle, twinkle, little star";
let starregex = /twinkle/ig;
let result5 = twinklestar.match(starregex);
console.log(result5)

let humstr = "i will hum a song"
let hugstr = "please hug me"
let hugrgx = /hu./
let result6 = humstr.match(hugrgx) //return ["hum"] 
let result7 = hugstr.match(hugrgx) //return ["hug"]
console.log(result6)
console.log(result7)

let examplestr = "let's have fun with regural expression"
let unrgx = /.un/; //return true if i change /.z/ return false because there is no z word in the sentence
let result8 = unrgx.test(examplestr);
console.log(result8);

let quotesample = "Beware of bugs in the above code"
let vowelrgx = /[aiueo]/ig;
let result9 = quotesample.match(vowelrgx)
console.log(result9)

// Match letter of alphabets
let quotesample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetsrgx = /[a-z]/ig
let result10 = quotesample1.match(alphabetsrgx);
console.log(result10)