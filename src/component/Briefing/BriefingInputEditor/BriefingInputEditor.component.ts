import { Component, input, output } from '@angular/core';

@Component({
  selector: 'briefing-input-editor',
  templateUrl: './BriefingInputEditor.component.html',
  styleUrls: ['./BriefingInputEditor.component.css']
})
export class BriefingInputEditorComponent {

  text = input.required<string>();
  onTextChanged = output<string>();

  onChange(newText: string) {
    this.onTextChanged.emit(newText);
  }
}
