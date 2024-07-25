<template>
    <form @submit.prevent="getProposalStore.getProposals()">
            <button type="button" class="Btn" @click="getProposalStore.getProposals()">Get Proposals</button>
        </form>
        <Proposal class='zap' v-for="proposal of getProposalStore.proposals" :key="proposal.id" :proposal="proposal" />
    </template>
    
    <script setup>
    import Proposal from '../components/Proposal.vue' 
    import {ref} from 'vue'
    import { useGetProposalListStore } from '../stores/ProposalListStore'
    const getProposalStore = useGetProposalListStore()
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
    border-radius: 30px;
    height: 30px;
    border: 1px solid #e7e7e7;
    width: 120px;
}

    .zap{
        border: 2px solid #e7e7e7;
        border-radius: 7px;
    }
    </style>