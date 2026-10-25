// Edit this file to customize the workout. Leave index.html unchanged.
// No personal details or health context belong in this public file.
window.WORKOUT_CONFIG = {
  title: "My workout plan.",
  eyebrow: "WEEKLY ROUTINE",
  subtitle: "3 workouts · Active recovery · A simple routine",
  sessions: [
    {id:"a",title:"Full Body · Shoulder Focus",type:"strength",items:[
      {id:"calf",exercise:"Calf Raise",sets:3,reps:"15–25"},
      {id:"chest",exercise:"Machine Chest Press",sets:3,reps:"10–15"},
      {id:"row",exercise:"Chest-Supported Row",sets:3,reps:"10–15"},
      {id:"extension",exercise:"Leg Extension",sets:3,reps:"12–15"},
      {id:"curl",exercise:"Seated Leg Curl",sets:3,reps:"12–15"},
      {id:"lateral",exercise:"Machine Lateral Raise",sets:3,reps:"12–20"}
    ]},
    {id:"b",title:"Full Body · Pull Focus",type:"strength",items:[
      {id:"calf",exercise:"Calf Raise",sets:3,reps:"15–25"},
      {id:"pulldown",exercise:"Neutral-Grip Lat Pulldown",sets:3,reps:"10–15"},
      {id:"incline",exercise:"Incline Machine Chest Press",sets:3,reps:"10–15"},
      {id:"extension",exercise:"Leg Extension",sets:3,reps:"12–15"},
      {id:"curl",exercise:"Seated Leg Curl",sets:3,reps:"12–15"},
      {id:"biceps",exercise:"Cable Biceps Curl",sets:3,reps:"12–15"},
      {id:"backext",exercise:"45° Back Extension",sets:2,reps:"12–15"}
    ]},
    {id:"c",title:"Full Body · Push Focus",type:"strength",items:[
      {id:"calf",exercise:"Calf Raise",sets:3,reps:"15–25"},
      {id:"chest",exercise:"Machine Chest Press",sets:3,reps:"10–15"},
      {id:"row",exercise:"Chest-Supported Row",sets:3,reps:"10–15"},
      {id:"extension",exercise:"Leg Extension",sets:3,reps:"12–15"},
      {id:"curl",exercise:"Seated Leg Curl",sets:3,reps:"12–15"},
      {id:"triceps",exercise:"Cable Triceps Pushdown",sets:3,reps:"12–15"}
    ]},
    {id:"rest",title:"Active Recovery",type:"recovery",subtitle:"Non-training days",items:[
      {id:"walk",exercise:"Walking",prescription:"20–30 min"},
      {id:"ankle",exercise:"Ankle Pumps",prescription:"2 × 20"},
      {id:"stretch",exercise:"Gentle Calf Stretch",prescription:"2 × 20 sec"},
      {id:"relax",exercise:"Relax and Recover",prescription:"10–15 min"}
    ]}
  ],
  // Image slugs reference the one source used by this template.
  exercises: {
    "Calf Raise":{image:"Seated_Calf_Raise",muscles:{calves:1}},
    "Machine Chest Press":{image:"Leverage_Chest_Press",muscles:{chest:1,triceps:.35,shoulders:.25}},
    "Chest-Supported Row":{image:"Leverage_Iso_Row",muscles:{back:1,biceps:.35,shoulders:.15}},
    "Leg Extension":{image:"Leg_Extensions",muscles:{quads:1}},
    "Seated Leg Curl":{image:"Seated_Leg_Curl",muscles:{hamstrings:1}},
    "Machine Lateral Raise":{image:"Seated_Side_Lateral_Raise",muscles:{shoulders:1}},
    "Neutral-Grip Lat Pulldown":{image:"V-Bar_Pulldown",muscles:{back:1,biceps:.4}},
    "Incline Machine Chest Press":{image:"Leverage_Incline_Chest_Press",muscles:{chest:1,shoulders:.4,triceps:.3}},
    "Cable Biceps Curl":{image:"High_Cable_Curls",muscles:{biceps:1}},
    "Cable Triceps Pushdown":{image:"Triceps_Pushdown",muscles:{triceps:1}},
    "45° Back Extension":{image:"Hyperextensions_Back_Extensions",muscles:{lowerBack:1,glutes:.7,hamstrings:.3}},
    "Walking":{image:"Walking_Treadmill",muscles:{}},
    "Ankle Pumps":{image:"Ankle_Circles",muscles:{}},
    "Gentle Calf Stretch":{image:"Seated_Calf_Stretch",muscles:{}},
    "Relax and Recover":{image:null,muscles:{}}
  }
};
