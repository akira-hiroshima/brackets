module.exports = function check(str, bracketsConfig) {

  if (str.length <= 1) {
	  return false }

  let matchingOpeningBracket, ch, openingBrackets, closingBrackets
  let stack = []
	for(i=0;i<bracketsConfig.length;i++){
	openingBrackets = bracketsConfig[i][0] //['[', '{', '(']
	closingBrackets = bracketsConfig[i][1] //[']', '}', ')']
  for (let j = 0; j < str.length; j++) {
    ch = str[j]
    if (closingBrackets.indexOf(ch) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
      if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
        return false;
      }
    } else {
      stack.push(ch)
    }
  }
	}
  return (stack.length == 0);
}
