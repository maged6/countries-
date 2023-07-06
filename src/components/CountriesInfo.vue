<template>
    <article class="country">

    <img class="country__img"  :src="url"/>
    <div class="country__data">
      <h2 class="country__name">{{name}}</h2>
     
      <h4 class="country__info"> Population : <span>  {{population}} </span> </h4>
      <h4 class="country__info"> Region : <span>   {{region}} </span>  </h4>
      <h4 class="country__info"> Capital : <span>  {{capital}} </span>   </h4>

    </div>


  </article>

</template>

<script>
export default {
  props: ['population', 'region', 'capital' , 'name' , 'url'],
  emits: ['url'],

};
</script>