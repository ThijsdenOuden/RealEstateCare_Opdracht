import axios from 'axios';

export const getJsonData = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3000/reports')
      .then(response => {
        resolve(response.data);
      })
      .catch(error => reject(error));
  });
};