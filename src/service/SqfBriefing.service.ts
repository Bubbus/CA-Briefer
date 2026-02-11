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

    model.sections.slice().reverse().forEach(sec => {
      var secName = sec.name;

      parts.push('\r\n');
      parts.push(`/* ---------------------------------------------------------------- */`);
      parts.push('\r\n');
      parts.push(`// Diary section: ${sec.name}`);
      parts.push('\r\n');
      parts.push('\r\n');
      if (sec.name.toLowerCase() === 'briefing') {
        parts.push(`// Note: the 'Briefing' subject exists by default, named "diary".`);
        secName = "diary";
      }
      else {
        parts.push(`player createDiarySubject ["${secName}", "${secName}"];`);
      }
      parts.push('\r\n');
      parts.push('\r\n');

      sec.entries.slice().reverse().forEach(ent => {
        parts.push(`/* ---- Diary record: ${ent.name} ---- */`);
        parts.push('\r\n');
        var entryText = this.sanitizeBriefingString(ent.content);

        parts.push(`player createDiaryRecord ["${secName}", ["${ent.name}", "${entryText}"]];`);
        parts.push('\r\n');
        parts.push('\r\n');
      });
    });

    parts.push(`/* ---------------------------------------------------------------- */`);

    return parts.join('');
  }
  sanitizeBriefingString(entryText: string) {
    entryText = entryText.replaceAll('"', '""');
    entryText = entryText.replaceAll('&', '&amp;');
    return entryText.replaceAll(/\r?\n/g, '\r\n<br/>');
  }

  wrapTextWithFontExampleElement(textToWrap: string): string {
    return `<font color="#FFFFFF" size="14" face="RobotoCondensed">${textToWrap}</font>`;
  }

  wrapTextWithMarkerExampleElement(textToWrap: string): string {
    return `<marker name="my_marker_name">${textToWrap}</marker>`;
  }

  getImageExampleElement(): string {
    return `<img src="picture.paa" width="350" height="64" title="Example mouse hover text" />`;
  }

}
