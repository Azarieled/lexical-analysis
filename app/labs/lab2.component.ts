import { Component } from 'angular2/core';

@Component({
  selector: 'lab2-cmp',
  templateUrl: 'app/labs/lab2.component.html'
})
export class Lab2Component {
  compilerInput = 'i = 1 + 1';

  compilerOutput() {
    return this.tokenize(this.compilerInput);
  }

  private tokenize(str) {
    let tokens = [];
    let currentToken = '';

    function isNextCharInToken(partialToken, c) {
      if (/\s/.test(c)) {
        return false;
      } else if (!(partialToken === '') && !isNaN(partialToken)) {
        return !isNaN(partialToken + c);
      } else if (partialToken[0] === '"' && partialToken[partialToken.length - 1] === '"') {
        return partialToken[partialToken.length - 2] !== '\\';
      } else {
        return true;
      }
    }

    for (let c of str) {
      if (isNextCharInToken(currentToken, c)) {
        currentToken += c;
      } else {
        if (currentToken !== '') tokens.push(currentToken);
        currentToken = '';
      }
    }

    return tokens;
  }

  private precedence(op1, op2) {
    let operatorsPrecedenceHash = {
      '*' : 14,
      '+' : 13,
      '-' : 13,
      '<' : 11,
      '>' : 11,
      '==': 10,
      '!=': 10,
      '=' : 3
    };
    return operatorsPrecedenceHash[op1] >= operatorsPrecedenceHash[op2];
  }
}
