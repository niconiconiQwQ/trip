import {defineStore} from "pinia"
import {getHotSuggests,getchCategories,getHouseList } from "@/services"
const useHome = defineStore('home',{
    state:()=>{
        return {
            hotSuggests:[],
            categories:[],
            houseList:[],
            currentPage:1,
        }
    },
    actions:{
        async fetchHotSuggests(){
            const res = await getHotSuggests()
              this.hotSuggests = res.data
        },
        async fetchCategoryData(){
            const {data} = await getchCategories();
            this.categories = data;
        },
        async fetchHouseList(){
            const {data} = await getHouseList(this.currentPage);
            this.houseList.push(...data);
            this.currentPage++;
        }
    }
})
export default useHome