fetch('./dados.json')
  .then((r) => r.json())
  .then((json) => {
    console.log(json);
    json.forEach((curso) => {
      console.log(curso);
    });
  });
