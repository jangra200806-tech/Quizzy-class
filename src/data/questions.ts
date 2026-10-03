import { Question } from '../types/game';

export const QUESTIONS: Question[] = [
  // --- TRICK QUESTIONS & FUNNY SCHOOL SITUATIONS ---
  {
    id: 't1',
    question: 'Teacher: If you have 5 apples and I take 2, what will you have left?',
    category: 'trick',
    options: ['3 apples', 'Anger', 'Homework', 'Nothing'],
    correctIndex: 1,
    explanation: 'Why did you take my apple without asking, Ma\'am?!',
    teacherHumorCorrect: 'Exactly! Please don\'t be angry with me!',
    teacherHumorWrong: 'Stop worrying about the apple and calculate the anger!'
  },
  {
    id: 't2',
    question: 'How many teeth does a mosquito have?',
    category: 'trick',
    options: ['32 teeth', '47 teeth', 'How would I know!', '100 teeth'],
    correctIndex: 2,
    explanation: 'Since when did you start counting mosquito teeth?!',
    teacherHumorCorrect: 'Right answer! Good to see you have common sense!',
    teacherHumorWrong: 'Are you planning to become a mosquito dentist?'
  },
  {
    id: 't3',
    question: 'Which month has 28 days?',
    category: 'trick',
    options: ['Only February', 'February in leap year', 'All 12 of them!', 'None'],
    correctIndex: 2,
    explanation: 'Every single month has at least 28 days!',
    teacherHumorCorrect: 'Sharp thinking! Caught my trick!',
    teacherHumorWrong: 'February has 28, but ALL months do too!'
  },
  {
    id: 't4',
    question: 'What has to be broken before you can use it?',
    category: 'trick',
    options: ['A pencil', 'An egg', 'A promise', 'School rules'],
    correctIndex: 1,
    explanation: 'You must crack an egg to cook or eat it!',
    teacherHumorCorrect: 'Egg-cellent answer!',
    teacherHumorWrong: 'And please do NOT say school rules!'
  },
  {
    id: 't5',
    question: 'If a rooster lays an egg on top of a slanted roof, which way will it roll?',
    category: 'trick',
    options: ['Left side', 'Right side', 'Roosters do not lay eggs!', 'Straight down'],
    correctIndex: 2,
    explanation: 'Roosters are male, only hens lay eggs!',
    teacherHumorCorrect: 'Aha! Science and biology champion!',
    teacherHumorWrong: 'Since when do roosters lay eggs?!'
  },
  {
    id: 't6',
    question: 'What has a head and a tail, but no body?',
    category: 'trick',
    options: ['A snake', 'A coin', 'A lizard', 'A needle'],
    correctIndex: 1,
    explanation: 'Heads or tails—it\'s a standard coin!',
    teacherHumorCorrect: 'Flip it and win it! Correct!',
    teacherHumorWrong: 'Look in your pocket next time!'
  },
  {
    id: 't7',
    question: 'If you drop a white hat into the Red Sea, what does it become?',
    category: 'trick',
    options: ['Pink', 'Red', 'Wet', 'Transparent'],
    correctIndex: 2,
    explanation: 'It just gets soaking wet!',
    teacherHumorCorrect: 'Water is wet, no matter what color sea!',
    teacherHumorWrong: 'Did you think the sea was made of paint?!'
  },
  {
    id: 't8',
    question: 'What can you catch, but never throw?',
    category: 'trick',
    options: ['A basketball', 'A frisbee', 'A cold', 'A cricket ball'],
    correctIndex: 2,
    explanation: 'Achoo! You catch a cold, you can\'t toss it!',
    teacherHumorCorrect: 'Bless you! Right on the money!',
    teacherHumorWrong: 'Wash your hands and try again!'
  },
  {
    id: 't9',
    question: 'Why was the math book always crying?',
    category: 'school',
    options: ['Failed exams', 'It had too many problems', 'Lost its calculator', 'Page got torn'],
    correctIndex: 1,
    explanation: 'Math book is overwhelmed with infinite unsolved problems!',
    teacherHumorCorrect: 'Haha! Solve them all to cheer it up!',
    teacherHumorWrong: 'Look at chapter 5—pure problems!'
  },
  {
    id: 't10',
    question: 'What gets wetter and wetter the more it dries?',
    category: 'logic',
    options: ['A sponge', 'A towel', 'A puddle', 'The clouds'],
    correctIndex: 1,
    explanation: 'A towel dries you, so it gets wetter!',
    teacherHumorCorrect: 'Towel logic unlocked! Spot on!',
    teacherHumorWrong: 'Think about what you use after a shower!'
  },

  // --- SCHOOL & CLASSROOM HUMOR ---
  {
    id: 's1',
    question: 'What is the most popular sound in a classroom right after the final bell rings?',
    category: 'school',
    options: ['Deep silence', 'Zip sound of bags closing', 'Teacher clapping', 'Birds chirping'],
    correctIndex: 1,
    explanation: 'Fastest hand speeds in the universe happen at 2:00 PM!',
    teacherHumorCorrect: 'I saw you zip your backpack in 0.2 seconds!',
    teacherHumorWrong: 'Nobody stays in silence when the bell rings!'
  },
  {
    id: 's2',
    question: 'Student: "Ma\'am, can I get punished for something I didn\'t do?" Teacher: "Of course not!" Student:',
    category: 'school',
    options: ['"Thank you!"', '"Great, I didn\'t do my homework!"', '"I love school!"', '"Can I go home?"'],
    correctIndex: 1,
    explanation: 'Classic backbencher defense mechanism!',
    teacherHumorCorrect: 'Detention for you anyway, smarty pants!',
    teacherHumorWrong: 'You missed the legendary excuse!'
  },
  {
    id: 's3',
    question: 'What has hands but cannot clap?',
    category: 'school',
    options: ['A clock', 'A tree', 'A doll', 'A chair'],
    correctIndex: 0,
    explanation: 'A clock has hour, minute, and second hands!',
    teacherHumorCorrect: 'Tick-tock, you beat the clock!',
    teacherHumorWrong: 'Look at the classroom wall clock!'
  },
  {
    id: 's4',
    question: 'Where does Friday always come before Thursday?',
    category: 'logic',
    options: ['In Australia', 'In a dictionary', 'In a leap year', 'On Mars'],
    correctIndex: 1,
    explanation: 'Alphabetical order: F comes before T in the dictionary!',
    teacherHumorCorrect: 'Alphabetical mastery! Impressive!',
    teacherHumorWrong: 'Open a dictionary and check letter F vs T!'
  },
  {
    id: 's5',
    question: 'What has many keys but cannot open a single door?',
    category: 'school',
    options: ['A keychain', 'A piano', 'A padlock', 'A treasure chest'],
    correctIndex: 1,
    explanation: 'A piano has 88 musical keys!',
    teacherHumorCorrect: 'Music to my ears! Correct!',
    teacherHumorWrong: 'Keys that make tunes, not open locks!'
  },

  // --- FUNNY SCIENCE & NATURE ---
  {
    id: 'sc1',
    question: 'What do bees give us besides honey?',
    category: 'science',
    options: ['Milk', 'Stings', 'Wool', 'Electricity'],
    correctIndex: 1,
    explanation: 'Ouch! Get too close to a bee and you get a sting!',
    teacherHumorCorrect: 'Bzzz! Accurate and painful truth!',
    teacherHumorWrong: 'Bees definitely don\'t give milk or wool!'
  },
  {
    id: 'sc2',
    question: 'Which is the fastest organ in the human body during an exam surprise test?',
    category: 'science',
    options: ['Brain', 'Lungs', 'Heart (thump thump)', 'Ears'],
    correctIndex: 2,
    explanation: 'Adrenaline strikes and the heartbeat goes 180 BPM!',
    teacherHumorCorrect: 'I can hear your heartbeat from my desk!',
    teacherHumorWrong: 'The brain goes blank, only the heart races!'
  },
  {
    id: 'sc3',
    question: 'Why do birds fly south for winter instead of walking?',
    category: 'animals',
    options: ['They lost their compass', 'It is too far to walk', 'Snow gets on their shoes', 'They love planes'],
    correctIndex: 1,
    explanation: 'Because it takes way too long to waddle 3,000 kilometers!',
    teacherHumorCorrect: 'Common sense 100%! Great job!',
    teacherHumorWrong: 'Imagine a tiny sparrow walking across continents!'
  },
  {
    id: 'sc4',
    question: 'What happens if you freeze water?',
    category: 'science',
    options: ['It turns into steam', 'It becomes ice', 'It disappears', 'It catches fire'],
    correctIndex: 1,
    explanation: 'Water turns solid below 0°C (32°F) as ice!',
    teacherHumorCorrect: 'Cool answer! Literally ice cool!',
    teacherHumorWrong: 'Back to 3rd grade science lab!'
  },
  {
    id: 'sc5',
    question: 'How many bones are in an octopus?',
    category: 'animals',
    options: ['8 bones', '206 bones', 'Zero bones', '50 bones'],
    correctIndex: 2,
    explanation: 'Octopuses are invertebrates and have 0 bones!',
    teacherHumorCorrect: 'Squishy biology master! Zero bones!',
    teacherHumorWrong: 'They can squeeze through bottle necks—0 bones!'
  },
  {
    id: 'sc6',
    question: 'What planet is known as the Red Planet?',
    category: 'science',
    options: ['Jupiter', 'Mars', 'Venus', 'Saturn'],
    correctIndex: 1,
    explanation: 'Mars is covered in reddish iron oxide (rust)!',
    teacherHumorCorrect: 'Astronaut in the making! Mars is right!',
    teacherHumorWrong: 'Mars is the red one in our solar system!'
  },

  // --- MATH & CRAZY NUMBERS ---
  {
    id: 'm1',
    question: 'What goes up but never ever comes down?',
    category: 'math',
    options: ['A rocket', 'Your age', 'A balloon', 'The temperature'],
    correctIndex: 1,
    explanation: 'You will never get younger, your age only climbs!',
    teacherHumorCorrect: 'Time flies when you are having fun!',
    teacherHumorWrong: 'Rockets fall down, but age never does!'
  },
  {
    id: 'm2',
    question: 'If you have a bowl with 6 apples and you take away 4, how many do you have?',
    category: 'math',
    options: ['2 apples', '4 apples', '6 apples', '0 apples'],
    correctIndex: 1,
    explanation: 'YOU took 4 apples, so you HAVE 4 apples in your hand!',
    teacherHumorCorrect: 'You didn\'t fall for the subtraction trap!',
    teacherHumorWrong: 'You took 4, so you possess 4 apples!'
  },
  {
    id: 'm3',
    question: 'How many sides does a circle have?',
    category: 'math',
    options: ['Zero', 'One', 'Two (Inside and Outside)', 'Infinite'],
    correctIndex: 2,
    explanation: 'Every circle has two sides: the inside and the outside!',
    teacherHumorCorrect: 'Geometric lateral thinking at its finest!',
    teacherHumorWrong: 'Think outside (and inside) the circle!'
  },
  {
    id: 'm4',
    question: 'What is half of 2 + 2?',
    category: 'math',
    options: ['2', '3', '4', '1'],
    correctIndex: 1,
    explanation: 'Half of 2 is 1, and 1 + 2 = 3! (BODMAS order of operations)',
    teacherHumorCorrect: 'BODMAS rules respected! Outstanding!',
    teacherHumorWrong: '(Half of 2) + 2 = 1 + 2 = 3!'
  },
  {
    id: 'm5',
    question: 'What digit looks like a pair of eyeglasses on its side?',
    category: 'math',
    options: ['0', '8', '3', '7'],
    correctIndex: 1,
    explanation: 'Turn number 8 sideways and it looks like glasses (or infinity ∞)!',
    teacherHumorCorrect: 'Clear 20/20 vision! Spot on!',
    teacherHumorWrong: 'Rotate an 8 and you see glasses!'
  },

  // --- GENERAL KNOWLEDGE & EVERYDAY LIFE ---
  {
    id: 'gk1',
    question: 'What building has the most stories?',
    category: 'gk',
    options: ['Burj Khalifa', 'The Empire State', 'The Library', 'Eiffel Tower'],
    correctIndex: 2,
    explanation: 'A library holds thousands of book stories!',
    teacherHumorCorrect: 'Pun-tastic! Readers make leaders!',
    teacherHumorWrong: 'Architects build floors, libraries hold stories!'
  },
  {
    id: 'gk2',
    question: 'What invention lets you look right through a wall?',
    category: 'everyday',
    options: ['X-ray glasses', 'A window', 'A telescope', 'A drill'],
    correctIndex: 1,
    explanation: 'A window is literally designed for looking through walls!',
    teacherHumorCorrect: 'Clear as glass! Very good!',
    teacherHumorWrong: 'No sci-fi needed, just look out the window!'
  },
  {
    id: 'gk3',
    question: 'What runs all around a backyard without ever moving?',
    category: 'everyday',
    options: ['A dog', 'A fence', 'A sprinkler', 'A lawnmower'],
    correctIndex: 1,
    explanation: 'The fence encloses the whole yard while standing still!',
    teacherHumorCorrect: 'Surrounded by greatness! Correct!',
    teacherHumorWrong: 'The fence stays in place!'
  },
  {
    id: 'gk4',
    question: 'What is always in front of you, but can never be seen?',
    category: 'logic',
    options: ['Your nose', 'The future', 'The air', 'Your reflection'],
    correctIndex: 1,
    explanation: 'Tomorrow and the future are always ahead of us!',
    teacherHumorCorrect: 'Philosophical and correct!',
    teacherHumorWrong: 'You can\'t see tomorrow today!'
  },
  {
    id: 'gk5',
    question: 'What has one eye, but cannot see anything?',
    category: 'everyday',
    options: ['A storm', 'A needle', 'A potato', 'A pirate'],
    correctIndex: 1,
    explanation: 'A sewing needle has an eye for threading!',
    teacherHumorCorrect: 'Threaded the needle cleanly!',
    teacherHumorWrong: 'A sewing needle has an eye with zero vision!'
  },

  // --- ANIMALS & NATURE ---
  {
    id: 'a1',
    question: 'Which animal never sleeps in its entire lifetime?',
    category: 'animals',
    options: ['Koala', 'Bullfrog', 'Sloth', 'Panda'],
    correctIndex: 1,
    explanation: 'Bullfrogs stay reactive and don\'t enter deep sleep cycles!',
    teacherHumorCorrect: 'Ribbit! Wide awake answer!',
    teacherHumorWrong: 'Sloths sleep 20 hours a day, bullfrogs do not!'
  },
  {
    id: 'a2',
    question: 'What do you call a sleeping dinosaur?',
    category: 'animals',
    options: ['T-Rex', 'A Dino-snore', 'Fossil', 'Extinct'],
    correctIndex: 1,
    explanation: 'Zzz... A classic dino-snore!',
    teacherHumorCorrect: 'Roar-ing laughter in the classroom!',
    teacherHumorWrong: 'Dino-snore! Don\'t wake it up!'
  },
  {
    id: 'a3',
    question: 'Which mammal is capable of true flight?',
    category: 'animals',
    options: ['Flying squirrel', 'Bat', 'Sugar glider', 'Ostrich'],
    correctIndex: 1,
    explanation: 'Bats are the only mammals capable of sustained flapping flight!',
    teacherHumorCorrect: 'Batman would be so proud of you!',
    teacherHumorWrong: 'Squirrels only glide, bats actually fly!'
  },
  {
    id: 'a4',
    question: 'What is the color of a polar bear\'s skin under its white fur?',
    category: 'animals',
    options: ['Pink', 'White', 'Black', 'Blue'],
    correctIndex: 2,
    explanation: 'Polar bears have black skin to absorb heat from sunlight!',
    teacherHumorCorrect: 'True Arctic scientist here! Black skin!',
    teacherHumorWrong: 'Their fur is clear, but their skin is black!'
  },
  {
    id: 'a5',
    question: 'Why do cows have bells around their necks?',
    category: 'animals',
    options: ['Fashion statement', 'Their horns don\'t work', 'To call friends', 'To wake farmers'],
    correctIndex: 1,
    explanation: 'Honk honk! Because their horns don\'t make noise!',
    teacherHumorCorrect: 'Moo-velous sense of humor!',
    teacherHumorWrong: 'Car horns beep, but cow horns don\'t!'
  },

  // --- LOGIC PUZZLES & BRAIN BENDERS ---
  {
    id: 'l1',
    question: 'If you are running in a race and you pass the person in 2nd place, what place are you in?',
    category: 'logic',
    options: ['1st place', '2nd place', '3rd place', 'Last place'],
    correctIndex: 1,
    explanation: 'You took their spot, so you are now in 2nd place!',
    teacherHumorCorrect: 'Didn\'t fall into the 1st place trap! Bravo!',
    teacherHumorWrong: 'You passed 2nd, so YOU are now in 2nd place!'
  },
  {
    id: 'l2',
    question: 'Mary\'s father has 5 daughters: Nana, Nene, Nini, Nono, and who?',
    category: 'logic',
    options: ['Nunu', 'Mary', 'Nina', 'Nancy'],
    correctIndex: 1,
    explanation: 'It\'s MARY\'s father! The fifth daughter is Mary!',
    teacherHumorCorrect: 'Family tree detective! Mary it is!',
    teacherHumorWrong: 'Read the first word of the question again!'
  },
  {
    id: 'l3',
    question: 'How many months in the English calendar have 31 days?',
    category: 'gk',
    options: ['5 months', '6 months', '7 months', '8 months'],
    correctIndex: 2,
    explanation: 'Jan, Mar, May, Jul, Aug, Oct, Dec = 7 months!',
    teacherHumorCorrect: 'Knuckle counting paid off! 7 months!',
    teacherHumorWrong: 'Count on your knuckles: 7 months have 31!'
  },
  {
    id: 'l4',
    question: 'What has a neck but no head?',
    category: 'everyday',
    options: ['A guitar', 'A bottle', 'A shirt', 'A giraffe'],
    correctIndex: 1,
    explanation: 'A bottle has a neck, but a cap instead of a head!',
    teacherHumorCorrect: 'Thirst for knowledge quenched! Correct!',
    teacherHumorWrong: 'Look at a water bottle!'
  },
  {
    id: 'l5',
    question: 'What belongs to you, but other people use it far more than you do?',
    category: 'logic',
    options: ['Your pen', 'Your name', 'Your phone', 'Your eraser'],
    correctIndex: 1,
    explanation: 'Other people say and call your name all day!',
    teacherHumorCorrect: 'Calling you a genius right now!',
    teacherHumorWrong: 'Everyone calls your name, you rarely say it!'
  },

  // --- FUNNY MORE RIDDLES & CLASSROOM MOMENTS ---
  {
    id: 'f1',
    question: 'What has legs, but doesn\'t walk anywhere?',
    category: 'school',
    options: ['A spider', 'A table', 'A centipede', 'A crab'],
    correctIndex: 1,
    explanation: 'A classroom table has 4 legs and stays planted!',
    teacherHumorCorrect: 'Desk and table master!',
    teacherHumorWrong: 'Tables have legs but can\'t take a stroll!'
  },
  {
    id: 'f2',
    question: 'What is full of holes, but still holds water?',
    category: 'everyday',
    options: ['A strainer', 'A sponge', 'A bucket', 'A fishing net'],
    correctIndex: 1,
    explanation: 'A sponge absorbs and holds gallons of water!',
    teacherHumorCorrect: 'Soaking up full marks like a sponge!',
    teacherHumorWrong: 'A sponge is full of holes yet traps water!'
  },
  {
    id: 'f3',
    question: 'Teacher: "Tell me two pronouns." Student:',
    category: 'school',
    options: ['"He and She"', '"Who, me?"', '"You and I"', '"This and That"'],
    correctIndex: 1,
    explanation: '"Who" and "me" are both pronouns! Accidental A+!',
    teacherHumorCorrect: 'Yes, YOU! And that is correct grammar!',
    teacherHumorWrong: '"Who, me?" is the funniest correct grammar answer!'
  },
  {
    id: 'f4',
    question: 'How many times can you subtract 5 from 25?',
    category: 'math',
    options: ['5 times', 'Once', 'Infinite times', 'Zero times'],
    correctIndex: 1,
    explanation: 'After you subtract it the first time, it is no longer 25 (it\'s 20)!',
    teacherHumorCorrect: 'Math trick successfully dismantled!',
    teacherHumorWrong: 'Next time you subtract 5 from 20, not 25!'
  },
  {
    id: 'f5',
    question: 'What word becomes shorter when you add two letters to it?',
    category: 'trick',
    options: ['Small', 'Short (Short + er = Shorter)', 'Brief', 'Little'],
    correctIndex: 1,
    explanation: 'Add "er" to "Short" and you get the word "Shorter"!',
    teacherHumorCorrect: 'Wordplay wizardry! Splendid!',
    teacherHumorWrong: 'Add \'er\' to \'short\'!'
  },

  // --- MORE SCIENCE, ANIMALS & EVERYDAY ---
  {
    id: 'sc7',
    question: 'Which is the largest organ of the human body?',
    category: 'science',
    options: ['Liver', 'Brain', 'Skin', 'Stomach'],
    correctIndex: 2,
    explanation: 'Human skin covers about 2 square meters of surface area!',
    teacherHumorCorrect: 'Biology star! Skin is the largest organ!',
    teacherHumorWrong: 'Skin covers your whole body from head to toe!'
  },
  {
    id: 'sc8',
    question: 'What kind of room has no doors or windows?',
    category: 'trick',
    options: ['Dark room', 'A Mushroom', 'Classroom', 'Safe room'],
    correctIndex: 1,
    explanation: 'A mushroom is a fungus, not an apartment!',
    teacherHumorCorrect: 'There is so \'mushroom\' for you in the hall of fame!',
    teacherHumorWrong: 'Mush-ROOM! Get the pun?'
  },
  {
    id: 'sc9',
    question: 'What weighs more: a pound of feathers or a pound of bricks?',
    category: 'science',
    options: ['Bricks', 'Feathers', 'They weigh the exact same!', 'Depends on the wind'],
    correctIndex: 2,
    explanation: 'A pound is a pound! Both weigh exactly 1 pound!',
    teacherHumorCorrect: 'Physics law upheld! Equal weight!',
    teacherHumorWrong: 'A pound of feathers is still one pound!'
  },
  {
    id: 'sc10',
    question: 'What do pandas eat almost 99% of the time?',
    category: 'animals',
    options: ['Pizza', 'Bamboo', 'Fish', 'Eucalyptus'],
    correctIndex: 1,
    explanation: 'Giant pandas munch on crunchy bamboo for 12 hours a day!',
    teacherHumorCorrect: 'Green bamboo feast! Correct!',
    teacherHumorWrong: 'Pandas love bamboo shoots, not pizza!'
  },
  {
    id: 'sc11',
    question: 'Which gas do plants absorb from the air during photosynthesis?',
    category: 'science',
    options: ['Oxygen', 'Carbon Dioxide', 'Helium', 'Nitrogen'],
    correctIndex: 1,
    explanation: 'Plants take in CO2 and breathe out fresh oxygen!',
    teacherHumorCorrect: 'Botanical genius! Plants love CO2!',
    teacherHumorWrong: 'Humans take oxygen, plants take CO2!'
  },
  {
    id: 'sc12',
    question: 'What comes down during rain, but never goes up?',
    category: 'everyday',
    options: ['Raindrops', 'An umbrella', 'A kite', 'A cloud'],
    correctIndex: 0,
    explanation: 'Raindrops fall from the sky and never fall upward!',
    teacherHumorCorrect: 'Gravity always wins! Correct!',
    teacherHumorWrong: 'Rain falls down, simple as that!'
  },

  // --- GENERAL KNOWLEDGE & LOGIC EXPANSIONS ---
  {
    id: 'gk6',
    question: 'How many rings are there on the official Olympic flag?',
    category: 'gk',
    options: ['4', '5', '6', '7'],
    correctIndex: 1,
    explanation: 'Five interlocking rings representing 5 inhabited continents!',
    teacherHumorCorrect: 'Gold medal performance! Five rings!',
    teacherHumorWrong: 'Blue, Yellow, Black, Green, Red = 5 rings!'
  },
  {
    id: 'gk7',
    question: 'What has teeth, but cannot eat or bite?',
    category: 'everyday',
    options: ['A shark', 'A comb', 'A tiger', 'A zipper'],
    correctIndex: 1,
    explanation: 'A hair comb has teeth to style your messy hair!',
    teacherHumorCorrect: 'Smooth styling! Right answer!',
    teacherHumorWrong: 'Check your hair comb in your backpack!'
  },
  {
    id: 'gk8',
    question: 'If two is company, and three is a crowd, what are four and five?',
    category: 'trick',
    options: ['A party', 'Nine (4 + 5 = 9)', 'A riot', 'A team'],
    correctIndex: 1,
    explanation: 'Simple math: 4 + 5 is 9!',
    teacherHumorCorrect: 'Math humor strikes again! 4 + 5 = 9!',
    teacherHumorWrong: 'Add 4 and 5 together!'
  },
  {
    id: 'gk9',
    question: 'What goes through cities and over hills, but never moves an inch?',
    category: 'logic',
    options: ['A train', 'A road', 'A bird', 'A river'],
    correctIndex: 1,
    explanation: 'The road leads everywhere while remaining right there!',
    teacherHumorCorrect: 'On the road to high scores! Correct!',
    teacherHumorWrong: 'Paved highways span countries without walking!'
  },
  {
    id: 'gk10',
    question: 'Where can you find cities, towns, shops, and streets but no people?',
    category: 'gk',
    options: ['In a ghost town', 'On a map', 'In outer space', 'At midnight'],
    correctIndex: 1,
    explanation: 'A paper or digital map shows all places without living people!',
    teacherHumorCorrect: 'Cartographer in the room! Well done!',
    teacherHumorWrong: 'Look at a map or atlas!'
  },

  // --- CLEVER ANIMAL & NATURE QUESTIONS ---
  {
    id: 'a6',
    question: 'What do you call a group of lions?',
    category: 'animals',
    options: ['A pack', 'A herd', 'A pride', 'A school'],
    correctIndex: 2,
    explanation: 'A family unit of lions is proudly called a Pride!',
    teacherHumorCorrect: 'King of the jungle salute!',
    teacherHumorWrong: 'Lions have pride, fish have schools!'
  },
  {
    id: 'a7',
    question: 'What color is a flamingo when it is first born?',
    category: 'animals',
    options: ['Bright pink', 'Gray or white', 'Orange', 'Yellow'],
    correctIndex: 1,
    explanation: 'Flamingo chicks are born fluffy gray; they turn pink from shrimp carotenoids!',
    teacherHumorCorrect: 'Super science trivia fact! Excellent!',
    teacherHumorWrong: 'They turn pink later from their diet!'
  },
  {
    id: 'a8',
    question: 'Which bird is the universal symbol of peace?',
    category: 'animals',
    options: ['Eagle', 'Dove', 'Crow', 'Parrot'],
    correctIndex: 1,
    explanation: 'A white dove holding an olive branch symbolizes peace!',
    teacherHumorCorrect: 'Peaceful and wise! Correct!',
    teacherHumorWrong: 'The gentle white dove is the peace symbol!'
  },
  {
    id: 'a9',
    question: 'Can penguins fly in the air?',
    category: 'animals',
    options: ['Yes, very high', 'No, but they "fly" through water', 'Only at night', 'Only in summer'],
    correctIndex: 1,
    explanation: 'Penguins are flightless birds, but swim like underwater torpedos!',
    teacherHumorCorrect: 'Submarine masters! Good job!',
    teacherHumorWrong: 'Penguins cannot fly in the sky!'
  },

  // --- EVERYDAY LIFE & HUMOR TRAPS ---
  {
    id: 'e1',
    question: 'What loses its head in the morning and gets it back at night?',
    category: 'everyday',
    options: ['A pillow', 'A clock', 'A rooster', 'A flashlight'],
    correctIndex: 0,
    explanation: 'You put your head on a pillow at night and take it off in the morning!',
    teacherHumorCorrect: 'Sweet dreams and sharp wits!',
    teacherHumorWrong: 'Your pillow misses your head in the daytime!'
  },
  {
    id: 'e2',
    question: 'What kind of band never plays any music?',
    category: 'everyday',
    options: ['Rock band', 'Rubber band', 'Jazz band', 'Marching band'],
    correctIndex: 1,
    explanation: 'A rubber band snaps, but doesn\'t play a saxophone!',
    teacherHumorCorrect: 'Snapped right into the correct answer!',
    teacherHumorWrong: 'Rubber bands don\'t have a drummer!'
  },
  {
    id: 'e3',
    question: 'What has a thumb and four fingers, but is not alive?',
    category: 'everyday',
    options: ['A robot hand', 'A glove', 'A mannequin', 'A cartoon hand'],
    correctIndex: 1,
    explanation: 'A winter glove or mitten has slots for thumb and four fingers!',
    teacherHumorCorrect: 'Fits like a glove! Fantastic!',
    teacherHumorWrong: 'Check your winter coat pocket!'
  },
  {
    id: 'e4',
    question: 'What goes up and down stairs without moving?',
    category: 'everyday',
    options: ['A carpet', 'A cat', 'A ball', 'An escalator'],
    correctIndex: 0,
    explanation: 'Stair carpet runners extend from top to bottom stairs without moving!',
    teacherHumorCorrect: 'Floor decor detective! Nice!',
    teacherHumorWrong: 'A staircase carpet stays glued down!'
  },
  {
    id: 'e5',
    question: 'What has words, but never speaks out loud?',
    category: 'school',
    options: ['A book', 'A telephone', 'A parrot', 'A teacher'],
    correctIndex: 0,
    explanation: 'A printed book holds thousands of silent words!',
    teacherHumorCorrect: 'Reading makes you smarter every day!',
    teacherHumorWrong: 'A textbook has endless words but no voice!'
  },

  // --- ADDITIONAL CLEVER QUESTIONS TO SURPASS 55+ ---
  {
    id: 'f6',
    question: 'What is easy to get into, but hard to get out of?',
    category: 'logic',
    options: ['A swimming pool', 'Trouble', 'A classroom', 'An elevator'],
    correctIndex: 1,
    explanation: 'Getting into trouble is easy; escaping detention is hard!',
    teacherHumorCorrect: 'And don\'t get into trouble in my class!',
    teacherHumorWrong: 'Trouble is very easy to find, hard to escape!'
  },
  {
    id: 'f7',
    question: 'How many sides does a square have?',
    category: 'math',
    options: ['3 sides', '4 equal sides', '5 sides', 'Infinite'],
    correctIndex: 1,
    explanation: 'A square has 4 equal straight sides and 4 right angles!',
    teacherHumorCorrect: 'Solid geometry foundation!',
    teacherHumorWrong: 'Triangles have 3, squares have 4!'
  },
  {
    id: 'f8',
    question: 'Which fruit has its seeds on the outside?',
    category: 'science',
    options: ['Apple', 'Strawberry', 'Banana', 'Mango'],
    correctIndex: 1,
    explanation: 'Strawberries have roughly 200 tiny seed-like achenes on their exterior!',
    teacherHumorCorrect: 'Delicious and biologically true!',
    teacherHumorWrong: 'Look closely at a sweet strawberry!'
  },
  {
    id: 'f9',
    question: 'What kind of coat is best put on wet?',
    category: 'trick',
    options: ['A raincoat', 'A coat of paint', 'A fur coat', 'A winter coat'],
    correctIndex: 1,
    explanation: 'A coat of paint must be applied wet so it dries smoothly!',
    teacherHumorCorrect: 'Art room genius! A fresh coat of paint!',
    teacherHumorWrong: 'Painting coats are applied wet!'
  },
  {
    id: 'f10',
    question: 'What begins with T, ends with T, and has T inside it?',
    category: 'trick',
    options: ['A teapot', 'A tent', 'A target', 'A ticket'],
    correctIndex: 0,
    explanation: 'A Teapot starts with T, ends with T, and holds hot tea inside!',
    teacherHumorCorrect: 'Brew-tiful answer! Teapot!',
    teacherHumorWrong: 'Tea in a pot: T-e-a-p-o-T!'
  },
  {
    id: 'f11',
    question: 'Teacher: "Give me the chemical formula for water." Student: "H-I-J-K-L-M-N-O!" Teacher: "What?!" Student:',
    category: 'school',
    options: ['"I forgot"', '"You said H to O!"', '"It is science!"', '"Periodic table!"'],
    correctIndex: 1,
    explanation: 'H to O (H2O)! The oldest chemistry dad joke!',
    teacherHumorCorrect: 'H2O! Take your comedy award and sit down!',
    teacherHumorWrong: 'H to O sounds like H2O!'
  },
  {
    id: 'f12',
    question: 'What travels around the world while staying in a single corner?',
    category: 'everyday',
    options: ['An airplane', 'A postage stamp', 'A postcard', 'A spider'],
    correctIndex: 1,
    explanation: 'A postage stamp stays in the top-right corner of an envelope!',
    teacherHumorCorrect: 'Stamped with approval! 100%!',
    teacherHumorWrong: 'A stamp stays on the envelope corner across oceans!'
  }
];
