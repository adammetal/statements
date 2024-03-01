{
  console.log('Hello World');
}

{
  let c = 1000;
  
  {
    let a = 10;
    let b = 10;
    let c = a + b;
    console.log(c);
  }

  console.log(c);

  {
    console.log('hello');
    {
      console.log('valami');
      {
        {
          {

          }
          {

          }
        }
      }
    }
  }
}

for (let i = 1; i <= 10; i++)
{
  console.log('Elso ciklus', i);
}

for (let j = 1; j <= 11; j++)
{
  console.log('Masodik ciklus', j);
}

for (let k = 1; k <= 12; k++) {
  console.log('Harmadik ciklus', k);
}

const age = 17;

if (age >= 18) {
  console.log("Valami izgis...");
} else if (age === 17) {
  console.log('Majdnem ecsém...');
} else if (age === 16) {
  console.log('Majd esetleg pár év múlva')
} else {
  console.log('Kölök vagyol még');
}


const numbers = [4, 3, 1, 4, 32, 6];
let max = 0;
for (let i = 0; i < numbers.length; i++) {
  const current = numbers[i]; // scale

  if (current > max) {
    max = current;
  }
}
console.log(max);

// Switching
const names = ['Ádám', 'Éva'];
console.log(names);
const helper = names[0];
names[0] = names[1];
names[1] = helper;
console.log(names);

