import { BriefingEntry } from "../model/BriefingEntry";

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class BriefingEntryService {

  public entry: BriefingEntry;

  constructor(entry: BriefingEntry) { 
    this.entry = entry;
  }

  setEntryContent(content: string) {
    this.entry.content = content
  }

}
