import { Component } from '@angular/core';
import { BriefingListEditorComponent } from '../../BriefingListEditor{TItem,TIdentifier}/BriefingListEditor.component';
import { BriefingSection } from '../../../../model/BriefingSection';

@Component({
  selector: 'briefing-section-list-editor',
  templateUrl: '../../BriefingListEditor{TItem,TIdentifier}/BriefingListEditor.component.html',
  styleUrls: ['./BriefingSectionListEditor.component.css']
})
export class BriefingSectionListEditorComponent extends BriefingListEditorComponent<BriefingSection, number> {

  constructor() {
    super();
  };

  override getIdentifier(item: BriefingSection | null): number {
    return item?.id ?? -1;
  };

  override getDisplayText(item: BriefingSection): string {
    return item.name;
  };

}
