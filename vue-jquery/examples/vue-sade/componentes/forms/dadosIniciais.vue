<template>
  <div>
    <form @submit.prevent="handlerSubmit">
      <p class="text-info" v-if="form.id">Editando #{{form.id}}</p>
      <div class="row">
        <div class="col-md-6">
          <b-form-group label="Grupos">
            <b-spinner v-if="state.grupo.loading" type="grow" label="Loading..."></b-spinner>
            <b-form-select
              v-model="form.grupoSelected"
              v-else
              :options="state.grupo.list"
              size="sm"
              @change="handlerSelectGrupo"
            ></b-form-select>
          </b-form-group>
        </div>

        <div class="col-md-6">
          <b-form-group label="Naturezas">
            <b-spinner v-if="state.natureza.loading" type="grow" label="Loading..."></b-spinner>
            <b-form-select
              v-else
              v-model="form.naturezaSelected"
              :options="state.natureza.list"
              size="sm"
            ></b-form-select>
          </b-form-group>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <b-button size="sm" type="submit" :disabled="canSave">Salvar</b-button>
        </div>
      </div>
    </form>

    <b-spinner v-if="state.fato.loading" type="grow" label="Loading..."></b-spinner>
    <b-table v-else striped hover :items="state.fato.list" :fields="fields" class="mt-3">
      <template slot="acao" slot-scope="{ item }">
        <b-button size="sm" @click="edit(item.id)">Editar</b-button>
        <b-button size="sm" variant="danger" @click="popOne">Retirar</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  inject: ["state", "getNaturezas", "getFatos"],
  data() {
    return {
      form: {
        grupoSelected: null,
        naturezaSelected: null,
        id: null
      },
      fields: [
        {
          key: "grupo.description",
          label: "Grupo"
        },
        {
          key: "natureza.description",
          label: "Natureza"
        },
        {
          key: "acao",
          label: "Ação"
        }
      ]
    };
  },
  computed: {
    canSave() {
      return this.state.grupo.loading || this.state.natureza.loading;
    }
  },
  mounted() {
    console.log("[Dados Iniciais] Hi i have been mounted");
    this.getFatos();
  },
  methods: {
    handlerSelectGrupo() {
      this.getNaturezas();
    },
    handlerSubmit() {
      if (this.form.id) {
        this.state.fato.list = this.state.fato.list.map(fato => {
          if (fato.id === this.form.id) {
            fato.grupo = Object.assign({}, this.form.grupoSelected);
            fato.natureza = Object.assign({}, this.form.naturezaSelected);
          }
          return fato;
        });
      } else {
        this.state.fato.list.push({
          grupo: this.form.grupoSelected,
          natureza: this.form.naturezaSelected,
          id: Math.random().toString()
        });
      }

      this.form.grupoSelected = null;
      this.form.naturezaSelected = null;
      this.form.id = null;
    },
    popOne() {
      this.state.fato.list.pop();
    },
    edit(fatoId) {
      let fatoFinded = this.state.fato.list.find(fato => fato.id === fatoId);
      if (!fatoFinded) return;
      fatoFinded = Object.assign({}, fatoFinded);
      this.form.grupoSelected = fatoFinded.grupo;
      this.form.naturezaSelected = fatoFinded.natureza;
      this.form.id = fatoFinded.id;
    }
  }
};
</script>
