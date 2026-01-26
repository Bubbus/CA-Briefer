import { Injectable, signal, WritableSignal } from '@angular/core';
import { BriefingModel, CreateBriefingModelFixture } from '../model/BriefingModel';
import { BriefingSection } from '../model/BriefingSection';
import { ModelIdentitySingleton } from '../model/ModelIdentitySingleton';

@Injectable({
  providedIn: 'root'
})
export class BriefingModelService {

  private _model: BriefingModel;
  public model: WritableSignal<BriefingModel>;
  private _modelIds: ModelIdentitySingleton;

  constructor(modelIds: ModelIdentitySingleton) { 
    this._model = CreateBriefingModelFixture(modelIds); 
    this.model = signal<BriefingModel>(this._model);
    this._modelIds = modelIds;
  }
    
  addSection(section?: BriefingSection) {
    var newId = this._modelIds.getIdForType(BriefingSection.name);
    section ??= new BriefingSection(newId, "New Section");

    this._model.sections.push(section);
  }

}
