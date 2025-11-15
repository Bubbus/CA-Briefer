import { BriefingEntry } from "./BriefingEntry";

export class BriefingSection {

    constructor(id:number, name:string = "", entries:BriefingEntry[] = []) {
        this.id = id;
        this.name = name;
        this.entries = entries;
    }

    id: number;
    name: string;
    entries: BriefingEntry[];
}
