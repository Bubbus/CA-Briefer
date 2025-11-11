import { Component } from '@angular/core';
import { BriefingTextEditorComponent } from "../BriefingTextEditor/BriefingTextEditor.component";

@Component({
  selector: 'briefing-entry-editor',
  templateUrl: './BriefingEntryEditor.component.html',
  styleUrls: ['./BriefingEntryEditor.component.css'],
  imports: [BriefingTextEditorComponent]
})
export class BriefingEntryEditorComponent {}
