import { Component } from '@angular/core';
import { BriefingEntryListEditorComponent } from "../BriefingEntryListEditor/BriefingEntryListEditor.component";
import { BriefingEntryEditorComponent } from "../BriefingEntryEditor/BriefingEntryEditor.component";

@Component({
  selector: 'briefing-section-editor',
  templateUrl: './BriefingSectionEditor.component.html',
  styleUrls: ['./BriefingSectionEditor.component.css'],
  imports: [BriefingEntryListEditorComponent, BriefingEntryEditorComponent]
})
export class BriefingSectionEditorComponent {}
