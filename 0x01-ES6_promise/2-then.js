export default function handleResponseFromAPI(promise) {
  const payload = { status: 200, body: 'success' };

  return promise
    .then(() => payload)
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
