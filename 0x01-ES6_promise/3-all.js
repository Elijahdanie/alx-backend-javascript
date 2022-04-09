import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const f = uploadPhoto();
  const l = createUser();
  return Promise.all([f, l]).then(
    (result) => console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`),
    () => console.log('Signup system offline'),
  );
}
