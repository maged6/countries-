<template>

      <div class="dropdown">
        <button class="dropbtn" @click="toggleDropDown" >Filter by Region 
     
          <font-awesome-icon icon="fa-solid fa-chevron-down" />

        </button>
  
        <div v-show="isShowDropdown" id="myDropdown" class="dropdown-content">
          <span class="filter-option"> 
            <input type="checkbox" id="allRegion" checked @click="setFilter">
            <label class="filter-option-label" for="allRegion">All Region</label>
          </span>

          <span class="filter-option"> 
            <input type="checkbox" id="africa" checked @click="setFilter">
            <label class="filter-option-label" for="africa" >Africa </label>
          </span>

          <span class="filter-option"> 
            <input type="checkbox" id="america" checked @click="setFilter">
            <label class="filter-option-label" for="america" >America </label>
          </span>

          <span class="filter-option"> 
            <input type="checkbox" id="asia" checked @click="setFilter">
            <label class="filter-option-label" for="asia" >Asia </label>
          </span>

          
          <span class="filter-option"> 
            <input type="checkbox" id="europe" checked @click="setFilter">
            <label class="filter-option-label" for="europe" >Europe </label>
          </span>
          
          <span class="filter-option">  
            <input type="checkbox" id="oceania" checked @click="setFilter">
            <label class="filter-option-label" for="oceania" >Oceania </label>
          </span>

        </div>
      </div>


  </template>
  
  <script>
  export default {
    name: "App",
    emits:['change-filter'],
    data() {
      return {
        isShowDropdown: false,
        filers:{
          allRegion: true,
          africa: true,
          america: true ,
          asia: true ,
          europe: true,
          oceania: true
        }

      };
    },
  
    methods: {
      toggleDropDown() {
        this.isShowDropdown = !this.isShowDropdown;
      },
      setFilter(event){
        const inputId = event.target.id;
        const isActive = event.target.checked;
        const updatedFilter = {
          ...this.filers,
          [inputId]: isActive
        };
        this.filers = updatedFilter;
        this.$emit('change-filter' , updatedFilter);

      }
    },
  };
  </script>
  

<style lang="scss">
  
@import '../style.scss';


</style>
