import './style/OptionsList.css'
import { useContext } from 'react'
import Option from './Option'
import { SelectContext } from './contexts/SelectContext'

/**
 * Component : The list of options displayed into the custom select.
 * @Component
 * @return ( <OptionsList/> )
 */
function OptionsList(){

    const { id, options, listbox, preset } = useContext(SelectContext)
    
    const optionsContainerStyle = {background : preset.optionsContainerBackgroundColor, border : '1px solid ' + preset.optionsContainerBorderColor}

    return(
        listbox.isExpanded ? 
        <ul style={optionsContainerStyle} onClick={(e) => {e.preventDefault();}} tabIndex={-1} id="customListbox" aria-labelledby="customSelectLabel" className="selectOptionsContainer" role="listbox">
            {options.map((option, index) => <Option key={id+'-option-'+index} index={index} option={option}/>)}
        </ul> 
        : <></>
    )
}

export default OptionsList