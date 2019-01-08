import {FormGroup} from '@angular/forms';

export const FieldClass = (form: FormGroup, field: string) => {

  const valid = (_field) => {
    return !form.get(_field).valid && form.get(_field).touched;
  };

  return {
    'mat-error': valid(field),
    '-required': true // todo check the form control
  };
};
