<script>
  import meetups from './Meetups/meetups-store.js';
  import Header from './UI/Header.svelte';
  import IconSprite from './UI/IconSprite.svelte';
  import Button from './UI/Button.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import EditMeetup from './Meetups/EditMeetup.svelte';
  import MeetupDetail from './Meetups/MeetupDetail.svelte';

  let editMode;
  let editedId;
  let page = 'overview';
  let pageData = {};

  function savedMeetup() {
    editMode = null;
    editedId = null;
  }

  function cancelEdit() {
    editMode = null;
    editedId = null;
  }

  function showDetails(event) {
    page = 'details';
    pageData.id = event.detail;
  }
  
  function closeDetails() {
    page = 'overview';
    pageData = {};
  }

  function startEdit(event) {
    editMode = 'edit';
    editedId = event.detail;
  }
</script>

<IconSprite/>

<Header/>

<main class="inset-square flow container">
  {#if page === 'overview'}
    <div class="block" style="--block-size: 2rem;">
      <Button on:click="{() => editMode = 'edit'}">New Meetup</Button>
    </div>
    {#if editMode === 'edit'}
      <EditMeetup id={editedId} on:save={savedMeetup} on:cancel={cancelEdit}/>
    {/if}
    <MeetupGrid meetups="{$meetups}" on:showDetails={showDetails} on:edit={startEdit} />
  {:else}
    <MeetupDetail id={pageData.id} on:close={closeDetails}/>
  {/if}
</main>
