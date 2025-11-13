import { Component, input, output } from '@angular/core';
import { BriefingSection } from '../../../model/BriefingSection';

@Component({
  selector: 'briefing-section-list-editor',
  templateUrl: './BriefingSectionListEditor.component.html',
  styleUrls: ['./BriefingSectionListEditor.component.css']
})
export class BriefingSectionListEditorComponent {
  sections = input.required<BriefingSection[]>();
  selectedItem = output<BriefingSection>();

  buttonClicked(event:Event, section:BriefingSection) {
    this.selectedItem.emit(section);
  };
}
