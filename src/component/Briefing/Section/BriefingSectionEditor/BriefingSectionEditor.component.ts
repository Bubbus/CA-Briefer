import { ChangeDetectionStrategy, Component, Input, model } from '@angular/core';
import { BriefingEntryListEditorComponent } from "../../Entry/BriefingEntryListEditor/BriefingEntryListEditor.component";
import { BriefingEntryEditorComponent } from "../../Entry/BriefingEntryEditor/BriefingEntryEditor.component";
import { BriefingSectionService } from '../../../../service/BriefingSection.service';
import { BriefingEntry } from '../../../../model/BriefingEntry';
import { BriefingSection } from '../../../../model/BriefingSection';

@Component({
  selector: 'briefing-section-editor',
  templateUrl: './BriefingSectionEditor.component.html',
  styleUrls: ['./BriefingSectionEditor.component.css'],
  imports: [BriefingEntryListEditorComponent, BriefingEntryEditorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BriefingSectionEditorComponent {
removeSelectedEntry() {
throw new Error('Method not implemented.');
}

  private _sectionService: BriefingSectionService;
  
  constructor(sectionService: BriefingSectionService) {
    this._sectionService = sectionService;
  }
  
  public selectedEntry = model<BriefingEntry | null>(null);
  
  private _section!: BriefingSection;
  @Input() public set section(service: BriefingSection) {
    this._section = service;
    this.selectedEntry.set(null);
  }
  public get section(): BriefingSection {
    return this._section;
  }

  entrySelected(id: number) {
    var entry = this._section.entries.find(entry => entry.id === id) ?? null;
    this.selectedEntry.set(entry);
  } 

  addNewEntry() {
    this._sectionService.addEntry(this._section);
  }
  
}
