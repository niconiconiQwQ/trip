import hyRequest from "@/services/request"
export function getCityAll(){
    return hyRequest.get({
        url:'/city/all'
    })
}
export function getchCategories(){
    return hyRequest.get({
        url:'/home/categories'
    })
}