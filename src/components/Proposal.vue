<template>
    <div class="proposal-id">
            id: {{ proposal.id }}
        <div class="proposal-title">
            title: {{ proposal.title }}
        </div>
        <div class="proposal-status">
            status: {{ proposal.status }}
        </div>
        <div class="proposal-created">
            Created at: {{ proposal.created }}
        </div>
        <div class="proposal-updated">
            Updated at: {{ proposal.updated }}
        </div>
    </div>
    
</template>

<script setup>
import { useProposalStore } from '../stores/proposalStore'
import { useGetProposalListStore } from '../stores/ProposalListStore'

const GetProposalListStore = useGetProposalListStore()
const proposalStore = useProposalStore()
const props = defineProps({
    proposal: {
        type: Object,
        required: true,
        default: () => {}
    }
})
</script>

<style scoped>

.proposal-id {
  margin: 20px; /* Sets 20px margin on all sides */
  margin-top: 15px; /* Sets 30px margin on top */
  margin-right: 10px; /* Sets 10px margin on right */
  margin-bottom: 20px; /* Sets 20px margin on bottom */
  margin-left: 5px; /* Sets 15px margin on left */
  padding: 20px; /* Sets 20px padding on all sides */
  padding-top: 30px; /* Sets 30px padding on top */
  padding-right: 10px; /* Sets 10px padding on right */
  padding-bottom: 20px; /* Sets 20px padding on bottom */
  padding-left: 15px; /* Sets 15px padding on left */
}

</style>