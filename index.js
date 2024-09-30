import './index.css';

for (let i = 1; i <= 9; i++) {
  let answer = '';
  for (let j = 1; j <= i; j++) {
    answer += `${i} * ${j} = ${i * j}; `;
  }
  console.log(answer);
}

