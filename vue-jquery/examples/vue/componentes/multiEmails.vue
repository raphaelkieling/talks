<template>
  <div class="card p-3">
    <ul class="list-group" v-if="value.length">
      <li
        class="list-group-item"
        v-for="email in value"
        :key="email.id"
        @click="removeEmail(email)"
      >{{email.email}}</li>
    </ul>

    <slot v-else name="empty"></slot>

    <form class="input-group mt-3" @submit.prevent="submitAddEmail">
      <input
        type="email"
        class="form-control"
        placeholder="Digite seu e-mail"
        v-model="form.email"
        required
      />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="submit">Adicionar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      form: { email: "" }
    };
  },
  methods: {
    submitAddEmail() {
      let email = {
        email: this.form.email,
        id: Math.random().toString()
      };

      this.form.email = "";

      this.$emit("input", [...this.value, email]);
    },
    removeEmail(emailToDelete) {
      this.$emit("input", [
        ...this.value.filter(email => email.id !== emailToDelete.id)
      ]);
    }
  }
};
</script>

