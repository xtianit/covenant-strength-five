import type { LessonContent, QuizQuestion } from "../appTypes";

export const lesson: LessonContent = {
    lessonDate: "November 22, 2026",
    lessonTitle: "The Strength of Covenant - Part 5",

    memoryVerse:
        "And ye shall know the truth, and the truth shall make you free. (John 8:32)",
    memoryVerseRef: "John 8:32",

    introScriptures: [],
    lessonIntroScriptures: [
        "Psalm 103:20",
        "Isaiah 14:16-17",
        "Ezekiel 28:14",
    ],

    introduction:
        "Many people in life are often more interested in the present situation than the future even if it is so near. They are like Esau who, for a pottage to quench a present hunger, forfeited his inheritance and birthright. Most of us could be facing setbacks from the actions of some careless generation before us that agreed to mortgage the future for what they needed then. Let us be careful to leave a better future for ourselves and the generations to come.",

    aims: "To reveal the implications of covenants since man is surrounded or is obliged to surround himself by it.",
    objectives: "To cause man to be mindful of holy covenants and discard evil covenants through Christ.",

    lessonIntro:
        "No covenant is weak except the witness is weak, but it is obvious that all covenants are strong because the witnesses are strong. God is ultimately strong, and even the fallen angels by whom people initiate covenants are strong (Psalm 103:20; Isaiah 14:16-17; Ezekiel 28:14). Only that their strength cannot be compared to God’s. Let us see more things that took place as Israel initiated a covenant with Gibeon (Joshua 9:14–19; 2 Samuel 21:1–9).",

    lessonPoints: [ 
        {
            title: "Loosing an Inheritance",
            content:
                "God gave Israel the land of the Canaanites and commanded them not to make any covenant with them nor spare them (Exodus 34:13–17; Numbers 33:51; Deuteronomy 7:1–2). In spite of these clear instructions, the Israelites were careless and gave their inheritance and future away. By the time they realized what was happening, they could not claim that part of their God-given inheritance because an earlier covenant had prevented them (Joshua 9:18). Many of God’s people today are losing blessings and opportunities in the same manner because of unknown covenants.",
            refs: [
                "Exodus 34:13-17",
                "Numbers 33:51",
                "Deuteronomy 7:1-2",
                "Joshua 9:18",
            ],
            subPoints: [],
        },
        {
            title: "Internal Fracas",
            content:
                "The inability to inherit that portion of their inheritance ushered a civil crisis into their midst (Joshua 9:18–19). Many families today are in turmoil because of failure, lack of success, and inability to obtain what is required. One person blames another for shortcomings and failures. We need to stop fighting, discover the root cause of the situation, and deal with it together instead of being at variance.",
            refs: ["Joshua 9:18-19"],
            subPoints: [],
        },
    ],

    conclusion:
        "Let us enquire of God concerning our situation; perhaps a covenant is behind the scene. A communal or family covenant initiated by representatives may have been ignored. Bring the findings to Jesus, and He will help you (John 8:32).",
    conclusionScriptures: ["John 8:32"],

    application:
        "Enquire of God about any covenant that may be behind recurring setbacks in your life or family, and bring your findings to Jesus, who makes us free by the truth.",

    prayerPoints: [
        "Father, open my eyes to understand every covenant affecting my life.",
        "Lord Jesus, set me free from every evil covenant working against my destiny.",
        "Holy Spirit, help me honor holy covenants and walk in obedience.",
        "Father, restore every inheritance lost through ignorance.",
        "Lord, teach me wisdom and caution before entering into any covenant.",
    ],
};

