export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error(''));
    }
  }).then((response) => {
    console.log('Got a response from the API');
    return response;
});
}

