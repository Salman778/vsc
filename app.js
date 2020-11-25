function square(number) {
  let result = number * number;
  return result;
}
// comment
for (let i = 2; i < 6; i++)
  console.log(`The square of number ${i} is ${square(i)}`);
