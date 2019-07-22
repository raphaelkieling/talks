<template>
  <div v-show="isActive" class="m-3">
    <slot />
  </div>
</template>

<script>
export default {
  props: ["title", "active"],
  data() {
    return {
      isActive: this.active
    };
  }
};
</script>

