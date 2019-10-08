module.exports = function check(str, bracketsConfig) {
  let counterOpeningBrackets = 0;
  let counterClosingBrackets = 0;
  const arrayOfBracketsFromConfiguration = [];
  const stack = [];

  bracketsConfig.forEach(elem => {
    arrayOfBracketsFromConfiguration.push(elem[0]);
    arrayOfBracketsFromConfiguration.push(elem[1]);
  });

  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < arrayOfBracketsFromConfiguration.length; k += 2) {
      if (str[i] === arrayOfBracketsFromConfiguration[k] && str[i] === arrayOfBracketsFromConfiguration[k + 1]) {
        let indexOfLastOpeningBracket = 0;
        let closingBracketIndex = 0;

        indexOfLastOpeningBracket = arrayOfBracketsFromConfiguration.indexOf(stack[stack.length - 1], 0);
        closingBracketIndex = arrayOfBracketsFromConfiguration.indexOf(str[i]);

        if (indexOfLastOpeningBracket + 1 === closingBracketIndex || indexOfLastOpeningBracket === closingBracketIndex) {
          stack.pop();
        } else {
          stack.push(str[i]);
        };

        continue;
      };

      if (str[i] === arrayOfBracketsFromConfiguration[k]) {
        counterOpeningBrackets++;

        stack.push(str[i]);
      } else if (str[i] === arrayOfBracketsFromConfiguration[k + 1]) {
        let indexOfLastOpeningBracket = 0;
        let closingBracketIndex = 0;

        counterClosingBrackets++;

        indexOfLastOpeningBracket = arrayOfBracketsFromConfiguration.indexOf(stack[stack.length - 1], 0);
        closingBracketIndex = arrayOfBracketsFromConfiguration.indexOf(str[i]);

        if (indexOfLastOpeningBracket + 1 === closingBracketIndex) {
          stack.pop();
        };
      };

      if (counterClosingBrackets > counterOpeningBrackets) {
        return false;
      };
    };
  };

  if (stack.length > 0) {
    return false;
  };

  return true;
};