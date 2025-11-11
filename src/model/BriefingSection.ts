import { BriefingEntry } from "./BriefingEntry";

export class BriefingSection {

    constructor(name:string = "", entries:BriefingEntry[] = []) {
        this.name = name;
        this.entries = entries;
    }

    name: string;
    entries: BriefingEntry[];
}
