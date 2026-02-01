import { Component, ElementRef, output, viewChild } from '@angular/core';

@Component({
  selector: 'save-button-dialog',
  templateUrl: './SaveButtonDialog.component.html',
  styleUrls: ['./SaveButtonDialog.component.css'],
  imports: []
})
export class SaveButtonDialogComponent {

  constructor() {
  }

  onSavedEvent = output<string>();
  private filenameInput = viewChild.required<ElementRef<HTMLInputElement>>('filenameInput');
  private dialog = viewChild.required<ElementRef<HTMLDialogElement>>('saveDialog');

  showDialog() {
    this.dialog().nativeElement.showModal();
  }

  hideDialog() {
    this.dialog().nativeElement.close();
  }

  onCancelClicked() {
    this.hideDialog();
  }

  onSaveClicked() {
    var nameInput = this.filenameInput().nativeElement;
    this.onSavedEvent.emit(nameInput.value);
    nameInput.value = '';

    this.hideDialog();
  }
}
