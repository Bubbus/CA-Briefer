import { Component, effect, EffectRef, ElementRef, input, OnInit, output, viewChild } from '@angular/core';
import { BriefingTextEditorControlsComponent } from "./BriefingTextEditorControls/BriefingTextEditorControls.component";
import { SqfBriefingService } from '../../../service/SqfBriefing.service';

@Component({
  selector: 'briefing-text-editor',
  templateUrl: './BriefingTextEditor.component.html',
  styleUrls: ['./BriefingTextEditor.component.css'],
  imports: [BriefingTextEditorControlsComponent]
})
export class BriefingTextEditorComponent {
  
  constructor(sqfService: SqfBriefingService) {
    this.sqfBriefingService = sqfService;

    this.textChangedEffect = effect(() => {
      var newText = this.text();

      setTimeout(() => {
        this.updateHeight();
      }, 0.1);
    })
  }
  
  text = input.required<string>();
  onTextChanged = output<string>();
  
  private textChangedEffect: EffectRef;
  private mainDiv = viewChild.required<ElementRef<HTMLDivElement>>('mainDiv');
  private textEditor = viewChild.required<ElementRef<HTMLTextAreaElement>>('textEditor');
  private sqfBriefingService: SqfBriefingService;
  
  onChange(newText: string) {
    this.updateHeight();
    this.onTextChanged.emit(newText);
  }

  onFontClicked() {
    var selectedText = this.getSelectedText();

    var wrappedText = this.sqfBriefingService.wrapTextWithFontExampleElement(selectedText);
    this.replaceSelectedText(wrappedText);
  }

  onImageClicked() {
    var wrappedText = this.sqfBriefingService.getImageExampleElement();
    this.replaceSelectedText(wrappedText);
  }

  onMarkerClicked() {
    var selectedText = this.getSelectedText();

    var wrappedText = this.sqfBriefingService.wrapTextWithMarkerExampleElement(selectedText);
    this.replaceSelectedText(wrappedText);
  }

  private getSelectedText(): string {
    var editor = this.textEditor().nativeElement;
    var editorText = editor.value;

    var selectedText = editorText.substring(editor.selectionStart, editor.selectionEnd);
    return selectedText;
  }

  private replaceSelectedText(newText: string) {
    var editor = this.textEditor().nativeElement;
    var editorText = editor.value;

    var beforeText = editorText.substring(0, editor.selectionStart);
    var afterText = editorText.substring(editor.selectionEnd);

    var newEditorText = `${beforeText}${newText}${afterText}`;
    
    editor.value = newEditorText;
    this.onTextChanged.emit(newEditorText);
  }

  protected updateHeight() {
    var editor = this.textEditor().nativeElement;
    var editorText = editor.value;

    this.mainDiv().nativeElement.dataset['replicatedValue'] = editorText;
  }
}
