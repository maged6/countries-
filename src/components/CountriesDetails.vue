<template> 



<div class="country__in" > 
    <div v-if="isLoading">  
<base-spinner> </base-spinner>
</div>

    <div class="country" v-else> 



<a class="btn" @click="closeDialog"> 
    <font-awesome-icon icon="fa-regular fa-circle-xmark" />

</a>



    <div class="country__img">
        <img class="img"  :src="countryInfo.flag" /> 
    
    </div>
    
        <div class="country__data" >


            <h2 class="country__name"  >{{countryInfo.name }}</h2>
    
                <div  class="info"> 
                        <h4 class="country__info" v-if="countryInfo.nativeName" > NativeName : <span> {{countryInfo.nativeName }} </span> </h4>
                        <h4 class="country__info" v-if="countryInfo.population"> Population : <span> {{ countryInfo.population }}  </span> </h4>
                        <h4 class="country__info" v-if="countryInfo.region"> Region : <span> {{  countryInfo.region}}  </span>  </h4>
                        <h4 class="country__info" v-if="countryInfo.subregion"> Sub Region : <span> {{  countryInfo.subregion}} </span>  </h4>
                        <h4 class="country__info" v-if="countryInfo.capital"> Capital : <span> {{ countryInfo.capital}} </span>   </h4>
                        <h4 class="country__info" v-if="countryInfo.topLevelDomain"> Top Level Domain : <span>{{  countryInfo.topLevelDomain[0]}}</span>   </h4>
                        <h4 class="country__info" v-if="countryInfo.currencies"> currencies : <span>{{countryInfo.currencies[0].name }} </span>   </h4>
                        <h4 class="country__info" v-if="countryInfo.timezones"> Timezones : <span>{{ countryInfo.timezones[0]}} </span>   </h4>
                        <h4 class="country__info" v-if="countryInfo.area"> Area : <span>{{ countryInfo.area}} </span>   </h4>
                        <h4 class="country__info" v-if="countryInfo.languages"> languages : <span>{{ countryInfo.languages[0].nativeName}} </span>   </h4>
                </div>
    
            <h3 class="country__borders" 
            v-if="countryInfo.borders"  >
                 Borders country :
                 <button class="btn__borders"  
                 v-for="(borders , index) in borderNameArray" 
                 :key="index"
                 @click="getCountries(borders)"
                 
                 >
                {{ borders}}
                 </button> 
                 </h3>

      </div>
    </div>

    </div> 

    </template>
<script>
// import axios from "axios";
import BaseSpinner from './BaseSpinner.vue';

export default {

props:['countryDetail' , 'countries'],
emits: ['close' ],
components:{
    BaseSpinner
},

data(){
    return{
        isLoading: false ,
        borderName:[],
        borderNameArray: [],
        countryInfo:[],
        countryInfoBorder : [],

    }
},


  methods: {
    closeDialog() {
        this.$emit('close');
        },
        



  async  getCountries(countryCode) {
    this.isLoading = true;
        await fetch(`https://restcountries.com/v3.1/name/${countryCode}`)
        .then( (response) => {
                if(response.ok){
                    return response.json();
                    }
                

            })
            .then( (data) => {
            this.countryInfoBorder = {
                flag:  data[0].flags.png,
                name: data[0].name.common,
                nativeName: data[0].name.official,
                region : data[0].region,
                population : data[0].population,
                subregion : data[0].subregion ,
                capital : data[0].capital[0] ,
                topLevelDomain : data[0].cca2,
                alpha3Code : data[0].cca3,
                // currencies : data[0].currencies,
                timezones: data[0].timezones,
                area :  data[0].area, 
                // language : data[0].language, 
                borders : data[0].borders
            } ;
            this.countryInfo = this.countryInfoBorder;
            this.isLoading = false;
                });
           

        } ,
 

    codeToName(countryBorders){   
                    if(countryBorders)  {  
                    JSON.parse(JSON.stringify(countryBorders)).map((border) => { 
                        this.borderName =  this.countries.filter(country => {
                            return  country.alpha3Code == border 
                        })
         
                      this.borderNameArray.push(this.borderName[0].name )

                    
                      console.log(this.countryInfoBorder.borders)
                        
                    })}
                },
            
}, 

mounted(){
    this.countryInfo = this.countryDetail 
    this.codeToName(this.countryInfo.borders)

}


    };

    </script>

<style lang="scss">
  
@import '../style.scss';


</style>