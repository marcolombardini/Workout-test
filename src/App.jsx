import { useState } from "react";

const days = [
  { label: "MON", name: "Monday", focus: "Core + Cardio" },
  { label: "TUE", name: "Tuesday", focus: "Upper Body" },
  { label: "WED", name: "Wednesday", focus: "Low-Impact HIIT" },
  { label: "THU", name: "Thursday", focus: "Rest / Walk" },
  { label: "FRI", name: "Friday", focus: "Full Body + Core" },
  { label: "SAT", name: "Saturday", focus: "Active Recovery" },
  { label: "SUN", name: "Sunday", focus: "Rest" },
];

const workouts = {
  Monday: [
    { name: "Dead Bug", sets: "3 × 10 reps", tip: "Back stays flat on floor the entire time", example: "Lie on your back, arms pointing up, knees bent at 90°. Slowly lower your right arm and left leg toward the floor simultaneously, then return. Alternate sides. Never let your lower back arch off the floor.", backNote: "✅ Spine stays neutral — one of the safest core exercises for bad backs" },
    { name: "Bird Dog", sets: "3 × 10 each side", tip: "Move slowly — no twisting or hip drop", example: "Start on all fours, wrists under shoulders, knees under hips. Extend your right arm forward and left leg back simultaneously, hold 2 seconds, return. Keep your core braced and hips level throughout.", backNote: "✅ Strengthens the deep stabilizers that protect your spine" },
    { name: "Glute Bridge", sets: "3 × 15 reps", tip: "Squeeze glutes hard at top, don't hyperextend", example: "Lie on your back, knees bent, feet flat on floor hip-width apart. Press through your heels to lift your hips until your body forms a straight line from shoulders to knees. Hold 1 second at top, lower slowly.", backNote: "✅ Strengthens glutes which take load off the lower back" },
    { name: "Marching in Place", sets: "20 min", tip: "Pump arms and lift knees to increase intensity", example: "Stand tall and march in place, lifting each knee to hip height. Keep your core gently braced. You can do this in front of the TV — just keep moving at a pace that gets your heart rate up.", backNote: "✅ Zero-impact cardio, no jarring on the spine" },
  ],
  Tuesday: [
    { name: "Wall Push-Up", sets: "3 × 15 reps", tip: "Stand further from wall to increase difficulty", example: "Stand arm's length from a wall, place both hands flat at shoulder height. Bend elbows to lower your chest toward the wall, then push back. Keep your body in a straight line — don't let hips sag.", backNote: "✅ No spinal loading — safe alternative to floor push-ups" },
    { name: "Seated Resistance Band Row", sets: "3 × 12 reps", tip: "Squeeze shoulder blades together at the end of each rep", example: "Sit on the floor, legs extended. Loop a resistance band around your feet and pull toward your torso, elbows driving back past your sides. No band? Use a folded towel hooked around a door handle.", backNote: "✅ Seated position removes strain from lower back" },
    { name: "Standing Shoulder Press", sets: "3 × 10 reps", tip: "Engage core before pressing — don't arch your back", example: "Stand with feet hip-width apart, holding two full water bottles at shoulder height, palms forward. Press both arms overhead until fully extended, then lower slowly. Keep ribs down — don't flare them out.", backNote: "✅ Light household items work great — protects spine with minimal load" },
    { name: "Standing Side Crunch", sets: "3 × 12 each side", tip: "Lift knee and elbow toward each other — squeeze the oblique", example: "Stand tall, hands lightly behind your head. Lift your right knee up and to the side while bending your right elbow down to meet it. Return to standing. Works obliques upright with zero spine compression.", backNote: "✅ Upright position avoids disc compression from floor crunches" },
  ],
  Wednesday: [
    { name: "Step Touch Side-to-Side", sets: "5 min warm-up", tip: "Keep it rhythmic — add arm swings to raise heart rate", example: "Step your right foot out to the side, then bring your left foot to meet it. Step left, bring right to meet it. Keep alternating at a brisk pace. Think gentle aerobics — no jumping needed.", backNote: "✅ Completely low-impact, warms up hips and core" },
    { name: "Standing Oblique Twist", sets: "3 × 20 reps", tip: "Rotate from the torso, not just the arms", example: "Stand feet shoulder-width apart, arms extended forward. Rotate your upper body to the right, then to the left in a controlled rhythm. Keep your hips facing forward — all movement comes from your core.", backNote: "✅ Standing rotation is gentler on discs than seated Russian twists" },
    { name: "Chair-Assisted Squat", sets: "4 × 12 reps", tip: "Keep chest up and sit back — don't lean forward", example: "Stand in front of a sturdy chair, feet shoulder-width apart. Slowly lower yourself toward the seat as if about to sit, stop just before touching it, then stand back up. Hold the chair back lightly for balance.", backNote: "✅ Chair gives control and prevents rounding of the lower back" },
    { name: "Standing Heel-to-Glute Kicks", sets: "3 × 30 sec", tip: "Stand tall — avoid leaning forward as you kick", example: "Lightly hold a chair back for balance. Alternate kicking your heels up toward your glutes in a running-style motion at a pace that elevates your heart rate. This is your cardio burst.", backNote: "✅ Low-impact cardio substitute for burpees or mountain climbers" },
    { name: "Knee-to-Chest Stretch", sets: "Hold 30 sec each side", tip: "Breathe deeply — let the back release fully", example: "Lie on your back. Gently pull one knee toward your chest with both hands, hold, then switch. Then pull both knees in together and rock gently side to side. Decompress your lower back after the workout.", backNote: "✅ Decompresses the lumbar spine — essential after any workout" },
  ],
  Thursday: [
    { name: "Gentle 20-min Walk", sets: "20–30 min", tip: "Stand tall, swing arms naturally, breathe through your nose", example: "Walk at a comfortable pace outside or around your home. Focus on posture — head up, shoulders back, core lightly engaged. Walking lubricates the spine and is one of the best things you can do for a bad back.", backNote: "✅ Light walking actively aids lower back recovery" },
    { name: "Cat-Cow Stretch", sets: "2 min, slow", tip: "Move with your breath — inhale to arch, exhale to round", example: "On all fours, wrists under shoulders. Inhale and let your belly drop toward the floor while lifting head and tailbone (Cow). Exhale and round your spine toward the ceiling, tucking chin and pelvis (Cat). Flow slowly.", backNote: "✅ Mobilizes the entire spine — relieves stiffness and tension" },
    { name: "Child's Pose", sets: "Hold 1–2 min", tip: "Walk hands as far forward as comfortable", example: "Kneel on the floor, sit hips back toward heels and extend both arms forward on the ground, forehead resting down. Breathe deeply and let gravity lengthen your back. Place a pillow under knees if uncomfortable.", backNote: "✅ One of the best passive stretches for lower back decompression" },
    { name: "Piriformis Stretch", sets: "30 sec each side", tip: "Pull gently — never force the stretch", example: "Lie on your back, knees bent. Cross your right ankle over your left knee (figure-4 shape). Gently pull both legs toward your chest until you feel a deep stretch in your right glute/hip. Tight hips are a major contributor to lower back pain.", backNote: "✅ Releasing hip tightness directly reduces lower back strain" },
  ],
  Friday: [
    { name: "Standing Wall Squat", sets: "3 × 12 reps", tip: "Back stays fully flat against the wall throughout", example: "Stand with your back flat against a wall, feet about 2 feet in front of you. Slide down until your knees are at roughly 90°, hold 2 seconds, then slide back up. The wall keeps your spine in perfect alignment.", backNote: "✅ Wall eliminates the forward lean that stresses the lower back in free squats" },
    { name: "Standing Hip Hinge", sets: "3 × 10 reps", tip: "Bend at the hips, not the waist — think 'taking a bow'", example: "Stand feet hip-width apart, soft bend in knees. Push your hips back behind you (like closing a drawer with your backside) while your torso leans forward to about 45°. Drive hips forward to stand. Teaches spine-safe bending.", backNote: "✅ Key movement pattern for back rehab — teaches safe bending mechanics" },
    { name: "Seated Leg Raise", sets: "3 × 12 each leg", tip: "Sit tall, don't slump — the posture is part of the work", example: "Sit on the edge of a sturdy chair, feet flat on the floor. Straighten one leg and raise it until parallel to the floor, hold 2 seconds, lower slowly. Targets lower abs without any spinal flexion.", backNote: "✅ Seated position supports the back while working the core" },
    { name: "Glute Bridge with March", sets: "3 × 8 each leg", tip: "Don't let hips drop or rotate when you lift a leg", example: "Get into a glute bridge and lift your hips up. While holding the bridge, slowly lift one knee toward your chest, hold 2 seconds, return, then alternate. Challenges core stability while keeping everything supported.", backNote: "✅ Progression of the glute bridge — builds core without any spinal flexion" },
    { name: "Dead Bug", sets: "3 × 10 reps", tip: "Never let your lower back arch off the floor", example: "Lie on your back, arms pointing up, knees at 90°. Slowly lower your right arm and left leg toward the floor, return, then switch sides. Move slowly and breathe out as you lower. Lower back stays completely flat.", backNote: "✅ Ends the week with deep core stabilization — the safest abs exercise" },
  ],
  Saturday: [
    { name: "Gentle Yoga Flow", sets: "20 min", tip: "Search YouTube: 'Yoga with Adriene back pain' for free guided sessions", example: "Search YouTube for 'yoga for lower back pain' and follow a guided session. Focus on gentle hip openers, careful spinal twists, and hamstring stretches. Never force any pose — back off at the first sign of discomfort.", backNote: "✅ Yoga designed for back pain is highly therapeutic" },
    { name: "Pelvic Tilt", sets: "3 × 15 reps", tip: "Subtle movement — think 'flatten your back into the floor'", example: "Lie on your back, knees bent, feet flat. Gently flatten your lower back into the floor by tightening your abs and tilting your pelvis. Hold 5 seconds, release. Strengthens the deep core muscles that stabilize your spine.", backNote: "✅ Foundation exercise for back rehab — builds core from the inside out" },
    { name: "Seated Thoracic Rotation", sets: "10 reps each side", tip: "Only rotate as far as comfortable — no pain", example: "Sit in a chair with feet flat on the floor. Cross your arms over your chest. Gently rotate your upper body to the right as far as comfortable, hold 2 seconds, return to center, then left. Keep hips still — movement is all in your upper back.", backNote: "✅ Improves upper back mobility which reduces strain on the lumbar spine" },
  ],
  Sunday: [
    { name: "Full Rest", sets: "All day", tip: "This is not optional — rest is when your body actually changes", example: "Take the day completely off from structured exercise. Sleep in, go for a gentle stroll if you feel like it, and do some light stretching if stiff. Prioritize 7–9 hours of sleep tonight to set up a strong week ahead.", backNote: "✅ Recovery reduces inflammation in the back and throughout the body" },
  ],
};

