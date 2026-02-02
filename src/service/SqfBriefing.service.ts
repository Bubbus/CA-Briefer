import { BriefingModel } from "../model/BriefingModel";
import { BriefingSide } from "../model/BriefingSide.enum";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SqfBriefingService {
    
  constructor() { 
    // Intentionally empty.
  }
  
  private filenameSideMap = new Map<BriefingSide, string>([
    [BriefingSide.West, 'west'],
    [BriefingSide.East, 'east'],
    [BriefingSide.Independent, 'resistance'],
    [BriefingSide.Civilian, 'civ']
  ]);

  getFilenameForSide(side: BriefingSide): string {
    var mappedSideName = this.filenameSideMap.get(side) ?? '???';
    return `configuration\\briefings\\part_briefing_${mappedSideName}.sqf`
  }

  generateSqfBriefing(model: BriefingModel) {
    var parts = new Array<string>();

    model.sections.forEach(sec => {
      parts.push(`/* ---------------------------------------------------------------- */`);
      parts.push('\r\n');
      parts.push(`// Diary section: ${sec.name}`);
      parts.push('\r\n');
      parts.push('\r\n');
      parts.push(`player createDiarySubject ["${sec.name}", "${sec.name}"];`);
      parts.push('\r\n');
      parts.push('\r\n');

      sec.entries.forEach(ent => {
        var entryText = ent.content;
        entryText.replaceAll('"', '""');
        entryText.replaceAll(/\r?\n"/g, '\r\n<br/>');

        parts.push(`player createDiaryRecord ["${sec.name}", ["${ent.name}", "${entryText}"]];`);
        parts.push('\r\n');
        parts.push('\r\n');
      });
    });

    parts.push(`/* ---------------------------------------------------------------- */`);

    return parts.join('');
  }

}
