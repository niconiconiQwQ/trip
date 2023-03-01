import {defineStore} from "pinia"
import {getHotSuggests,getchCategories } from "@/services"
const useHome = defineStore('home',{
    state:()=>{
        return {
            hotSuggests:[],
            categories:[]
        }
    },
    actions:{
        async fetchHotSuggests(){
            console.log('first')
            const res = await getHotSuggests()
              this.hotSuggests = res.data
        },
        async fetchCategoryData(){
            const {data} = await getchCategories();
            this.categories = data;
        }
    }
})
export default useHome