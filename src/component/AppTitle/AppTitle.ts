import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-title',
  imports: [NgOptimizedImage],
  templateUrl: './AppTitle.html',
  styleUrl: './AppTitle.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTitle { }
