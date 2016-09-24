function pigLatin(){

  var module = {};

  module.pigWord = function(word){
    if(word.charAt(0) ==='A'||
      word.charAt(0) ==='a'||
      word.charAt(0) ==='E'||
      word.charAt(0) ==='e'||
      word.charAt(0) ==='I'||
      word.charAt(0) ==='i'||
      word.charAt(0) ==='O'||
      word.charAt(0) ==='o'||
      word.charAt(0) ==='U'||
      word.charAt(0) ==='u'){
      return word + 'ay';
    } else {

      var secondWord = '-' + word.charAt(0) + 'ay';
      var newWord = word.substr(1);

      console.log(newWord + secondWord);

      return newWord + secondWord;

    }
  };

  return module;

};



module.exports = pigLatin;