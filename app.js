// app.js

// 1. COMPLETE TOPICAL DATASET (All 77 Topics Included)
const dataset = {
  meta: {
    keyMap: {
      acceptableWorship: "Acceptable Worship",
      affliction: "Affliction",
      ageAndYouth: "Age and Youth",
      answeringFools: "Answering Fools",
      bearingWitness: "Bearing Witness",
      bribes: "Bribes",
      causelessCurses: "Causeless Curses",
      caution: "Caution",
      characterOfAuthorities: "Character of Authorities",
      charity: "Charity",
      conscience: "Conscience",
      contentiousness: "Contentiousness",
      contentment: "Contentment",
      corruption: "Corruption",
      courage: "Courage",
      deceit: "Deceit",
      devotion: "Devotion",
      diligence: "Diligence",
      discontentedness: "Discontentedness",
      dishonoringParents: "Dishonoring Parents",
      distressed: "Distressed",
      drunkenness: "Drunkenness",
      education: "Education",
      enmity: "Enmity",
      envy: "Envy",
      fidelity: "Fidelity",
      flattery: "Flattery",
      forgivingEnemies: "Forgiving Enemies",
      friendship: "Friendship",
      godliness: "Godliness",
      godlyFear: "Godly Fear",
      godsFavor: "God's Favor",
      gossip: "Gossip",
      haughtiness: "Haughtiness",
      honor: "Honor",
      honorableWoman: "Honorable Woman",
      honoringAuthority: "Honoring Authority",
      hope: "Hope",
      humility: "Humility",
      illGottenGains: "Ill-Gotten Gains",
      justice: "Justice",
      meansOfGrace: "Means of Grace",
      meekness: "Meekness",
      melancholy: "Melancholy",
      mercy: "Mercy",
      moderation: "Moderation",
      murder: "Murder",
      obedience: "Obedience",
      parenting: "Parenting",
      powerOfWords: "Power of Words",
      providence: "Providence",
      prudence: "Prudence",
      rashVows: "Rash Vows",
      rashness: "Rashness",
      relationships: "Relationships",
      repentance: "Repentance",
      reproof: "Reproof",
      reputation: "Reputation",
      respectingOthers: "Respecting Others",
      revenge: "Revenge",
      righteousHappiness: "Righteous Happiness",
      scorners: "Scorners",
      servants: "Servants",
      silence: "Silence",
      slander: "Slander",
      stinginess: "Stinginess",
      stubbornness: "Stubbornness",
      subjects: "Subjects",
      surety: "Suretyship",
      temptation: "Temptation",
      uncleanness: "Uncleanness",
      ungratefulness: "Ungratefulness",
      usefulness: "Usefulness",
      virtuousLiving: "Virtuous Living",
      wastefulness: "Wastefulness",
      wealth: "Wealth",
      wisdom: "Wisdom",
    },
  },
  data: {
    parenting: {
      description:
        "Of the comfort, or grief, parents have in their children, according as they are wise or foolish, godly or ungodly",
      references: [
        { chapter: 10, verses: [1] },
        { chapter: 15, verses: [20] },
        { chapter: 17, verses: [21, 25] },
        { chapter: 19, verses: [13, 26] },
        { chapter: 23, verses: [15, 16, 24, 25] },
        { chapter: 27, verses: [11] },
        { chapter: 29, verses: [3] },
      ],
    },
    virtuousLiving: {
      description:
        "Of the world's insufficiency, and religion's sufficiency, to make us happy...",
      references: [
        { chapter: 10, verses: [2, 3] },
        { chapter: 11, verses: [4] },
        { chapter: 15, verses: [16, 17] },
        { chapter: 16, verses: [8, 16] },
        { chapter: 17, verses: [1] },
        { chapter: 19, verses: [1] },
        { chapter: 28, verses: [6, 11] },
      ],
    },
    diligence: {
      description:
        "Of slothfulness and diligence... particularly the improving or neglecting opportunities",
      references: [
        { chapter: 6, verses: [6] },
        { chapter: 10, verses: [4, 5, 26] },
        { chapter: 12, verses: [11, 24, 27] },
        { chapter: 13, verses: [4, 23] },
        { chapter: 15, verses: [19] },
        { chapter: 16, verses: [26] },
        { chapter: 18, verses: [9] },
        { chapter: 19, verses: [15, 24] },
        { chapter: 20, verses: [4, 13] },
        { chapter: 21, verses: [5, 25, 26] },
        { chapter: 22, verses: [13, 29] },
        { chapter: 24, verses: [30, 31, 32, 33, 34] },
        { chapter: 26, verses: [13, 14, 15, 16] },
        { chapter: 27, verses: [18, 23, 27] },
        { chapter: 28, verses: [19] },
      ],
    },
    righteousHappiness: {
      description:
        "The happiness of the righteous, and the misery of the wicked",
      references: [
        { chapter: 10, verses: [6, 9, 16, 24, 25, 27, 28, 29, 30] },
        { chapter: 11, verses: [3, 5, 6, 7, 8, 18, 19, 20, 21, 31] },
        { chapter: 12, verses: [2, 3, 7, 13, 14, 21, 26, 28] },
        { chapter: 13, verses: [6, 9, 14, 15, 21, 22, 25] },
        { chapter: 14, verses: [11, 14, 19, 32] },
        { chapter: 15, verses: [6, 8, 9, 24, 26, 29] },
        { chapter: 20, verses: [7] },
        { chapter: 21, verses: [12, 15, 16, 18, 21] },
        { chapter: 22, verses: [12] },
        { chapter: 28, verses: [10, 18] },
        { chapter: 29, verses: [6] },
      ],
    },
    honor: {
      description: "Of honor and dishonor, and of vain-glory",
      references: [
        { chapter: 10, verses: [7] },
        { chapter: 12, verses: [8, 9] },
        { chapter: 18, verses: [3] },
        { chapter: 25, verses: [14, 27] },
        { chapter: 26, verses: [1] },
        { chapter: 27, verses: [2, 21] },
      ],
    },
    obedience: {
      description: "The wisdom of obedience, and folly of disobedience",
      references: [
        { chapter: 10, verses: [8, 17] },
        { chapter: 12, verses: [1, 15] },
        { chapter: 13, verses: [1, 13, 18] },
        { chapter: 15, verses: [5, 10, 12, 31, 32] },
        { chapter: 19, verses: [16] },
        { chapter: 28, verses: [4, 7, 9] },
      ],
    },
    usefulness: {
      description: "Of mischievousness and usefulness",
      references: [
        { chapter: 10, verses: [10, 23] },
        { chapter: 11, verses: [9, 10, 11, 23, 27] },
        { chapter: 12, verses: [5, 6, 12, 18, 20] },
        { chapter: 13, verses: [2] },
        { chapter: 14, verses: [22] },
        { chapter: 16, verses: [29, 30] },
        { chapter: 17, verses: [11] },
        { chapter: 21, verses: [10] },
        { chapter: 24, verses: [8] },
        { chapter: 26, verses: [23, 27] },
      ],
    },
    powerOfWords: {
      description:
        "The praise of wise and good discourse, and the hurt and shame of an ungoverned tongue",
      references: [
        { chapter: 10, verses: [11, 13, 14, 20, 21, 31, 32] },
        { chapter: 11, verses: [30] },
        { chapter: 14, verses: [3] },
        { chapter: 15, verses: [2, 4, 7, 23, 28] },
        { chapter: 16, verses: [20, 23, 24] },
        { chapter: 17, verses: [7] },
        { chapter: 18, verses: [4, 7, 20, 21] },
        { chapter: 20, verses: [15] },
        { chapter: 21, verses: [23] },
        { chapter: 23, verses: [9] },
        { chapter: 24, verses: [26] },
        { chapter: 25, verses: [11] },
      ],
    },
    contentiousness: {
      description: "Of love and hatred, peaceableness and contention",
      references: [
        { chapter: 10, verses: [12] },
        { chapter: 15, verses: [17] },
        { chapter: 17, verses: [1, 9, 14, 19] },
        { chapter: 18, verses: [6, 17, 18, 19] },
        { chapter: 20, verses: [3] },
        { chapter: 25, verses: [8] },
        { chapter: 26, verses: [17, 21] },
        { chapter: 29, verses: [9] },
      ],
    },
    wealth: {
      description: "Of the rich and poor",
      references: [
        { chapter: 10, verses: [5, 22] },
        { chapter: 11, verses: [28] },
        { chapter: 13, verses: [7, 8] },
        { chapter: 14, verses: [20, 24] },
        { chapter: 18, verses: [11, 23] },
        { chapter: 19, verses: [1, 4, 7, 22] },
        { chapter: 22, verses: [2, 7] },
        { chapter: 28, verses: [6, 11] },
        { chapter: 29, verses: [13] },
      ],
    },
    deceit: {
      description:
        "Of lying, fraud, and dissimulation, and of truth and sincerity",
      references: [
        { chapter: 10, verses: [18] },
        { chapter: 12, verses: [17, 19, 22] },
        { chapter: 13, verses: [5] },
        { chapter: 17, verses: [4] },
        { chapter: 20, verses: [14, 17] },
        { chapter: 26, verses: [18, 19, 24, 25, 26, 28] },
      ],
    },
    slander: {
      description: "Of slandering",
      references: [
        { chapter: 10, verses: [18] },
        { chapter: 16, verses: [27] },
        { chapter: 25, verses: [23] },
      ],
    },
    silence: {
      description: "Of talkativeness and silence",
      references: [
        { chapter: 10, verses: [19] },
        { chapter: 11, verses: [12] },
        { chapter: 12, verses: [23] },
        { chapter: 13, verses: [3] },
        { chapter: 17, verses: [27, 28] },
        { chapter: 29, verses: [11, 20] },
      ],
    },
    justice: {
      description: "Of justice and injustice",
      references: [
        { chapter: 11, verses: [1] },
        { chapter: 13, verses: [16] },
        { chapter: 16, verses: [8, 11] },
        { chapter: 17, verses: [15, 26] },
        { chapter: 18, verses: [5] },
        { chapter: 20, verses: [10, 23] },
        { chapter: 22, verses: [28] },
        { chapter: 23, verses: [10, 11] },
        { chapter: 29, verses: [24] },
      ],
    },
    humility: {
      description: "Of pride and humility",
      references: [
        { chapter: 11, verses: [2] },
        { chapter: 13, verses: [10] },
        { chapter: 15, verses: [25, 33] },
        { chapter: 16, verses: [5, 18, 19] },
        { chapter: 18, verses: [12] },
        { chapter: 21, verses: [4] },
        { chapter: 25, verses: [6, 7] },
        { chapter: 28, verses: [25] },
        { chapter: 29, verses: [23] },
      ],
    },
    respectingOthers: {
      description: "Of despising and respecting others",
      references: [
        { chapter: 11, verses: [12] },
        { chapter: 14, verses: [21] },
      ],
    },
    gossip: {
      description: "Of tale-bearing",
      references: [
        { chapter: 11, verses: [13] },
        { chapter: 16, verses: [28] },
        { chapter: 18, verses: [8] },
        { chapter: 20, verses: [19] },
        { chapter: 26, verses: [20, 22] },
      ],
    },
    rashness: {
      description: "Of rashness and deliberation",
      references: [
        { chapter: 11, verses: [14] },
        { chapter: 15, verses: [22] },
        { chapter: 18, verses: [13] },
        { chapter: 19, verses: [2] },
        { chapter: 20, verses: [5, 18] },
        { chapter: 21, verses: [29] },
        { chapter: 22, verses: [3] },
        { chapter: 25, verses: [8, 9, 10] },
      ],
    },
    surety: {
      description: "Of suretiship",
      references: [
        { chapter: 11, verses: [15] },
        { chapter: 17, verses: [18] },
        { chapter: 20, verses: [16] },
        { chapter: 22, verses: [26, 27] },
        { chapter: 27, verses: [13] },
      ],
    },
    honorableWoman: {
      description: "Of good and bad women, or wives",
      references: [
        { chapter: 11, verses: [16, 22] },
        { chapter: 12, verses: [4] },
        { chapter: 14, verses: [1] },
        { chapter: 18, verses: [22] },
        { chapter: 19, verses: [13, 14] },
        { chapter: 21, verses: [9, 19] },
        { chapter: 25, verses: [24] },
        { chapter: 27, verses: [15, 16] },
      ],
    },
    mercy: {
      description: "Of mercifulness and unmercifulness",
      references: [
        { chapter: 11, verses: [17] },
        { chapter: 12, verses: [10] },
        { chapter: 14, verses: [21] },
        { chapter: 19, verses: [17] },
        { chapter: 21, verses: [13] },
      ],
    },
    charity: {
      description: "Of charity to the poor, and uncharitableness",
      references: [
        { chapter: 11, verses: [24, 25, 26] },
        { chapter: 14, verses: [31] },
        { chapter: 17, verses: [5] },
        { chapter: 22, verses: [9, 16, 22, 23] },
        { chapter: 28, verses: [27] },
        { chapter: 29, verses: [7] },
      ],
    },
    contentment: {
      description: "Of covetousness and contentment",
      references: [
        { chapter: 11, verses: [29] },
        { chapter: 15, verses: [16, 17, 27] },
        { chapter: 23, verses: [4, 5] },
      ],
    },
    meekness: {
      description: "Of anger and meekness",
      references: [
        { chapter: 12, verses: [16] },
        { chapter: 14, verses: [17, 29] },
        { chapter: 15, verses: [1, 18] },
        { chapter: 16, verses: [32] },
        { chapter: 17, verses: [12, 26] },
        { chapter: 19, verses: [11, 19] },
        { chapter: 22, verses: [24, 25] },
        { chapter: 25, verses: [15, 28] },
        { chapter: 26, verses: [21] },
        { chapter: 29, verses: [22] },
      ],
    },
    melancholy: {
      description: "Of melancholy and cheerfulness",
      references: [
        { chapter: 12, verses: [25] },
        { chapter: 14, verses: [10, 13] },
        { chapter: 15, verses: [13, 15] },
        { chapter: 17, verses: [22] },
        { chapter: 18, verses: [14] },
        { chapter: 25, verses: [20, 25] },
      ],
    },
    hope: {
      description: "Of hope and expectation",
      references: [{ chapter: 13, verses: [12, 19] }],
    },
    prudence: {
      description: "Of prudence and foolishness",
      references: [
        { chapter: 7, verses: [27] },
        { chapter: 13, verses: [16] },
        { chapter: 14, verses: [8, 18, 33] },
        { chapter: 15, verses: [14, 21] },
        { chapter: 16, verses: [21, 22] },
        { chapter: 17, verses: [24] },
        { chapter: 18, verses: [2, 15] },
        { chapter: 24, verses: [3, 4, 5, 6, 7] },
        { chapter: 26, verses: [6, 7, 8, 9, 10, 11] },
        { chapter: 28, verses: [5] },
      ],
    },
    fidelity: {
      description: "Of treachery and fidelity",
      references: [
        { chapter: 13, verses: [17] },
        { chapter: 25, verses: [13, 19] },
      ],
    },
    relationships: {
      description: "Of good and bad company",
      references: [
        { chapter: 13, verses: [20] },
        { chapter: 14, verses: [7] },
        { chapter: 28, verses: [7] },
        { chapter: 29, verses: [3] },
      ],
    },
    education: {
      description: "Of the education of children",
      references: [
        { chapter: 13, verses: [24] },
        { chapter: 14, verses: [14] },
        { chapter: 19, verses: [18] },
        { chapter: 20, verses: [11] },
        { chapter: 22, verses: [6, 15] },
        { chapter: 23, verses: [12] },
        { chapter: 29, verses: [15, 17] },
      ],
    },
    godlyFear: {
      description: "Of the fear of the Lord",
      references: [
        { chapter: 14, verses: [2, 26, 27] },
        { chapter: 15, verses: [16, 33] },
        { chapter: 16, verses: [6] },
        { chapter: 19, verses: [23] },
        { chapter: 22, verses: [4] },
        { chapter: 23, verses: [17, 18] },
      ],
    },
    bearingWitness: {
      description: "Of true and false witness-bearing",
      references: [
        { chapter: 14, verses: [5, 25] },
        { chapter: 19, verses: [5, 9, 28] },
        { chapter: 21, verses: [28] },
        { chapter: 24, verses: [28] },
        { chapter: 25, verses: [18] },
      ],
    },
    scorners: {
      description: "Of scorners",
      references: [
        { chapter: 14, verses: [6, 9] },
        { chapter: 21, verses: [24] },
        { chapter: 22, verses: [10] },
        { chapter: 24, verses: [9] },
        { chapter: 29, verses: [9] },
      ],
    },
    caution: {
      description: "Of credulity and caution",
      references: [
        { chapter: 14, verses: [15, 16] },
        { chapter: 27, verses: [12] },
      ],
    },
    subjects: {
      description: "Of kings and their subjects",
      references: [
        { chapter: 14, verses: [28, 34, 35] },
        { chapter: 16, verses: [10, 12, 13, 14, 15] },
        { chapter: 19, verses: [6, 12] },
        { chapter: 20, verses: [2, 8, 26, 28] },
        { chapter: 22, verses: [11] },
        { chapter: 24, verses: [23, 24, 25] },
        { chapter: 28, verses: [2, 3, 15, 16] },
        { chapter: 29, verses: [5, 12, 14, 26] },
        { chapter: 30, verses: [2, 3, 4, 5] },
      ],
    },
    envy: {
      description: "Of envy, especially envying sinners",
      references: [
        { chapter: 14, verses: [30] },
        { chapter: 23, verses: [17, 18] },
        { chapter: 24, verses: [1, 2, 19, 20] },
        { chapter: 27, verses: [4] },
      ],
    },
    providence: {
      description: "Of God's omniscience, and his universal providence",
      references: [
        { chapter: 15, verses: [3, 11] },
        { chapter: 16, verses: [1, 4, 9, 33] },
        { chapter: 17, verses: [3] },
        { chapter: 19, verses: [21] },
        { chapter: 20, verses: [12, 24] },
        { chapter: 21, verses: [1, 30, 31] },
        { chapter: 29, verses: [26] },
      ],
    },
    reputation: {
      description: "Of a good and ill name",
      references: [
        { chapter: 15, verses: [30] },
        { chapter: 22, verses: [1] },
      ],
    },
    haughtiness: {
      description: "Of men's good opinion of themselves",
      references: [
        { chapter: 14, verses: [12] },
        { chapter: 16, verses: [2, 25] },
        { chapter: 20, verses: [6] },
        { chapter: 21, verses: [2] },
        { chapter: 26, verses: [12] },
        { chapter: 28, verses: [26] },
      ],
    },
    devotion: {
      description: "Of devotion towards God, and dependence on him",
      references: [
        { chapter: 16, verses: [3] },
        { chapter: 18, verses: [10] },
        { chapter: 23, verses: [26] },
        { chapter: 27, verses: [1] },
        { chapter: 28, verses: [25] },
        { chapter: 29, verses: [25] },
      ],
    },
    godsFavor: {
      description: "Of the happiness of God's favor",
      references: [
        { chapter: 16, verses: [7] },
        { chapter: 29, verses: [26] },
      ],
    },
    wisdom: {
      description: "Excitements to get wisdom",
      references: [
        { chapter: 16, verses: [16] },
        { chapter: 18, verses: [1] },
        { chapter: 19, verses: [8, 20] },
        { chapter: 22, verses: [17, 18, 19, 20, 21] },
        { chapter: 23, verses: [15, 16, 22, 23, 24, 25] },
        { chapter: 24, verses: [13, 14] },
        { chapter: 27, verses: [11] },
      ],
    },
    temptation: {
      description: "Cautions against temptations",
      references: [
        { chapter: 16, verses: [17] },
        { chapter: 29, verses: [27] },
      ],
    },
    ageAndYouth: {
      description: "Of old age and youth",
      references: [
        { chapter: 16, verses: [31] },
        { chapter: 17, verses: [6] },
        { chapter: 20, verses: [29] },
      ],
    },
    servants: {
      description: "Of servants",
      references: [
        { chapter: 17, verses: [2] },
        { chapter: 19, verses: [10] },
        { chapter: 29, verses: [19, 21] },
      ],
    },
    bribes: {
      description: "Of bribery",
      references: [
        { chapter: 17, verses: [8, 23] },
        { chapter: 18, verses: [16] },
        { chapter: 21, verses: [14] },
        { chapter: 28, verses: [21] },
      ],
    },
    reproof: {
      description: "Of reproof and correction",
      references: [
        { chapter: 17, verses: [10] },
        { chapter: 19, verses: [25, 29] },
        { chapter: 20, verses: [30] },
        { chapter: 21, verses: [11] },
        { chapter: 25, verses: [12] },
        { chapter: 26, verses: [3] },
        { chapter: 27, verses: [5, 6, 22] },
        { chapter: 28, verses: [23] },
        { chapter: 29, verses: [1] },
      ],
    },
    ungratefulness: {
      description: "Of ingratitude",
      references: [{ chapter: 17, verses: [13] }],
    },
    friendship: {
      description: "Of friendship",
      references: [
        { chapter: 17, verses: [17] },
        { chapter: 18, verses: [24] },
        { chapter: 27, verses: [9, 10, 14, 17] },
      ],
    },
    moderation: {
      description: "Of sensual pleasures",
      references: [
        { chapter: 21, verses: [17] },
        { chapter: 23, verses: [1, 2, 3, 6, 7, 8, 19, 20, 21] },
        { chapter: 27, verses: [7] },
      ],
    },
    drunkenness: {
      description: "Of drunkenness",
      references: [
        { chapter: 20, verses: [1] },
        { chapter: 23, verses: [23, 29, 30, 31, 32, 33, 34, 35] },
      ],
    },
    corruption: {
      description: "Of the universal corruption of nature",
      references: [{ chapter: 20, verses: [9] }],
    },
    flattery: {
      description: "Of flattery",
      references: [
        { chapter: 20, verses: [19] },
        { chapter: 26, verses: [28] },
        { chapter: 28, verses: [23] },
        { chapter: 29, verses: [5] },
      ],
    },
    dishonoringParents: {
      description: "Of undutiful children",
      references: [
        { chapter: 20, verses: [20] },
        { chapter: 28, verses: [24] },
      ],
    },
    illGottenGains: {
      description: "Of the short continuance of what is ill-gotten",
      references: [
        { chapter: 20, verses: [21] },
        { chapter: 21, verses: [6, 7] },
        { chapter: 22, verses: [8] },
        { chapter: 28, verses: [8] },
      ],
    },
    revenge: {
      description: "Of revenge",
      references: [
        { chapter: 20, verses: [22] },
        { chapter: 24, verses: [17, 18, 29] },
      ],
    },
    rashVows: {
      description: "Of sacrilege",
      references: [{ chapter: 20, verses: [25] }],
    },
    conscience: {
      description: "Of conscience",
      references: [
        { chapter: 20, verses: [27] },
        { chapter: 27, verses: [19] },
      ],
    },
    acceptableWorship: {
      description: "Of the preference of moral duties before ceremonial",
      references: [
        { chapter: 15, verses: [8] },
        { chapter: 21, verses: [3, 27] },
      ],
    },
    wastefulness: {
      description: "Of prodigality and wastefulness",
      references: [{ chapter: 21, verses: [20] }],
    },
    godliness: {
      description: "The triumphs of wisdom and godliness",
      references: [
        { chapter: 21, verses: [22] },
        { chapter: 24, verses: [15, 16] },
      ],
    },
    stubbornness: {
      description: "Of frowardness and tractableness",
      references: [{ chapter: 22, verses: [5] }],
    },
    uncleanness: {
      description: "Of uncleanness",
      references: [
        { chapter: 22, verses: [14] },
        { chapter: 23, verses: [27, 28] },
      ],
    },
    affliction: {
      description: "Of fainting in affliction",
      references: [{ chapter: 24, verses: [10] }],
    },
    distressed: {
      description: "Of helping the distressed",
      references: [{ chapter: 14, verses: [11, 12] }],
    },
    honoringAuthority: {
      description: "Of loyalty to the government",
      references: [{ chapter: 24, verses: [21, 22] }],
    },
    forgivingEnemies: {
      description: "Of forgiving enemies",
      references: [{ chapter: 25, verses: [21, 22] }],
    },
    causelessCurses: {
      description: "Of causeless curse",
      references: [{ chapter: 26, verses: [2] }],
    },
    answeringFools: {
      description: "Of answering fools",
      references: [{ chapter: 26, verses: [4, 5] }],
    },
    discontentedness: {
      description: "Of unsettledness and unsatisfiedness",
      references: [{ chapter: 27, verses: [8, 20] }],
    },
    courage: {
      description: "Of cowardliness and courage",
      references: [{ chapter: 28, verses: [1] }],
    },
    characterOfAuthorities: {
      description: "The people's interest in the character of their rulers",
      references: [
        { chapter: 11, verses: [10, 11] },
        { chapter: 28, verses: [12, 28] },
        { chapter: 29, verses: [2, 16] },
      ],
    },
    repentance: {
      description: "The benefit of repentance and holy fear",
      references: [{ chapter: 28, verses: [13, 14] }],
    },
    murder: {
      description: "The punishment of murder",
      references: [{ chapter: 28, verses: [17] }],
    },
    stinginess: {
      description: "Of hastening to be rich",
      references: [{ chapter: 28, verses: [20, 22] }],
    },
    enmity: {
      description: "The enmity of the wicked against the godly",
      references: [{ chapter: 29, verses: [10, 27] }],
    },
    meansOfGrace: {
      description: "The necessity of the means of grace",
      references: [{ chapter: 29, verses: [18] }],
    },
  },
};

