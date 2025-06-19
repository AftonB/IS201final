

const questions = [
    {
        lyric: "Is this the real life? Is this just ______?",
        answer: "fantasy"
    },
    {
        lyric: "You say you want a ______, well you know, we all want to change the world.",
        answer: "revolution"
    },
    {
        lyric: "Here comes the ______, and I say it's all right.",
        answer: "sun"
    },
    {
        lyric: "I'm on the highway to ______!",
        answer: "hell"
    },
    {
        lyric: "Wake me up when ______ ends.",
        answer: "september"
    }
    ,{ song: 'The Unforgiven', lyric: `What I've felt, what I've known, never shined through in what I've _____`, answer: 'shown' },
    { song: 'Jailhouse Rock', lyric: `Everybody in the whole cell block was dancing to the _____ rock`, answer: 'jailhouse' },
    { song: 'Undone – The Sweater Song', lyric: `If you want to destroy my _____`, answer: 'sweater' },
    { song: "Don't Stop Me Now", lyric: `Don't stop me now, I'm having such a good _____`, answer: 'time' },
    { song: 'Hound Dog', lyric: `You ain't nothin' but a hound dog, cryin' all the _____`, answer: 'time' },
    { song: 'One', lyric: `Hold my breath as I wish for _____`, answer: 'death' },
    { song: 'Paradise City', lyric: `Take me down to the Paradise City where the grass is green and the girls are _____`, answer: 'pretty' },
    { song: 'Cool Cat', lyric: `You're a cool cat, tapping on the _____`, answer: 'toe' },
    { song: 'Elanor Rigby', lyric: `Ah, look at all the lonely _____`, answer: 'people' },
    { song: 'Somebody to Love', lyric: `Can anybody find me somebody to _____?`, answer: 'love' },
    { song: 'Somebody to Love', lyric: `Can anybody find me somebody to _____?`, answer: 'love' },
    { song: 'Back in Black', lyric: `Back in black, I hit the sack, I've been too long, I'm glad to be _____`, answer: 'back' },
    { song: 'Boulevard of Broken Dreams', lyric: `I walk a lonely road, the only one that I have ever _____`, answer: 'known' },
    { song: 'Basket Case', lyric: `Do you have the time to listen to me _____`, answer: 'whine' },
    { song: 'Say It Ain’t So', lyric: `Say it ain’t so, your _____ is a heartbreaker`, answer: 'love' },
    { song: 'Beverly Hills', lyric: `Beverly Hills, that's where I want to _____`, answer: 'be' },
    { song: 'Welcome to the Jungle', lyric: `Welcome to the jungle, we got fun and _____`, answer: 'games' },
    { song: 'Here Comes the Sun', lyric: `Here comes the sun, and I say, it's all _____`, answer: 'right' },
    { song: 'We Will Rock You', lyric: `We will, we will _____ you`, answer: 'rock' },
    { song: 'American Idiot', lyric: `Don't want to be an American _____`, answer: 'idiot' },
    { song: 'Wake Me Up When September Ends', lyric: `Wake me up when _____ ends`, answer: 'September' },
    { song: 'Master of Puppets', lyric: `Master, master, where's the dreams that I've been _____`, answer: 'after' },
    { song: 'The Unforgiven', lyric: `You labeled me, I’ll label you, so I _____`, answer: 'dub' },
    { song: 'Highway to Hell', lyric: `I'm on the highway to _____`, answer: 'hell' },
    { song: 'Thunderstruck', lyric: `You've been _____`, answer: 'thunderstruck' },
    { song: 'Nothing Else Matters', lyric: `Nothing else _____`, answer: 'matters' },
    { song: 'Island in the Sun', lyric: `On an island in the sun, we'll be playing and having _____`, answer: 'fun' },
    { song: 'Penny Lane', lyric: `Penny Lane is in my _____`, answer: 'ears' },
    { song: 'Can`t help falling in love with you', lyric: `I can't help falling in _____ with you`, answer: 'love' },
    { song: 'Twist and Shout', lyric: `C'mon baby, now _____ and shout`, answer: 'twist' },
    { song: 'Love Me Tender', lyric: `Love me tender, love me _____`, answer: 'sweet' },
    { song: 'Let`s Get Rocked', lyric: `Let’s get, let’s get, let’s get, let’s get _____`, answer: 'rocked' },
    { song: 'Buddy Holly', lyric: `Ooo-ee-ooo, I look just like Buddy _____`, answer: 'Holly' },
    { song: 'Good Riddance (Time of Your Life)', lyric: `I hope you had the time of your _____`, answer: 'life' },
    { song: 'Troublemaker', lyric: `I'm a troublemaker, never been a _____`, answer: 'faker' },
    { song: 'Suspicious Minds', lyric: `We can't go on together with suspicious _____`, answer: 'minds' },
    { song: 'Another One Bites the Dust', lyric: `Another one bites the _____`, answer: 'dust' },
    { song: 'Say It Ain’t So', lyric: `This bottle of _____ awakens ancient feelings`, answer: 'Steven' },
    { song: 'Don`t Stop Me Now', lyric: `I'm a shooting star leaping through the _____`, answer: 'sky' },
    { song: 'Nothing Else Matters', lyric: `Forever trusting who we _____`, answer: 'are' },
    { song: 'Basket Case', lyric: `I think I'm cracking up, am I just _____?`, answer: 'paranoid' },
    { song: 'Elanor Rigby', lyric: `Wearing the face that she keeps in a jar by the _____`, answer: 'door' },
    { song: 'Undone – The Sweater Song', lyric: `Watch me unravel, I'll soon be _____`, answer: 'naked' },
    { song: 'Bohemian Rhapsody', lyric: `Is this the real life? Is this just _____?`, answer: 'fantasy' },
    { song: 'We Are the Champions', lyric: `We are the champions, my _____`, answer: 'friends' },
    { song: 'Love Me Tender', lyric: `For my darling, I love you and I always _____`, answer: 'will' },
    { song: 'Back in Black', lyric: `Yes, I'm let loose from the noose, that's kept me hanging _____`, answer: 'about' },
    { song: 'Enter Sandman', lyric: `Exit light, enter _____`, answer: 'night' },
    { song: 'One', lyric: `Darkness, imprisoning me, all that I see, absolute _____`, answer: 'horror' },
    { song: 'Sweet Child o` Mine', lyric: `Sweet child o' mine, sweet love of _____`, answer: 'mine' },
    { song: 'In Too Deep', lyric: `Because I'm in too deep, and I'm trying to keep up above in my _____`, answer: 'head' },

];

  // ... (remaining 40 questions—I'll provide full file if desired)


