import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { BriefingModelService } from '../../../service/BriefingModel.service';
import { BriefingModel } from '../../../model/BriefingModel';
import { BriefingSide } from '../../../model/BriefingSide.enum';
import { BrieferSerializationService } from '../../../service/BrieferSerialization.service';
import { SaveButtonDialogComponent } from "./SaveButtonDialog/SaveButtonDialog.component";
import { ShowCodeDialogComponent } from "./ShowCodeDialog/ShowCodeDialog.component";
import { SqfBriefingService } from '../../../service/SqfBriefing.service';
import { SidePickerComponent } from "./SidePicker/SidePicker.component";

@Component({
  selector: 'briefing-editor-header',
  templateUrl: './BriefingEditorHeader.component.html',
  styleUrls: ['./BriefingEditorHeader.component.css'],
  imports: [SaveButtonDialogComponent, ShowCodeDialogComponent, SidePickerComponent]
})
export class BriefingEditorHeaderComponent {

  constructor() {
    this.modelService = inject(BriefingModelService);
    this.serializationService = inject(BrieferSerializationService);
    this.sqfBriefingService = inject(SqfBriefingService);
  }
  
  modelService: BriefingModelService;
  serializationService: BrieferSerializationService;
  sqfBriefingService: SqfBriefingService;

  codeToShow = signal<string>('');
  sideReadable = signal<string>('');
  codeFilepath = signal<string>('');

  saveDialog = viewChild.required<SaveButtonDialogComponent>('saveDialog');
  codeDialog = viewChild.required<ShowCodeDialogComponent>('codeDialog');

  startFromScratch() {
    var emptyModel = new BriefingModel([], BriefingSide.West);
    this.modelService.replaceModel(emptyModel);
  }

  generateSqfBriefing() {
    var model = this.modelService.model();
    var side = model.side
    var filePath = this.sqfBriefingService.getFilenameForSide(side);
    var generatedBriefing = this.sqfBriefingService.generateSqfBriefing(model);

    this.codeToShow.set(generatedBriefing);
    this.sideReadable.set(side);
    this.codeFilepath.set(filePath);

    this.codeDialog().showDialog();
  }

  showSaveDialog() {
    this.saveDialog().showDialog();
  }

  saveBrieferFile(filename: string) {
    var briefingModel = this.modelService.model();
    var serializedBriefing = this.serializationService.serializeModel(briefingModel);

    if (filename === '') {
      var timestamp = Math.floor(Date.now() / 1000);
      filename = `Briefer_File_${timestamp}.json`;
    }

    if (!filename.toLowerCase().endsWith('.json')) {
      filename = filename + '.json';
    }

    this.download(filename, serializedBriefing);
  }

  loadFromFile() {
    this.openDialogCommand(".json")
  }

  private download(filename: string, text: string) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  // Thanks to https://gist.github.com/scripting/35cadce5f0a19a26b62a2732cdea4622
  private openDialogCommand(fileTypes: string) {
    var element = document.createElement('input');
    element.setAttribute('type', 'file');
    element.setAttribute('accept', fileTypes);
    element.setAttribute('style', 'display: none;');

    element.onchange = ((event) => {
      if (element.files?.length ?? 0 > 0) {
        this.readFile(element.files![0]);
      }
    });
    
    element.click();
	}

  // Thanks to https://gist.github.com/scripting/35cadce5f0a19a26b62a2732cdea4622
  private readFile(file: File) {
    var url = window.URL.createObjectURL(file);

    var reader = new FileReader();
    reader.onload = (event) => {
      var fileText = reader.result as string | null;

      if (fileText != null) {
        this.setBrieferStateFromFile(fileText);
      }
    }

    reader.readAsText(file);
	}

  setBrieferStateFromFile(fileText: string) {
    var model: BriefingModel;
    try {
      model = this.serializationService.deserializeModel(fileText);
    }
    catch (err) {
      alert(err);
      return;
    }
    this.modelService.replaceModel(model);
  }
}
