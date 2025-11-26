import { Component } from '@angular/core';
import { BriefingEntry } from '../../../model/BriefingEntry';
import { BriefingListEditorComponent } from '../BriefingListEditor{TItem,TIdentifier}/BriefingListEditor.component';

@Component({
  selector: 'briefing-entry-list-editor',
  templateUrl: '../BriefingListEditor{TItem,TIdentifier}/BriefingListEditor.component.html',
  styleUrls: ['./BriefingEntryListEditor.component.css']
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
}
