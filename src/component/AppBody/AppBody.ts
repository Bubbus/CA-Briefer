import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { BriefingEditorComponent } from "../Briefing/BriefingEditor/BriefingEditor.component";
import { BriefingEditorHeaderComponent } from "../Briefing/BriefingEditorHeader/BriefingEditorHeader.component";
import { BackgroundPickerComponent } from "./BackgroundPicker/BackgroundPicker.component";
import { BackgroundImageService } from '../../service/BackgroundImage.service';
import { BrieferSerializationService } from '../../service/BrieferSerialization.service';
import { BriefingModelService } from '../../service/BriefingModel.service';
import { HttpClient } from '@angular/common/http';
import { BriefingModel } from '../../model/BriefingModel';

@Component({
  selector: 'app-body',
  imports: [BriefingEditorComponent, BriefingEditorHeaderComponent, BackgroundPickerComponent],
  templateUrl: './AppBody.html',
  styleUrl: './AppBody.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBody implements OnInit {

  backgroundStyle = computed(() => `background-image: url("${this.backgroundService.selectedBackground().imageFilepath}");`);
  private backgroundService = inject(BackgroundImageService);
  private serializationService = inject(BrieferSerializationService); 
  private modelService = inject(BriefingModelService); 
  private httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.httpClient
    .get("default-briefing.json", {responseType: "text"})
    .subscribe(result => {
      var defaultModel = this.serializationService.deserializeModel(result as string);
      this.modelService.replaceModel(defaultModel);
    });
  }  
}
