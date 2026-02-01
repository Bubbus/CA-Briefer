import { ChangeDetectionStrategy, Component, computed, input, output, signal, viewChild } from '@angular/core';
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
  addNewItemDelegate = input.required<() => TItem>();

  selectedItem = signal<TItem | null>(null);
  selectedItemId = computed(() => this.getIdentifier(this.selectedItem()));

  selectedItemEvent = output<TItem | null>();
  removeSelectedItemEvent = output();

  buttonClicked(event:Event, item:TItem) {
    var selectedId = this.getIdentifier(item);
    this.selectItem(item);
  };

  abstract getIdentifier(item: TItem | null): TIdentifier;
  abstract getDisplayText(item: TItem): string;
  
  abstract displayTextEdited(newText:string, item:TItem): void;

  public addButtonClicked($event: PointerEvent) {
    var newItem = this.addNewItemDelegate()();
    this.selectItem(newItem);
  }

  public removeButtonClicked($event: PointerEvent) {
    this.removeSelectedItemEvent.emit();
  }

  public focusInputEditor() {
    setTimeout(() => {this._inputEditor()?.focus();}, 0);    
  }

  public selectItem(item: TItem | null) {
    this.selectedItem.set(item);
    this.selectedItemEvent.emit(item);
    this.focusInputEditor();
  }
}
