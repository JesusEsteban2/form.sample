function handlerSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  console.dir(form);
  console.dir(data);
  data.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  //   console.log(data.entries());
  //   const dataObject = Object.fromEntries(data.entries());
}

const target = document.querySelector('form');
target.addEventListener('submit', handlerSubmit);
