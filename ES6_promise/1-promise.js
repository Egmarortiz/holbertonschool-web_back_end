export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {

    const returnValue = {status: 200, body: "Success"};

    if (success === true) {
      resolve(returnValue);
    }
    else {
      reject("The fake API is not working currently");
    }
  });
}
