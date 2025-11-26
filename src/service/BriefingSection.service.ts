import { BriefingEntry } from "../model/BriefingEntry";
import { BriefingSection } from "../model/BriefingSection";
import { BriefingEntryService } from "./BriefingEntry.service";

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class BriefingSectionService {

  public section: BriefingSection;

  constructor(section: BriefingSection) { 
    this.section = section;
  }

  getEntryService(entryId: number): BriefingEntryService {
    var entry = this.section.entries
      .filter(entry => entry.id === entryId)[0];

    return new BriefingEntryService(entry);
  }

}
