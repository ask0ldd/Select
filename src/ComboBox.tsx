import {useContext, useState} from 'react'
import './style/ComboBox.css'
import { SelectContext } from './contexts/SelectContext'
// import { DatasTableContext } from '../DatasTableContext'

/**
 * Component : The field containing the active option of the custom select.
 * @Component
 * @return ( <SelectComboBox/> )
 */
function ComboBox(){

    const [comboboxFocus, setComboboxFocus] = useState(false)

    const { id, labelledBy, activeOption, listbox, preset } = useContext(SelectContext)

    const comboboxStyle = {
        width: preset.width,
        background: preset.selectBackgroundColor , 
        border: "1px solid "+ preset.selectBorderColor.default,
        color: preset.selectTextColor
    }
    const comboboxFocusStyle = {
        width: preset.width,
        background: preset.selectBackgroundColor,
        border:  "1px solid "+ preset.selectBackgroundColor, 
        outline: "1px solid "+ preset.selectBorderColor.focus, 
        color: preset.selectTextColor
    }

    return(
        <span style={comboboxFocus ? comboboxFocusStyle : comboboxStyle} 
            onFocus={()=> setComboboxFocus(true)} onBlur={() => {listbox.setAsExpanded(false); setComboboxFocus(false)}} 
            onMouseDown={() => {listbox.setAsExpanded(!listbox.isExpanded)}} 
            tabIndex={0} aria-controls="customListbox" id={id} role="combobox" 
            aria-haspopup="listbox" aria-activedescendant={activeOption.get().value} aria-labelledby={labelledBy}
            aria-expanded={listbox.isExpanded} className={listbox.isExpanded ? "selectLabel selectLabel-active" : "selectLabel"}
        >
            {activeOption.get().label}
            {/*<img alt="dropdown arrow" className={listbox.isExpanded ? "customSelectOpen" : "customSelectArrow"} src="./icons/select-arrow.svg"/>*/}
            <svg className={listbox.isExpanded ? "customSelectOpen" : "customSelectArrow"} width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.88 10.5466L8 4.43996L14.12 10.5466L16 8.66663L8 0.66663L1.64355e-07 8.66663L1.88 10.5466Z" fill={preset.arrowColor}/>
            </svg>
        </span>
    )
}

export default ComboBox