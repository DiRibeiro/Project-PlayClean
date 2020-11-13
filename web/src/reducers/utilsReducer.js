const INITIAL_STATE = {
    sideReportOpen: null,
    sideEventsOpen: null,
    sideCollectionsOpen: null,
    sideCataTrecoOpen: null,
    sideLeiOpen: null,
    sideColetasOpen: null,
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
        case 'SIDEBAR_LEI':
            return { 
                ...state, 
                sideLeiOpen: !state.sideLeiOpen
            }
        case 'SIDEBAR_COLETAS':
            return { 
                ...state, 
                sideColetasOpen: !state.sideColetasOpen
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