import { BriefingEntry } from "../model/BriefingEntry";
import { BriefingSection } from "../model/BriefingSection";
import { ModelIdentitySingleton } from "../model/ModelIdentitySingleton";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BriefingSectionService {
  
  private _modelIds: ModelIdentitySingleton;
  
  constructor(modelIds: ModelIdentitySingleton) { 
    this._modelIds = modelIds;
  }
  
  addEntry(section: BriefingSection, entry?: BriefingEntry) {
    var newId = this._modelIds.getIdForType(BriefingEntry.name);
    entry ??= new BriefingEntry(newId, "New Entry", "");

    section.entries.push(entry);
  }

}
