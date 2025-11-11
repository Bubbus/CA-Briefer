import { Component, input } from '@angular/core';

@Component({
  selector: 'briefing-text-editor',
  templateUrl: './BriefingTextEditor.component.html',
  styleUrls: ['./BriefingTextEditor.component.css']
})
export class BriefingTextEditorComponent {
  text = input.required<string>();
}
