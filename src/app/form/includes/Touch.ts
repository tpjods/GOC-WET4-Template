import {FormControl, FormGroup} from '@angular/forms';

export const Touch = (form: FormGroup) => {
  Object.keys(form.controls).forEach(field => {
    const control = form.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({onlySelf: true});
    }
    else if (control instanceof FormGroup) {
      Touch(control);
    }
  });
};
