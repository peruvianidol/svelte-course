<script>
  import MeetupItem from './MeetupItem.svelte';
  export let meetups;
</script>

<section id="meetups" class="grid">
  {#each meetups as meetup}
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
