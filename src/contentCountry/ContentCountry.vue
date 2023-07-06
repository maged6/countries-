<template> 
<section> 
  <div class="contries-search">

    <life-search @search="updateSearch" :search-term="activeSearch"></life-search>
 
<Filter-region @change-filter="setFilter"> </Filter-region>

</div>
</section>

<section> 

  <div class="countries">

<countries-info v-for="country in filterCountry "
:key="country.name"
:name="country.name"
:population="country.population"
:region="country.region"
:capital="country.capital"
:url="country.flags.png"
@click="countryDetail(country)"
> 


</countries-info>



<div > 
  <country-details  
:countryDetail="countryData"
v-if="alertIsVisible"
@close="hideAlert"
:countries="countries"
>

</country-details>
</div>



</div>

</section>


</template>
  
<script>
import countriesData from '../../data/data.json';
import CountriesInfo from '../components/CountriesInfo.vue';
import countryDetails from '../components/CountriesDetails.vue';
import LifeSearch from '../components/lifeSearch.vue';
import FilterRegion from '../components/filterRegion.vue';
  
  
import  'core-js';


export default {

  components:{
    CountriesInfo,
    countryDetails,    
    LifeSearch,
    FilterRegion,

  
    
},

  data() {
        return {
           countries: [],
            countryData :[],
            alertIsVisible: false,
            activeSearch:'',
            activeFilers: {
                allRegion: true,
                africa: true,
                america: true ,
                asia: true ,
                europe: true,
                oceania: true,
              

              }
      }
        },
        computed:{
          filterCountry(){
            
            return this.countries.filter((country) => {
              if(this.activeSearch){
                return country.name.toLowerCase().includes(this.activeSearch)
              } 
              if(this.activeFilers.allRegion && country.region){
                return true
              }
              if(this.activeFilers.africa && country.region.includes('Africa')){
               return country.region.includes('Africa')
              }
              if(this.activeFilers.oceania && country.region.includes('Oceania')){
                return this.activeFilers.oceania = true
              }
              if(this.activeFilers.europe &&  country.region.includes('Europe')){
                return true
              }
              if(this.activeFilers.america &&  country.region.includes('Americas')){
                return true
              }
             if(this.activeFilers.asia && country.region.includes('Asia')){
                return true
              }
       
             return false 
              

            });
          } , 


   
        },
        methods:{
        countryDetail(country){
    
            this.alertIsVisible = true;

             this.countryData =  JSON.parse(JSON.stringify(country))
    
            },
            hideAlert(){
              this.alertIsVisible = false;
            },
            setFilter(updatedFilter){
              this.activeFilers = updatedFilter;
            },
            updateSearch(val){
              this.activeSearch = val

            }
    

        },
mounted(){
  this.countries = JSON.parse(JSON.stringify(countriesData))

}
}


</script>

<style lang="scss">
  
@import '../style.scss';


</style>
