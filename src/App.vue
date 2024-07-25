<template>
<header class="header">

  <h1>Proposal App</h1>
  <nav>
    <RouterLink class="Router" to="/">Home</RouterLink>
    <RouterLink class="Router" to="/proposals">Get proposal list</RouterLink>
    <RouterLink class="Router" to="/proposals/add">Add proposal</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  
  </header>
  
</template>


<script setup lang="ts">

import { useProposalStore } from './stores/proposalStore'
import { useGetProposalListStore } from './stores/ProposalListStore'
import { RouterLink } from 'vue-router';

const getProposalListStore = useGetProposalListStore()
const proposalStore = useProposalStore()
</script>

<style scoped>

.header {
  margin: 20px; /* Sets 20px margin on all sides */
  margin-top: 30px; /* Sets 30px margin on top */
  margin-right: 10px; /* Sets 10px margin on right */
  margin-bottom: 20px; /* Sets 20px margin on bottom */
  margin-left: 15px; /* Sets 15px margin on left */
  padding: 20px; /* Sets 20px padding on all sides */
  padding-top: 30px; /* Sets 30px padding on top */
  padding-right: 10px; /* Sets 10px padding on right */
  padding-bottom: 20px; /* Sets 20px padding on bottom */
  padding-left: 15px; /* Sets 15px padding on left */
}

.proposals {
  margin: 20px; /* Sets 20px margin on all sides */
  margin-top: 30px; /* Sets 30px margin on top */
  margin-right: 10px; /* Sets 10px margin on right */
  margin-bottom: 20px; /* Sets 20px margin on bottom */
  margin-left: 15px; /* Sets 15px margin on left */
  /* padding: 20px;
  padding-top: 30px; 
  padding-right: 10px;
  padding-bottom: 20px;
  padding-left: 15px;  */
}

.btn {
  /* General button styles */
  display: inline-block; /* Allow buttons to be in-line with text */
  padding: 10px 20px; /* Adjust padding as needed */
  background-color: #4CAF50; /* Default button color */
  color: white; /* Default text color */
  border: none; /* Remove default border */
  cursor: pointer; /* Indicate clickable area */
  text-decoration: none; /* Remove text underline */
  font-size: 16px; /* Adjust font size as needed */
  font-weight: bold; /* Make text bold */
  transition: background-color 0.3s; /* Smooth transition on hover */
  margin: 20px;

  /* Hover effect */
  &:hover {
    background-color: #3e8e41; /* Hover background color */
  }

  .tabs{
  display: flex; /* Enable flexbox layout */
  justify-content: space-between; /* Distribute buttons evenly */
  align-items: center; /* Vertically center buttons */
  margin: 20px;
}

}


</style>
