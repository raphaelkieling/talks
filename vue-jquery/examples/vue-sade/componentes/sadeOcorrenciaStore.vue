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
      requisicao: {
        grupo: 0,
        natureza: 0,
        fato: 0,
        envolvido: 0
      },
      state: {
        grupo: {
          list: [],
          loading: false,
          sync: false
        },
        natureza: {
          list: [],
          loading: false,
          sync: false
        },
        fato: {
          list: [],
          loading: false,
          sync: false
        },
        envolvido: {
          list: [],
          loading: false,
          sync: false
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
      getFatos: this.getFatos,
      requisicao: this.requisicao
    };
  },
  methods: {
    getGrupos() {
      this.requisicao.grupo += 1;
      this.state.grupo.loading = true;
      api.getGrupos().then(body => {
        this.state.grupo.list = body;
        this.state.grupo.sync = true;
        this.state.grupo.loading = false;
      });
    },
    getNaturezas() {
      this.requisicao.natureza += 1;
      this.state.natureza.loading = true;
      api.getNaturezas().then(body => {
        this.state.natureza.list = body;
        this.state.natureza.sync = true;
        this.state.natureza.loading = false;
      });
    },
    getEnvolvidos() {
      if (this.state.envolvido.sync) return;
      this.requisicao.envolvido += 1;

      this.state.envolvido.loading = true;
      api.getEnvolvidos().then(body => {
        this.state.envolvido.list = body;
        this.state.envolvido.sync = true;
        this.state.envolvido.loading = false;
      });
    },
    getFatos() {
      if (this.state.fato.sync) return;
      
      this.requisicao.fato += 1;
      this.state.fato.loading = true;
      api.getFatos().then(body => {
        this.state.fato.list = body;
        this.state.fato.sync = true;
        this.state.fato.loading = false;
      });
    }
  }
};
</script>

