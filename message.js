const openings = ["Hello", "Hi", "Greetings", "Hey"];
const prompts = ["How are you?", "What's up?", "How's it going?", "What are you doing?"];
const twists = ["Just kidding!", "Surprise!", "Guess what?", "You won't believe this!"];

function generateMessage() {
    const opening = openings[Math.floor(Math.random() * openings.length)];
    const prompt = prompts[Math.floor(Math.random() * prompts.length)];
    const twist = twists[Math.floor(Math.random() * twists.length)];
    return `${opening} ${prompt} ${twist}`;
}
console.log(generateMessage());