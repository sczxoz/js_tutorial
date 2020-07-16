let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(`https://example.com/${urlify(element)}`);
  });
  return urls;
}

function functionalUrls(elements) {
  return elements.map(element => `https://example.com/${urlify(element)}`);
}

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}

function inclDakota(elements) {
  return elements.filter(element => element.includes("Dakota"));
}

function functionalDoubles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  })
  return total;
}

function functionalSum(elements) {
  return elements.reduce( (total, n) => { return total += n; } );
}

function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}

function functionalLengths(elements) {
  return elements.reduce( (lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}

function functionalMultiply(elements) {
  return elements.reduce( (total, n) => { return total *= n; } );
}
console.log(functionalMultiply(numbers));