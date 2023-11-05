import { AbstractControl } from '@angular/forms';

export function validateFile(control: AbstractControl) {

  if (!control.value) {
    return null;
  }

  const file = control.value as File;
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  const extension = file.name.split('.').pop();
  if (extension !== 'jpg' && extension !== 'jpeg' && extension !== 'png') {
    return { invalidType: true };
  }

  if (file.size > 1000000) {
    return { invalidSize: true };
  }

  return null;
}
