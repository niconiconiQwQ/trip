import hyRequest from "@/services/request"
export function getHotSuggests(){
    return hyRequest.get({
        url:'/home/hotSuggests',
    })
}
export function getHouseList(page){
    return hyRequest.get({
        url:'/home/houselist',
        params:{
            page
        }
    })
}