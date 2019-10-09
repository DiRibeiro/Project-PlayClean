import React from 'react'
import Grid from '../components/Grid'

export default props => (
    <Grid cols={ props.cols }>
        <div className='form-group'>
            <label htmlFor={ props.name }><i className={`fa fa-${props.icon}`} />
                { props.label }
            </label>
            <select multiple='' className='form-control ls-select'>
                <option>Osório</option>
                <option>B</option>
                <option>Osório</option>
            </select>
        </div>
    </Grid>
)