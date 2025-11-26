import { signal, WritableSignal } from "@angular/core";
import { BriefingEntry } from "../model/BriefingEntry";
import { BriefingSection } from "../model/BriefingSection";
import { BriefingEntryService } from "./BriefingEntry.service";
import { GetModelIdentitySingleton } from "../model/ModelIdentitySingleton";

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class BriefingSectionService {
  
  private _section: BriefingSection;
  public section: WritableSignal<BriefingSection>;
  private _modelIds = GetModelIdentitySingleton();
  
  constructor(section: BriefingSection) { 
    this._section = section;
    this.section = signal<BriefingSection>(section);
  }
  
  getEntryService(entryId: number): BriefingEntryService {
    var entry = this._section.entries
    .filter(entry => entry.id === entryId)[0];
    
    return new BriefingEntryService(entry);
  }
  
  addEntry(entry?: BriefingEntry) {
    var newId = this._modelIds.getIdForType(BriefingEntry.name);
    entry ??= new BriefingEntry(newId, "New Entry", "");

    this._section.entries.push(entry);
  }

}
