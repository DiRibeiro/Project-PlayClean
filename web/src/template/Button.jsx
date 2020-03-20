import React from 'react'

export default props => (
	<button
		type='submit'
		className='btn btn-success btnLogin'
		disabled={ props.loading ? true : false }>
		{ props.loading && (
			<i
				class='fas fa-circle-notch fa-spin'
				style={ { marginRight: '8px' }}></i>
		) }
		{ props.label }
	</button>
)