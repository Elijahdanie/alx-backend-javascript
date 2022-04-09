import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    const payload = [];
    results.forEach((x) => payload.push(
      x.status === 'fulfilled'
        ? {
          status: x.status,
          value: x.value,
        }
        : {
          status: x.status,
          value: `Error: ${x.reason}`,
        },
    ));
    return payload;
  });
}
