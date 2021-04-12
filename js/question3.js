

async function getCatFacts() {
  const url = "https://cat-fact.herokuapp.com/facts";
  const response = await fetch(url);
  const result = await response.json();
  console.log(result.length);
}

getCatFacts();