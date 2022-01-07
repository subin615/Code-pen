/**
 * increment inside next() eg - next(2).
 * yield keyword in generator.
 */
function* generator() {
  // function* --> {*} is a reference for generator.
  let id = 0;
  while (id < 5) {
    const increment = yield id;
    if (increment) {
      id += increment;
    } else {
      id++;
    }
  }
}

/**
 *  const generate = generator();
    let result = generate.next();
    while (!result.done) {
    console.log(result.value);
    result = generate.next(1);
} 
 */
