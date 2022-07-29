import { writable } from 'svelte/store';

const meetups = writable([
  {
    id: '1',
    title: 'Coding Bootcamp',
    subtitle: 'Learn to code in 2 hours',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, harum perferendis laborum ipsum veniam vitae mollitia soluta quia cumque ducimus optio molestiae placeat quae ipsam consequatur odio similique facere dolorum!',
    imageUrl: '/images/coding-bootcamp.webp',
    address: 'Oak Park',
    isFavorite: false,
    isNew: true
  },
  {
    id: '2',
    title: 'Beginner Basketball',
    subtitle: 'Learn the fundamentals of hoops',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus distinctio odio tempora est sed vero ea, dolore quod ab beatae dolorem debitis soluta reiciendis esse. Rem exercitationem quidem repellendus!',
    imageUrl: '/images/beginner-basketball.webp',
    address: 'Oak Park',
    isFavorite: false,
    isNew: false
  },
  {
    id: '3',
    title: 'Advanced Yoga',
    subtitle: 'Learn more challenging poses',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias incidunt itaque, dignissimos quo hic maxime, magni commodi quas tenetur nobis iste expedita accusamus sapiente iusto velit cumque odio animi.',
    imageUrl: '/images/advanced-yoga.webp',
    address: 'Oak Park',
    isFavorite: false,
    isNew: false
  },
  {
    id: '4',
    title: 'Cooking for Two',
    subtitle: 'Learn simple dinner options',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex eum fuga, minus in quae, dicta, ab esse magnam doloribus inventore quas impedit facere. Ipsa accusantium impedit doloremque nesciunt laboriosam.',
    imageUrl: '/images/cooking-for-two.webp',
    address: 'Oak Park',
    isFavorite: false,
    isNew: false
  },
  {
    id: '5',
    title: 'Wine Tasting',
    subtitle: 'Learn how to appreciate wine',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita at veniam delectus veritatis quo inventore cum mollitia. Deserunt est officiis accusantium ratione eligendi saepe magni corrupti, earum iusto molestias et.',
    imageUrl: '/images/wine-tasting.webp',
    address: 'Oak Park',
    isFavorite: false,
    isNew: false
  },
  {
    id: '6',
    title: 'Kids Soccer',
    subtitle: 'Learn the basics of the beautiful game',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptas dolorum quidem ullam nam exercitationem quos porro beatae temporibus et ex amet culpa assumenda voluptatum harum, voluptate rem quod enim.',
    imageUrl: '/images/kids-soccer.webp',
    address: 'Oak Park',
    isFavorite: false,
    isNew: false
  }
]);

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  addMeetup: (meetupData) => {
    const newMeetup = {
      ...meetupData,
      id: Math.random().toString(),
      isFavorite: false,
      isNew: true
    };
    meetups.update(items => {
      return [newMeetup, ...items];
    });
  },
  updateMeetup: (id, meetupData) => {
    meetups.update(items => {
      const meetupIndex = items.findIndex(i => i.id === id);
      const updatedMeetup = { ...items[meetupIndex], ...meetupData };
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  },
  removeMeetup: (id) => {
    meetups.update(items => {
      return items.filter(i => i.id !== id);
    });
  },
  toggleFavorite: (id) => {
    meetups.update(items => {
      const updatedMeetup = { ...items.find(m => m.id === id) };
      updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
      const meetupIndex = items.findIndex(m => m.id === id);
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;  
    });
  }
};

export default customMeetupsStore;