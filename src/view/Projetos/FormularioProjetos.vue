<template>
    <section class="projetos">
      <h1 class="title">Projetos</h1>
      <form @submit.prevent="salvar">
        <div class="field">
          <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
          <input
            type="text"
            class="input"
            v-model="nomeDoProjeto"
            id="nomeDoProjet"
          />
        </div>
        <div class="field">
          <button class="button" type="submit">Salvar</button>
        </div>
      </form>
    </section>
  </template>
  
  <script lang="ts">
  import { useStore } from "@/store";
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "FormularioProjetos",
    data() {
      return {
        nomeDoProjeto: ""
      };
    },
    methods: {
      salvar() {
        this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
        this.nomeDoProjeto = "";
      },
    },
    setup () {
      const store = useStore()
      return {
        store
      }
    }
  });
  </script>
  
  <style scoped>
  .projetos {
    padding: 1.25rem;
  }
  </style>