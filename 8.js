class str {
    static lower(low){
        return low.toLowerCase(); //1.toLowerCase
    }
    static upper(up){
        return up.toUpperCase(); //2.toUpperCase
    }
    static capitalize(capital){
         let word = capital.split(' ') ;
            for (let i = 0; i < word.length; i++){
                word[i] = word[i][0].toUpperCase() + word[i].substr(1);
            }
            console.log(word.join(' '));   
    }
    static reverse(balik){
        return balik.split('').reverse().join('') //4.Reverse

    }
    static contain(both){
        return both.includes('')           //5 Contain
    }
    static random(mix){
        return Math.random(); //6 Random Number
    }
    static slug(convert){
        return convert.toLowerCase().replace(/\&|,/g,'').split(' ').join('-'); //7. Slug
    }
    
    
    static count(hitung){
        return hitung.length    //8.Count
    }
    static countword(calculate){
        return calculate.split(' ').length      //9.Count word
    }
    static trim(cut){
        // return cut.substr(-335);
        return cut.split('').slice(0,100).join(''); //10. Add Trim
        
        
    }
    static cut(trim){
        return trim.split('').slice(0,30).join(''); // 11. Add TrimWord
    }
    
}
console.log(str.cut('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));
str.capitalize('saya ingin makan')