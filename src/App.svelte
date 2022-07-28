<script>
  import Header from './UI/Header.svelte';
  import IconSprite from './UI/IconSprite.svelte';
  import Button from './UI/Button.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import EditMeetup from './Meetups/EditMeetup.svelte';

  let editMode;

  let meetups = [
    {
      id: '1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn to code in 2 hours',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, harum perferendis laborum ipsum veniam vitae mollitia soluta quia cumque ducimus optio molestiae placeat quae ipsam consequatur odio similique facere dolorum!',
      imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      address: 'Oak Park',
      contactEmail: 'peruvianidol@gmail.com',
      isFavorite: false,
      isNew: true
    },
    {
      id: '2',
      title: 'Beginner Basketball',
      subtitle: 'Learn the fundamentals of hoops',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus distinctio odio tempora est sed vero ea, dolore quod ab beatae dolorem debitis soluta reiciendis esse. Rem exercitationem quidem repellendus!',
      imageUrl: 'https://images.unsplash.com/photo-1540712260984-d701320a8909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80',
      address: 'Oak Park',
      contactEmail: 'peruvianidol@gmail.com',
      isFavorite: false,
      isNew: false
    },
    {
      id: '3',
      title: 'Advanced Yoga',
      subtitle: 'Learn more challenging poses',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias incidunt itaque, dignissimos quo hic maxime, magni commodi quas tenetur nobis iste expedita accusamus sapiente iusto velit cumque odio animi.',
      imageUrl: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      address: 'Oak Park',
      contactEmail: 'peruvianidol@gmail.com',
      isFavorite: false,
      isNew: false
    },
    {
      id: '4',
      title: 'Cooking for Two',
      subtitle: 'Learn simple dinner options',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex eum fuga, minus in quae, dicta, ab esse magnam doloribus inventore quas impedit facere. Ipsa accusantium impedit doloremque nesciunt laboriosam.',
      imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      address: 'Oak Park',
      contactEmail: 'peruvianidol@gmail.com',
      isFavorite: false,
      isNew: false
    }
  ];

  function addMeetup(event) {
    const newMeetup = {
      id: Math.random().toString(),
      title: event.detail.title,
      subtitle: event.detail.subtitle,
      description: event.detail.description,
      imageUrl: event.detail.imageUrl,
      address: event.detail.address,
      contactEmail: event.detail.contactEmail
    };

    meetups = [newMeetup, ...meetups];
    editMode = null;
  }

  function toggleFavorite(event) {
    const id = event.detail;
    const updatedMeetup = { ...meetups.find(m => m.id === id) };
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    const meetupIndex = meetups.findIndex(m => m.id === id);
    const updatedMeetups = [...meetups];
    updatedMeetups[meetupIndex] = updatedMeetup;
    meetups = updatedMeetups;
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
  <MeetupGrid {meetups} on:togglefavorite="{toggleFavorite}" />
</main>
