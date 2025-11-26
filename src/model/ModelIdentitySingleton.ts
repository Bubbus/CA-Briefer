import { model } from "@angular/core";

export class ModelIdentitySingleton {

  constructor() { }

  private typeIdsMap = new Map<string, number>();

  public getIdForType(typeName: string): number {

    var typeId = this.typeIdsMap.get(typeName) ?? 0;
    typeId = typeId + 1;

    this.typeIdsMap.set(typeName, typeId);

    console.log(this.typeIdsMap);

    return typeId;
  }

  public setIdForType(typeName: string, newId: number): void {
    this.typeIdsMap.set(typeName, newId);
  }

  public resetAllIds(): void {
    this.typeIdsMap = new Map<string, number>();
  }

}

export const modelIdSingleton = new ModelIdentitySingleton();

export function GetModelIdentitySingleton(): ModelIdentitySingleton {
  return modelIdSingleton;
}