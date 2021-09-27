<template>
  <div class="w-full flex justify-center md:justify-end">
    <div class="flex h-10 mt-2" v-if="toggleAddCountry">
      <button
        @click="showAddCountry"
        class="
          w-36
          focus:outline-none
          bg-transparent
          hover:bg-blue-500
          text-blue-700
          font-semibold
          hover:text-white
          py-2
          px-4
          border border-blue-500
          hover:border-transparent
          rounded
        "
      >
        Add country
      </button>
    </div>
    <div v-else class="w-96">
      <form @submit.prevent="addNewCountry">
        <div class="2xl:flex 2xl:justify-end mt-2">
          <div
            class="
              flex
              justify-between
              sm:flex-row
              rounded-none
              md:rounded
              md:mt-0
            "
          >
            <button
              @click="cancelAddCountry"
              class="
                w-24
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
              Cancel
            </button>
            <button
              class="
                w-24
                focus:outline-none
                bg-transparent
                hover:bg-blue-500
                text-blue-700
                font-semibold
                hover:text-white
                ml-2
                py-2
                px-4
                border border-blue-500
                hover:border-transparent
                rounded
              "
            >
              Add
            </button>
          </div>
          <div class="flex justify-start mt-1 mr-2">
            <input
              v-model="countryIn"
              class="
                focus:outline-none
                w-96
                bg-gray-200
                hover:bg-gray-300
                text-blue-700
                font-semibold
                hover:text-white
                py-2
                px-4
                border
                hover:border-transparent
                rounded
              "
              type="text"
              placeholder="Country Initials"
            />
          </div>
          <div class="flex justify-start mt-1 mr-2">
            <input
              v-model="countryRate"
              class="
                focus:outline-none
                w-96
                bg-gray-200
                hover:bg-gray-300
                text-blue-700
                font-semibold
                hover:text-white
                py-2
                px-4
                border
                hover:border-transparent
                rounded
              "
              type="text"
              placeholder="Country Rate"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewCountry",
  data() {
    return {
      countryIn: "",
      countryRate: "",
      toggleAddCountry: true,
    };
  },
  methods: {
    addNewCountry() {
      const newAddedCountry = {
        name: this.countryIn,
        rate: this.countryRate,
      };
      this.$store.dispatch("addNewCountry", newAddedCountry);
    },
    showAddCountry() {
      this.toggleAddCountry = !this.toggleAddCountry;
    },
    cancelAddCountry() {
      this.toggleAddCountry = !this.toggleAddCountry;
    },
  },
};
</script>