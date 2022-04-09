import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
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
