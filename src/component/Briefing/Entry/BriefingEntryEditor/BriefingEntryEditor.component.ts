import { Component, input } from '@angular/core';
import { BriefingTextEditorComponent } from "../../BriefingTextEditor/BriefingTextEditor.component";
import { BriefingEntry } from '../../../../model/BriefingEntry';

@Component({
  selector: 'briefing-entry-editor',
  templateUrl: './BriefingEntryEditor.component.html',
  styleUrls: ['./BriefingEntryEditor.component.css'],
  imports: [BriefingTextEditorComponent]
})
export class BriefingEntryEditorComponent {

  entry = input.required<BriefingEntry>();

  onTextChanged(newText: string) {
    this.entry().content = newText;
  }
  
}
