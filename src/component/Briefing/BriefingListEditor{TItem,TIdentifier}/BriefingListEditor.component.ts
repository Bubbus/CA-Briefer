import { Component, input, output, viewChild } from '@angular/core';
import { BriefingInputEditorComponent } from "../BriefingInputEditor/BriefingInputEditor.component";

@Component({
  selector: 'briefing-list-editor',
  templateUrl: './BriefingListEditor.component.html',
  styleUrls: ['./BriefingListEditor.component.css'],
  imports: [BriefingInputEditorComponent]
})
export abstract class BriefingListEditorComponent<TItem, TIdentifier> {

  private _inputEditor = viewChild(BriefingInputEditorComponent);
  
  constructor() {
    this.selectedItemId = null;
  }

  items = input.required<TItem[]>();
  selectedItemId: TIdentifier | null;
  selectedItemEvent = output<TIdentifier>();
  addNewItemEvent = output();
  removeSelectedItemEvent = output();

  buttonClicked(event:Event, item:TItem) {
    this.selectedItemId = this.getIdentifier(item);
    this.selectedItemEvent.emit(this.selectedItemId);
    this.focusInputEditor();
  };

  abstract getIdentifier(item: TItem | null): TIdentifier;
  abstract getDisplayText(item: TItem): string;
  
  abstract displayTextEdited(newText:string, item:TItem): void;

  public addButtonClicked($event: PointerEvent) {
    this.addNewItemEvent.emit();
  }

  public removeButtonClicked($event: PointerEvent) {
    this.removeSelectedItemEvent.emit();
  }

  public focusInputEditor() {
    setTimeout(() => {this._inputEditor()?.focus();}, 0);    
  }
}
