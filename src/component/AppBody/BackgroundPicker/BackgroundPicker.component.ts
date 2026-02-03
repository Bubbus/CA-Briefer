import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { BackgroundImage, BackgroundImageService } from '../../../service/BackgroundImage.service';

@Component({
  selector: 'background-picker',
  templateUrl: './BackgroundPicker.component.html',
  styleUrls: ['./BackgroundPicker.component.css'],
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundPickerComponent {
  
  constructor(bgService: BackgroundImageService) {
    this.backgroundService = bgService;
  }
  
  backgroundService: BackgroundImageService;

  onImageClicked(bgImage: BackgroundImage) {
    this.backgroundService.setBackground(bgImage);
  }
}
