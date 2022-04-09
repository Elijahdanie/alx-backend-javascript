import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const allpromises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(allpromises)
    .then((result) => {
      const res = [];
      result.forEach((p) => {
        if (p.status === 'fulfilled') {
          res.push(p);
        } else {
          res.push({
            status: p.status,
            p: `Error: ${p.reason.message}`,
          });
        }
      });
      return res;
    });
}
