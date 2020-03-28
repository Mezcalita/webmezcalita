<template>
  <div class="container-fluid d-flex justify-items-center align-items-center">
      <b-col>
    <vue-dropdown
      :config="config"
      @setSelectedOption="setNewSelectedOption($event);"
    ></vue-dropdown>
      </b-col>
  </div>
</template>

<script>

export default {
  name: "App",

  data: function() {
    return {
      config: {
        options: [
          {
            value: "option 1"
          },
          {
            value: "option 2"
          },
          {
            value: "option 3"
          }
        ],
        placeholder: "Menu 20",
        backgroundColor: "#cde4f5",
        textColor: "black",
       
        border: "1px solid gray",
        width: 180
      }
    };
  },
  methods: {
    setNewSelectedOption(selectedOption) {
      this.config.placeholder = selectedOption.value;
    }
  }
};
</script>
