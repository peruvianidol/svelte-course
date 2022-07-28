<script>
  import { createEventDispatcher } from "svelte";
  import Button from '../UI/Button.svelte';
  import Badge from '../UI/Badge.svelte';
  import IconButton from '../UI/IconButton.svelte';

  export let id;
  export let title;
  export let subtitle;
  export let imageUrl;
  export let description;
  export let address;
  export let email;
  export let isFav;
  export let isNew = false;

  const dispatch = createEventDispatcher();
</script>

<article class="card">
  <header class="inset-square">
    <h2 class="heading-2 flex" style="--flex-gap: .25rem;">{title} 
      {#if isNew}
        <Badge color="slateblue">New</Badge>
      {/if}
    </h2>
    <p class="text-subdued">{subtitle}</p>
  </header>
  <figure>
    <img src="{imageUrl}" alt="{title}" class="aspect-ratio block">
    <figcaption class="inset-inline">
      <p class="line-clamp block" style="--clamp-size: 4">{description}</p>
      <p class="text-subdued">{address}</p>
    </figcaption>
  </figure>
  <footer class="inset-square flex" style="--flex-gap: .5rem">
    <Button href="mailto:{email}">Contact</Button>
    <Button variant="secondary">Show Details</Button>
    <IconButton style="{isFav ? 'fill' : 'stroke'}" classes="{isFav ? 'text-red' : 'text-subdued' }" name="heart" on:click={() => dispatch('togglefavorite', id)} />
  </footer>
</article>