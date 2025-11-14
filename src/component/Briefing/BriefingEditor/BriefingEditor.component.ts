import { Component } from '@angular/core';
import { BriefingSectionEditorComponent } from "../BriefingSectionEditor/BriefingSectionEditor.component";
import { BriefingSectionListEditorComponent } from "../BriefingSectionListEditor/BriefingSectionListEditor.component";
import { BriefingModel, CreateBriefingModelFixture } from '../../../model/BriefingModel';
import { BriefingSection } from '../../../model/BriefingSection';

@Component({
  selector: 'briefing-editor',
  templateUrl: './BriefingEditor.component.html',
  styleUrls: ['./BriefingEditor.component.css'],
  imports: [BriefingSectionEditorComponent, BriefingSectionListEditorComponent]
})
export class BriefingEditorComponent {

  constructor() {
    this.model = CreateBriefingModelFixture();
    this.selectedSection = null;
  }

  sectionSelected(section: BriefingSection) {
    this.selectedSection = section;
  }

  model: BriefingModel;
  selectedSection: BriefingSection | null;
}
