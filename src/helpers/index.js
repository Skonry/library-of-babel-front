// https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});