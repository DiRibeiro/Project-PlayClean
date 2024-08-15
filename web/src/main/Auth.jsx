// import '../utils/dependences'
import '../utils/custom.css'

import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {Circles} from 'react-loader-spinner'

import Routes from './Routes'
import Authenticate from '../reports/Authenticate'
import { validatedToken } from '../actions/authActions'

const AuthOrApp = () => {
	const dispatch = useDispatch()

	const auth = useSelector(state => state.auth)
	const user = useSelector(state => state.user.personalInfo)

	useEffect(() => {
		if (auth.user) 
			dispatch(validatedToken(auth.user))
	}, [])

	if (auth.user && auth.validToken) {
		axios.defaults.headers.common['authorization'] = auth.user
		axios.defaults.headers.common['_id'] = user._id

		return <Routes />
    } else if (!auth.user) 
        return <Authenticate />
		
	else
		return (
			<Circles
				type='Oval'
				color='#00BFFF'
				height={100}
				width={100}
				style={{
					position: 'absolute',
					left: '50%',
					top: '40%',
					marginLeft: '-50px'
				}}
			/>
		)
}

export default AuthOrApp
