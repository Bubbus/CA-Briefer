import { Component, ElementRef, input, viewChild } from '@angular/core';

@Component({
  selector: 'show-code-dialog',
  templateUrl: './ShowCodeDialog.component.html',
  styleUrls: ['./ShowCodeDialog.component.css'],
  imports: []
})
export class ShowCodeDialogComponent {

  constructor() {
  }

  codeToShow = input.required<string>();
  sideReadable = input.required<string>();
  targetFilepath = input.required<string>();
  private dialog = viewChild.required<ElementRef<HTMLDialogElement>>('codeDialog');

  showDialog() {
    this.dialog().nativeElement.showModal();
  }

  hideDialog() {
    this.dialog().nativeElement.close();
  }

  onCloseClicked() {
    this.hideDialog();
  }

  onCopyClicked() {
    navigator.clipboard.writeText(this.codeToShow());
  }
}
