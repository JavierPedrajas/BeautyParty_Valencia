import React from 'react'


export const ComplementosBebida = (props) => {
    return(
        ( Object.entries(props.propsComplementosBebida).map((item, index) => {
            return (
            <div key={item[0]} className='component-container'>
                <label htmlFor={item[0]} className="btn-radio" 
                onClick={props.handleStoreSelected} value={item[0]}>
                    <input type="radio" id={item[0]} name='complementosBebida'
                    value={[item[0], item[1].precio, item[1].explicacion]} checked={props.isSelected === item[0]} readOnly/>
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="9"></circle>
                        <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                        <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                    </svg>
                    <span className='component-name'>{item[0]}</span>
                    <span className='component-price'></span>
                </label>
            </div>)
        }))
    )
}

export const ComplementosComida = (props) => {
    return(
        ( Object.entries(props.propsComplementosComida).map((item, index) => {
            return (
            <div key={item[0]} className='component-container'>
                <label htmlFor={item[0]} className="btn-radio" 
                onClick={props.handleStoreSelected} value={item[0]}>
                    <input type="radio" id={item[0]} name='complementosComida'
                    value={[item[0], item[1].precio, item[1].explicacion]} checked={props.isSelected === item[0]} readOnly/>
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="9"></circle>
                        <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                        <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                    </svg>
                    <span className='component-name'>{item[0]}</span>
                    <span className='component-price'></span>
                </label>
            </div>)
        }))
    )
}

export const ComplementosTodo = (props) => {
    return(
        ( Object.entries(props.propsComplementosTodo).map((item, index) => {
            return (
            <div key={item[0]} className='component-container'>
                <label htmlFor={item[0]} className="btn-radio" 
                onClick={props.handleStoreSelected} value={item[0]}>
                    <input type="radio" id={item[0]} name='complementosTodo'
                    value={[item[0], item[1].precio, item[1].explicacion]} checked={props.isSelected === item[0]} readOnly/>
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="9"></circle>
                        <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                        <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                    </svg>
                    <span className='component-name'>{item[0]}</span>
                    <span className='component-price'></span>
                </label>
            </div>)
        }))
    )
}
    