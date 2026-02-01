import { ChangeDetectionStrategy, Component, computed, effect, EffectRef, inject, signal, viewChild } from '@angular/core';
import { BriefingSectionEditorComponent } from "../Section/BriefingSectionEditor/BriefingSectionEditor.component";
import { BriefingSectionListEditorComponent } from "../Section/BriefingSectionListEditor/BriefingSectionListEditor.component";
import { BriefingModelService } from '../../../service/BriefingModel.service';
import { BriefingSection } from '../../../model/BriefingSection';

@Component({
  selector: 'briefing-editor',
  templateUrl: './BriefingEditor.component.html',
  styleUrls: ['./BriefingEditor.component.css'],
  imports: [BriefingSectionEditorComponent, BriefingSectionListEditorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BriefingEditorComponent {

  constructor() {
    this.modelService = inject(BriefingModelService);

    this.itemsChangedEffect = effect(() => {
      var selectedId = this.selectedSectionId();
      if (selectedId == null) { return; }
      var sections = this.modelService.model().sections;
      
      if (
        sections.length === 0 
        || sections.find(sec => sec.id === this.selectedSectionId()) == null
      ) {
        this.sectionList().selectItem(null);
      }
    });
  }
  
  modelService: BriefingModelService;
  selectedSectionId = computed(() => this.selectedSection()?.id);
  selectedSection = computed(() => this.sectionList().selectedItem());
  
  private sectionList = viewChild.required<BriefingSectionListEditorComponent>('sectionList');
  private itemsChangedEffect: EffectRef;

  public addNewSectionDelegate = () => {return this.addNewSection()};
  addNewSection(): BriefingSection {
    return this.modelService.addSection();
  }

  removeSelectedSection() {
    var selectedId = this.selectedSectionId();
    if (selectedId == null) {
      return;
    };

    this.modelService.removeSection(selectedId);
    this.sectionList().selectItem(null);
  }
}
