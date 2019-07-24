<template>
  <div>
    <div class="form-group">
      <label>Estados</label>
      <select
        class="form-control"
        :class="{
          'form-control-sm': sm
      }"
        v-model="form.estadoSelected"
        @input="$emit('estadoChange', $event)"
      >
        <option></option>
        <option v-for="estado in estados" :value="estado.id" :key="estado.id">{{estado.nome}}</option>
      </select>
    </div>

    <div class="form-group">
      <label>Municípios</label>
      <select
        class="form-control"
        :class="{
          'form-control-sm': sm
      }"
        v-model="form.municipioSelected"
        :disabled="!form.estadoSelected"
      >
        <option></option>
        <option
          v-for="municipio in municipios"
          :value="municipio.id"
          :key="municipio.id"
        >{{municipio.nome}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    form: [Object],
    estados: [Array],
    municipios: [Array],
    sm: {
      type: Boolean,
      default: false
    }
  }
};
</script>
