import {defineStore} from 'pinia'
import { useProposalStore } from './proposalStore'

const url = "http://0.0.0.0/api/v1/proposals"
const auth = "Bearer 1|H24fHvxIBaJm1wXMjcQLaczkBahgVUQWmzyTc3Z78b0816b8"

export const useGetProposalListStore = defineStore("getProposalListStore", {
    state: () => ({
        proposals: [],
        isLoading : false
    }),
    actions:{        
        async getProposals() {
            this.isLoading = true;
            try {
            const response = await fetch(`${url}`, {
                        headers: { 'Accept':'application/json', 'Content-Type':'application/json', 'Authorization':`${auth}`}
                    });
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            const getData = await response.json();
            this.proposals = getData.data;
            } catch (error) {
            console.error('Error fetching proposals:', error);
            } finally {
            this.isLoading = false;
            }
        },
        addProposalList(object: object) {
            console.log(object);
           
        },

        async postProposal(title: string) {
            this.isLoading = true;
            try {
                const postData = {
                    title: title
                };
                const jsonData = JSON.stringify(postData)
                const response = await fetch (`${url}`, {
                    headers: { 'Accept':'application/json', 'Content-Type':'application/json', 'Authorization':`${auth}`},
                    method: 'POST',
                    body: jsonData
                });
            if (!response.ok){
                throw new Error(`API request failed with status ${response.status}`);
            }
            const data = await response.json(); 
            data.data.status='draft'; // хардкод из бека приходит null 
            this.proposals.push(data.data);
            } catch (error) {
                console.log('Error fetching proposals:', error);
            } finally {
                this.isLoading = false;
            }
        },
    }
})