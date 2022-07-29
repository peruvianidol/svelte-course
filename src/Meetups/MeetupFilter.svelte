<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let selectedButton = 0;
</script>

<div class="flex toggle-button-group" style="--flex-gap: 0">
  <button type="button" class:is-active={selectedButton === 0}
  on:click="{() => {
    selectedButton = 0;
    dispatch('select', 0);
  }}">All</button>
  <button type="button" class:is-active={selectedButton === 1}
  on:click="{() => {
    selectedButton = 1;
    dispatch('select', 1);
  }}">Favorites</button>
</div>