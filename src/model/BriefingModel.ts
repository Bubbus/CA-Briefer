import { BriefingEntry } from "./BriefingEntry";
import { BriefingSection } from "./BriefingSection";
import { BriefingSide } from "./BriefingSide.enum";
import { GetModelIdentitySingleton, ModelIdentitySingleton } from "./ModelIdentitySingleton";

export class BriefingModel {
    
    constructor
    (
        sections: BriefingSection[] = [],
        side: BriefingSide = BriefingSide.West
    )
    {
        this.sections = sections;
        this.side = side;
    }

    sections: BriefingSection[];
    side: BriefingSide;
}

export function CreateBriefingModelFixture(modelIds: ModelIdentitySingleton) {
    var missionEntries = [
        new BriefingEntry(1, "Situation", "its atrocious"),
        new BriefingEntry(2, "Execution", "fix it")
    ];

    var intelEntries = [
        new BriefingEntry(3, "1st day", "something happened"),
        new BriefingEntry(4, "2nd day", "something else happened")
    ];

    var sections = [
        new BriefingSection(1, "Mission", missionEntries),
        new BriefingSection(2, "Intel", intelEntries)
    ]

    modelIds.setIdForType(BriefingEntry.name, 4);
    modelIds.setIdForType(BriefingSection.name, 2);

    return new BriefingModel(sections);
    
}