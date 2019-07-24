<template>
  <form class="container">
    <logo size="sm"></logo>

    <hr>

    <div class="row">
      <div class="col-md-6">
        <formulario
          sm
          :form="form"
          :estados="estados"
          :municipios="municipios"
          @estadoChange="handlerChangeEstados"
        ></formulario>

        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" v-model="mostrarFormularioMaior" />
          <label class="form-check-label">Formulário Recursivo</label>
        </div>

        <hr />

        <multi-emails class="mb-3" v-model="form.emails">
          <template #empty>
            <div class="text-center text-muted">
              <img src="https://image.flaticon.com/icons/svg/263/263049.svg" class="sm">
              <p>Nenhum email informado</p>
            </div>
          </template>
        </multi-emails>
      </div>
      <div class="col-md-6">
        <pre v-highlightjs="formString" class="rounded-lg"><code class="json"></code></pre>
      </div>
    </div>
  </form>
</template>

<script>
// Adicionado apenas para apresentação
import "babel-polyfill";
import * as api from "./api.js";
import logo from "./componentes/logo.vue";
import formulario from "./componentes/formulario.vue";
import multiEmails from "./componentes/multiEmails.vue";

export default {
  components: { logo, formulario, multiEmails },
  data: () => ({
    form: {
      estadoSelected: null,
      municipioSelected: null,
      emails: [
        {
          id: 1,
          email: "raphaelkieling@egsys.com.br"
        }
      ]
    },
    mostrarFormularioMaior: false,
    estados: [],
    municipios: []
  }),
  async mounted() {
    this.estados = await this.getEstados();
  },
  computed: {
    formString() {
      return JSON.stringify(this.form, null, 2);
    }
  },
  methods: {
    getEstados() {
      return api.getEstados();
    },
    getMunicipios(ufId) {
      return api.getMunicipios(ufId);
    },
    async handlerChangeEstados(ev) {
      const value = ev.target.value;
      this.municipios = value ? await this.getMunicipios(ev.target.value) : [];
    }
  }
};
</script>


<style scoped>
.custom-container {
  max-width: 400px;
  margin: 0 auto;
}
</style>
