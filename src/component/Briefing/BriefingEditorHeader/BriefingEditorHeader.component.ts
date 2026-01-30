import { Component, inject } from '@angular/core';
import { BriefingModelService } from '../../../service/BriefingModel.service';
import { BriefingModel } from '../../../model/BriefingModel';
import { BriefingSide } from '../../../model/BriefingSide.enum';

@Component({
  selector: 'briefing-editor-header',
  templateUrl: './BriefingEditorHeader.component.html',
  styleUrls: ['./BriefingEditorHeader.component.css'],
  imports: []
})
export class BriefingEditorHeaderComponent {

  constructor() {
    this.modelService = inject(BriefingModelService);
  }
  
  modelService: BriefingModelService;


  startFromScratch() {
    var emptyModel = new BriefingModel([], BriefingSide.West);
    this.modelService.replaceModel(emptyModel);
  }

  generateSqfBriefing() {
    throw new Error('Method not implemented.');
  }

  saveBrieferFile() {
    throw new Error('Method not implemented.');
  }

  loadFromFile() {
    throw new Error('Method not implemented.');
  }
}
