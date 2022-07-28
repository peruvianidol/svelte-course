<script>
  import meetups from './Meetups/meetups-store.js';
  import Header from './UI/Header.svelte';
  import IconSprite from './UI/IconSprite.svelte';
  import Button from './UI/Button.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import EditMeetup from './Meetups/EditMeetup.svelte';
  import MeetupDetail from './Meetups/MeetupDetail.svelte';

  let editMode;
  let page = 'overview';
  let pageData = {};

  function addMeetup() {
    editMode = null;
  }

  function cancelEdit() {
    editMode = null;
  }

  function showDetails(event) {
    page = 'details';
    pageData.id = event.detail;
  }
  
  function closeDetails() {
    page = 'overview';
    pageData = {};
  }
</script>

<IconSprite/>

<Header/>

<main class="inset-square flow container">
  {#if page === 'overview'}
    <div class="block" style="--block-size: 2rem;">
      <Button on:click="{() => editMode = 'add'}">Add Meetup</Button>
    </div>
    {#if editMode}
      <EditMeetup on:save={addMeetup} on:cancel={cancelEdit}/>
    {/if}
    <MeetupGrid meetups="{$meetups}" on:showDetails={showDetails}/>
  {:else}
    <MeetupDetail id={pageData.id} on:close={closeDetails}/>
  {/if}
</main>
