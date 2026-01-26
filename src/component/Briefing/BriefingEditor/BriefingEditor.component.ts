import { Component, inject } from '@angular/core';
import { BriefingSectionEditorComponent } from "../Section/BriefingSectionEditor/BriefingSectionEditor.component";
import { BriefingSectionListEditorComponent } from "../Section/BriefingSectionListEditor/BriefingSectionListEditor.component";
import { BriefingModelService } from '../../../service/BriefingModel.service';
import { BriefingSection } from '../../../model/BriefingSection';

@Component({
  selector: 'briefing-editor',
  templateUrl: './BriefingEditor.component.html',
  styleUrls: ['./BriefingEditor.component.css'],
  imports: [BriefingSectionEditorComponent, BriefingSectionListEditorComponent]
})
export class BriefingEditorComponent {

  constructor() {
    this.modelService = inject(BriefingModelService);
    this.selectedSectionId = null;
    this.selectedSection = null;
  }
  
  modelService: BriefingModelService;
  selectedSectionId: number | null;
  selectedSection: BriefingSection | null;

  sectionSelected(sectionId: number) {
    this.selectedSectionId = sectionId;
    this.selectedSection = this.modelService.model().sections.find(sec => sec.id === sectionId) ?? null;
  }

  addNewSection() {
    this.modelService.addSection();
  }

  printModel() {
    console.log(this.modelService.model());
  }

}
