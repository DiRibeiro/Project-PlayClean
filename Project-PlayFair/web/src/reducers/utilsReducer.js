const INITIAL_STATE = {
    sideReportOpen: null,
    sideEventsOpen: null,
    sideCollectionsOpen: null,
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SIDEBAR_EVENTS':
            return { 
                ...state, 
                sideEventsOpen: !state.sideEventsOpen
            }
        case 'SIDEBAR_COLLECTIONS':
            return { 
                ...state, 
                sideCollectionsOpen: !state.sideCollectionsOpen
            }
        case 'SIDEBAR_REPORT':
            return { 
                ...state, 
                sideReportOpen: !state.sideReportOpen
            }
        case 'SIDEBAR_CATATRECO':
            return { 
                ...state, 
                sideCataTrecoOpen: !state.sideCataTrecoOpen
            }
        case 'LOAD':
            return {
                ...state,
                loading: action.payload
            }
        
        default:
            return state
    }
}

/*
    li class treeview > treeview menu-open
    treeview-menu display none > display block
*/