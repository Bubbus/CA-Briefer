import { Component, inject } from '@angular/core';
import { BriefingModelService } from '../../../service/BriefingModel.service';
import { BriefingModel } from '../../../model/BriefingModel';
import { BriefingSide } from '../../../model/BriefingSide.enum';
import { BrieferSerializationService } from '../../../service/BrieferSerialization.service';

@Component({
  selector: 'briefing-editor-header',
  templateUrl: './BriefingEditorHeader.component.html',
  styleUrls: ['./BriefingEditorHeader.component.css'],
  imports: []
})
export class BriefingEditorHeaderComponent {

  constructor() {
    this.modelService = inject(BriefingModelService);
    this.serializationService = inject(BrieferSerializationService);
  }
  
  modelService: BriefingModelService;
  serializationService: BrieferSerializationService;

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
