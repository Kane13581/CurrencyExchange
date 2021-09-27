<template>
  <div class="">
    <div
      class="
        shadow-2xl
        flex-col
        justify-center
        items-center
        border-2 border-blue-200
        rounded-xl
        w-3/5
        h-32
        p-2
      "
    >
      <input
        v-model="inputValue"
        required="required"
        class="my-2 border-2 w-3/4 text-center bg-transparent"
        type="number"
      />

      <p class="my-2 border-2">{{ inputValue * currency }} - {{ name }}</p>

      <p>1 {{ getBase }} = {{ currency }} - {{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Currency",
  components: {},
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
  },
  data() {
    return {
      inputValue: 0,
    };
  },
};
</script>
