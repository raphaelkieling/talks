<template>
  <div>
    <b-navbar variant="light" type="light" class="shadow-sm">
      <b-navbar-brand href="#">
        <logo></logo>
        <span class="ml-3">Egsys</span>
      </b-navbar-brand>
    </b-navbar>

    <div class="container mt-3">
      <sade-ocorrencia-store>
        <div class="row">
          <div class="col-md-6">
            <b-card no-body>
              <b-tabs content-class="mt-3" pills card lazy>
                <b-tab title="Dados Iniciais" active>
                  <form-dados-iniciais></form-dados-iniciais>
                </b-tab>
                <b-tab title="Envolvidos">
                  <form-envolvidos></form-envolvidos>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>

          <div class="col-md-6">
            <debug></debug>
          </div>
        </div>
      </sade-ocorrencia-store>
    </div>
  </div>
</template>

<script>
// Adicionado apenas para apresentação
import "babel-polyfill";
import logo from "./componentes/logo.vue";
import FormDadosIniciais from "./componentes/forms/dadosIniciais";
import FormEnvolvidos from "./componentes/forms/envolvidos";
import SadeOcorrenciaStore from "./componentes/sadeOcorrenciaStore";
import Debug from './componentes/debug';

export default {
  components: {
    logo,
    FormDadosIniciais,
    FormEnvolvidos,
    SadeOcorrenciaStore,
    Debug
  }
};
</script>
