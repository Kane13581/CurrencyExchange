<template>
   <div class="flex justify-center items-center border-4 border-gray-500 rounded-xl w-8/10 h-32 p-2">
        <p>1 {{ getBase }} = {{ name }} - {{ currency }} </p>
    </div>
</template>

<script>

export default {
   name: "Currency",
  components: {
  },  
  props: {
      currency: null,
      name: null,
      base: null,
  },
  computed: {
    getBase() {
      return this.$store.getters.setBase;
    },
    getSymbols() {
      return this.$store.getters.symbols;
    },
    newData() {
      return this.$store.getters.newData;
    },
  }
}
</script>
