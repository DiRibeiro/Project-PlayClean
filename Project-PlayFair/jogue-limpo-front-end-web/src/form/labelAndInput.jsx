import React from 'react'
import Grid from '../components/Grid'

export default props => (
    <Grid cols={ props.cols }>
        <div className='form-group'>
            <label htmlFor={ props.name }><i className={`fa fa-${props.icon}`} />
                { props.label }
            </label>
            <input { ...props.input } className='form-control'
                placeholder={ props.placeholder }
                readOnly={ props.readOnly }
                type={ props.type } />
        </div>
    </Grid>
)