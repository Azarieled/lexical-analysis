import { Component } from '@angular/core';

@Component({
  selector: 'lab1-cmp',
  templateUrl: 'app/labs/lab1.component.html'
})
export class Lab1Component {
  validationInput = 'abba+bb-aab';

  validateInput() {
    return (/^[ab]+\+[ab]+-[ab]+$/).test(this.validationInput);
  }
}
