import { Injectable } from '@angular/core';
import { BriefingModel, CreateBriefingModelFixture } from '../model/BriefingModel';
import { BriefingSection } from '../model/BriefingSection';
import { BriefingSectionService } from './BriefingSection.service';

@Injectable({
  providedIn: 'root'
})
export class BriefingModelService {

  public model: BriefingModel;

  constructor() { 
    this.model = CreateBriefingModelFixture();
  }

  getSectionService(sectionId: number): BriefingSectionService {
    var section = this.model.sections
      .filter(sec => sec.id === sectionId)[0];
    
    return new BriefingSectionService(section);
  }

}
