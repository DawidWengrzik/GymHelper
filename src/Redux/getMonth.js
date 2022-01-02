import dayjs from 'dayjs';

const getMonth = (month = dayjs().month(), year = dayjs().year()) => {

    // Here could be error but we'll see
    const daysOfMonth = dayjs(new Date(year,month,1)).daysInMonth()
    let fullMonth = new Array(daysOfMonth);

    for (let i = 1; i < daysOfMonth+1; i++) {
        fullMonth[i] = new Date(year,month,i)
    }
    return fullMonth
}

export default getMonth;