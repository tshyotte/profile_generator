const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? `, (answer1) => {
  rl.question(`What's an activity you like doing?`, (answer2) => {
    rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer3) => {
      rl.question(`Which sport is your absolute favourite?`, (answer4) => {
        rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer5) => {
          console.log(`Thank you for your valuable feedback: ${answer1}  likes ${answer2} and making ${answer3}, watch ${answer4} on weekends and ${answer5} describe him/her superpower.`);

          rl.close(); 
        });
      });
    });
  });
});

