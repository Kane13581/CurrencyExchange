<template>
  <div class="home">
    <div class="p-4 mb-10 mt-4 border-2 border-gray">
      <p class="bolder font-serif text-2xl">Today's date:</p>
      {{ getDate }}
    </div>
    <div class="mb-8">
      <AddNewCountry />
    </div>

    <div
      class="
        grid
        justify-items-center
        sm:grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-4
        gap-12
      "
    >
      <div
        class="w-3/5 h-32 p-2"
        v-for="(currency, name, index) in newData"
        :key="index"
      >
        <Currency :currency="currency" :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import Currency from "./Currency.vue";
import AddNewCountry from "../components/AddNewCountry.vue";
import DeleteModal from "../components/DeleteModal.vue";

export default {
  name: "Home",
  components: {
    Currency,
    AddNewCountry,
    DeleteModal,
  },
  data() {
    return {
      inputValue: 0,
    };
  },
  computed: {
    newData() {
      return this.$store.getters.newData;
    },
    getDate() {
      return this.$store.getters.setDate;
    },
    getSymbols() {
      return this.$store.getters.symbols;
    },
    getBase() {
      return this.$store.getters.setBase;
    },
  },
  methods: {},
  mounted: function () {
    this.$store.dispatch("getData");
    this.$store.dispatch("getData2");
  },
};
</script>



