import { ChangeDetectionStrategy, Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { BriefingEntryListEditorComponent } from "../BriefingEntryListEditor/BriefingEntryListEditor.component";
import { BriefingEntryEditorComponent } from "../BriefingEntryEditor/BriefingEntryEditor.component";
import { BriefingSection } from '../../../model/BriefingSection';
import { BriefingEntry } from '../../../model/BriefingEntry';

@Component({
  selector: 'briefing-section-editor',
  templateUrl: './BriefingSectionEditor.component.html',
  styleUrls: ['./BriefingSectionEditor.component.css'],
  imports: [BriefingEntryListEditorComponent, BriefingEntryEditorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BriefingSectionEditorComponent implements OnChanges {

  constructor() {
    this.selectedEntry = null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    var sectionChanges = changes['section'];
    if (sectionChanges !== undefined
      && !sectionChanges.firstChange
    ) {
      this.selectedEntry = null;
    }
  }

  section = input.required<BriefingSection>();
  selectedEntry: BriefingEntry | null;

  entrySelected(entry: BriefingEntry) {
    this.selectedEntry = entry;
  } 
  
}