const meals = [
  { time: "7:00 AM", label: "Breakfast", emoji: "🍳", options: ["3 scrambled eggs + ½ avocado + 1 slice whole grain toast", "Greek yogurt + berries + 1 tbsp chia seeds", "Overnight oats with protein powder + banana"] },
  { time: "10:30 AM", label: "Mid-Morning Snack", emoji: "🍎", options: ["Apple + 2 tbsp almond butter", "Handful of mixed nuts + 1 string cheese", "Protein shake + handful of blueberries"] },
  { time: "1:00 PM", label: "Lunch", emoji: "🥗", options: ["Grilled chicken breast + large salad + olive oil dressing", "Tuna wrap (whole grain) + side of raw veggies", "Quinoa bowl: chicken, roasted veggies, lemon tahini"] },
  { time: "4:00 PM", label: "Pre-Workout Snack", emoji: "⚡", options: ["Rice cake + peanut butter + banana slices", "Small sweet potato + cottage cheese", "Handful of trail mix + black coffee"] },
  { time: "7:00 PM", label: "Dinner", emoji: "🍽️", options: ["Salmon + steamed broccoli + brown rice", "Turkey meatballs + zucchini noodles + marinara", "Lean steak + roasted asparagus + side salad"] },
];

const rules = [
  { icon: "💧", rule: "Drink 3L water daily", detail: "Start every morning with 500ml before coffee" },
  { icon: "🚫", rule: "Cut liquid calories", detail: "No soda, juice, or fancy coffee drinks" },
  { icon: "🕐", rule: "Eat every 3–4 hours", detail: "Keeps metabolism active and prevents overeating" },
  { icon: "🥦", rule: "Half your plate = vegetables", detail: "Fill up on fiber-dense, low-cal foods first" },
  { icon: "💪", rule: "Hit 150g protein daily", detail: "Protects muscle while you lose fat" },
  { icon: "😴", rule: "Sleep 7–9 hours", detail: "Poor sleep = elevated cortisol = belly fat" },
  { icon: "🧘", rule: "Stretch after every session", detail: "Tight hips & hamstrings are a top cause of back pain" },
];

