<script>
  import Icon from './Icon.svelte';

  export let name;
  export let style = 'fill';
  export let classes = null;
</script>

<button class="icon-button {classes}" aria-label="{name}" on:click>
  <Icon style="{style}" name="{name}" size="24"/>
</button>