import { Component, input } from '@angular/core';

@Component({
  selector: 'app-EditorTextListEntry',
  templateUrl: './EditorTextListEntry.component.html',
  styleUrls: ['./EditorTextListEntry.component.css']
})
export class EditorTextListEntryComponent {

  text = input.required<string>();
}
