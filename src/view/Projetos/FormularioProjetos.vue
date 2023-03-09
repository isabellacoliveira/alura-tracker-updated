<template>
    <section class="projetos">
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
import { ADICIONA_PROJETO, ALTERAR_PROJETO } from "@/store/tipoMutacoes";
import { JSX } from "@babel/types";
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "FormularioProjetos",
    props: {
      id: {
        type: String
      }
    },
    mounted(){
       // olhar para ver se temos id 
       // se tivermos projeto com aquele id 
       const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
       this.nomeDoProjeto = projeto?.nome || ''
    },
    data() {
      return {
        nomeDoProjeto: ""
      };
    },
    methods: {
      salvar() {
        if(this.id){
          this.store.commit(ALTERAR_PROJETO, {
            id: this.id, 
            nome: this.nomeDoProjeto
          })
        } else {
          this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
        }
        this.nomeDoProjeto = "";
        this.$router.push('/projetos')
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