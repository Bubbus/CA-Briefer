import { Component, input, output } from '@angular/core';
import { BriefingSection } from '../../../model/BriefingSection';

@Component({
  selector: 'briefing-list-editor',
  templateUrl: './BriefingListEditor.component.html',
  styleUrls: ['./BriefingListEditor.component.css']
})
export abstract class BriefingListEditorComponent<TItem, TIdentifier> {

  constructor() {
    this.selectedItem = null;
  }

  items = input.required<TItem[]>();
  selectedItem: TItem | null;
  selectedItemEvent = output<TItem>();

  buttonClicked(event:Event, section:TItem) {
    this.selectedItem = section;
    this.selectedItemEvent.emit(section);
  };

  abstract getIdentifier(item: TItem | null): TIdentifier;
  abstract getDisplayText(item: TItem): string;

}
