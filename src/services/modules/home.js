import hyRequest from "@/services/request"
export function getHotSuggests(){
    return hyRequest.get({
        url:'/home/hotSuggests',
    })
}