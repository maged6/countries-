<template>


  

    <form class="search">

        <div class="live-search">
          
  <span class="search-icons">
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    
  </span>
          <input
            class="input-search"
            @input="search"
            :value="searchTerm"
            type="text"
            placeholder="Search for a country..."
            />

        </div>
 
    </form>
</template>

<script> 
export default {
  props: ['searchTerm'],
  emits: ['search'],
  methods: {
    search(event) {
      this.$emit('search', event.target.value);
    },
  },
}

</script>


<style lang="scss">
  
@import '../style.scss';


</style>
