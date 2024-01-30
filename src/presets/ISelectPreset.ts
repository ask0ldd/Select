export interface ISelectPreset {
    width : string
    font : string
    labelTextColor: string
    selectBackgroundColor: string
    selectTextColor:  string
    selectBorderColor: {default : string, focus : string}
    optionsContainerBackgroundColor : string
    optionsContainerBorderColor : string
    optionBackgroundColor : {active : string, hover : string}
    hoverOptionTextColor : string
    arrowColor : string
}