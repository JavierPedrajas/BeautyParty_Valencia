import React from 'react'
import './extras.css'

export const ExtrasAnfitrion = (props) => {
    return(
        ( Object.entries(props.propsExtrasAnfitrion).map((item, index) => {
            return (
            <div className='component-container-extra' key={item[0]}>
                <div className='component-container'>
                    <div className='wrapperCheckbox'>
                        <div className="checkboxWrapper">
                            <input type="checkbox" id={item[0]} 
                            defaultChecked={props.isSelected === item[0]}
                            name='extrasAnfitrion'
                            onClick={props.handleStoreSelected} 
                            value={[item[0], item[1].precio, item[1].explicacion]}
                            />
                            <label htmlFor={item[0]}>
                                <svg className="checkmark" width="56" height="56">
                                    <path d="m25,36 l14,-16" className='stroke27'></path>
                                    <path d="m25,36 l-8,-9" className='stroke11'></path>
                                </svg>
                                <svg className="cross" width="56" height="56">
                                    <path d="m28,28 l-8,-8" className='stroke13'></path>
                                    <path d="m28,28 l8,8" className='stroke13'></path>
                                    <path d="m28,28 l-8,8" className='stroke13'></path>
                                    <path d="m28,28 l8,-8" className='stroke13'></path>
                                </svg>
                            </label>
                        </div>
                    </div>
                    <span className='component-name-extras'>{item[0]}</span>
                    <span className='component-price'></span>
                </div>
                <div className='explanation-extra'>
                    {item[1].explicacion}
                </div>
            </div>)
        }))
    )
}


export const ExtrasEspectaculo = (props) => {
    return(
        ( Object.entries(props.propsExtrasEspectaculo).map((item, index) => {
            return (
            <div className='component-container-extra' key={item[0]}>
                <div className='component-container'>
                    <div className='wrapperCheckbox'>
                        <div className="checkboxWrapper">
                            <input type="checkbox" id={item[0]} 
                                defaultChecked={props.isSelected === item[0]}
                                onClick={props.handleStoreSelected}
                                name='extrasEspectaculo' 
                                value={[item[0], item[1].precio, item[1].explicacion]
                                }
                            />
                            <label htmlFor={item[0]}>
                                <svg className="checkmark" width="56" height="56">
                                    <path d="m25,36 l14,-16" className='stroke27'></path>
                                    <path d="m25,36 l-8,-9" className='stroke11'></path>
                                </svg>
                                <svg className="cross" width="56" height="56">
                                    <path d="m28,28 l-8,-8" className='stroke13'></path>
                                    <path d="m28,28 l8,8" className='stroke13'></path>
                                    <path d="m28,28 l-8,8" className='stroke13'></path>
                                    <path d="m28,28 l8,-8" className='stroke13'></path>
                                </svg>
                            </label>
                        </div>
                    </div>
                    <span className='component-name-extras'>{item[0]}</span>
                    <span className='component-price'></span>
                </div>
                <div className='explanation-extra'>
                    {item[1].explicacion}
                </div>
            </div>)
        }))
    )
}