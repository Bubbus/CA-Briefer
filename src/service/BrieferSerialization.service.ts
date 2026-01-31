import { Injectable, signal, WritableSignal } from '@angular/core';
import { BriefingSection } from '../model/BriefingSection';
import { ModelIdentitySingleton } from '../model/ModelIdentitySingleton';
import { BriefingModel } from '../model/BriefingModel';

@Injectable({
  providedIn: 'root'
})
export class BrieferSerializationService {
    
  serializeModel(model: BriefingModel): string {
    return JSON.stringify(model);
  }
    
  deserializeModel(briefingModel: string): BriefingModel {
    var parsedModel = JSON.parse(briefingModel);
    this.validateModel(parsedModel);
    return parsedModel;
  }

  validateModel(parsedModel: any) {
    throw new Error('Method not implemented.');
  }
}
