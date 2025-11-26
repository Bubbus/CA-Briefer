import { ChangeDetectionStrategy, Component, Input, model } from '@angular/core';
import { BriefingEntryListEditorComponent } from "../BriefingEntryListEditor/BriefingEntryListEditor.component";
import { BriefingEntryEditorComponent } from "../BriefingEntryEditor/BriefingEntryEditor.component";
import { BriefingSectionService } from '../../../service/BriefingSection.service';
import { BriefingEntryService } from '../../../service/BriefingEntry.service';

@Component({
  selector: 'briefing-section-editor',
  templateUrl: './BriefingSectionEditor.component.html',
  styleUrls: ['./BriefingSectionEditor.component.css'],
  imports: [BriefingEntryListEditorComponent, BriefingEntryEditorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BriefingSectionEditorComponent {
  
  constructor() {
  }
  
  public selectedEntryService = model<BriefingEntryService | null>(null);

  private _sectionService!: BriefingSectionService;
  @Input() public set sectionService(service: BriefingSectionService) {
    this._sectionService = service;
    this.selectedEntryService.set(null);
  }
  public get sectionService(): BriefingSectionService {
    return this._sectionService;
  }

  entrySelected(id: number) {
    var entryService = this.sectionService.getEntryService(id);
    this.selectedEntryService.set(entryService);
  } 
  
}
