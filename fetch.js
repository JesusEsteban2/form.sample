const options = {
  method: 'GET',
};

const url = '/data.json';

const promise = fetch(url, options);

promise
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    console.dir(response);
    const error = response.status + '-' + response.statusText;
    throw new Error(error);
  })
  .then((data) => processData(data))
  .catch((error) => console.log(error));

function processData(data) {
  console.dir(data);
  console.dir(data[0].name);
}
