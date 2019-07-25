<template>
  <div>
    <form @submit.prevent="handlerSaveEnvolvido">
      <b-form-group description="Nome verdadeiro" label="Entre com o nome do envolvido">
        <b-form-input v-model="form.nome" trim></b-form-input>
      </b-form-group>

      <b-form-group label="Fato">
        <b-spinner v-if="state.fato.loading" type="grow" label="Loading..."></b-spinner>
        <b-form-select
          v-else
          :disabled="!state.fato.list.length"
          v-model="form.fato"
          :options="fatoList"
          size="sm"
        ></b-form-select>
      </b-form-group>

      <b-button size="sm" type="submit" :disabled="!canSave">Salvar</b-button>
    </form>

    <b-spinner v-if="state.envolvido.loading" type="grow" label="Loading..."></b-spinner>
    <b-table
      v-else-if="state.envolvido.list.length > 0"
      striped
      hover
      :items="state.envolvido.list"
      :fields="fields"
      class="mt-3"
      @click.native="popOne"
    >
      <template
        slot="fato"
        slot-scope="{ item }"
      >{{item.fato.grupo.description}} - {{item.fato.natureza.description}}</template>
    </b-table>
    <div v-else class="text-center">
      <empty message="Nenhum envolvido encontrado"></empty>
    </div>
  </div>
</template>

<script>
import Empty from "../empty.vue";

export default {
  components: { Empty },
  inject: ["state", "getEnvolvidos", "getFatos"],
  data() {
    return {
      form: {
        nome: "",
        fato: null
      },
      fields: [
        {
          key: "name",
          label: "Nome"
        },
        {
          key: "fato",
          label: "Fato"
        }
      ]
    };
  },
  computed: {
    fatoList() {
      return this.state.fato.list.map(item => ({
        text: `${item.grupo.description} - ${item.natureza.description}`,
        value: item
      }));
    },
    canSave() {
      return (this.state.fato.list.length > 0) && this.form.fato;
    }
  },
  mounted() {
    console.log("[Envolvidos] Hi i have been mounted");
    this.getEnvolvidos();
    this.getFatos();
  },
  methods: {
    handlerSaveEnvolvido() {
      this.state.envolvido.list.push({
        name: this.form.nome,
        fato: this.form.fato,
        id: Math.random().toString()
      });

      this.form.nome = "";
      this.form.fato = null;
    },
    popOne() {
      this.state.envolvido.list.pop();
    }
  }
};
</script>
