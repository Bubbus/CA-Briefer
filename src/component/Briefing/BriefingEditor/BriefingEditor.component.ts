import { Component, inject } from '@angular/core';
import { BriefingSectionEditorComponent } from "../Section/BriefingSectionEditor/BriefingSectionEditor.component";
import { BriefingSectionListEditorComponent } from "../Section/BriefingSectionListEditor/BriefingSectionListEditor.component";
import { BriefingModelService } from '../../../service/BriefingModel.service';
import { BriefingSectionService } from '../../../service/BriefingSection.service';

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
    this.selectedSectionService = null;
  }
  
  modelService: BriefingModelService;
  selectedSectionId: number | null;
  selectedSectionService: BriefingSectionService | null;

  sectionSelected(sectionId: number) {
    this.selectedSectionId = sectionId;
    this.selectedSectionService = this.modelService.getSectionService(sectionId);
  }

  addNewSection() {
    this.modelService.addSection();
  }

  printModel() {
    console.log(this.modelService.model());
  }

}
