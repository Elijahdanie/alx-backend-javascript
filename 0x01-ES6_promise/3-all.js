import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const f = uploadPhoto();
  const s = createUser();

  let body;
  let fname;
  let lname = '';

  return Promise.all([f, s])
    .then((results) => {
      body = results[0];
      fname = results[1];
      lname = results[2];
      console.log(body, fname, lname);
    })
    .catch(() => console.log('Signup system offline'));
}
