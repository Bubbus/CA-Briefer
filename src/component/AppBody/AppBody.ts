import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { BriefingEditorComponent } from "../Briefing/BriefingEditor/BriefingEditor.component";
import { BriefingEditorHeaderComponent } from "../Briefing/BriefingEditorHeader/BriefingEditorHeader.component";
import { BackgroundPickerComponent } from "./BackgroundPicker/BackgroundPicker.component";
import { BackgroundImageService } from '../../service/BackgroundImage.service';

@Component({
  selector: 'app-body',
  imports: [BriefingEditorComponent, BriefingEditorHeaderComponent, BackgroundPickerComponent],
  templateUrl: './AppBody.html',
  styleUrl: './AppBody.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBody { 
  
  constructor(bgService: BackgroundImageService) {
    this.backgroundService = bgService;
  }
  
  backgroundService: BackgroundImageService;
  backgroundStyle = computed(() => `background-image: url("${this.backgroundService.selectedBackground().imageFilepath}");`);
}
