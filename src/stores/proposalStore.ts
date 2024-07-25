import { defineStore } from "pinia"

export const useProposalStore = defineStore('proposalStore', {
    state: () => ({
        proposals: [],
        activeTab: 1
    }),
    getters:{},
    actions: {
        setActiveTab(id: number){
            this.activeTab = id
        },
        toggleStatus(id: number){
            const idx = this.proposals.findIndex(el => el.id === id)
            this.proposals[idx].status = !this.proposals[idx].status
        }
    },
    
})