// Shuffle questions once at the start
questions.sort(() => Math.random() - 0.5);

let current = 0;
let score = 0;

function showQuestion() {
  if (current >= questions.length) {
    // Game over message
    document.getElementById('question-box').innerHTML = `
      <h2>🎉 Game Over!</h2>
      <p>Your final score: ${score} / ${questions.length}</p>
      <button onclick="restartGame()">Play Again</button>
    `;
    return;
  }

  const q = questions[current];
  document.getElementById('lyric').innerHTML = `<strong>${q.song}</strong>: ${q.lyric}`;
  document.getElementById('answer').value = '';
  document.getElementById('feedback').textContent = '';
}

function checkAnswer() {
  const userInput = document.getElementById('answer').value.trim().toLowerCase();
  const correct = questions[current].answer.toLowerCase();

  if (userInput === correct) {
    score++;
    document.getElementById('feedback').textContent = '✅ Correct!';
  } else {
    document.getElementById('feedback').textContent = `❌ Wrong. Answer: ${questions[current].answer}`;
  }

  current++;

  // Show next question after 1 second delay
  setTimeout(showQuestion, 1000);
}

function restartGame() {
  current = 0;
  score = 0;
  questions.sort(() => Math.random() - 0.5);
  // Rebuild original question box HTML because it was replaced on game over
  document.getElementById('question-box').innerHTML = `
    <h1>🎸 Fill in the Lyric 🎤</h1>
    <p id="lyric"></p>
    <input type="text" id="answer" placeholder="Type your answer here" />
    <button id="submit">Submit</button>
    <p id="feedback"></p>
  `;
  // Reattach event listener to new submit button
  document.getElementById('submit').addEventListener('click', checkAnswer);
  showQuestion();
}

// Setup event listener after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit').addEventListener('click', checkAnswer);
  showQuestion();
});