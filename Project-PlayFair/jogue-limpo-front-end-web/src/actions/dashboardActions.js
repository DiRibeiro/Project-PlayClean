const BASE_URL = 'http://localhost:3001'
const DASHBOARD_FETCHED = "DASHBOARD_FETCHED"
/* Connection with server here. Now fake data is returned */

export const getDashboardData = () => {

    return dispatch => {
        fetch(`${BASE_URL}/getDashboardData`, {
            method: 'get',
            headers: {
                "Content-type": "application/json"
            }
        }).then(response => {
            response.json()
                .then(result => 
                    dispatch({
                        type: DASHBOARD_FETCHED,
                        payload: result
                    })
            );
        }).catch(error => console.log(error))
    }

}