const themes = {
  dark: {
    bg: "#0d0d0d",
    text: "#f0ede8",
    headerBg: "linear-gradient(135deg,#1a0808 0%,#0d0d0d 65%)",
    headerBorder: "#1a1a1a",
    headerGlow: "rgba(230,57,70,0.12)",
    subtitleText: "#777",
    statLabel: "#555",
    dayBg: "#161616",
    dayBorder: "#1e1e1e",
    dayInactiveText: "#f0ede8",
    dayFocusInactive: "#555",
    daySelectorBorder: "#161616",
    tabBorder: "#2a2a2a",
    tabText: "#777",
    tabHoverBorder: "#444",
    tabHoverText: "#f0ede8",
    cardBg: "#161616",
    cardBorder: "#1e1e1e",
    cardHoverBg: "#1a1a1a",
    expandBg: "#111",
    expandBorder: "#1e1e1e",
    chevronColor: "#555",
    tipText: "#555",
    exampleText: "#bbb",
    exampleLabel: "#f0ede8",
    greenText: "#4caf50",
    greenBg: "#0a180a",
    greenBorder: "#1a3a1a",
    warningBg: "#111",
    warningBorder: "#222",
    warningText: "#555",
    warningStrong: "#777",
    mealBg: "#141414",
    mealBorder: "#1e1e1e",
    mealText: "#999",
    ruleBg: "#141414",
    ruleBorder: "#1a1a1a",
    ruleDetail: "#666",
    resultBg: "linear-gradient(135deg,#0d1a0d,#0d0d0d)",
    resultBorder: "#1a2a1a",
    resultText: "#777",
    resultStrong: "#aaa",
    homeBg: "#0d1a0d",
    homeText: "#4caf50",
    homeBorder: "#1a3a1a",
    backBg: "#0d1520",
    backText: "#64b5f6",
    backBorder: "#1a2a3a",
    toggleBg: "#222",
    toggleText: "#aaa",
    toggleHoverBg: "#333",
    hintText: "#444",
  },
  light: {
    bg: "#f5f3ef",
    text: "#1a1a1a",
    headerBg: "linear-gradient(135deg,#fdf0f0 0%,#f5f3ef 65%)",
    headerBorder: "#e0ddd8",
    headerGlow: "rgba(230,57,70,0.08)",
    subtitleText: "#666",
    statLabel: "#888",
    dayBg: "#fff",
    dayBorder: "#e0ddd8",
    dayInactiveText: "#1a1a1a",
    dayFocusInactive: "#888",
    daySelectorBorder: "#e8e5e0",
    tabBorder: "#d0cdc8",
    tabText: "#888",
    tabHoverBorder: "#aaa",
    tabHoverText: "#1a1a1a",
    cardBg: "#fff",
    cardBorder: "#e8e5e0",
    cardHoverBg: "#faf9f7",
    expandBg: "#f9f8f6",
    expandBorder: "#e8e5e0",
    chevronColor: "#aaa",
    tipText: "#888",
    exampleText: "#555",
    exampleLabel: "#1a1a1a",
    greenText: "#2e7d32",
    greenBg: "#edf7ee",
    greenBorder: "#c8e6c9",
    warningBg: "#fef9f0",
    warningBorder: "#e0ddd8",
    warningText: "#888",
    warningStrong: "#555",
    mealBg: "#fff",
    mealBorder: "#e8e5e0",
    mealText: "#555",
    ruleBg: "#fff",
    ruleBorder: "#e8e5e0",
    ruleDetail: "#777",
    resultBg: "linear-gradient(135deg,#edf7ee,#f5f3ef)",
    resultBorder: "#c8e6c9",
    resultText: "#666",
    resultStrong: "#333",
    homeBg: "#edf7ee",
    homeText: "#2e7d32",
    homeBorder: "#c8e6c9",
    backBg: "#e8f0fe",
    backText: "#1565c0",
    backBorder: "#bbdefb",
    toggleBg: "#e8e5e0",
    toggleText: "#555",
    toggleHoverBg: "#d8d5d0",
    hintText: "#aaa",
  },
};

