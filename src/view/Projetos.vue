<template>
    <section class="projetos">
      <h1 class="title">Projetos</h1>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="projeto in projetos" :key="projeto.id">
            <td>{{ projeto.id }}</td>
            <td>{{ projeto.nome }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </template>
  
  <script lang="ts">
  import { useStore } from "@/store";
  import { computed, defineComponent } from "vue";
  export default defineComponent({
    name: "Projetos",
    setup () {
      const store = useStore()
      return {
        projetos: computed(() => store.state.projetos)
      }
    }
  });
  </script>
  
  <style scoped>
  .projetos {
    padding: 1.25rem;
  }
  </style>