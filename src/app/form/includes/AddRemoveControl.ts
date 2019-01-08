import {AbstractControlOptions, FormControl, ValidatorFn} from '@angular/forms';

export const AddRemoveControl =

  (form, input, cb, objectState?: undefined | object, validators?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null) => {

    return (value) => {
      if (cb(value) === true) {

        let state = undefined;

        if (objectState !== undefined) {
          state = objectState[input];
        }

        form.addControl(input, new FormControl(state, validators)); // Add new form control
      }
      else if (cb(value) === false) {

        if (objectState !== undefined) {
          objectState[input] = undefined;
        }

        form.removeControl(input);
      }
    };
  };
