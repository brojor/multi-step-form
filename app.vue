<script setup lang="ts">
</script>

<template>
  <div class="container">
    <main>
      <ANavbar />
      <div class="content">
        <div class="content-inner">
        </div>
        <NavButtons />
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  height: 100%;
}

.content-inner {
  height: 100%;
  height: 400px;
  background-color: #e18181;
  margin-inline: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 22px -9px rgba(0, 0, 0, 0.2);
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
  }

  .content-inner {
    width: 100%;
    margin-inline: 0;
    box-shadow: none;
  }
}
</style>