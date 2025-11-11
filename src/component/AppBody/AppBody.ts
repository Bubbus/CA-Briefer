import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BriefingEditorComponent } from "../Briefing/BriefingEditor/BriefingEditor.component";

@Component({
  selector: 'app-body',
  imports: [BriefingEditorComponent],
  templateUrl: './AppBody.html',
  styleUrl: './AppBody.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBody { }
