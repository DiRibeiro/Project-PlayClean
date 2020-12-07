const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

export const fullDate = value => {
    let date = new Date(new Date(value).getTime()/*  - 3*3600*1000 */)
    return `${ date.getUTCDate()} de ${ months[date.getUTCMonth()]} de ${ date.getUTCFullYear() }`
}

export const shortDate = value => {
    let date = new Date(new Date(value).getTime()/*  - 3*3600*1000 */)
    return `${ date.getUTCDate()}/${ date.getUTCMonth() +1 }/${ date.getFullYear() }`
}

export const shortDateHTML = value => {
    let date = new Date(new Date(value).getTime()/*  - 3*3600*1000 */)
    return (
        date.getFullYear() + '-'
        + ('0' + (date.getUTCMonth()+1)).slice(-2) + '-'
        + ('0' + date.getUTCDate()).slice(-2) 
    );
             
}

export const getMonth = value => months[value]