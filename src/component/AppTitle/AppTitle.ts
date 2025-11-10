import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './AppTitle.html',
  styleUrl: './AppTitle.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTitle { }
