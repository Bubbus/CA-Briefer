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
        new BriefingEntry("Situation", "its atrocious"),
        new BriefingEntry("Execution", "fix it")
    ];

    var intelEntries = [
        new BriefingEntry("1st day", "something happened"),
        new BriefingEntry("2nd day", "something else happened")
    ];

    var sections = [
        new BriefingSection("Mission", missionEntries),
        new BriefingSection("Intel", intelEntries)
    ]

    return new BriefingModel(sections);
    
}