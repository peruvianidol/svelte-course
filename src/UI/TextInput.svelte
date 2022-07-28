<script>
  export let id;
  export let name = null;
  export let controlType = null;
  export let label;
  export let rows = null;
  export let value;
  export let type = 'text';
  export let hasLabel = true;
  export let valid = true;
  export let validityMessage = '';

  let touched = false;
</script>

<div>
  {#if hasLabel}
    <label for="{id}">{label}</label>
  {/if}
  {#if controlType === 'textarea'}
    <textarea id="{id}" name="{name}" bind:value class="input-text" class:is-invalid="{!valid && touched}" rows="{rows}" on:blur={() => touched = true}></textarea>
  {:else}
    <input type="{type}" id="{id}" name="{name}" value="{value}" class="input-text" class:is-invalid="{!valid && touched}" on:input on:blur={() => touched = true}>
  {/if}
  {#if validityMessage && !valid && touched}
    <p class="text-red text-small">{validityMessage}</p>
  {/if}
</div>
