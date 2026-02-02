import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { BriefingSide } from '../../../../model/BriefingSide.enum';
import { BriefingModelService } from '../../../../service/BriefingModel.service';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'side-picker',
  templateUrl: './SidePicker.component.html',
  styleUrls: ['./SidePicker.component.css'],
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidePickerComponent {
  
  constructor(modelService: BriefingModelService) {
    this.modelService = modelService;
  }
  
  modelService: BriefingModelService;
  side = computed(() => this.modelService.model().side);
  protected briefingSide = BriefingSide;

  onSideClicked(side: BriefingSide) {
    this.modelService.setSide(side);
  }
}
