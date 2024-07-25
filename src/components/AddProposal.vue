<template>
<form @submit.prevent="preventFormSubmit">
  <input type="text" 
         class="post-input" 
         placeholder="Input title of proposal" 
         v-model="getProposal" />
  <button type="button" class="Btn" @click="ProposalListStore.postProposal(getProposal)">Add Proposal</button>  </form>
    <Proposal v-for="proposal of ProposalListStore.proposals" :key="proposal.id" :proposal="proposal" />
</template>

<script setup>
import Proposal from '../components/Proposal.vue' 
import {ref} from 'vue'
import { useGetProposalListStore } from '../stores/ProposalListStore'
const ProposalListStore = useGetProposalListStore()
const getProposal = ref("")


</script>

<style scoped>
.post-input {
    border: 1px solid #e7e7e7;
    width: 20%;
    height: 40px;
    padding: 0 10px;
    margin-bottom: 20px;
    border-radius: 10px;
}

.Btn{
    margin-left: 30px;
    border-radius: 30px;
    height: 30px;
    border: 1px solid #e7e7e7;
    width: 120px;
}
</style>