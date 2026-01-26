import { Component } from '@angular/core';
import { BriefingEntry } from '../../../../model/BriefingEntry';
import { BriefingListEditorComponent } from '../../BriefingListEditor{TItem,TIdentifier}/BriefingListEditor.component';
import { BriefingInputEditorComponent } from "../../BriefingInputEditor/BriefingInputEditor.component";

@Component({
  selector: 'briefing-entry-list-editor',
  templateUrl: '../../BriefingListEditor{TItem,TIdentifier}/BriefingListEditor.component.html',
  styleUrls: ['./BriefingEntryListEditor.component.css'],
  imports: [BriefingInputEditorComponent]
})
export class BriefingEntryListEditorComponent extends BriefingListEditorComponent<BriefingEntry, number> {
  
  constructor() {
    super();
  };
  
  override getIdentifier(item: BriefingEntry | null): number {
    return item?.id ?? -1;
  };
  
  override getDisplayText(item: BriefingEntry): string {
    return item.name;
  };
  
  override displayTextEdited(newText: string, item: BriefingEntry): void {
    throw new Error('Method not implemented.');
  }
}
