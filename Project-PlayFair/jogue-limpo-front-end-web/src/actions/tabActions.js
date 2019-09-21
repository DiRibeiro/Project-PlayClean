export function selectTab(tabID){
    return{
        type: 'TAB_SELECTED',
        payload: tabID
    }
}

export function showTabs( ...tabIDs ){
    const tabsToShow = {}
    tabIDs.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}