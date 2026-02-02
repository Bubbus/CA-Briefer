import { Component, output } from '@angular/core';

@Component({
  selector: 'briefing-text-editor-controls',
  templateUrl: './BriefingTextEditorControls.component.html',
  styleUrls: ['./BriefingTextEditorControls.component.css']
})
export class BriefingTextEditorControlsComponent {

  markerClickEvent = output();
  imageClickEvent = output();
  fontClickEvent = output();

  onMarkerClicked() {
    this.markerClickEvent.emit();
  }

  onImageClicked() {
    this.imageClickEvent.emit();
  }

  onFontClicked() {
    this.fontClickEvent.emit();
  }
}
