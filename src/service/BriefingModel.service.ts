import { Injectable, signal, WritableSignal } from '@angular/core';
import { BriefingModel, CreateBriefingModelFixture } from '../model/BriefingModel';
import { BriefingSection } from '../model/BriefingSection';
import { BriefingSectionService } from './BriefingSection.service';
import { GetModelIdentitySingleton } from '../model/ModelIdentitySingleton';

@Injectable({
  providedIn: 'root'
})
export class BriefingModelService {

  private _model: BriefingModel;
  public model: WritableSignal<BriefingModel>;
  private _modelIds = GetModelIdentitySingleton();

  constructor() { 
    this._model = CreateBriefingModelFixture(); 
    this.model = signal<BriefingModel>(this._model);
  }

  getSectionService(sectionId: number): BriefingSectionService {
    var section = this._model.sections
      .filter(sec => sec.id === sectionId)[0];
    
    return new BriefingSectionService(section);
  }
    
  addSection(section?: BriefingSection) {
    var newId = this._modelIds.getIdForType(BriefingSection.name);
    section ??= new BriefingSection(newId, "New Section");

    this._model.sections.push(section);
  }

}
