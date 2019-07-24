<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import * as api from "../api.js";

export default {
  data() {
    return {
      state: {
        grupo: {
          list: [],
          loading: false
        },
        natureza: {
          list: [],
          loading: false
        },
        fato: {
          list: [],
          loading: false
        },
        envolvido: {
          list: [],
          loading: false
        }
      }
    };
  },
  mounted() {
    this.getGrupos();
  },
  provide: function() {
    return {
      state: this.state,
      getGrupos: this.getGrupos,
      getNaturezas: this.getNaturezas,
      getEnvolvidos: this.getEnvolvidos,
      getFatos: this.getFatos
    };
  },
  methods: {
    getGrupos() {
      this.state.grupo.loading = true;
      api.getGrupos().then(body => {
        this.state.grupo.list = body;
        this.state.grupo.loading = false;
      });
    },
    getNaturezas() {
      this.state.natureza.loading = true;
      api.getNaturezas().then(body => {
        this.state.natureza.list = body;
        this.state.natureza.loading = false;
      });
    },
    getEnvolvidos() {
      if (this.state.envolvido.list.length !== 0) return;

      this.state.envolvido.loading = true;
      api.getEnvolvidos().then(body => {
        this.state.envolvido.list = body;
        this.state.envolvido.loading = false;
      });
    },
    getFatos() {
      if (this.state.fato.list.length !== 0) return;

      this.state.fato.loading = true;
      api.getFatos().then(body => {
        this.state.fato.list = body;
        this.state.fato.loading = false;
      });
    }
  }
};
</script>

