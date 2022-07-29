<script>
  import { createEventDispatcher } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import Button from "./Button.svelte";

  export let title;

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('cancel');
  }
</script>

<div class="modal-backdrop" transition:fade={{ duration: 200 }} on:click={closeModal}></div>
<div class="modal" transition:fly={{ y: 300, duration: 200 }}>
  <header class="inset-square"><span class="heading-2">{title}</span></header>
  <section class="inset-inline">
    <slot/>
  </section>
  <footer class="inset-square">
    <slot name="footer">
      <Button on:click on:click={closeModal}>Close</Button>
    </slot>
  </footer>
</div>