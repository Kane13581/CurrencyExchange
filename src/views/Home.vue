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
        gap-12 gap-y-24
      "
    >
      <div
        class="h-32 p-2"
        v-for="(currency, name, index) in newData"
        :key="index"
      >
        <Currency
          @delete-country="deleteCountry"
          :currency="currency"
          :name="name"
        />
      </div>
    </div>
    <DeleteModal
      v-if="showDeleteModal"
      @cancel-delete="cancelDelete"
      @confirm-delete="confirmDelete"
    />
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
      showDeleteModal: false,
      nameForDelete: "",
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
  methods: {
    confirmDelete() {
      this.$store.dispatch("deleteCountry", this.nameForDelete);
      this.nameForDelete = "";
      this.showDeleteModal = !this.showDeleteModal;
    },
    deleteCountry(name) {
      this.showDeleteModal = !this.showDeleteModal;
      this.nameForDelete = name;
    },
    cancelDelete() {
      this.showDeleteModal = !this.showDeleteModal;
    },
  },
  mounted: function () {
    this.$store.dispatch("getData");
  },
};
</script>



