import { Component, contentChild, ElementRef, Input, input, output, viewChild } from '@angular/core';

@Component({
  selector: 'briefing-input-editor',
  templateUrl: './BriefingInputEditor.component.html',
  styleUrls: ['./BriefingInputEditor.component.css']
})
export class BriefingInputEditorComponent {

  text = input.required<string>();
  onTextChanged = output<string>();
  private _input = viewChild.required<ElementRef<HTMLInputElement>>('textEditor');

  public onChange(newText: string) {
    this.onTextChanged.emit(newText);
  }

  public focus() {
    var myInput = this._input();
    myInput.nativeElement.focus();
  }
}
