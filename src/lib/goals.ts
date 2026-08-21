export type GoalId =
  | "marathon"
  | "comeback"
  | "life"
  | "first5k"
  | "ultra"
  | "pickleball";

export type Score = {
  label: string;
  value: number | string;
  suffix?: string;
  normal: string;
  trend?: string;
  points: number[];
};

export type Goal = {
  id: GoalId;
  chip: string;
  line: string;
  message: string;
  checklistTitle: string;
  checklist: { text: string; done: boolean }[];
  scores: Score[];
  bubbles: string[];
};

export const GOALS: Goal[] = [
  {
    id: "marathon",
    chip: "Marathon PR",
    line: "Sixteen weeks out. Every session in service of one morning.",
    message: "Legs look ready for the long run",
    checklistTitle: "This week's long run build",
    checklist: [
      { text: "Easy opener, Monday", done: true },
      { text: "Intervals Tuesday, landed well", done: true },
      { text: "28k Sunday, keep the first 5k easy", done: false },
    ],
    scores: [
      {
        label: "Readiness",
        value: 84,
        normal: "your 30-day normal: 78",
        points: [62, 66, 64, 70, 68, 74, 72, 78, 76, 84],
      },
      {
        label: "Left knee",
        value: 81,
        normal: "your 30-day normal: 79",
        points: [74, 76, 73, 77, 78, 76, 79, 78, 80, 81],
      },
      {
        label: "Weekly volume",
        value: 62,
        suffix: "k",
        normal: "your 30-day normal: 55k",
        points: [42, 46, 44, 50, 48, 53, 51, 56, 58, 62],
      },
    ],
    bubbles: [
      "Tuesday's intervals landed well. Left knee load stayed inside your normal range the whole session.",
      "Long run tomorrow. Legs look ready. Keep the first 5k easy and the rest will come to you.",
    ],
  },
  {
    id: "comeback",
    chip: "Injury comeback",
    line: "Back from injury, building load your body can keep.",
    message: "Load is climbing safely",
    checklistTitle: "Return to run, week 6",
    checklist: [
      { text: "Walk-run intervals, done", done: true },
      { text: "Strength, twice this week", done: true },
      { text: "Hold this volume three more days", done: false },
    ],
    scores: [
      {
        label: "Left knee",
        value: 74,
        normal: "your 30-day normal: 70",
        trend: "trending up",
        points: [58, 60, 63, 62, 66, 68, 67, 70, 72, 74],
      },
      {
        label: "Symmetry",
        value: 92,
        suffix: "%",
        normal: "your 30-day normal: 90%",
        points: [81, 84, 83, 86, 88, 87, 89, 90, 91, 92],
      },
      {
        label: "Pain, in your words",
        value: 1,
        suffix: " of 10",
        normal: "your 30-day normal: 3 of 10",
        points: [6, 5, 5, 4, 4, 3, 3, 2, 2, 1],
      },
    ],
    bubbles: [
      "Week six of your return to run. Load is climbing safely. Hold this volume for three more days.",
      "Symmetry is back to 92 percent against your own baseline. One more week before strides.",
    ],
  },
  {
    id: "life",
    chip: "Moving well for life",
    line: "Decades of moving well, measured one week at a time.",
    message: "More energy in the evenings",
    checklistTitle: "10pm wind-down",
    checklist: [
      { text: "Evening walk, three times", done: true },
      { text: "Screens off by 9:30, five nights", done: true },
      { text: "Lights out before 10 tonight", done: false },
    ],
    scores: [
      {
        label: "Resting heart rate",
        value: 47,
        normal: "your 30-day normal: 49",
        points: [52, 51, 52, 50, 51, 49, 50, 48, 48, 47],
      },
      {
        label: "Sleep",
        value: "7:42",
        normal: "your 30-day normal: 7:10",
        points: [66, 64, 68, 70, 67, 72, 74, 71, 76, 78],
      },
      {
        label: "Active minutes",
        value: 38,
        normal: "your 30-day normal: 31",
        points: [24, 27, 25, 29, 28, 31, 30, 33, 35, 38],
      },
    ],
    bubbles: [
      "Your evening walks are moving your resting heart rate the right way. Two beats under your normal this week.",
      "You wound down before 10pm five nights this week. Sleep followed. Keep the streak alive tonight.",
    ],
  },
  {
    id: "first5k",
    chip: "First 5k",
    line: "From the sofa to the start line in eight weeks.",
    message: "Three runs in, your body is adapting",
    checklistTitle: "Week 3 of 8",
    checklist: [
      { text: "Run-walk 25 minutes, done", done: true },
      { text: "Rest day, taken seriously", done: true },
      { text: "28 minutes Saturday, nice and slow", done: false },
    ],
    scores: [
      {
        label: "Motion score",
        value: 72,
        normal: "your 30-day normal: 68",
        points: [58, 60, 59, 62, 64, 63, 66, 68, 70, 72],
      },
      {
        label: "Recovery",
        value: 88,
        normal: "your 30-day normal: 82",
        points: [74, 76, 75, 78, 80, 79, 82, 84, 86, 88],
      },
      {
        label: "Runs this month",
        value: 9,
        normal: "your 30-day normal: 6",
        points: [2, 3, 3, 4, 5, 5, 6, 7, 8, 9],
      },
    ],
    bubbles: [
      "Three weeks in and your motion score is climbing. Your body is adapting faster than the plan expected.",
      "Saturday is 28 minutes. Slow enough to talk, and the distance will take care of itself.",
    ],
  },
  {
    id: "ultra",
    chip: "Trail ultra",
    line: "Fifty kilometers of climbing, built one weekend at a time.",
    message: "Climb legs are coming along",
    checklistTitle: "Big weekend block",
    checklist: [
      { text: "Back to back long runs, done", done: true },
      { text: "Vert target reached, 1,400m", done: true },
      { text: "Ankle drills before Thursday", done: false },
    ],
    scores: [
      {
        label: "Vertical load",
        value: 76,
        normal: "your 30-day normal: 71",
        points: [60, 63, 62, 66, 65, 69, 68, 72, 74, 76],
      },
      {
        label: "Ankle stability",
        value: 83,
        normal: "your 30-day normal: 81",
        points: [76, 78, 77, 79, 80, 79, 81, 82, 82, 83],
      },
      {
        label: "Time on feet",
        value: "4:10",
        normal: "your 30-day normal: 3:30",
        points: [55, 58, 57, 62, 64, 63, 68, 70, 72, 76],
      },
    ],
    bubbles: [
      "Back to back weekend runs landed well. Vertical load stayed inside the range you can absorb.",
      "Your right ankle wobbles a little more when you are tired. Two minutes of drills before Thursday would go a long way.",
    ],
  },
  {
    id: "pickleball",
    chip: "Pickleball, pain free",
    line: "Three games a week, and knees that keep up.",
    message: "Your knees liked the rest day",
    checklistTitle: "This week on court",
    checklist: [
      { text: "Two games, done", done: true },
      { text: "Ten minutes of mobility, done", done: true },
      { text: "Day off before Saturday's round robin", done: false },
    ],
    scores: [
      {
        label: "Right knee",
        value: 78,
        normal: "your 30-day normal: 75",
        points: [68, 70, 69, 72, 71, 74, 73, 75, 76, 78],
      },
      {
        label: "Recovery",
        value: 84,
        normal: "your 30-day normal: 80",
        points: [72, 74, 73, 76, 78, 77, 80, 81, 82, 84],
      },
      {
        label: "Court time",
        value: "4:30",
        suffix: "h",
        normal: "your 30-day normal: 3:45h",
        points: [48, 52, 50, 56, 58, 57, 62, 64, 66, 70],
      },
    ],
    bubbles: [
      "Two games in two days and your right knee stayed inside its normal range. The mobility work is paying off.",
      "Round robin Saturday. Take tomorrow off court and you will arrive with fresh legs.",
    ],
  },
];

export function goalById(id: GoalId): Goal {
  return GOALS.find((g) => g.id === id) ?? GOALS[0];
}
