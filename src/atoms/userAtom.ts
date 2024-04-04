import { atom } from 'jotai';

export const userAtom = atom({
  id: 1,
  username: 'Jorge Rios',
  email: 'jorgerios@gmail.com',
  age: 25,
  address: 'México, Guadalajara, Jalisco',
  friends: 452,
  job: 'Software Engineer',
  userImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  coverImage: 'https://images.pexels.com/photos/671956/pexels-photo-671956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  introducition: "Hello, I'm [Your Name]. Originally from [Your City/Country], I'm passionate about [Your Interest or Field]. With experience in [Your Profession or Industry], I excel in [Your Key Skills]. Outside of work, I enjoy [Your Hobbies or Interests]. Excited to connect and learn from all of you."
});