function getBibleHubUrl(chapter, verse) {
  return `https://biblehub.com/proverbs/${chapter}-${verse}.htm`;
}

// 3. STATE & TOPIC PREPARATION
let isSingleMode = true;
let singleTopicKey = null;

const topics = Object.keys(dataset.data).map((key) => {
  const item = dataset.data[key];
  const title = dataset.meta.keyMap[key] || key;
  const refCount = item.references.reduce((acc, r) => acc + r.verses.length, 0);

  const refList = [];
  item.references.forEach((r) => {
    r.verses.forEach((v) => {
      refList.push({
        chapter: r.chapter,
        verse: v,
        tag: `${r.chapter}:${v}`,
        formatted: `Prov ${r.chapter}:${v}`,
      });
    });
  });

  return { key, title, description: item.description, refList, refCount };
});

// 4. UI RENDERING ENGINE
const grid = document.getElementById("topicGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const statsDisplay = document.getElementById("statsDisplay");
const modeBanner = document.getElementById("modeBanner");
const tooltip = document.getElementById("tooltip");

const pageSize = document.querySelector("#pageSize");
const pagination = document.querySelector("#pagination");
let page = 1;

function resetPage() {
  page = 1;
  render();
}

function selectRandomTopic() {
  searchInput.value = "";
  const randomIndex = Math.floor(Math.random() * topics.length);
  singleTopicKey = topics[randomIndex].key;
  isSingleMode = true;
  resetPage();
}

function showAllMode() {
  searchInput.value = "";
  isSingleMode = false;
  resetPage();
}

function referenceChips(refs) {
  const groups = [];
  for (const ref of refs) {
    const group = groups.at(-1);
    const previous = group?.at(-1);
    if (previous?.chapter === ref.chapter && previous.verse + 1 === ref.verse) {
      group.push(ref);
    } else {
      groups.push([ref]);
    }
  }
  return groups.map(group => {
    const first = group[0];
    const last = group.at(-1);
    const range = group.length > 1;
    const label = range ? `${first.formatted}–${last.verse}` : first.formatted;
    const url = range ? `https://biblehub.com/bsb/proverbs/${first.chapter}.htm` : getBibleHubUrl(first.chapter, first.verse);
    return `<a class="chip" href="${url}" target="_blank" rel="noopener"
      data-tags="${group.map(r => r.tag).join(" ")}" data-label="${label}"
      onfocus="showTooltip(event)" onblur="hideTooltip()"
      onmouseenter="showTooltip(event)" onmouseleave="hideTooltip()">${label} ↗</a>`;
  }).join("");
}

function render() {
  hideTooltip();
  const query = searchInput.value.toLowerCase().trim();
  const sortValue = sortSelect.value;

  let filtered = topics.filter((t) => {
    const matchesTitle = t.title.toLowerCase().includes(query);
    const matchesDesc = t.description.toLowerCase().includes(query);
    const matchesRefs = t.refList.some(
      (r) => r.formatted.toLowerCase().includes(query) || r.tag.includes(query),
    );
    return matchesTitle || matchesDesc || matchesRefs;
  });

  if (isSingleMode && !query) {
    grid.classList.add("single-mode");
    modeBanner.style.display = "flex";
    filtered = filtered.filter((t) => t.key === singleTopicKey);
  } else {
    grid.classList.remove("single-mode");
    modeBanner.style.display = "none";
  }

  filtered.sort((a, b) => {
    if (sortValue === "name-asc") return a.title.localeCompare(b.title);
    if (sortValue === "name-desc") return b.title.localeCompare(a.title);
    if (sortValue === "ref-desc") return b.refCount - a.refCount;
    if (sortValue === "ref-asc") return a.refCount - b.refCount;
  });

  const size = pageSize.value === "all" ? topics.length : Number(pageSize.value);
  const pages = Math.ceil(filtered.length / size);
  const start = (page - 1) * size;
  document.querySelector("#sizeControl").hidden = isSingleMode;
  pagination.hidden = isSingleMode || pages < 2;
  pagination.replaceChildren();
  if (!pagination.hidden) {
    function addPageButton(label, destination, disabled = false, numbered = false) {
      const button = document.createElement("button");
      button.textContent = label;
      button.dataset.page = destination;
      button.disabled = disabled;
      if (numbered) {
        button.setAttribute("aria-label", `Page ${destination}`);
        if (destination === page) button.setAttribute("aria-current", "page");
      }
      pagination.append(button);
    }
    addPageButton("First", 1, page === 1);
    addPageButton("Previous", page - 1, page === 1);
    for (let n = 1; n <= pages; n++) addPageButton(n, n, false, true);
    addPageButton("Next", page + 1, page === pages);
    addPageButton("Last", pages, page === pages);
  }
  statsDisplay.textContent = isSingleMode
    ? `Spotlight Topic (1 of ${topics.length})`
    : filtered.length
      ? `Showing ${start + 1}–${Math.min(start + size, filtered.length)} of ${filtered.length} topics`
      : "0 matching topics";

  if (filtered.length === 0) {
    grid.textContent = `No topics match “${query}”.`;
    return;
  }

  grid.innerHTML = filtered.slice(start, start + size).map(t => {
    const matching = query ? t.refList.filter(r => r.formatted.toLowerCase().includes(query)) : [];
    const narrow = matching.length > 0 && matching.length < t.refCount;
    const matches = new Set(matching.map(r => r.tag));
    const extra = r => narrow && !matches.has(r.tag) ? "data-extra hidden" : "";
    return `
    <article class="card">
      <div>
        <div class="card-header">
          <h2 class="card-title">${t.title}</h2>
        </div>
        <p class="card-desc">${t.description}</p>
        
        <div class="chip-container" data-topic="${t.key}">${referenceChips(narrow ? matching : t.refList)}</div>
      </div>

      <div>
        <details class="expanded-verses">
          <summary>Read verses (<span class="read-count">${narrow ? matching.length : t.refCount}</span>)</summary>
          ${t.refList
            .map(
              (r) => `
            <div class="verse-entry" ${extra(r)}>
              <div class="verse-ref-header">
                <span>${r.formatted} · BSB</span>
                <a href="${getBibleHubUrl(r.chapter, r.verse)}" target="_blank" class="biblehub-link">BibleHub ↗</a>
              </div>
              <p>${bsbVerses[r.tag]}</p>
            </div>
          `,
            )
            .join("")}
        </details>
        ${narrow ? `<button class="ref-toggle" data-count="${matching.length}" data-total="${t.refCount}" aria-expanded="false">Show all references</button>` : ""}
      </div>
    </article>
  `;
  }).join("");
}

function showTooltip(event) {
  const { tags, label } = event.currentTarget.dataset;
  const passage = tags.split(" ").map(tag => bsbVerses[tag]).join(" ");
  tooltip.textContent = `${label} · BSB — ${passage}`;
  tooltip.style.display = "block";
  event.currentTarget.setAttribute("aria-describedby", "tooltip");
  positionTooltip(event.currentTarget);
}

function positionTooltip(target) {
  const rect = target.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();

  let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
  let top = rect.top - tooltipRect.height - 8;

  if (left < 10) left = 10;
  if (left + tooltipRect.width > window.innerWidth)
    left = window.innerWidth - tooltipRect.width - 10;
  if (top < 10) top = rect.bottom + 8;

  tooltip.style.left = `${left + window.scrollX}px`;
  tooltip.style.top = `${top + window.scrollY}px`;
}

function hideTooltip() {
  grid.querySelector('[aria-describedby="tooltip"]')?.removeAttribute("aria-describedby");
  tooltip.style.display = "none";
}

// 6. EVENT LISTENERS
searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() !== "") isSingleMode = false;
  resetPage();
});
sortSelect.addEventListener("change", resetPage);
pageSize.addEventListener("change", resetPage);
pagination.addEventListener("click", event => {
  const button = event.target.closest("button[data-page]");
  if (!button) return;
  page = Number(button.dataset.page);
  render();
  grid.focus();
  grid.scrollIntoView({ block: "start" });
});
grid.addEventListener("click", event => {
  const button = event.target.closest(".ref-toggle");
  if (!button) return;
  const card = button.closest(".card");
  const showAll = button.getAttribute("aria-expanded") === "false";
  const chips = card.querySelector(".chip-container");
  const topic = topics.find(t => t.key === chips.dataset.topic);
  const query = searchInput.value.toLowerCase().trim();
  const refs = showAll ? topic.refList : topic.refList.filter(r => r.formatted.toLowerCase().includes(query));
  chips.innerHTML = referenceChips(refs);
  card.querySelectorAll("[data-extra]").forEach(el => { el.hidden = !showAll; });
  card.querySelector(".read-count").textContent = showAll ? button.dataset.total : button.dataset.count;
  button.setAttribute("aria-expanded", String(showAll));
  button.textContent = showAll ? "Show matching references" : "Show all references";
});
document
  .getElementById("randomBtn")
  .addEventListener("click", selectRandomTopic);
document.getElementById("viewAllBtn").addEventListener("click", showAllMode);

// Initial load: 1 random spotlight topic
selectRandomTopic();

document.addEventListener("keydown", event => {
  if (event.key === "Escape") hideTooltip();
});
const about = document.querySelector("#about");
document.querySelector("#aboutBtn").addEventListener("click", () => about.showModal());
about.addEventListener("click", event => {
  if (event.target !== about) return;
  const { left, right, top, bottom } = about.getBoundingClientRect();
  if (event.clientX < left || event.clientX >= right || event.clientY < top || event.clientY >= bottom) {
    about.close();
  }
});
const themeBtn = document.querySelector("#themeBtn");
function updateThemeControl() {
  themeBtn.setAttribute("aria-pressed", document.documentElement.dataset.theme === "dark");
}
updateThemeControl();
themeBtn.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  updateThemeControl();
  try { localStorage.setItem("proverbs-theme", theme); } catch { /* Storage unavailable. */ }
});
