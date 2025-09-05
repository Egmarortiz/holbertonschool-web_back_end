export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("API respsonse received!");
      }
      else {
        reject("API response failed!");
      }

  }, 1000);
});
}
