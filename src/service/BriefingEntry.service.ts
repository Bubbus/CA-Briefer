import { model, signal, WritableSignal } from "@angular/core";
import { BriefingEntry } from "../model/BriefingEntry";

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class BriefingEntryService {

  private _entry: BriefingEntry;
  public entry: WritableSignal<BriefingEntry>;

  constructor(entry: BriefingEntry) { 
    this._entry = entry;
    this.entry = signal<BriefingEntry>(entry);
  }

  setEntryContent(content: string) {
    this._entry.content = content
  }

}
