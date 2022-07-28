<script>
  import meetups from './Meetups/meetups-store.js';
  import Header from './UI/Header.svelte';
  import IconSprite from './UI/IconSprite.svelte';
  import Button from './UI/Button.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import EditMeetup from './Meetups/EditMeetup.svelte';
  
  let editMode;

  function addMeetup(event) {
    const meetupData = {
      title: event.detail.title,
      subtitle: event.detail.subtitle,
      description: event.detail.description,
      imageUrl: event.detail.imageUrl,
      address: event.detail.address,
      contactEmail: event.detail.contactEmail
    };

    meetups.addMeetup(meetupData);
    editMode = null;
  }

  function toggleFavorite(event) {
    const id = event.detail;
    meetups.toggleFavorite(id);
  }

  function cancelEdit() {
    editMode = null;
  }
</script>

<IconSprite/>

<Header/>

<main class="inset-square flow" style="--inset-size: 2rem; --flow-size: 2rem;">
  <Button on:click="{() => editMode = 'add'}">Add Meetup</Button>
  {#if editMode}
    <EditMeetup on:save={addMeetup} on:cancel={cancelEdit}/>
  {/if}
  <MeetupGrid meetups="{$meetups}" on:togglefavorite="{toggleFavorite}" />
</main>
