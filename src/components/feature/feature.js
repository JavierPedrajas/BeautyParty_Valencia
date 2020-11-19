import React from 'react'
import './feature.css'


const feature = (props) => {
     return (  
        <div className='feature-main'>
            <div className='icon-box'>
                {props.icon}
            </div>
            <div className='feature-textbox'>
                <h2 className='feature-title'>{props.title}</h2>
                <p className='feature-text'>{props.content}</p>
            </div>
        </div>
    )
}

export default feature