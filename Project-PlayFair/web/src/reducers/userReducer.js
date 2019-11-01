const INITIAL_STATE = {
    personalInfo: {
        _id: '',
        firstName: '',
        lastName: '',
        cpf: '',
        phone1: '',
        email: '',
        reports: [],
        animalsAdoption: [],
        type: '',
        img: '../img/no_perfil_image_2.png'
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USER_FETCHED':
            return { 
                ...state, 
                personalInfo: {
                    _id: action.payload._id,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    cpf: action.payload.cpf,
                    phone1: action.payload.phone1,
                    email: action.payload.email,
                    reports: action.payload.reports,
                    animalsAdoption: action.payload.animalsAdoption,
                    type: action.payload.type,
                    img: '../img/no_perfil_image_2.png'
                }
            }

        default:
            return state
    }
}