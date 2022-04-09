import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const f = uploadPhoto();
  const s = createUser();
  return Promise.all([f, s])
    .then((results) => {
      console.log(results[0].body, results[1].firstName, results[1].lastName);
    })
    .catch(() => console.log('Signup system offline'));
}