// NOTE: the correct answer is always written first here. The app shuffles the
// options every time the quiz starts, so learners can't just tap the first one.
export const quizQuestions: QuizQuestion[] = [
    {
        q: "What does the permanence of covenant records teach us about oaths made before God?",
        a: [
            "Covenant records never expire even if human parties forget them over time",
            "Oaths automatically expire after a generation passes",
            "Written human agreements matter more than spiritual records",
            "God forgets past covenants when circumstances change",
        ],
        correct: 0,
        why: "Every covenant goes into record immediately and does not expire with time, as seen in Israel's binding oath with Gibeon.",
    },
    {
        q: "Why did Israel fail to dispossess the Gibeonites despite possessing the surrounding land?",
        a: [
            "An unalterable oath and covenant restricted them from doing so",
            "The Gibeonites possessed a stronger army than Israel",
            "God commanded Israel to form an alliance with all local tribes",
            "Joshua decided to break his promise for political gain",
        ],
        correct: 0,
        why: "A sworn covenant served as a restriction that hindered Israel from driving them out, illustrating how careless vows can limit our spiritual inheritance.",
    },
    {
        q: "In 2 Samuel 21:1-9, why did a three-year famine come upon Israel during David's reign?",
        a: [
            "Because Saul violated Israel's ancient covenant with the Gibeonites",
            "Because the nation stopped offering annual sacrifices",
            "Because David failed to conquer the surrounding nations",
            "Because the people worshipped idols in secret",
        ],
        correct: 0,
        why: "The divine witness remembers covenants, and breaking them brings consequences, as demonstrated by the famine resulting from Saul's actions.",
    },
    {
        q: "What does Haggai 2:5 emphasize regarding God's commitment to His people?",
        a: [
            "According to His word of covenant, His Spirit remains among them so they should not fear",
            "God's promises are temporary and change with every generation",
            "The covenant from Egypt was replaced by human laws",
            "Fear is required to maintain God's presence",
        ],
        correct: 0,
        why: "God honors the word of His covenant, and His enduring presence provides assurance to His people.",
    },
    {
        q: "How does a covenant relate to the reputation and character of its divine witness?",
        a: [
            "It touches the credibility, name, and faithfulness of the witness",
            "It has no bearing on God's reputation among nations",
            "It only affects the mortal participants involved",
            "It proves that human beings can manipulate divine laws",
        ],
        correct: 0,
        why: "A covenant is closely tied to the integrity and character of the witness, which is why God upholds and honors His sworn word.",
    },
];

export const quickQuestions = [
    "What do covenant records mean?",
    "Why couldn't Israel destroy Gibeon?",
    "How does God remember covenants?",
    "How can Jesus set us free from evil covenants?",
];

interface Topic {
    keys: string[];
    answer: string;
}

const TOPICS: Topic[] = [
    {
        keys: ["record", "book", "expire", "exodus 24:7", "joshua 9:18"],
        answer:
            "Every covenant goes into record immediately when agreed and pronounced. Covenant records never expire, even if human participants forget them over time.",
    },
    {
        keys: ["remember", "witness", "leviticus", "time", "fresh"],
        answer:
            "Any human party may forget or disrespect a covenant, but the divine witness does not live in time. Therefore, the covenant remains fresh in His mind (Leviticus 26:45).",
    },
    {
        keys: ["heart", "reputation", "credibility", "name", "psalm 111:5"],
        answer:
            "A covenant touches the reputation, credibility, name, and personality of the witness. Upholding it maintains absolute trust and faithfulness.",
    },
    {
        keys: ["restriction", "hindrance", "land", "canaanites", "gibeonites", "inheritance"],
        answer:
            "Though God gave Canaan to Israel, their hasty covenant with Gibeon restricted them from dispossessing those cities, serving as a hindrance to their full inheritance.",
    },
    {
        keys: ["haggai", "spirit", "egypt", "fear", "memory verse"],
        answer:
            "Our memory verse, Haggai 2:5, reminds us: 'According to the word that I covenanted with you when ye came out of Egypt, so my spirit remaineth among you: fear ye not.'",
    },
    {
        keys: ["jesus", "free", "matthew 11:28", "bound", "broken"],
        answer:
            "If you are burdened or hindered by past ungodly covenants, Jesus invites you in Matthew 11:28 to come to Him so He can set you free and restore your inheritance.",
    },
    {
        keys: ["pray", "prayer"],
        answer: "Check the Prayer tab for five dedicated prayer points to help break negative covenants and align your life with God's word.",
    },
    {
        keys: ["hello", "hi ", "blessing", "good morning", "good evening"],
        answer: "Blessings! Ask me about covenant records, divine remembrance, covenant restrictions, or how Christ sets us free.",
    },
];

const FALLBACK =
    "In biblical terms, a covenant is an unbreakable sacred bond witnessed by God. Try asking about covenant records, divine remembrance, covenant restrictions, or freedom through Christ.";

/** Rule-based answer: the topic with the most keyword hits wins. */
export function tutorReply(question: string): string {
    const q = ` ${question.toLowerCase()} `;
    let best: Topic | null = null;
    let bestScore = 0;
    for (const t of TOPICS) {
        const score = t.keys.reduce((n, k) => (q.includes(k) ? n + 1 : n), 0);
        if (score > bestScore) {
            best = t;
            bestScore = score;
        }
    }
    return best ? best.answer : FALLBACK;
}