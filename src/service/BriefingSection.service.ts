import { BriefingEntry } from "../model/BriefingEntry";
import { BriefingSection } from "../model/BriefingSection";
import { ModelIdentitySingleton } from "../model/ModelIdentitySingleton";

import { Injectable, ModelSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BriefingSectionService {
  
  private _modelIds: ModelIdentitySingleton;
  
  constructor(modelIds: ModelIdentitySingleton) { 
    this._modelIds = modelIds;
  }
  
  addEntry(section: BriefingSection, entry?: BriefingEntry): BriefingEntry {
    var newId = this._modelIds.getIdForType(BriefingEntry.name);
    entry ??= new BriefingEntry(newId, "New Entry", "");

    section.entries.push(entry);
    return entry;
  }

  removeEntry(section: BriefingSection, selectedEntry: BriefingEntry) {
    var entryIdx = section.entries.findIndex(ent => ent.id === selectedEntry.id);

    if (entryIdx < 0) {
      return;
    }

    section.entries.splice(entryIdx, 1);
  }

}
