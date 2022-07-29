<script>
  import { createEventDispatcher } from 'svelte';
  import MeetupItem from './MeetupItem.svelte';
  import MeetupFilter from './MeetupFilter.svelte';
  import Button from '../UI/Button.svelte';

  export let meetups;

  const dispatch = createEventDispatcher();

  let favsOnly = false;

  $: filteredMeetups = favsOnly ? meetups.filter(m => m.isFavorite) : meetups;

  function setFilter(event) {
    favsOnly = event.detail === 1;
  }
</script>

<div class="block flex" style="--block-size: 2rem;">
  <div class="flex-item">
    <MeetupFilter on:select={setFilter}/>
  </div>
  <Button on:click="{() => dispatch('add')}">New Meetup</Button>
</div>

<section id="meetups" class="grid">
  {#each filteredMeetups as meetup (meetup.id)}
    <MeetupItem 
    id={meetup.id}
    title={meetup.title}
    subtitle={meetup.subtitle}
    description={meetup.description}
    imageUrl={meetup.imageUrl}
    address={meetup.address}
    isFav={meetup.isFavorite}
    isNew={meetup.isNew}
    on:showDetails
    on:edit />
  {/each}
</section>
