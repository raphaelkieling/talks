<template>
  <div class="container">
    <h1>Formulários</h1>

    <tabs>
      <tab title="Dados iniciais" :active="true">
        <encerrar-form />
      </tab>

      <tab title="Dados Complementares">
        <encerrar-form />
      </tab>
    </tabs>
  </div>
</template>

<script>
import EncerrarForm from "./components/forms/encerrar-form";
import Tabs from "./components/tabs/tabs";
import Tab from "./components/tabs/tab";

export default {
  components: { EncerrarForm, Tab, Tabs }
};
</script>

