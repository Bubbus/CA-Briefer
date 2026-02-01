import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BriefingEditorComponent } from "../Briefing/BriefingEditor/BriefingEditor.component";
import { BriefingEditorHeaderComponent } from "../Briefing/BriefingEditorHeader/BriefingEditorHeader.component";

@Component({
  selector: 'app-body',
  imports: [BriefingEditorComponent, BriefingEditorHeaderComponent],
  templateUrl: './AppBody.html',
  styleUrl: './AppBody.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBody { }
