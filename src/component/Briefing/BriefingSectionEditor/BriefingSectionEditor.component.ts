import { Component, input } from '@angular/core';
import { BriefingEntryListEditorComponent } from "../BriefingEntryListEditor/BriefingEntryListEditor.component";
import { BriefingEntryEditorComponent } from "../BriefingEntryEditor/BriefingEntryEditor.component";
import { BriefingSection } from '../../../model/BriefingSection';

@Component({
  selector: 'briefing-section-editor',
  templateUrl: './BriefingSectionEditor.component.html',
  styleUrls: ['./BriefingSectionEditor.component.css'],
  imports: [BriefingEntryListEditorComponent, BriefingEntryEditorComponent]
})
export class BriefingSectionEditorComponent {
  
  section = input.required<BriefingSection | null>();
}
