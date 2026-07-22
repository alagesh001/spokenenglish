// src/data/modules.js
//
// Single source of truth for the entire platform.
// Add, remove, or edit a module here and it will automatically appear in:
//   - the navigation search / module menu
//   - the Home page module grid
//   - the Modules page
//   - the auto-generated Module Details page (/modules/:moduleId)
//   - the auto-generated Lesson page (/modules/:moduleId/:lessonId)
//
// No UI component needs to change when this file changes.

export const modules = [
  {
    id: "english-basics",
    title: "English Basics",
    icon: "BookOpen",
    level: "Beginner",
    description: "Start from zero: letters, sounds, and the everyday words every learner needs first.",
    lessons: [
      { id: "alphabet", title: "The Alphabet", duration: "8 min", summary: "Recognise and say all 26 letters with confidence.", content: "Every spoken-English journey starts with the alphabet. Say each letter out loud, slowly, focusing on the mouth shape rather than speed. Group tricky letters together: 'B, P, V' often get confused, so practise them back to back until your tongue and lips know the difference." },
      { id: "vowels-consonants", title: "Vowels & Consonants", duration: "10 min", summary: "Understand how vowel and consonant sounds are formed.", content: "Vowels (a, e, i, o, u) flow freely from your mouth, while consonants are shaped by your tongue, teeth, and lips touching or narrowing the airflow. Practise humming a vowel, then stopping it sharply with a consonant, to feel the difference physically." },
      { id: "numbers", title: "Numbers", duration: "12 min", summary: "Count, say prices, and tell simple quantities.", content: "Numbers appear everywhere: prices, ages, phone numbers, addresses. Practise counting in chunks of ten, then mix in random numbers so you're not just reciting a memorised sequence." },
      { id: "greetings", title: "Everyday Greetings", duration: "7 min", summary: "Say hello, goodbye, and introduce yourself naturally.", content: "'Hi', 'Hello', 'Good morning', and 'How are you?' are the first words most people ever say in English. Practise a full mini-exchange: greet, ask how someone is, and respond, so the pattern feels automatic." },
    ],
  },
  {
    id: "vocabulary-building",
    title: "Vocabulary Building",
    icon: "Library",
    level: "Beginner",
    description: "Grow a practical word bank you'll actually use in daily life.",
    lessons: [
      { id: "everyday-objects", title: "Everyday Objects", duration: "9 min", summary: "Name the things around your home and workplace.", content: "Look around your room right now and try to name five objects in English. Vocabulary sticks best when it's tied to something you can see and touch, so build your list from your real surroundings first." },
      { id: "common-verbs", title: "100 Common Verbs", duration: "14 min", summary: "Learn the action words used in most conversations.", content: "A small set of verbs — go, get, make, take, have, do — covers a huge share of everyday speech. Master these core verbs before chasing rare vocabulary; they give you far more speaking mileage." },
      { id: "adjectives-feelings", title: "Adjectives for Feelings", duration: "10 min", summary: "Describe emotions and opinions accurately.", content: "Instead of always saying 'good' or 'bad', build a small palette: 'thrilled', 'relieved', 'frustrated', 'curious'. Precise adjectives make your speaking sound natural and expressive rather than flat." },
      { id: "word-families", title: "Word Families", duration: "11 min", summary: "Learn related word forms: noun, verb, adjective, adverb.", content: "Many words share a root: 'decide' (verb), 'decision' (noun), 'decisive' (adjective), 'decisively' (adverb). Learning a word family at once multiplies your vocabulary far faster than learning single words." },
    ],
  },
  {
    id: "parts-of-speech",
    title: "Parts of Speech",
    icon: "Puzzle",
    level: "Beginner",
    description: "Learn the building blocks — nouns, verbs, adjectives, and more.",
    lessons: [
      { id: "nouns-pronouns", title: "Nouns & Pronouns", duration: "10 min", summary: "Identify people, places, things, and their replacements.", content: "A noun names a person, place, thing, or idea. A pronoun (he, she, it, they) stands in for a noun so you don't repeat it constantly. Practise replacing nouns with the correct pronoun in short sentences." },
      { id: "verbs", title: "Verbs", duration: "9 min", summary: "Understand action and state-of-being words.", content: "Verbs show action ('run', 'speak') or state ('is', 'seem'). Every complete English sentence needs one. Try building five simple sentences using only one verb each to feel this rule in action." },
      { id: "adjectives-adverbs", title: "Adjectives & Adverbs", duration: "10 min", summary: "Describe nouns and modify verbs precisely.", content: "Adjectives describe nouns ('a fast car'), while adverbs describe verbs, adjectives, or other adverbs ('drives fast', 'very fast'). Notice how many adverbs end in '-ly' — that's a useful pattern to recognise quickly." },
      { id: "prepositions-conjunctions", title: "Prepositions & Conjunctions", duration: "12 min", summary: "Connect ideas and show relationships between words.", content: "Prepositions (in, on, at, under) show position or time. Conjunctions (and, but, because) join ideas together. Together, they're the glue that turns separate words into a flowing sentence." },
          { id: "test-1", title: "Test 1", duration: "10 min", summary: "Nouns & Pronouns", content: "A noun names a person, place, thing, or idea. A pronoun (he, she, it, they) stands in for a noun so you don't repeat it constantly. Practise replacing nouns with the correct pronoun in short sentences." },
          { id: "test-2", title: "Test 2", duration: "10 min", summary: "Verbs, Adjectives & Adverbs ", content: "A noun names a person, place, thing, or idea. A pronoun (he, she, it, they) stands in for a noun so you don't repeat it constantly. Practise replacing nouns with the correct pronoun in short sentences." },
          { id: "test-3", title: "Test 3", duration: "10 min", summary: "Prepositions & Conjunctions", content: "A noun names a person, place, thing, or idea. A pronoun (he, she, it, they) stands in for a noun so you don't repeat it constantly. Practise replacing nouns with the correct pronoun in short sentences." },

    
    
    ],
  },
  {
    id: "sentence-structure",
    title: "Sentence Structure",
    icon: "LayoutGrid",
    level: "Beginner",
    description: "Build correct, natural-sounding sentences from the ground up.",
    lessons: [
      { id: "subject-verb-object", title: "Subject + Verb + Object", duration: "10 min", summary: "Master the core English sentence pattern.", content: "English sentences almost always follow Subject → Verb → Object: 'I (subject) eat (verb) breakfast (object).' Once this order feels automatic, building new sentences becomes fast and instinctive." },
      { id: "simple-sentences", title: "Simple Sentences", duration: "8 min", summary: "Write and speak clear, single-idea sentences.", content: "A simple sentence expresses one complete thought: 'She works in a hospital.' Practise speaking in short, simple sentences before trying to combine ideas — clarity always beats complexity for a beginner speaker." },
      { id: "compound-sentences", title: "Compound Sentences", duration: "11 min", summary: "Join two ideas using 'and', 'but', and 'or'.", content: "A compound sentence links two simple sentences with a joining word: 'I wanted to go out, but it started raining.' This is one of the fastest ways to sound more fluent without learning new grammar rules." },
      { id: "negative-sentences", title: "Making Sentences Negative", duration: "9 min", summary: "Use 'not', 'don't', and 'doesn't' correctly.", content: "To make a sentence negative, English usually adds a helping verb plus 'not': 'I don't like coffee.' Practise turning ten positive sentences you already know into negative ones." },
             { id: "test-1", title: "Test 1", duration: "10 min", summary: "Sentence Structure", content: "A noun names a person, place, thing, or idea. A pronoun (he, she, it, they) stands in for a noun so you don't repeat it constantly. Practise replacing nouns with the correct pronoun in short sentences." },

    ],
  },
  {
    id: "tenses",
    title: "Tenses",
    icon: "Clock",
    level: "Intermediate",
    description: "Talk about past, present, and future with confidence.",
    lessons: [
      { id: "present-simple", title: "Present Simple Intro", duration: "10 min", summary: "Describe habits, routines, and facts.", content: "Use the present simple for things that are generally true or happen regularly: 'She teaches English.' 'The sun rises in the east.' Practise describing your own daily routine using this tense." },
           { id: "present-simple-full", title: "Present Simple Full", duration: "10 min", summary: "Describe habits, routines, and facts.", content: "Use the present simple for things that are generally true or happen regularly: 'She teaches English.' 'The sun rises in the east.' Practise describing your own daily routine using this tense." },

      { id: "past-simple", title: "Past Simple Intro", duration: "11 min", summary: "Talk about completed actions in the past.", content: "The past simple describes finished actions: 'I visited my grandmother last week.' Many verbs simply add '-ed', but the most common verbs are irregular ('go' → 'went'), so those deserve extra practice." },
          { id: "past-simple-full", title: "Past Simple Full", duration: "11 min", summary: "Talk about completed actions in the past.", content: "The past simple describes finished actions: 'I visited my grandmother last week.' Many verbs simply add '-ed', but the most common verbs are irregular ('go' → 'went'), so those deserve extra practice." },

      { id: "future-forms", title: "Future Forms Intro", duration: "12 min", summary: "Express plans, predictions, and promises.", content: "English has several ways to talk about the future: 'will' for decisions and predictions, 'going to' for plans, and present continuous for arrangements. Practise describing your plans for tomorrow using all three." },
            { id: "future-forms-full", title: "Future Forms Full", duration: "12 min", summary: "Express plans, predictions, and promises.", content: "English has several ways to talk about the future: 'will' for decisions and predictions, 'going to' for plans, and present continuous for arrangements. Practise describing your plans for tomorrow using all three." },

      { id: "continuous-intro", title: "Continuous Tenses Intro", duration: "13 min", summary: "Describe actions in progress at a point in time.", content: "Continuous tenses (am/is/are + -ing) describe actions happening right now or around a specific time: 'I am learning English.' Try narrating what you're doing at this exact moment out loud." },

      { id: "present-continuous-tenses", title: "Present Continuous Tense", duration: "13 min", summary: "Describe actions in progress at a point in time.", content: "Continuous tenses (am/is/are + -ing) describe actions happening right now or around a specific time: 'I am learning English.' Try narrating what you're doing at this exact moment out loud." },
          { id: "past-continuous-tenses", title: "Past Continuous Tense", duration: "13 min", summary: "Describe actions in progress at a point in time.", content: "Continuous tenses (am/is/are + -ing) describe actions happening right now or around a specific time: 'I am learning English.' Try narrating what you're doing at this exact moment out loud." },
      { id: "future-continuous-tenses", title: "Future Continuous Tense", duration: "13 min", summary: "Describe actions in progress at a point in time.", content: "Continuous tenses (am/is/are + -ing) describe actions happening right now or around a specific time: 'I am learning English.' Try narrating what you're doing at this exact moment out loud." },
      { id: "perfect-tense-intro", title: "Perfect Tense", duration: "13 min", summary: "Describe actions in progress at a point in time.", content: "Continuous tenses (am/is/are + -ing) describe actions happening right now or around a specific time: 'I am learning English.' Try narrating what you're doing at this exact moment out loud." },
      { id: "perfect-continuous-intro", title: "Perfect Continuous", duration: "13 min", summary: "Describe actions in progress at a point in time.", content: "Continuous tenses (am/is/are + -ing) describe actions happening right now or around a specific time: 'I am learning English.' Try narrating what you're doing at this exact moment out loud." },
      { id: "since-for", title: "Since & For", duration: "13 min", summary: "Describe actions in progress at a point in time.", content: "Continuous tenses (am/is/are + -ing) describe actions happening right now or around a specific time: 'I am learning English.' Try narrating what you're doing at this exact moment out loud." },
             { id: "test-1", title: "Test 1", duration: "10 min", summary: "Present Tense", content: "A noun names a person, place, thing, or idea. A pronoun (he, she, it, they) stands in for a noun so you don't repeat it constantly. Practise replacing nouns with the correct pronoun in short sentences." },
             { id: "test-2", title: "Test 2", duration: "10 min", summary: "Past Tense", content: "A noun names a person, place, thing, or idea. A pronoun (he, she, it, they) stands in for a noun so you don't repeat it constantly. Practise replacing nouns with the correct pronoun in short sentences." },
             { id: "test-3", title: "Test 3", duration: "10 min", summary: "Future Tense", content: "A noun names a person, place, thing, or idea. A pronoun (he, she, it, they) stands in for a noun so you don't repeat it constantly. Practise replacing nouns with the correct pronoun in short sentences." },

    
    ],
  },
  {
    id: "helping-verbs",
    title: "Helping Verbs",
    icon: "Anchor",
    level: "Intermediate",
    description: "Use auxiliary and modal verbs to shape meaning precisely.",
    lessons: [
      { id: "be-do-have", title: "Be, Do, Have", duration: "10 min", summary: "The three core auxiliary verbs and how they're used.", content: "'Be', 'do', and 'have' support other verbs to form questions, negatives, and continuous or perfect tenses. Practise spotting them in sentences you hear, and notice how they quietly change meaning." },
      { id: "can-could", title: "Can & Could", duration: "9 min", summary: "Express ability and polite requests.", content: "'Can' shows present ability ('I can swim') and 'could' shows past ability or a polite request ('Could you help me?'). Practise both in short role-play conversations." },
      { id: "will-would", title: "Will & Would", duration: "9 min", summary: "Talk about future intentions and hypotheticals.", content: "'Will' expresses future decisions ('I will call you'), while 'would' softens requests or describes hypothetical situations ('I would love to visit Japan'). Compare both in matching sentence pairs." },
      { id: "should-must", title: "Should & Must", duration: "10 min", summary: "Give advice and express obligation.", content: "'Should' gives advice or a suggestion ('You should rest'), while 'must' expresses strong obligation or necessity ('You must submit the form today'). Practise giving a friend three pieces of advice using 'should'." },
                 { id: "test-1", title: "Test 1", duration: "10 min", summary: "Be Do Have", content: "A noun names a person, place, thing, or idea. A pronoun (he, she, it, they) stands in for a noun so you don't repeat it constantly. Practise replacing nouns with the correct pronoun in short sentences." },
                 { id: "test-2", title: "Test 2", duration: "10 min", summary: "Can, Could, Will, Would, Should, Must", content: "A noun names a person, place, thing, or idea. A pronoun (he, she, it, they) stands in for a noun so you don't repeat it constantly. Practise replacing nouns with the correct pronoun in short sentences." },

    ],
  },
  {
    id: "question-formation",
    title: "Question Formation",
    icon: "HelpCircle",
    level: "Intermediate",
    description: "Ask clear, natural questions in any tense.",
    lessons: [
      { id: "yes-no-questions", title: "Yes/No Questions", duration: "9 min", summary: "Form questions that expect a simple yes or no.", content: "Yes/No questions usually start with an auxiliary verb: 'Do you like tea?' 'Is she coming?' Practise flipping ten statements you know into Yes/No questions." },
      { id: "wh-questions", title: "Wh- Questions", duration: "11 min", summary: "Ask who, what, where, when, why, and how.", content: "Wh- questions ask for specific information rather than yes or no: 'Where do you live?' 'Why are you late?' These are the backbone of real conversation, since they invite a detailed answer." },
      { id: "tag-questions", title: "Tag Questions", duration: "9 min", summary: "Add a short question to confirm or check something.", content: "A tag question is added to the end of a statement to check agreement: 'It's cold today, isn't it?' Notice how the tag flips polarity — positive statement, negative tag, and vice versa." },
      { id: "indirect-questions", title: "Polite Indirect Questions", duration: "10 min", summary: "Ask sensitive or formal questions politely.", content: "Indirect questions soften a request: instead of 'Where is the station?' you might say 'Could you tell me where the station is?' This form is especially useful in professional or unfamiliar settings." },
    ],
  },
  {
    id: "daily-conversation",
    title: "Daily Conversation",
    icon: "MessageCircle",
    level: "Intermediate",
    description: "Handle real, everyday chats with ease.",
    lessons: [
      { id: "small-talk", title: "Small Talk Basics", duration: "10 min", summary: "Start and keep a light conversation going.", content: "Small talk usually covers safe, shared topics: weather, weekend plans, or a compliment. Practise a 60-second small-talk exchange with a friend or by recording yourself." },
      { id: "shopping-dialogues", title: "Shopping Dialogues", duration: "9 min", summary: "Ask for prices, sizes, and help in a store.", content: "Common shopping phrases include 'How much is this?', 'Do you have this in a different size?', and 'I'm just looking, thanks.' Practise a full shop interaction from entrance to checkout." },
      { id: "phone-calls", title: "Phone Call English", duration: "11 min", summary: "Handle calls confidently without visual cues.", content: "Phone calls remove facial expressions and gestures, so clear phrasing matters more: 'Could you repeat that, please?' and 'Speaking' (when it's you on the line) are essential phrases to have ready." },
      { id: "asking-directions", title: "Asking for Directions", duration: "10 min", summary: "Ask for and understand simple directions.", content: "Practise both sides: asking ('How do I get to the station?') and understanding answers ('Turn left, then go straight for two blocks.'). Directions rely heavily on prepositions of place and movement." },
    ],
  },
  {
    id: "speaking-practice",
    title: "Speaking Practice",
    icon: "Mic",
    level: "Intermediate",
    description: "Build fluency through guided speaking drills.",
    lessons: [
     //  { id: "shadowing", title: "Shadowing Technique", duration: "12 min", summary: "Repeat after a speaker to build natural rhythm.", content: "Shadowing means listening to a short clip and repeating it almost simultaneously, copying rhythm and intonation. Start with slow, clear audio, then gradually increase speed as it becomes comfortable." },
     //  { id: "self-recording", title: "Self-Recording Practice", duration: "9 min", summary: "Record yourself to spot and fix mistakes.", content: "Recording your own voice feels uncomfortable at first, but it's one of the fastest ways to notice pronunciation habits you can't hear in the moment. Record a 1-minute answer, then listen back and note two things to improve." },
      { id: "picture-description", title: "Picture Description", duration: "10 min", summary: "Practise describing what you see in detail.", content: "Choose any photo and describe it out loud for one minute: who, what, where, and how you think people feel. This builds vocabulary retrieval speed under light pressure." },
      { id: "opinion-sharing", title: "Sharing Opinions", duration: "11 min", summary: "Give and support a simple opinion out loud.", content: "Practise the pattern: state an opinion, give one reason, give one example. 'I think remote work is great, because it saves commuting time — for example, I now use that time to exercise.'" },
          { id: "vocabulary-in-context", title: "Guessing Vocabulary in Context", duration: "10 min", summary: "Understand new words without a dictionary.", content: "Use surrounding sentences to guess an unfamiliar word's meaning before reaching for a dictionary. This mirrors how native speakers handle new vocabulary and builds independence." },

    ],
  },
  // {
  //   id: "listening-skills",
  //   title: "Listening Skills",
  //   icon: "Headphones",
  //   level: "Intermediate",
  //   description: "Train your ear for natural spoken English.",
  //   lessons: [
  //     { id: "listening-for-gist", title: "Listening for Gist", duration: "9 min", summary: "Understand the overall idea without every word.", content: "You don't need to understand every word to follow a conversation. Practise listening once just for the general topic and speaker's attitude, ignoring unfamiliar words for now." },
  //     { id: "listening-for-detail", title: "Listening for Detail", duration: "10 min", summary: "Catch specific facts, numbers, and names.", content: "After understanding the gist, listen again focused on specific details: times, names, numbers. This two-pass technique mirrors how strong listeners naturally process audio." },
  //     { id: "accents-intro", title: "Introduction to Accents", duration: "12 min", summary: "Get comfortable with different English accents.", content: "British, American, Australian, and Indian English all sound different but share the same grammar. Expose yourself to a mix of accents early so no single one feels 'the only correct way' to sound." },
  //     { id: "podcasts-for-learners", title: "Using Podcasts to Learn", duration: "8 min", summary: "Turn everyday podcasts into listening lessons.", content: "Choose a podcast slightly below your comfort level, listen once for gist, then again with a transcript if available. Repeated, active listening builds far more skill than passive background listening." },
  //   ],
  // },
  // {
  //   id: "reading-skills",
  //   title: "Reading Skills",
  //   icon: "BookOpenCheck",
  //   level: "Intermediate",
  //   description: "Read faster and understand more, at every level.",
  //   lessons: [
  //     { id: "skimming-scanning", title: "Skimming & Scanning", duration: "9 min", summary: "Read quickly for the main idea or a specific fact.", content: "Skimming means reading quickly for the general idea; scanning means searching for a specific piece of information, like a date or name. Practise both on a short news article, timing yourself." },
  //     { id: "reading-comprehension", title: "Reading Comprehension", duration: "11 min", summary: "Understand meaning, tone, and intent in a text.", content: "Comprehension goes beyond words: notice the writer's tone and purpose. After reading a short passage, try summarising it in two sentences of your own words." },
  //     { id: "vocabulary-in-context", title: "Guessing Vocabulary in Context", duration: "10 min", summary: "Understand new words without a dictionary.", content: "Use surrounding sentences to guess an unfamiliar word's meaning before reaching for a dictionary. This mirrors how native speakers handle new vocabulary and builds independence." },
  //     { id: "reading-aloud", title: "Reading Aloud", duration: "9 min", summary: "Combine reading and pronunciation practice.", content: "Reading a paragraph aloud connects written and spoken English directly. Choose a short passage, read it slowly with clear pronunciation, then repeat it faster once it feels natural." },
  //   ],
  // },
  // {
  //   id: "writing-skills",
  //   title: "Writing Skills",
  //   icon: "PenTool",
  //   level: "Intermediate",
  //   description: "Write clearly for messages, emails, and notes.",
  //   lessons: [
  //     { id: "sentence-punctuation", title: "Sentences & Punctuation", duration: "9 min", summary: "Use full stops, commas, and capitals correctly.", content: "Good punctuation makes writing easy to follow: a full stop ends a thought, a comma creates a small pause. Practise writing three short sentences with correct capitalisation and punctuation." },
  //     { id: "everyday-emails", title: "Everyday Emails", duration: "11 min", summary: "Write short, clear, polite emails.", content: "A simple email needs a greeting, a clear purpose in the first line, and a polite closing. Practise writing a 3-sentence email asking a colleague to reschedule a meeting." },
  //     { id: "paragraph-writing", title: "Paragraph Writing", duration: "12 min", summary: "Organise ideas into a clear paragraph.", content: "A strong paragraph has one main idea, supported by two or three sentences of detail. Practise writing a paragraph about your typical morning routine." },
  //     { id: "note-taking", title: "Note-Taking", duration: "8 min", summary: "Capture key information quickly while writing.", content: "Good notes use short phrases, not full sentences: keywords, arrows, and abbreviations. Practise taking notes while listening to a two-minute audio clip." },
  //   ],
  // },
  {
    id: "grammar",
    title: "Grammar",
    icon: "FileCheck2",
    level: "Intermediate",
    description: "Strengthen the rules that hold your English together.",
    lessons: [
      { id: "articles", title: "Articles: A, An, The", duration: "9 min", summary: "Know when to use 'a', 'an', 'the', or nothing.", content: "Use 'a/an' for something non-specific ('a book'), and 'the' for something specific or already mentioned ('the book I bought yesterday'). Practise choosing correctly across ten example sentences." },
      { id: "plurals", title: "Plurals & Countable Nouns", duration: "8 min", summary: "Form regular and irregular plurals correctly.", content: "Most nouns simply add '-s' or '-es', but some change completely: 'child' → 'children', 'person' → 'people'. Build a small list of the irregular plurals you use most often." },
      { id: "comparatives-superlatives", title: "Comparatives & Superlatives", duration: "10 min", summary: "Compare two or more things correctly.", content: "Use comparatives to compare two things ('faster', 'more interesting') and superlatives for three or more ('the fastest', 'the most interesting'). Practise comparing three cities you know." },
      { id: "common-errors", title: "Common Grammar Mistakes", duration: "11 min", summary: "Fix the errors most learners make repeatedly.", content: "Common slip-ups include confusing 'its/it's', mismatched subject-verb agreement, and misplaced 'a/an'. Keep a running list of your own recurring mistakes and review it weekly." },
    ],
  },
  // {
  //   id: "pronunciation",
  //   title: "Pronunciation",
  //   icon: "Waves",
  //   level: "Advanced",
  //   description: "Sound clearer with focused sound, stress, and rhythm training.",
  //   lessons: [
  //     { id: "phonetics-intro", title: "Introduction to Phonetics", duration: "11 min", summary: "Understand the sounds behind English spelling.", content: "English spelling doesn't always match its sound. Phonetic symbols represent the actual sound of a word, which helps explain why 'though', 'through', and 'tough' all sound completely different." },
  //     { id: "word-stress", title: "Word Stress", duration: "10 min", summary: "Stress the right syllable in multi-syllable words.", content: "Stressing the wrong syllable can make an otherwise correct word hard to understand. Practise words like 'PHOto', 'phoTOGraphy', and 'photoGRAPHic', noticing how the stress shifts." },
  //     { id: "sentence-stress-rhythm", title: "Sentence Stress & Rhythm", duration: "12 min", summary: "Give English its natural musical rhythm.", content: "English stresses important words in a sentence and reduces smaller ones: 'I want to go' often sounds like 'I wanna go' in fast speech. Practise reading a sentence while tapping the stressed syllables." },
  //     { id: "difficult-sounds", title: "Difficult Sounds (TH, R, V/W)", duration: "13 min", summary: "Master sounds that don't exist in many languages.", content: "The 'TH' sound, the English 'R', and the V/W distinction trip up many learners. Practise minimal pairs like 'very' vs 'wery' slowly in front of a mirror to check mouth position." },
  //   ],
  // },
  // {
  //   id: "confidence-building",
  //   title: "Confidence Building",
  //   icon: "Sparkles",
  //   level: "Advanced",
  //   description: "Overcome hesitation and speak without fear of mistakes.",
  //   lessons: [
  //     { id: "fear-of-mistakes", title: "Letting Go of Fear of Mistakes", duration: "9 min", summary: "Reframe mistakes as part of learning, not failure.", content: "Every fluent speaker made thousands of mistakes on the way to fluency. Practise saying one sentence you're unsure about out loud anyway — comfort with imperfection is a skill in itself." },
  //     { id: "positive-self-talk", title: "Positive Self-Talk", duration: "8 min", summary: "Replace self-criticism with encouraging inner speech.", content: "Notice the voice in your head after a speaking mistake. Practise replacing 'I'm bad at this' with 'That's one thing I now know to fix' — the tone of your self-talk shapes your motivation." },
  //     { id: "speaking-under-pressure", title: "Speaking Under Pressure", duration: "10 min", summary: "Stay calm and clear when put on the spot.", content: "When put on the spot, pause, breathe, and answer in short sentences rather than rushing. Practise being asked a surprise question and giving yourself permission to pause for two seconds before answering." },
  //     { id: "celebrating-progress", title: "Celebrating Small Progress", duration: "7 min", summary: "Track wins to stay motivated long-term.", content: "Confidence grows from noticing progress, not just reaching a final goal. Keep a short list of moments you communicated successfully in English, however small, and review it when motivation dips." },
  //   ],
  // },
  // {
  //   id: "personality-development",
  //   title: "Personality Development",
  //   icon: "UserCircle2",
  //   level: "Advanced",
  //   description: "Communicate with warmth, clarity, and presence.",
  //   lessons: [
  //     { id: "body-language", title: "Body Language Basics", duration: "9 min", summary: "Support your words with open, confident posture.", content: "Eye contact, an open posture, and a relaxed smile all support your spoken words. Practise saying a short introduction while consciously keeping your shoulders relaxed and your gaze steady." },
  //     { id: "active-listening", title: "Active Listening", duration: "10 min", summary: "Show genuine engagement in a conversation.", content: "Active listening means nodding, giving small verbal responses ('I see', 'right'), and asking a follow-up question. Practise listening to a friend's story and asking one genuine follow-up question." },
  //     { id: "empathy-in-conversation", title: "Empathy in Conversation", duration: "9 min", summary: "Respond to others with understanding and warmth.", content: "Empathetic responses acknowledge feelings before jumping to advice: 'That sounds really stressful' before 'Have you tried...'. Practise this two-step response pattern in a mock conversation." },
  //     { id: "first-impressions", title: "Making a Great First Impression", duration: "8 min", summary: "Introduce yourself memorably and warmly.", content: "A strong first impression combines a clear introduction, a genuine smile, and one specific, friendly follow-up question. Practise a 20-second self-introduction you could use anywhere." },
  //   ],
  // },
  // {
  //   id: "business-english",
  //   title: "Business English",
  //   icon: "Briefcase",
  //   level: "Advanced",
  //   description: "Communicate professionally in meetings, emails, and calls.",
  //   lessons: [
  //     { id: "meeting-language", title: "Meeting Language", duration: "11 min", summary: "Contribute clearly in professional meetings.", content: "Useful meeting phrases include 'Could I add something here?' and 'Let's circle back to that later.' Practise interrupting politely, since this is one of the trickiest business-English skills." },
  //     { id: "professional-emails", title: "Professional Emails", duration: "10 min", summary: "Write formal, polite, and clear business emails.", content: "Business emails favour clear structure over creativity: a direct subject line, a short opening, the request, and a polite closing. Practise writing a professional email requesting a deadline extension." },
  //     { id: "presentations-at-work", title: "Presenting at Work", duration: "12 min", summary: "Structure and deliver a short work presentation.", content: "A simple work presentation follows: what I'll cover, the main content, and a clear takeaway. Practise a 60-second version of a presentation on a topic you know well." },
  //     { id: "negotiation-basics", title: "Negotiation Basics", duration: "11 min", summary: "Discuss terms and reach agreement professionally.", content: "Negotiation language balances firmness and politeness: 'I understand your position, but I was hoping we could...' Practise a short negotiation role-play about adjusting a project deadline." },
  //   ],
  // },
  // {
  //   id: "interview-preparation",
  //   title: "Interview Preparation",
  //   icon: "UserCheck",
  //   level: "Advanced",
  //   description: "Answer common interview questions clearly and confidently.",
  //   lessons: [
  //     { id: "tell-me-about-yourself", title: "\"Tell Me About Yourself\"", duration: "10 min", summary: "Build a concise, confident self-introduction.", content: "A strong answer covers: who you are professionally, one key strength with an example, and why you're interested in this role. Practise keeping your answer under 60 seconds." },
  //     { id: "strengths-weaknesses", title: "Strengths & Weaknesses", duration: "9 min", summary: "Answer honestly without undermining yourself.", content: "For weaknesses, choose something real but manageable, and mention what you're doing to improve it. Practise pairing one honest weakness with a concrete step you're taking to address it." },
  //     { id: "behavioural-questions", title: "Behavioural Questions (STAR Method)", duration: "12 min", summary: "Structure answers using Situation, Task, Action, Result.", content: "The STAR method structures a story clearly: the Situation, your Task, the Action you took, and the Result. Practise describing a past challenge using all four steps in order." },
  //     { id: "questions-to-ask", title: "Questions to Ask the Interviewer", duration: "8 min", summary: "End the interview with thoughtful questions.", content: "Asking a thoughtful question shows genuine interest: 'What does success look like in this role after six months?' Prepare two or three questions in advance so you're never caught without one." },
  //   ],
  // },
  // {
  //   id: "public-speaking",
  //   title: "Public Speaking",
  //   icon: "Presentation",
  //   level: "Advanced",
  //   description: "Speak to a group with clarity, structure, and impact.",
  //   lessons: [
  //     { id: "overcoming-stage-fright", title: "Overcoming Stage Fright", duration: "9 min", summary: "Manage nerves before and during a talk.", content: "Nervousness before speaking is normal, even for experienced speakers. Practise slow breathing and picking one friendly face in the audience to speak to first, before widening your focus." },
  //     { id: "structuring-a-talk", title: "Structuring a Talk", duration: "11 min", summary: "Organise a talk with a clear beginning, middle, end.", content: "A simple structure works for almost any talk: an opening hook, three main points, and a memorable closing line. Practise outlining a 2-minute talk on a topic you care about." },
  //     { id: "using-your-voice", title: "Using Your Voice Effectively", duration: "10 min", summary: "Vary pace, pitch, and pause for impact.", content: "Varying your pace and adding a deliberate pause before an important point keeps an audience engaged. Practise reading a paragraph aloud, pausing intentionally before the key sentence." },
  //     { id: "handling-questions", title: "Handling Audience Questions", duration: "10 min", summary: "Respond calmly, even to unexpected questions.", content: "When faced with a hard question, it's fine to pause and say 'That's a good question, let me think for a second.' Practise this phrase until it feels natural rather than awkward." },
  //   ],
  // },
  {
    id: "real-life-practice",
    title: "Real Life Practice",
    icon: "Compass",
    level: "Advanced",
    description: "Apply your English to real, unscripted situations.",
    lessons: [
      { id: "restaurant-role-play", title: "At a Restaurant", duration: "9 min", summary: "Order food and handle common restaurant situations.", content: "Practise a full restaurant scenario: greeting the waiter, asking about the menu, ordering, and requesting the bill. Try improvising if the 'waiter' recommends something you didn't ask for." },
      { id: "airport-travel", title: "At the Airport", duration: "10 min", summary: "Navigate check-in, security, and boarding in English.", content: "Airport English is often formulaic: 'Boarding pass and passport, please', 'Window or aisle seat?' Practise a full check-in conversation from arrival to the boarding gate." },
      { id: "doctor-visit", title: "At the Doctor's", duration: "10 min", summary: "Describe symptoms and understand medical advice.", content: "Practise describing a symptom clearly: 'I've had a headache for two days' rather than just 'I feel bad.' Clear, specific descriptions help you get better guidance in any real medical visit." },
      { id: "workplace-scenarios", title: "Workplace Scenarios", duration: "11 min", summary: "Handle common day-to-day office situations.", content: "Practise short workplace exchanges: asking a colleague for help, explaining you're running late, or requesting feedback on your work. These small, frequent interactions build fluency fast." },
    ],
  },
  {
    id: "advanced-english",
    title: "Advanced English",
    icon: "GraduationCap",
    level: "Advanced",
    description: "Refine nuance, idioms, and sophisticated expression.",
    lessons: [
      { id: "idioms-daily-use", title: "Everyday Idioms", duration: "11 min", summary: "Understand and use common English idioms.", content: "Idioms like 'break the ice' or 'hit the books' don't translate literally. Learn a handful at a time in context, through example sentences, rather than as an isolated list." },
      { id: "phrasal-verbs", title: "Phrasal Verbs", duration: "12 min", summary: "Use two- and three-word verbs naturally.", content: "Phrasal verbs like 'give up', 'look into', and 'come across' are extremely common in natural speech. Practise replacing a formal verb ('investigate') with its phrasal equivalent ('look into')." },
      { id: "subtle-tone", title: "Tone & Register", duration: "10 min", summary: "Match your language to formal and informal settings.", content: "The same idea can be said formally ('I would appreciate your assistance') or casually ('Could you give me a hand?'). Practise saying the same request in both a formal and casual register." },
      { id: "conditional-sentences", title: "Advanced Conditionals", duration: "13 min", summary: "Express hypotheticals and regrets precisely.", content: "Conditionals let you discuss hypotheticals ('If I had more time, I would travel more') and regrets ('If I had studied, I would have passed'). Practise building one example of each conditional type." },
    ],
  },
  {
    id: "fluency-techniques",
    title: "Fluency Techniques",
    icon: "Zap",
    level: "Advanced",
    description: "Practical techniques to speak faster and more smoothly.",
    lessons: [
      { id: "chunking", title: "Speaking in Chunks", duration: "10 min", summary: "Use ready-made phrases instead of single words.", content: "Fluent speakers rely on memorised 'chunks' like 'as far as I know' or 'to be honest' rather than building every sentence word by word. Practise inserting one new chunk into your speech today." },
      { id: "filler-phrases", title: "Natural Filler Phrases", duration: "8 min", summary: "Buy thinking time without awkward silence.", content: "Phrases like 'let me think about that' or 'that's a good question' buy you time naturally, without an awkward silent pause. Practise using one filler phrase before answering a surprise question." },
      { id: "paraphrasing", title: "Paraphrasing on the Spot", duration: "9 min", summary: "Explain a word you've forgotten using other words.", content: "If you forget a word, describe it instead: 'the thing you use to open a bottle' instead of 'opener.' Practise describing five everyday objects without naming them directly." },
      { id: "speed-building-drills", title: "Speed-Building Drills", duration: "11 min", summary: "Gradually increase your natural speaking pace.", content: "Record yourself answering a question slowly, then repeat the same answer slightly faster three times in a row. This drill trains your mouth and brain to keep up with a more natural pace." },
    ],
  },
  {
    id: "group-activities",
    title: "Group Activities",
    icon: "UsersRound",
    level: "Advanced",
    description: "Practise speaking with others in structured group formats.",
    lessons: [
      { id: "role-play-groups", title: "Group Role-Play", duration: "12 min", summary: "Practise multi-person scenarios with classmates.", content: "Group role-play — like a team meeting or a group of friends planning a trip — forces natural turn-taking and interruption skills that solo practice can't fully replicate." },
      { id: "debate-basics", title: "Friendly Debate Basics", duration: "11 min", summary: "Present and defend a simple viewpoint.", content: "In a friendly debate, state your position, give one reason, and respond respectfully to a counter-point. Practise arguing gently for a light topic, like 'tea vs coffee'." },
      { id: "peer-feedback", title: "Giving Peer Feedback", duration: "9 min", summary: "Offer constructive feedback to fellow learners.", content: "Good peer feedback is specific and kind: 'Your pronunciation of the TH sound really improved' rather than just 'good job.' Practise giving one specific piece of feedback after listening to a partner speak." },
      { id: "group-storytelling", title: "Group Storytelling", duration: "10 min", summary: "Build a story together, one sentence at a time.", content: "In group storytelling, each person adds one sentence to a growing story. This activity trains quick thinking and listening simultaneously, since you must remember what came before." },
    ],
  },
  {
    id: "test-series",
    title: "Quiz",
    icon: "ClipboardCheck",
    level: "Advanced",
    description: "Check your progress with regular, low-pressure reviews.",
    lessons: [
      { id: "quiz-enter", title: "General Quiz", duration: "", summary: "All grammar and Tenses.", content: "Answer a familiar question for one minute, record it, and rate yourself on clarity, grammar, and confidence out of five. Small, regular checkpoints reveal progress that's easy to miss day-to-day." },
           { id: "quiz-enter-2", title: "Comprehension 1", duration: "", summary: "Comprehension.", content: "Answer a familiar question for one minute, record it, and rate yourself on clarity, grammar, and confidence out of five. Small, regular checkpoints reveal progress that's easy to miss day-to-day." },
           { id: "quiz-enter-3", title: "Comprehension 2", duration: "", summary: "Comprehension.", content: "Answer a familiar question for one minute, record it, and rate yourself on clarity, grammar, and confidence out of five. Small, regular checkpoints reveal progress that's easy to miss day-to-day." },

    ],
  },
];

