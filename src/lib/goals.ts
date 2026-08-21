export type GoalId =
  | "marathon"
  | "comeback"
  | "life"
  | "first5k"
  | "ultra"
  | "tri";

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
    ],
    bubbles: [
      "Back to back weekend runs landed well. Vertical load stayed inside the range you can absorb.",
      "Your right ankle wobbles a little more when you are tired. Two minutes of drills before Thursday would go a long way.",
    ],
  },
  {
    id: "tri",
    chip: "Triathlon season",
    line: "Three sports, one body, one season to get it right.",
    message: "The bike is carrying the load well",
    checklistTitle: "Race week minus six",
    checklist: [
      { text: "Swim technique session, done", done: true },
      { text: "Long ride Saturday, done", done: true },
      { text: "Brick run Sunday, keep it easy", done: false },
    ],
    scores: [
      {
        label: "Training balance",
        value: 79,
        normal: "your 30-day normal: 74",
        points: [62, 65, 64, 68, 70, 69, 72, 74, 76, 79],
      },
      {
        label: "Left knee",
        value: 85,
        normal: "your 30-day normal: 84",
        points: [80, 81, 80, 82, 83, 82, 84, 83, 84, 85],
      },
    ],
    bubbles: [
      "The long ride left your legs fresher than usual. The fitness is showing up where you want it.",
      "Brick run tomorrow. Keep the first ten minutes easy and let your stride settle before you push.",
    ],
  },
];

export function goalById(id: GoalId): Goal {
  return GOALS.find((g) => g.id === id) ?? GOALS[0];
}
