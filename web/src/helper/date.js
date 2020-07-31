const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

export const fullDate = value => {
    console.log(value)
    let date = new Date(new Date(value).getTime() - 3*3600*1000)
   
    return `${ date.getUTCDate()} de ${ months[date.getUTCMonth()]} de ${ date.getUTCFullYear() }`
}

export const shortDate = value => {
    let date = new Date(new Date(value).getTime() - 3*3600*1000)
    return `${ date.getUTCDate()}/${ date.getUTCMonth() + 1 }/${ date.getFullYear() }`
}

export const getMonth = value => months[value]