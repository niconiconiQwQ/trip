import dayjs from "dayjs";

export function formatMonthDay(data){
    return dayjs(data).format('MM月DD日')
}
export function diffDate(startDate,endDate){
    return dayjs(endDate).diff(startDate,'day') 
}