const INITIAL_STATE = {
    bookmark: {
        month: '',
        totalReports: null,
        closedReports: null,
        openReports: null
    },
    lineChart: {
        /* All months in the year */
        data: []
    },
    // doughnutChart: {
    //     labels: ['Centro', 'Borúsia', 'Atlântida Sul', 'Serramar', 'Laranjeiras', 'Mariápolis', 'Palmital'],
    //     data: []
    // }, 
    map: {
        list: [{
            anchor: {
                lat: '',
                long: ''
            }
        }]
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DASHBOARD_FETCHED':
            return { ...state, ...action.payload }
        default:
            return state
    }
}