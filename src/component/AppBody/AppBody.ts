import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BriefingSectionEditorComponent } from "../BriefingSectionEditor/BriefingSectionEditor.component";
import { BriefingTextEditorComponent } from "../BriefingTextEditor/BriefingTextEditor.component";

@Component({
  selector: 'app-body',
  imports: [BriefingSectionEditorComponent, BriefingTextEditorComponent],
  templateUrl: './AppBody.html',
  styleUrl: './AppBody.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBody { }
