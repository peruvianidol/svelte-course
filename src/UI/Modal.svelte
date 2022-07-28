<script>
  import { createEventDispatcher } from 'svelte';
  import Button from "./Button.svelte";

  export let title;

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('cancel');
  }
</script>

<div class="modal-backdrop" on:click={closeModal}></div>
<div class="modal">
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