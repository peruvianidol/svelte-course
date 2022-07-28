<script>
  import { onDestroy, createEventDispatcher } from 'svelte';
  import meetups from './meetups-store';
  import Button from '../UI/Button.svelte';

  export let id;
  let selectedMeetup;

  const unsubscribe = meetups.subscribe(items => {
    selectedMeetup = items.find(i => i.id === id);
  });

  const dispatch = createEventDispatcher();

  onDestroy(() => {
    unsubscribe();
  });
</script>

<figure class="flex-responsive" style="--flex-align: start;">
  <img src="{selectedMeetup.imageUrl}" alt="{selectedMeetup.title}" width="500" height="auto" class="aspect-ratio flex-item block">
  <figcaption class="flow flex-item">
    <div>
      <h1 class="heading-2">{selectedMeetup.title}</h1>
      <p class="text-subdued">{selectedMeetup.subtitle}</p>    
    </div>
    <p>{selectedMeetup.description}</p>
    <p>{selectedMeetup.address}</p>

    <div class="flex" style="--flex-gap: .5rem;">
      <Button href="mailto:{selectedMeetup.email}">Contact</Button>
      <Button type="button" variant="secondary" on:click={() => dispatch('close')}>Close</Button>  
    </div>
  </figcaption>
</figure>