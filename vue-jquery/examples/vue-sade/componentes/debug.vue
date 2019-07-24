<template>
  <pre v-highlightjs="stateString" class="rounded-lg"><code class="json"></code></pre>
</template>

<script>
export default {
  inject: ["state"],
  computed: {
    stateString() {
      return JSON.stringify(this.state, null, 2);
    }
  }
};
</script>

