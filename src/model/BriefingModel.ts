import { BriefingEntry } from "./BriefingEntry";
import { BriefingSection } from "./BriefingSection";
import { BriefingSide } from "./BriefingSide.enum";

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

export function CreateBriefingModelFixture() {
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

    return new BriefingModel(sections);
    
}