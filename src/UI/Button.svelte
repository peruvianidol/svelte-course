<script>
  export let type = null;
  export let href = null;
  export let variant = null;
  export let disabled = false;
</script>

{#if href}
  <a {href} class="button" data-variant={variant}><slot/></a>
{:else}
  <button {type} class="button" data-variant={variant} {disabled} on:click><slot/></button>
{/if}