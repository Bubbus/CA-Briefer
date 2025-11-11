import { Component, input } from '@angular/core';
import { BriefingSection } from '../../../model/BriefingSection';

@Component({
  selector: 'briefing-section-list-editor',
  templateUrl: './BriefingSectionListEditor.component.html',
  styleUrls: ['./BriefingSectionListEditor.component.css']
})
export class BriefingSectionListEditorComponent {
  sections = input.required<BriefingSection[]>()
}
