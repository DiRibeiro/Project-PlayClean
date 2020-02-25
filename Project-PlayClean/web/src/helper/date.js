const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

export const fullDate = value => {
    let date = new Date(value)
    return `${ date.getDay() } de ${ months[date.getMonth()] } de ${ date.getFullYear() }`
}

export const shortDate = value => {
    let date = new Date(value)
    return `${ date.getDay() } de ${ date.getMonth() } de ${ date.getFullYear() }`
}

export const getMonth = value => months[value]