// Convenience helpers used across the app — keep all lookup logic here
// so pages never need to know how the data is shaped internally.

export function getModuleById(moduleId) {
  return modules.find((m) => m.id === moduleId);
}

export function getLessonById(moduleId, lessonId) {
  const mod = getModuleById(moduleId);
  if (!mod) return null;
  const lesson = mod.lessons.find((l) => l.id === lessonId);
  return lesson ? { ...lesson, module: mod } : null;
}

export function getAdjacentLessons(moduleId, lessonId) {
  const mod = getModuleById(moduleId);
  if (!mod) return { prev: null, next: null };
  const index = mod.lessons.findIndex((l) => l.id === lessonId);
  return {
    prev: index > 0 ? mod.lessons[index - 1] : null,
    next: index >= 0 && index < mod.lessons.length - 1 ? mod.lessons[index + 1] : null,
  };
}

export function getTotalLessonCount() {
  return modules.reduce((sum, m) => sum + m.lessons.length, 0);
}

export function searchContent(query) {
  const q = query.trim().toLowerCase();
  if (!q) return { modules: [], lessons: [] };

  const matchedModules = modules.filter(
    (m) => m.title.toLowerCase().includes(q) || m.description.toLowerCase().includes(q)
  );

  const matchedLessons = [];
  modules.forEach((m) => {
    m.lessons.forEach((l) => {
      if (l.title.toLowerCase().includes(q) || l.summary.toLowerCase().includes(q)) {
        matchedLessons.push({ ...l, module: m });
      }
    });
  });

  return { modules: matchedModules, lessons: matchedLessons };
}
