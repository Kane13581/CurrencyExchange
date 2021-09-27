<template>
  <div class="">
    <div
      class="
        shadow-2xl
        flex-col
        justify-center
        items-center
        rounded-xl
        h-full
        p-2
      "
    >
      <input
        v-model="inputValue"
        required="required"
        class="
          my-2
          border-2 border-green-200
          rounded-md
          w-3/4
          text-center
          bg-transparent
        "
        type="number"
      />

      <p class="my-2">{{ inputValue * currency }} - {{ name }}</p>

      <p>1 {{ getBase }} = {{ currency }} - {{ name }}</p>

      <div class="w-full py-2 flex justify-center">
        <button
          @click="deleteCountry(currency, name)"
          class="
            focus:outline-none
            bg-transparent
            hover:bg-red-500
            text-red-500
            font-semibold
            hover:text-white
            py-2
            px-4
            border border-red-500
            hover:border-transparent
            rounded
          "
        >
          Delete
        </button>
      </div>
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
      indexForDelete: {},
    };
  },
  methods: {
    deleteCountry(currency, name) {
      console.log(currency, name);
      this.$emit("delete-country", name);
    },

    // getCountryIndex() {
    //   this.indexForDelete = this.$store.getters.destinationIndexById(
    //     this.currency
    //   );
    //   console.log(this.currency);
    // },
  },
  // created() {
  //   this.getCountryIndex();
  // },
};
</script>
