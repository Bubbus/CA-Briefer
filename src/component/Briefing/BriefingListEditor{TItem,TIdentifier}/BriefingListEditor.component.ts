import { ChangeDetectionStrategy, Component, input, output, signal, viewChild } from '@angular/core';
import { BriefingInputEditorComponent } from "../BriefingInputEditor/BriefingInputEditor.component";

@Component({
  selector: 'briefing-list-editor',
  templateUrl: './BriefingListEditor.component.html',
  styleUrls: ['./BriefingListEditor.component.css'],
  imports: [BriefingInputEditorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export abstract class BriefingListEditorComponent<TItem, TIdentifier> {

  private _inputEditor = viewChild(BriefingInputEditorComponent);
  
  items = input.required<TItem[]>();
  selectedItemId = signal<TIdentifier | null>(null);
  selectedItemEvent = output<TIdentifier>();
  addNewItemDelegate = input.required<() => TItem>();
  removeSelectedItemEvent = output();

  buttonClicked(event:Event, item:TItem) {
    var selectedId = this.getIdentifier(item);
    this.selectItem(selectedId);
  };

  abstract getIdentifier(item: TItem | null): TIdentifier;
  abstract getDisplayText(item: TItem): string;
  
  abstract displayTextEdited(newText:string, item:TItem): void;

  public addButtonClicked($event: PointerEvent) {
    var newItem = this.addNewItemDelegate()();
    var newId = this.getIdentifier(newItem);
    this.selectItem(newId);
  }

  public removeButtonClicked($event: PointerEvent) {
    this.removeSelectedItemEvent.emit();
  }

  public focusInputEditor() {
    setTimeout(() => {this._inputEditor()?.focus();}, 0);    
  }

  public selectItem(itemId:TIdentifier) {
    this.selectedItemId.set(itemId);
    this.selectedItemEvent.emit(itemId);
    this.focusInputEditor();
  }
}
