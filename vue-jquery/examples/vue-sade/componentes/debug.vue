<template>
  <div>
    <b>Requisições:</b>
    <vue-json-pretty :data="requisicao"></vue-json-pretty>
    <hr />
    <b>Store:</b>
    <vue-json-pretty :deep="deep" :data="state" :showLength="true" :highlightMouseoverNode="true"></vue-json-pretty>
  </div>
</template>

<script>
import VueJsonPretty from "vue-json-pretty";

export default {
  components: { VueJsonPretty },
  data: () => ({
    deep: 2
  }),
  inject: ["state", "requisicao"]
};
</script>

