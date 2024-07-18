<script setup lang="ts">
import PersonalInfo from './components/PersonalInfo.vue'
import PlanSelection from './components/PlanSelection.vue';
import AddOns from './components/AddOns.vue';
import FinishingUp from './components/FinishingUp.vue';

const stepNum = ref(0)

const steps = [PersonalInfo, PlanSelection, AddOns, FinishingUp]
</script>

<template>
  <div class="container">
    <main>
      <ANavbar :active-step="stepNum" />
      <div class="content">
        <component :is="steps[stepNum]" :stepNum="stepNum" @changeStep="stepNum += $event" />
      </div>
    </main>
  </div>
</template>

<style>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  background-color: var(--clr-magnolia)
}

main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 35rem;
  height: 100%;
  border-radius: 1rem;
}

.content {
  margin-top: 6.25rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: calc(100% - 6.25rem);
}

.content-inner {
  background-color: var(--clr-white);
  padding: 1.5rem 1.5rem 2rem;
  margin-inline: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 22px -9px rgba(0, 0, 0, 0.2);
  overflow: auto;
}

@media (min-width: 50rem) {
  main {
    max-width: 58.75rem;
    padding: 1rem;
    height: min(100%, 37.5rem);
    flex-direction: row;
    background-color: var(--clr-white);
    box-shadow: 0px 3px 22px -9px rgba(0, 0, 0, 0.2);
  }

  .content {
    flex: 1;
    padding: 2rem 9% 1rem;
    margin-top: 0rem;
    height: 100%;
  }

  .content-inner {
    width: 100%;
    margin-inline: 0;
    box-shadow: none;
    padding: 0;
    margin-top: 0.25rem;
  }
}
</style>