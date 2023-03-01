import { defineStore } from "pinia"
import { getCityAll} from "@/services";
const useCityStore = defineStore("city",{
    state:()=>({
        allCities:{},
        currentCity:{
            cityName:'广州',
            categories:[]
        }
    }),
    actions:{
        async fetchAllCitiesData(){
            const { data } = await getCityAll();
            this.allCities = data;
        },

    }
})
export default useCityStore