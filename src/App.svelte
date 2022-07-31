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
  let isLoading = true;

  fetch('https://meetus-63fba-default-rtdb.firebaseio.com/meetups.json')
  .then(res => {
    if (!res.ok) {
      throw new Error('Fetching meetups failed.');
    }
    return res.json();
  })
  .then(data => {
    const loadedMeetups = [];
    for (const key in data) {
      loadedMeetups.push({
        ...data[key],
        id: key
      });
    }
    isLoading = false;
    meetups.setMeetups(loadedMeetups.reverse());
  })
  .catch(err => {
    isLoading = false;
    console.log(err);
  });

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
    {#if editMode === 'edit'}
      <EditMeetup id={editedId} on:save={savedMeetup} on:cancel={cancelEdit}/>
    {/if}
    {#if isLoading}
      <p>Loading...</p>
    {:else}
      <MeetupGrid meetups="{$meetups}" on:showDetails={showDetails} on:edit={startEdit} on:add={() => {editMode = 'edit'}}/>
    {/if}
  {:else}
    <MeetupDetail id={pageData.id} on:close={closeDetails}/>
  {/if}
</main>
