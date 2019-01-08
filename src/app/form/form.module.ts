import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {AppMaterialModule} from '../app-material.module';

import {CheckboxComponent} from './checkbox/checkbox.component';
import {TextareaComponent} from './textarea/textarea.component';
import {YesNoComponent} from './yes-no/yes-no.component';

const FORM = [
  CheckboxComponent,
  TextareaComponent,
  YesNoComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    AppMaterialModule
  ],
  declarations: FORM,
  exports: FORM
})
export class FormModule {
}
