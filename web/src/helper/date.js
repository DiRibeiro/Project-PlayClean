const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
const days = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

export const fullDate = value => {
    let date = new Date(value)
    return `${ days[date.getUTCDate()]} de ${ months[date.getUTCMonth()]} de ${ date.getUTCFullYear() }`
}

export const shortDate = value => {
    let date = new Date(value)
    return `${ date.getDate()} de ${ date.getMonth() } de ${ date.getFullYear() }`
}

export const getMonth = value => months[value]