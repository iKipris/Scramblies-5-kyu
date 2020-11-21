function scramble(str1, str2) {
  if (str1.length<500 & str2.length<500)
    {
 var counter=0;
 str2=str2.split("");
 for (var i in str2)
 {
 if (str1.includes(str2[i]))
 {
    str1 = str1.replace(str2[i],"");
    ++counter;
 }
 }
  
return  (counter == str2.length)
      }
  else {
    var alpha=generateAlphabets();
 for (var i in alpha)
 {
   var counter1 = str1.split(alpha[i], -1).length - 1;
   var counter2=str2.split(alpha[i],-1).length -1;
   console.log(counter1,counter2)
   if (counter1 == counter2) continue;
   else return false
 }
  }
 }
 function generateAlphabets() {
  var alphabets = [];
  var start = 'a'.charCodeAt(0);
  var last  = 'z'.charCodeAt(0);
  for (var i = start; i <= last; ++i) {
    alphabets.push(String.fromCharCode(i));
  }

  return alphabets.join('');
}
