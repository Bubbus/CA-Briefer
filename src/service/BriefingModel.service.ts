import { Injectable, signal, WritableSignal } from '@angular/core';
import { BriefingModel, CreateBriefingModelFixture } from '../model/BriefingModel';
import { BriefingSection } from '../model/BriefingSection';
import { ModelIdentitySingleton } from '../model/ModelIdentitySingleton';
import { BriefingSide } from '../model/BriefingSide.enum';
import { BriefingEntry } from '../model/BriefingEntry';

@Injectable({
  providedIn: 'root'
})
export class BriefingModelService {

  private _model: BriefingModel;
  public model: WritableSignal<BriefingModel>;
  private _modelIds: ModelIdentitySingleton;

  constructor(modelIds: ModelIdentitySingleton) { 
    this._model = new BriefingModel([], BriefingSide.West); 
    this.model = signal<BriefingModel>(this._model);
    this._modelIds = modelIds;
  }
    
  addSection(section?: BriefingSection): BriefingSection {
    var newId = this._modelIds.getIdForType(BriefingSection.name);
    section ??= new BriefingSection(newId, "New Section");

    this._model.sections.push(section);
    return section;
  }

  removeSection(selectedSectionId: number) {
    var sectionIdx = this._model.sections.findIndex(sec => sec.id === selectedSectionId);

    if (sectionIdx < 0) {
      return;
    }

    this._model.sections.splice(sectionIdx, 1);
  }

  replaceModel(newModel: BriefingModel) {
    this._model = newModel;
    this.model.set(newModel);
    this.configIdsUsingModel(newModel);
  }

  setSide(side: BriefingSide) {
    var newModel = this.shallowCloneModel();
    newModel.side = side;

    this.replaceModel(newModel);
  }

  shallowCloneModel(): BriefingModel {
    return new BriefingModel(this._model.sections, this._model.side);
  }
  
  private configIdsUsingModel(newModel: BriefingModel) {
    this._modelIds.resetAllIds();

    var maxSectionId = Math.max.apply(null, newModel.sections.map(sec => sec.id));
    this._modelIds.setIdForType(BriefingSection.name, maxSectionId);

    var allEntries = new Array<BriefingEntry>();
    newModel.sections.forEach(sec => allEntries = allEntries.concat(sec.entries));

    var maxEntryId = Math.max.apply(null, allEntries.map(sec => sec.id));
    this._modelIds.setIdForType(BriefingEntry.name, maxEntryId);
  }

}
