<template>
  <div>
    <v-app-bar height="80">
      <v-img
        alt="Ecosoft logo"
        src="assets/pics/ecosoft-logo.png"
        max-height="100"
        max-width="200"
      />
      <v-spacer></v-spacer>
      <!-- mobile menu button -->
      <span class="d-flex d-sm-none">
        <v-btn @click.stop="drawer = !drawer"> Menu </v-btn>
      </span>

      <!-- desktop & tablet menu -->
      <v-toolbar-items class="d-none d-sm-flex">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          active-color="primary"
          nuxt
          :to="item.link"
        >
          <v-list-item-title
            class="text-h6"
            v-text="item.text"
          ></v-list-item-title>
        </v-list-item>
      </v-toolbar-items>
      <v-divider vertical />
      <v-btn
        class="bg-primary font-weight-bold text-button ml-3"
        elevation="2"
        rounded
        nuxt
        to="/"
        >Contact Us</v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          active-color="primary"
          nuxt
          :to="item.link"
        >
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: 1,
      drawer: false,
      items: [
        { text: "Home", link: "/" },
        { text: "Our Approach", link: "/our-approach" },
      ],
    };
  },
};
</script>
