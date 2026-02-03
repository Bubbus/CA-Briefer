import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundImageService {

  public availableBackgrounds = [
    new BackgroundImage("vr-tile.jpg", "vr-goggles.png"),
    new BackgroundImage("altis-airport.jpg", "altis-flag.jpg"),
    new BackgroundImage("tanoa-map.jpg", "tanoa-flag.jpg")
  ];

  public selectedBackground = signal<BackgroundImage>(this.availableBackgrounds[0]);

  setBackground(backgroundImage: BackgroundImage) {
    this.selectedBackground.set(backgroundImage);
  }    
};

export class BackgroundImage {
  
  constructor(imageFilepath: string, iconFilepath: string) {
    this.imageFilepath = imageFilepath;
    this.iconFilepath = iconFilepath;
  }

  imageFilepath: string;
  iconFilepath: string;
};