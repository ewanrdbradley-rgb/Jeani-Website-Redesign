const INTEGRATIONS = ["Apple Watch", "Apple Health", "Whoop", "Oura", "Fitbit", "Strava", "Withings", "Garmin, fall 2026"];

export default function Chips() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5">
        {INTEGRATIONS.map((name) => (
          <span key={name} className="chip">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            {name}
          </span>
        ))}
      </div>
      <p className="small-note mt-4">
        Hardware agnostic. Works with what you already wear.
      </p>
    </div>
  );
}
