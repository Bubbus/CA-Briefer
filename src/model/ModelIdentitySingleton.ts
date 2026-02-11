import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ModelIdentitySingleton {

  constructor() { }

  private typeIdsMap = new Map<string, number>();

  public getIdForType(typeName: string): number {

    var typeId = this.typeIdsMap.get(typeName) ?? 0;
    typeId = typeId + 1;

    this.typeIdsMap.set(typeName, typeId);

    return typeId;
  }

  public setIdForType(typeName: string, newId: number) {
    this.typeIdsMap.set(typeName, newId);
  }

  public resetAllIds() {
    this.typeIdsMap = new Map<string, number>();
  }
}

export const modelIdSingleton = new ModelIdentitySingleton();

export function GetModelIdentitySingleton(): ModelIdentitySingleton {
  return modelIdSingleton;
}