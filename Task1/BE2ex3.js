const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const QA = {
  "Hey?": "Fine",
  "What is your name?": "Ali",
  "What can you do?":
    "Nothing",
  "Age?":
    "9384 years",
};

function getChatbotResponse(input) {
  return (
    QA[input] ||
    "This is a hard question"
  );
}

function startChatbot() {
  rl.setPrompt("You: ");
  rl.prompt();

  rl.on("line", (userInput) => {
    userInput = userInput.trim();
    if (
      userInput.toLowerCase() === "exit" ||
      userInput.toLowerCase() === "quit"
    ) {
      rl.close();
    } else {
      console.log("bot:", getChatbotResponse(userInput));
      rl.prompt();
    }
  }).on("close", () => {
    console.log("Goodbye!");
    process.exit(0);
  });
}

startChatbot();