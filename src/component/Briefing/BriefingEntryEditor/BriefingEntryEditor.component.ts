import { Component, input } from '@angular/core';
import { BriefingTextEditorComponent } from "../BriefingTextEditor/BriefingTextEditor.component";
import { BriefingEntryService } from '../../../service/BriefingEntry.service';

@Component({
  selector: 'briefing-entry-editor',
  templateUrl: './BriefingEntryEditor.component.html',
  styleUrls: ['./BriefingEntryEditor.component.css'],
  imports: [BriefingTextEditorComponent]
})
export class BriefingEntryEditorComponent {

  entryService = input.required<BriefingEntryService>();

  onTextChanged(newText: string) {
    this.entryService().setEntryContent(newText);
  }
  
}
