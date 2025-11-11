import { Component, input } from '@angular/core';
import { BriefingEntry } from '../../../model/BriefingEntry';

@Component({
  selector: 'briefing-entry-list-editor',
  templateUrl: './BriefingEntryListEditor.component.html',
  styleUrls: ['./BriefingEntryListEditor.component.css']
})
export class BriefingEntryListEditorComponent {
  entries = input.required<BriefingEntry[]>();
}
