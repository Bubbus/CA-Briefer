import { ChangeDetectionStrategy, Component, computed, effect, EffectRef, inject, output, signal } from '@angular/core';
import { BriefingSectionEditorComponent } from "../Section/BriefingSectionEditor/BriefingSectionEditor.component";
import { BriefingSectionListEditorComponent } from "../Section/BriefingSectionListEditor/BriefingSectionListEditor.component";
import { BriefingModelService } from '../../../service/BriefingModel.service';
import { BriefingSection } from '../../../model/BriefingSection';
import { BriefingEditorHeaderComponent } from "../BriefingEditorHeader/BriefingEditorHeader.component";

@Component({
  selector: 'briefing-editor',
  templateUrl: './BriefingEditor.component.html',
  styleUrls: ['./BriefingEditor.component.css'],
  imports: [BriefingSectionEditorComponent, BriefingSectionListEditorComponent, BriefingEditorHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BriefingEditorComponent {

  constructor() {
    this.modelService = inject(BriefingModelService);

    this.itemsChangedEffect = effect(() => {
      var selectedId = this.selectedSectionId();
      if (selectedId == null) { return; }
      var sections = this.modelService.model().sections;
      
      if (sections.find(sec => sec.id === this.selectedSectionId()) == null) {
        this.selectedSection.set(null);
      }
    });
  }
  
  modelService: BriefingModelService;
  selectedSectionId = computed(() => this.selectedSection()?.id);
  selectedSection = signal<BriefingSection | null>(null);
  private itemsChangedEffect: EffectRef;

  sectionSelected(sectionId: number) {
    var selectedObj = this.modelService.model().sections.find(sec => sec.id === sectionId) ?? null;
    this.selectedSection.set(selectedObj);
  }

  public addNewSectionDelegate = () => {return this.addNewSection()};
  addNewSection(): BriefingSection {
    return this.modelService.addSection();
  }

  printModel() {
    console.log(this.modelService.model());
  }

  removeSelectedSection() {
    var selectedId = this.selectedSectionId();
    if (selectedId == null) {
      return;
    };

    this.modelService.removeSection(selectedId);
    this.selectedSection.set(null);
  }
}