export default function FitnessPlan() {
  const [activeDay, setActiveDay] = useState("Monday");
  const [tab, setTab] = useState("workout");
  const [expandedEx, setExpandedEx] = useState(null);
  const [mode, setMode] = useState("dark");

  const t = themes[mode];

  return (
    <div style={{ fontFamily: "'DM Sans','Helvetica Neue',sans-serif", background: t.bg, minHeight: "100vh", color: t.text, paddingBottom: 60, transition: "background 0.3s, color 0.3s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Barlow+Condensed:wght@700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .day-btn { background: none; border: none; cursor: pointer; transition: all 0.18s; }
        .day-btn:hover { transform: translateY(-2px); }
        .tab-btn { background: none; border: 1px solid ${t.tabBorder}; cursor: pointer; padding: 9px 20px; border-radius: 100px; font-family: inherit; font-size: 13px; font-weight: 500; letter-spacing: 0.04em; transition: all 0.18s; color: ${t.tabText}; }
        .tab-btn.active { background: #e63946; border-color: #e63946; color: #fff; }
        .tab-btn:hover:not(.active) { border-color: ${t.tabHoverBorder}; color: ${t.tabHoverText}; }
        .ex-card { background: ${t.cardBg}; border-radius: 12px; border: 1px solid ${t.cardBorder}; margin-bottom: 9px; overflow: hidden; }
        .ex-header { padding: 15px 18px; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; transition: background 0.15s; }
        .ex-header:hover { background: ${t.cardHoverBg}; }
        .ex-expand { background: ${t.expandBg}; border-top: 1px solid ${t.expandBorder}; padding: 14px 18px; }
        .chevron { transition: transform 0.2s; font-size: 11px; color: ${t.chevronColor}; margin-top: 4px; flex-shrink: 0; }
        .chevron.open { transform: rotate(180deg); color: #e63946; }
        .theme-toggle { background: ${t.toggleBg}; border: none; cursor: pointer; padding: 6px 14px; border-radius: 100px; font-family: inherit; font-size: 12px; font-weight: 500; color: ${t.toggleText}; transition: all 0.18s; display: flex; align-items: center; gap: 6px; }
        .theme-toggle:hover { background: ${t.toggleHoverBg}; }
      `}</style>

      {/* Header */}
      <div style={{ background: t.headerBg, borderBottom: `1px solid ${t.headerBorder}`, padding: "36px 24px 28px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -50, right: -50, width: 220, height: 220, borderRadius: "50%", background: `radial-gradient(circle,${t.headerGlow} 0%,transparent 70%)` }} />
        {/* Theme toggle */}
        <div style={{ position: "absolute", top: 16, right: 16, zIndex: 1 }}>
          <button className="theme-toggle" onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
            {mode === "dark" ? "☀️" : "🌙"} {mode === "dark" ? "Light" : "Dark"}
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
          <div style={{ background: "#e63946", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", padding: "3px 12px", borderRadius: 100, textTransform: "uppercase" }}>8-Week Program</div>
          <div style={{ background: t.homeBg, color: t.homeText, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", padding: "3px 12px", borderRadius: 100, textTransform: "uppercase", border: `1px solid ${t.homeBorder}` }}>🏠 Home-Friendly</div>
          <div style={{ background: t.backBg, color: t.backText, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", padding: "3px 12px", borderRadius: 100, textTransform: "uppercase", border: `1px solid ${t.backBorder}` }}>🦴 Back-Safe</div>
        </div>
        <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "clamp(52px,12vw,76px)", fontWeight: 900, lineHeight: 0.95, textTransform: "uppercase", marginBottom: 10 }}>
          Cut &<br /><span style={{ color: "#e63946" }}>Build</span>
        </h1>
        <p style={{ color: t.subtitleText, fontSize: 14, maxWidth: 400, margin: "0 auto" }}>Lose fat. Build abs. All exercises are back-safe and done from home.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 36, marginTop: 26, flexWrap: "wrap" }}>
          {[["4–5×","workouts/week"],["~500","cal deficit/day"],["150g","daily protein"]].map(([v,l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 30, fontWeight: 800, color: "#e63946" }}>{v}</div>
              <div style={{ fontSize: 10, color: t.statLabel, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Day Selector */}
      <div style={{ display: "flex", overflowX: "auto", gap: 8, padding: "18px 20px", borderBottom: `1px solid ${t.daySelectorBorder}`, scrollbarWidth: "none" }}>
        {days.map(d => (
          <button key={d.name} className="day-btn" onClick={() => { setActiveDay(d.name); setExpandedEx(null); }} style={{ flexShrink: 0, padding: "11px 14px", borderRadius: 11, background: activeDay === d.name ? "#e63946" : t.dayBg, border: `1px solid ${activeDay === d.name ? "#e63946" : t.dayBorder}`, textAlign: "center", minWidth: 68 }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 17, fontWeight: 800, color: activeDay === d.name ? "#fff" : t.dayInactiveText, letterSpacing: "0.05em" }}>{d.label}</div>
            <div style={{ fontSize: 9, color: activeDay === d.name ? "rgba(255,255,255,0.75)" : t.dayFocusInactive, marginTop: 3, lineHeight: 1.3 }}>{d.focus}</div>
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "22px 20px", maxWidth: 660, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
          {[["workout","🏋️ Workout"],["nutrition","🥗 Nutrition"],["rules","📋 Ground Rules"]].map(([tb,l]) => (
            <button key={tb} className={`tab-btn ${tab===tb?"active":""}`} onClick={() => setTab(tb)}>{l}</button>
          ))}
        </div>

        {tab === "workout" && (
          <div>
            <div style={{ marginBottom: 18 }}>
              <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 34, fontWeight: 800, textTransform: "uppercase" }}>{activeDay}</h2>
              <div style={{ color: "#e63946", fontSize: 13, fontWeight: 500, marginTop: 3 }}>{days.find(d => d.name === activeDay)?.focus}</div>
            </div>
            <div style={{ fontSize: 11, color: t.hintText, marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "#e63946" }}>▼</span> Tap any exercise to see how to do it
            </div>
            {workouts[activeDay].map((ex, i) => {
              const isOpen = expandedEx === i;
              return (
                <div key={i} className="ex-card">
                  <div className="ex-header" onClick={() => setExpandedEx(isOpen ? null : i)}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{ex.name}</div>
                      <div style={{ color: t.tipText, fontSize: 11 }}>{ex.tip}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, color: "#e63946", background: "rgba(230,57,70,0.1)", padding: "4px 10px", borderRadius: 6, whiteSpace: "nowrap" }}>{ex.sets}</div>
                      <span className={`chevron ${isOpen ? "open" : ""}`}>▼</span>
                    </div>
                  </div>
                  {isOpen && (
                    <div className="ex-expand">
                      <div style={{ fontSize: 13, color: t.exampleText, lineHeight: 1.75, marginBottom: 10 }}>
                        <strong style={{ color: t.exampleLabel, display: "block", marginBottom: 6, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>How to do it</strong>
                        {ex.example}
                      </div>
                      <div style={{ fontSize: 11, color: t.greenText, background: t.greenBg, padding: "8px 12px", borderRadius: 8, border: `1px solid ${t.greenBorder}`, lineHeight: 1.5 }}>
                        {ex.backNote}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ marginTop: 18, padding: 14, background: t.warningBg, borderRadius: 10, border: `1px dashed ${t.warningBorder}`, fontSize: 12, color: t.warningText, lineHeight: 1.6 }}>
              ⚠️ <strong style={{ color: t.warningStrong }}>Stop immediately</strong> if you feel sharp or shooting pain. A mild muscle burn is fine — back pain is not. When in doubt, skip the exercise.
            </div>
          </div>
        )}

        {tab === "nutrition" && (
          <div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 34, fontWeight: 800, textTransform: "uppercase", marginBottom: 4 }}>Daily Meal Plan</h2>
            <p style={{ color: t.subtitleText, fontSize: 13, marginBottom: 22 }}>~1,800–2,000 cal/day · 150g protein · high fiber · low sugar</p>
            {meals.map((meal, i) => (
              <div key={i} style={{ background: t.mealBg, borderLeft: "3px solid #e63946", borderRadius: "0 12px 12px 0", padding: "15px 18px", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 20 }}>{meal.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{meal.label}</div>
                    <div style={{ color: t.subtitleText, fontSize: 11 }}>{meal.time}</div>
                  </div>
                </div>
                {meal.options.map((opt, j) => (
                  <div key={j} style={{ fontSize: 13, color: t.mealText, padding: "5px 0", borderTop: j > 0 ? `1px solid ${t.mealBorder}` : "none", display: "flex", gap: 8 }}>
                    <span style={{ color: "#e63946", flexShrink: 0 }}>›</span>{opt}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {tab === "rules" && (
          <div>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 34, fontWeight: 800, textTransform: "uppercase", marginBottom: 4 }}>Non-Negotiables</h2>
            <p style={{ color: t.subtitleText, fontSize: 13, marginBottom: 20 }}>These habits matter as much as any workout.</p>
            {rules.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "13px 15px", background: t.ruleBg, borderRadius: 10, marginBottom: 8, border: `1px solid ${t.ruleBorder}` }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{r.icon}</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 3 }}>{r.rule}</div>
                  <div style={{ color: t.ruleDetail, fontSize: 12 }}>{r.detail}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 18, background: t.resultBg, border: `1px solid ${t.resultBorder}`, borderRadius: 12, padding: 20 }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800, color: t.greenText, marginBottom: 8 }}>YOUR BACK & YOUR RESULTS</div>
              <p style={{ color: t.resultText, fontSize: 13, lineHeight: 1.7 }}>A bad back doesn't mean you can't get lean and strong — it means you train <strong style={{ color: t.resultStrong }}>smarter</strong>. Every exercise here builds core strength and burns fat <strong style={{ color: t.resultStrong }}>without loading the spine</strong>. Consistency beats intensity every time.</p>
            </div>
          </div>
        )}
      </div>

      {/* Copyright */}
      <div style={{ borderTop: `1px solid ${t.headerBorder}`, padding: "24px 20px", textAlign: "center", color: t.hintText, fontSize: 12 }}>
        © {new Date().getFullYear()} Cut & Build. All rights reserved.
      </div>
    </div>
  );
}
