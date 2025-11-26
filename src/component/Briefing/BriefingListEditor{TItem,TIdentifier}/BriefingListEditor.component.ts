import { Component, input, output } from '@angular/core';

@Component({
  selector: 'briefing-list-editor',
  templateUrl: './BriefingListEditor.component.html',
  styleUrls: ['./BriefingListEditor.component.css']
})
export abstract class BriefingListEditorComponent<TItem, TIdentifier> {

  constructor() {
    this.selectedItemId = null;
  }

  items = input.required<TItem[]>();
  selectedItemId: TIdentifier | null;
  selectedItemEvent = output<TIdentifier>();

  buttonClicked(event:Event, item:TItem) {
    this.selectedItemId = this.getIdentifier(item);
    this.selectedItemEvent.emit(this.selectedItemId);
  };

  abstract getIdentifier(item: TItem | null): TIdentifier;
  abstract getDisplayText(item: TItem): string;

}
