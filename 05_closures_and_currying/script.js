function makeCounterBy(num) {
  let count = 0;
  return function () {
    count += num;
    console.log(count);
  };
}

counter1 = makeCounterBy(1);
counter10 = makeCounterBy(10);

for (let i = 0; i < 10; i++) {
  counter1();
}
for (let i = 0; i < 10; i++) {
  counter10();
}

const sendEmail = (to) => (sub) => (body) =>
  console.log(`Sending email to: ${to}, subject: ${sub}, body: ${body}`);

sendEmail("kaushik@abc.com")("Your order is confirmed")("Will deliver soon!");
