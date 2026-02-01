import { ChangeDetectionStrategy, Component, computed, Input, model, viewChild } from '@angular/core';
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

  selectedEntryId = computed(() => this.selectedEntry()?.id);
  selectedEntry = computed(() => this.entryList().selectedItem());
  
  private entryList = viewChild.required<BriefingEntryListEditorComponent>('entryList');
  private sectionService: BriefingSectionService;
  
  constructor(sectionService: BriefingSectionService) {
    this.sectionService = sectionService;
  }
  
  private _section!: BriefingSection;
  @Input() public set section(service: BriefingSection) {
    this._section = service;
    this.entryList().selectItem(null);
  }
  public get section(): BriefingSection {
    return this._section;
  }

  public addNewEntryDelegate = () => {return this.addNewEntry()};
  addNewEntry(): BriefingEntry {
    return this.sectionService.addEntry(this._section);
  }

  removeSelectedEntry() {
    var entryToRemove = this.selectedEntry();

    if (entryToRemove == null) {
      return;
    }

    this.sectionService.removeEntry(this._section, entryToRemove);
  }
  
}
