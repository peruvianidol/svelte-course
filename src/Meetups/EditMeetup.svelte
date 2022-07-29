<script>
  import meetups from './meetups-store.js';
  import { createEventDispatcher } from 'svelte';
  import TextInput from '../UI/TextInput.svelte';
  import Button from '../UI/Button.svelte';
  import IconButton from '../UI/IconButton.svelte';
  import Modal from '../UI/Modal.svelte';
  import { isEmpty } from '../helpers/validation.js';
 
  export let id = null;

  let title = "";
  let subtitle = "";
  let imageUrl = "";
  let description = "";
  let address = "";

  if (id) {
    const unsubscribe = meetups.subscribe(items => {
      const selectedMeetup = items.find(i => i.id === id);
      title = selectedMeetup.title;
      subtitle = selectedMeetup.subtitle;
      imageUrl = selectedMeetup.imageUrl;
      description = selectedMeetup.description;
      address = selectedMeetup.address;
    });

    unsubscribe();    
  }

  const dispatch = createEventDispatcher();

  $: titleValid = !isEmpty(title);
  $: subtitleValid = !isEmpty(subtitle);
  $: imageUrlValid = !isEmpty(imageUrl);
  $: descriptionValid = !isEmpty(description);
  $: addressValid = !isEmpty(address);
  $: formIsValid = titleValid && subtitleValid && imageUrlValid && descriptionValid && addressValid;

  function submitForm() {
    const meetupData = {
      title: title,
      subtitle: subtitle,
      description: description,
      imageUrl: imageUrl,
      address: address
    };

    if (id) {
      meetups.updateMeetup(id, meetupData);
    } else {
      meetups.addMeetup(meetupData);
    }
    dispatch('save');
  }

  function deleteMeetup() {
    meetups.removeMeetup(id);
    dispatch("save");
  }

  function cancel() {
    dispatch('cancel');
  }
</script>

<Modal title="Edit Meetup Data" on:cancel>
  <form on:submit|preventDefault="{submitForm}" class="flow">
    <TextInput 
      id="title"
      label="Title"
      valid={titleValid}
      validityMessage="Please enter a valid title."
      value="{title}"
      on:input={event => (title = event.target.value)}
    />
    <TextInput 
      id="subtitle"
      label="Subtitle"
      valid={subtitleValid}
      validityMessage="Please enter a valid subtitle."
      value="{subtitle}"
      on:input={event => (subtitle = event.target.value)}
    />
    <TextInput 
      id="description"
      label="Description"
      valid={descriptionValid}
      validityMessage="Please enter a valid description."
      rows="3"
      controlType="textarea"
      bind:value={description}
      />
    <TextInput 
      id="imageUrl"
      label="Image URL"
      valid={imageUrlValid}
      validityMessage="Please enter a valid image URL."
      value="{imageUrl}"
      on:input={event => (imageUrl = event.target.value)}
    />
    <TextInput 
      id="address"
      label="Address"
      valid={addressValid}
      validityMessage="Please enter a valid address."
      value="{address}"
      on:input={event => (address = event.target.value)}
    />
  </form>
  <div slot="footer" class="flex" style="--flex-gap: .5rem;">
    <Button on:click={submitForm} disabled={!formIsValid}>Save</Button>
    <Button on:click={cancel} variant="secondary">Cancel</Button>
    {#if id}
      <IconButton classes="text-subdued" name="trash" on:click={deleteMeetup} />
    {/if}
  </div>
</Modal>
