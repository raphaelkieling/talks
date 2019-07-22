<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="tab in tabs" :key="tab.id" @click="changeTab(tab)">
        <a class="nav-link" :class="{ active: tab.isActive }">{{tab.title}}</a>
      </li>
    </ul>

    <div class="tab-content">
        <slot />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.tabs = this.$children;
  },
  data: () => ({
    tabs: []
  }),
  methods: {
    changeTab(tab) {
      this.tabs.forEach(tabToFind => (tabToFind.isActive = tabToFind === tab));
    }
  }
};
</script>

