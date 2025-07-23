let quoteText = document.getElementById("quoteText");
let quoteAuthor = document.getElementById("quoteAuthor");
let islamicBtn = document.getElementById("islamicBtn");
let philosophicalBtn = document.getElementById("philosophicalBtn");
let scientificBtn = document.getElementById("scientificBtn");
let funnyBtn = document.getElementById("funnyBtn");
let motivationalBtn = document.getElementById("motivationalBtn");
let quotetype = document.getElementById("quotetype");
let quotes = [
  {
    type: "Philosophical",
    quotes: [
      { text: "The unexamined life is not worth living", author: "Socrates" },
      { text: "I think, therefore I am", author: "Descartes" },
      { text: "Happiness is not something ready made. It comes from your own actions", author: "Dalai Lama" },
      { text: "Knowing yourself is the beginning of all wisdom", author: "Aristotle" },
      { text: "The only true wisdom is in knowing you know nothing", author: "Socrates" },
      { text: "He who opens a school door, closes a prison", author: "Victor Hugo" },
      { text: "Life must be understood backward. But it must be lived forward", author: "Søren Kierkegaard" },
      { text: "Man is the measure of all things", author: "Protagoras" },
      { text: "We live in the best of all possible worlds", author: "Leibniz" },
      { text: "No man ever steps in the same river twice", author: "Heraclitus" },
      { text: "You only live once, but if you do it right, once is enough", author: "Mae West" },
      { text: "To live is the rarest thing in the world. Most people exist, that is all", author: "Oscar Wilde" },
      { text: "Time is a created thing. To say 'I don't have time' is to say 'I don't want to.'", author: "Lao Tzu" },
      { text: "Hell is other people", author: "Jean-Paul Sartre" },
      { text: "Those who know do not speak. Those who speak do not know", author: "Lao Tzu" },
      { text: "I can control my passions and emotions if I can understand their nature", author: "Spinoza" },
      { text: "Freedom is secured not by the fulfilling of one's desires, but by the removal of desire", author: "Epictetus" },
      { text: "Liberty is the freedom to say that two plus two make four", author: "George Orwell" },
      { text: "All that is necessary for the triumph of evil is that good men do nothing", author: "Edmund Burke" },
      { text: "One cannot step twice in the same river", author: "Heraclitus" }
    ]
  },
  {
  type: "Islamic",
  quotes: [
    // 50 آية قرآنية
    { text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", author: "القرآن الكريم - سورة الشرح، الآية ٦" },
    { text: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", author: "القرآن الكريم - سورة الرعد، الآية ٢٨" },
    { text: "وَوَجَدَكَ ضَالًّا فَهَدَىٰ", author: "القرآن الكريم - سورة الضحى، الآية ٧" },
    { text: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", author: "القرآن الكريم - سورة البقرة، الآية ١٥٣" },
    { text: "رَبِّ زِدْنِي عِلْمًا", author: "القرآن الكريم - سورة طه، الآية ١١٤" },
    { text: "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ", author: "القرآن الكريم - سورة البقرة، الآية ٢١٦" },
    { text: "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ", author: "القرآن الكريم - سورة الزمر، الآية ٥٣" },
    { text: "وَقُل رَّبِّ اغْفِرْ وَارْحَمْ", author: "القرآن الكريم - سورة المؤمنون، الآية ١١٨" },
    { text: "إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ", author: "القرآن الكريم - سورة البقرة، الآية ١٧٣" },
    { text: "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا", author: "القرآن الكريم - سورة التوبة، الآية ٥١" },
    { text: "وَاللَّهُ يُرِيدُ أَن يَتُوبَ عَلَيْكُمْ", author: "القرآن الكريم - سورة النساء، الآية ٢٧" },
    { text: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ", author: "القرآن الكريم - سورة النحل، الآية ١٢٧" },
    { text: "اللَّهُ لَطِيفٌ بِعِبَادِهِ", author: "القرآن الكريم - سورة الشورى، الآية ١٩" },
    { text: "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ", author: "القرآن الكريم - سورة الزمر، الآية ١٠" },
    { text: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ", author: "القرآن الكريم - سورة هود، الآية ٨٨" },
    { text: "إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا", author: "القرآن الكريم - سورة النساء، الآية ١" },
    { text: "وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ", author: "القرآن الكريم - سورة يوسف، الآية ٧٦" },
    { text: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ", author: "القرآن الكريم - سورة آل عمران، الآية ١٨٥" },
    { text: "إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ", author: "القرآن الكريم - سورة آل عمران، الآية ١٥٩" },
    { text: "فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ", author: "القرآن الكريم - سورة آل عمران، الآية ١٥٩" },
    { text: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا", author: "القرآن الكريم - سورة الطلاق، الآية ٢" },
    { text: "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا", author: "القرآن الكريم - سورة النساء، الآية ٣٦" },
    { text: "فَصْلِ لِلَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ", author: "القرآن الكريم - سورة البقرة، الآية ٣" },
    { text: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ", author: "القرآن الكريم - سورة الحجرات، الآية ١٠" },
    { text: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ", author: "القرآن الكريم - سورة البقرة، الآية ٤٥" },
    { text: "وَجَعَلْنَا اللَّيْلَ وَالنَّهَارَ آيَتَيْنِ", author: "القرآن الكريم - سورة الإسراء، الآية ١٢" },
    { text: "وَاللَّهُ غَفُورٌ رَّحِيمٌ", author: "القرآن الكريم - سورة النساء، الآية ١٠٦" },
    { text: "وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", author: "القرآن الكريم - سورة البقرة، الآية ٢٠٩" },
    { text: "وَاذْكُر رَّبَّكَ إِذَا نَسِيتَ", author: "القرآن الكريم - سورة الكهف، الآية ٢٤" },
    { text: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", author: "القرآن الكريم - سورة الشرح، الآية ٦" },
    { text: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا", author: "القرآن الكريم - سورة آل عمران، الآية ٨" },
    { text: "وَأَنزَلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِكُلِّ شَيْءٍ", author: "القرآن الكريم - سورة النحل، الآية ٨٩" },
    { text: "وَاعْلَمُوا أَنَّ اللَّهَ مَعَ الْمُتَّقِينَ", author: "القرآن الكريم - سورة البقرة، الآية ١٩٣" },
    { text: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ", author: "القرآن الكريم - سورة البقرة، الآية ١٨٦" },
    { text: "إِنَّ اللَّـهَ مَعَ الصَّابِرِينَ", author: "القرآن الكريم - سورة البقرة، الآية ١٥٣" },
    { text: "وَقُولُوا لِلنَّاسِ حُسْنًا", author: "القرآن الكريم - سورة البقرة، الآية ٨٣" },
    { text: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مِنْ أَمْرِهِ يُسْرًا", author: "القرآن الكريم - سورة الطلاق، الآية ٤" },
    { text: "إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ", author: "القرآن الكريم - سورة البقرة، الآية ١٩٥" },
    { text: "وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ", author: "القرآن الكريم - سورة الإسراء، الآية ٣٦" },
    { text: "وَجَعَلْنَا اللَّيْلَ لِبَاسًا", author: "القرآن الكريم - سورة فرقان، الآية ٤٧" },
    { text: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ", author: "القرآن الكريم - سورة البقرة، الآية ٤٥" },
    { text: "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا", author: "القرآن الكريم - سورة النساء، الآية ٣٦" },
    { text: "وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ", author: "القرآن الكريم - سورة فصّلت، الآية ٣٣" },
    { text: "إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَهَرٍ", author: "القرآن الكريم - سورة القمر، الآية ٥٥" },
    { text: "وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا", author: "القرآن الكريم - سورة النساء، الآية ٨٦" },
    { text: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ", author: "القرآن الكريم - سورة آل عمران، الآية ١٣٩" },

    // 50 حديث نبوي
    { text: "الراحمون يرحمهم الرحمن", author: "النبي محمد ﷺ" },
    { text: "الدال على الخير كفاعله", author: "النبي محمد ﷺ" },
    { text: "إنما الأعمال بالنيات", author: "النبي محمد ﷺ" },
    { text: "اتقِ الله حيثما كنت", author: "النبي محمد ﷺ" },
    { text: "من لا يشكر الناس لا يشكر الله", author: "النبي محمد ﷺ" },
    { text: "خيركم من تعلم القرآن وعلّمه", author: "النبي محمد ﷺ" },
    { text: "المسلم من سلم المسلمون من لسانه ويده", author: "النبي محمد ﷺ" },
    { text: "الدنيا سجن المؤمن وجنة الكافر", author: "النبي محمد ﷺ" },
    { text: "الكلمة الطيبة صدقة", author: "النبي محمد ﷺ" },
    { text: "من حسن إسلام المرء تركه ما لا يعنيه", author: "النبي محمد ﷺ" },
    { text: "تبسُّمك في وجه أخيك صدقة", author: "النبي محمد ﷺ" },
    { text: "الرفق لا يكون في شيء إلا زانه", author: "النبي محمد ﷺ" },
    { text: "يسروا ولا تعسروا، وبشروا ولا تنفروا", author: "النبي محمد ﷺ" },
    { text: "ليس الشديد بالصرعة، إنما الشديد الذي يملك نفسه عند الغضب", author: "النبي محمد ﷺ" },
    { text: "الدين النصيحة", author: "النبي محمد ﷺ" },
    { text: "الحياء لا يأتي إلا بخير", author: "النبي محمد ﷺ" },
    { text: "اللهم أعني على ذكرك وشكرك وحسن عبادتك", author: "النبي محمد ﷺ" },
    { text: "من سلك طريقًا يلتمس فيه علمًا، سهل الله له به طريقًا إلى الجنة", author: "النبي محمد ﷺ" },
    { text: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه", author: "النبي محمد ﷺ" },
    { text: "ازهد في الدنيا يحبك الله، وازهد فيما عند الناس يحبك الناس", author: "النبي محمد ﷺ" },
    { text: "أحب الأعمال إلى الله أدومها وإن قل", author: "النبي محمد ﷺ" },
    { text: "من لا يَرحم لا يُرحم", author: "النبي محمد ﷺ" },
    { text: "من غشنا فليس منا", author: "النبي محمد ﷺ" },
    { text: "رحم الله امرأً سمحًا إذا باع، وإذا اشترى، وإذا اقتضى", author: "النبي محمد ﷺ" },
    { text: "إن الله لا ينظر إلى صوركم وأموالكم، ولكن ينظر إلى قلوبكم وأعمالكم", author: "النبي محمد ﷺ" },
    { text: "المؤمن للمؤمن كالبنيان، يشد بعضه بعضًا", author: "النبي محمد ﷺ" },
    { text: "من كان يؤمن بالله واليوم الآخر، فليقل خيرًا أو ليصمت", author: "النبي محمد ﷺ" },
    { text: "من ستر مسلمًا ستره الله يوم القيامة", author: "النبي محمد ﷺ" },
    { text: "ليس منا من لم يوقر كبيرنا ويرحم صغيرنا", author: "النبي محمد ﷺ" },
    { text: "إن الله كتب الإحسان على كل شيء", author: "النبي محمد ﷺ" },
    { text: "أفضل الناس أنفعهم للناس", author: "النبي محمد ﷺ" },
    { text: "لا حسد إلا في اثنتين: رجل آتاه الله القرآن فهو يقوم به آناء الليل وآناء النهار، ورجل آتاه الله مالاً فهو ينفقه في الليل والنهار", author: "النبي محمد ﷺ" },
    { text: "من حسن إسلام المرء تركه ما لا يعنيه", author: "النبي محمد ﷺ" },
    { text: "إن من أحبكم إلي وأقربكم مني مجلساً يوم القيامة أحاسنكم أخلاقاً", author: "النبي محمد ﷺ" },
    { text: "الكلمة الطيبة صدقة", author: "النبي محمد ﷺ" },
    { text: "إن الله لا ينظر إلى أجسادكم ولا إلى صوركم، ولكن ينظر إلى قلوبكم وأعمالكم", author: "النبي محمد ﷺ" },
    { text: "أحب الأعمال إلى الله سرور تدخله على مسلم", author: "النبي محمد ﷺ" },
    { text: "إنما مثل المؤمنين في توادهم وتراحمهم وتعاطفهم مثل الجسد، إذا اشتكى منه عضو تداعى له سائر الجسد بالسهر والحمى", author: "النبي محمد ﷺ" },
    { text: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه", author: "النبي محمد ﷺ" },
    { text: "المسلم من سلم المسلمون من لسانه ويده", author: "النبي محمد ﷺ" },
    { text: "أكمل المؤمنين إيماناً أحسنهم خلقاً", author: "النبي محمد ﷺ" },
    { text: "خيركم خيركم لأهله وأنا خيركم لأهلي", author: "النبي محمد ﷺ" },
    { text: "من كان يؤمن بالله واليوم الآخر فليكرم ضيفه", author: "النبي محمد ﷺ" },
    { text: "الحياء من الإيمان", author: "النبي محمد ﷺ" },
    { text: "من نفس عن مؤمن كربة من كرب الدنيا نفس الله عنه كربة من كرب يوم القيامة", author: "النبي محمد ﷺ" },
    { text: "أفضل الصدقة إطعام الطعام", author: "النبي محمد ﷺ" }
  ]
}
,
  {
    type: "Scientific",
    quotes: [
      { text: "Science is a way of thinking much more than it is a body of knowledge", author: "Carl Sagan" },
      { text: "The important thing is not to stop questioning", author: "Albert Einstein" },
      { text: "If I have seen further it is by standing on the shoulders of Giants", author: "Isaac Newton" },
      { text: "Somewhere, something incredible is waiting to be known", author: "Carl Sagan" },
      { text: "The good thing about science is that it's true whether or not you believe in it", author: "Neil deGrasse Tyson" },
      { text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science", author: "Edwin Hubble" },
      { text: "In science, there are no shortcuts to truth", author: "Karl Popper" },
      { text: "Science is the poetry of reality", author: "Richard Dawkins" },
      { text: "We are made of star-stuff", author: "Carl Sagan" },
      { text: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom", author: "Isaac Asimov" },
      { text: "Logic will get you from A to B. Imagination will take you everywhere", author: "Albert Einstein" },
      { text: "What you learn from a life in science is the vastness of our ignorance", author: "David Eagleman" },
      { text: "Physics is the universe’s operating system", author: "Steven R. Garman" },
      { text: "Everything is theoretically impossible, until it is done", author: "Robert A. Heinlein" },
      { text: "We cannot solve our problems with the same thinking we used when we created them", author: "Albert Einstein" },
      { text: "Not only is the universe stranger than we imagine, it is stranger than we can imagine", author: "J.B.S. Haldane" },
      { text: "The science of today is the technology of tomorrow", author: "Edward Teller" },
      { text: "Research is what I'm doing when I don't know what I'm doing", author: "Wernher von Braun" },
      { text: "We are just an advanced breed of monkeys on a minor planet of a very average star", author: "Stephen Hawking" },
      { text: "Science knows no country, because knowledge belongs to humanity", author: "Louis Pasteur" }
    ]
  },
  {
    type: "Funny",
    quotes: [
      { text: "I'm not arguing, I'm just explaining why I'm right", author: "Unknown" },
      { text: "I used to think I was indecisive, but now I'm not so sure", author: "Unknown" },
      { text: "Why don’t scientists trust atoms? Because they make up everything!", author: "Unknown" },
      { text: "My bed is a magical place where I suddenly remember everything I forgot to do", author: "Unknown" },
      { text: "Common sense is like deodorant. The people who need it most never use it", author: "Unknown" },
      { text: "I’m on a seafood diet. I see food and I eat it", author: "Unknown" },
      { text: "I'm not lazy, I'm on energy-saving mode", author: "Unknown" },
      { text: "If at first you don’t succeed, then skydiving definitely isn’t for you", author: "Steven Wright" },
      { text: "Why do they call it rush hour when nothing moves ?", author: "Robin Williams" },
      { text: "I haven’t spoken to my wife in years. I didn’t want to interrupt her", author: "Rodney Dangerfield" },
      { text: "I'm writing a book. I've got the page numbers done", author: "Steven Wright" },
      { text: "A day without sunshine is like, you know, night", author: "Steve Martin" },
      { text: "The road to success is always under construction", author: "Lily Tomlin" },
      { text: "If you think nobody cares, try missing a couple of payments", author: "Steven Wright" },
      { text: "Why is 'abbreviation' such a long word ?", author: "Unknown" },
      { text: "My wallet is like an onion. Opening it makes me cry", author: "Unknown" },
      { text: "I'm not great at the advice. Can I interest you in a sarcastic comment ?", author: "Chandler Bing" },
      { text: "I told my wife she should embrace her mistakes. She gave me a hug", author: "Unknown" },
      { text: "I'm not short, I'm concentrated awesome", author: "Unknown" },
      { text: "Always remember that you are unique – just like everyone else", author: "Unknown" }
    ]
  },
  {
    type: "Motivational",
    quotes: [
      { text: "Don't watch the clock; do what it does. Keep going", author: "Sam Levenson" },
      { text: "Success is not final, failure is not fatal: It is the courage to continue that counts", author: "Winston Churchill" },
      { text: "The only limit to our realization of tomorrow is our doubts of today", author: "Franklin D. Roosevelt" },
      { text: "It always seems impossible until it’s done", author: "Nelson Mandela" },
      { text: "Believe you can and you're halfway there", author: "Theodore Roosevelt" },
      { text: "Your time is limited, so don't waste it living someone else's life", author: "Steve Jobs" },
      { text: "Dream big and dare to fail", author: "Norman Vaughan" },
      { text: "Success usually comes to those who are too busy to be looking for it", author: "Henry David Thoreau" },
      { text: "Hardships often prepare ordinary people for an extraordinary destiny", author: "C.S. Lewis" },
      { text: "The secret of getting ahead is getting started", author: "Mark Twain" },
      { text: "It does not matter how slowly you go as long as you do not stop", author: "Confucius" },
      { text: "Push yourself, because no one else is going to do it for you", author: "Unknown" },
      { text: "Success doesn’t just find you. You have to go out and get it", author: "Unknown" },
      { text: "Great things never come from comfort zones", author: "Unknown" },
      { text: "Do something today that your future self will thank you for", author: "Sean Patrick Flanery" },
      { text: "The harder you work for something, the greater you’ll feel when you achieve it", author: "Unknown" },
      { text: "Don’t stop when you’re tired. Stop when you’re done", author: "Marilyn Monroe" },
      { text: "Wake up with determination. Go to bed with satisfaction", author: "Unknown" },
      { text: "Little things make big days", author: "Isabel Marant" },
      { text: "It’s going to be hard, but hard does not mean impossible", author: "Unknown" }
    ]
  }
];




function showRandomQuoteByType(type) {
  let selectedType = quotes.find(q => q.type === type);
    quotetype.classList.remove("none")
    quoteAuthor.classList.remove("none")
  if (selectedType) {
    let randomQuoteIndex = Math.floor(Math.random() * selectedType.quotes.length);
    let selectedQuote = selectedType.quotes[randomQuoteIndex];

    quotetype.textContent = selectedType.type;
    quoteText.textContent = selectedQuote.text;
    quoteAuthor.textContent = selectedQuote.author;

    if (type === "Islamic") {
      quoteText.style.fontFamily = "'Lateef', cursive";
    } else {
      quoteText.style.fontFamily = "'Cairo', sans-serif";
    }
  }
}

islamicBtn.addEventListener("click", () => showRandomQuoteByType("Islamic"));
philosophicalBtn.addEventListener("click", () => showRandomQuoteByType("Philosophical"));
scientificBtn.addEventListener("click", () => showRandomQuoteByType("Scientific"));
funnyBtn.addEventListener("click", () => showRandomQuoteByType("Funny"));
motivationalBtn.addEventListener("click", () => showRandomQuoteByType("Motivational"));
