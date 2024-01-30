import SelectPresetClass from "./SelectPresetClass";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const basePreset = new SelectPresetClass(
    { // width font
        width : 'fit-content',
        font : 'Jost',
        labelTextColor: "#454545",
        selectBackgroundColor: "#f6f6f6",
        selectTextColor: "#454545",
        hoverOptionTextColor: "#FFFFFF",
        optionsContainerBackgroundColor: "#f6f6f6",
        optionsContainerBorderColor: "#c5c5c5",
        arrowColor: "#213547",
        selectBorderColor: { default: "#c5c5c5", focus: "#0078d7" },
        optionBackgroundColor: { active: "#dfdfdf", hover: "#0078d7" }
    }
)