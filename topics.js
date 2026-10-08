/*
  Coach Pocket Guide — CONTENT
  ============================
  Every card on the site comes from this file. To change what the guide says,
  edit the text here and commit — the site updates itself a minute or two later.

  Each topic is one block between { and }:
    id       short unique name, no spaces (used for links)
    cat      the filter group the card appears under
    icon     emoji shown on the card
    title    card heading
    summary  one line shown before the card is opened
    items    the bullet points, each in "double quotes", separated by commas
    tip      (optional) italic tip at the bottom of the card
    contact  (optional) email address shown at the bottom of the card
    critical (optional) true = the card the red emergency banner opens

  Inside the text: <b>bold</b> makes bold, &amp; is how you write an ampersand,
  and \" is how you write a quotation mark inside a bullet.

  THIS FILE IS PUBLIC. Do not add personal data, safeguarding case details,
  door or keypad codes, or anything the club would not put on a noticeboard.
*/
const DATA = [
  {
    id:"getting-started", cat:"Getting Started", icon:"🚩",
    title:"New Coach Checklist",
    summary:"FAN, DBS, the three FA courses, and getting onto My Club Hub.",
    items:[
      "<b>Step 1 —</b> Register for your FA Number (FAN) at learn.englandfootball.com",
      "<b>Step 2 —</b> Complete an Enhanced DBS check. You'll need two forms of ID (passport + driving licence, or one of those + a recent utility bill). Allow at least 5 weeks.",
      "<b>Step 3 —</b> Complete three free, self-paced FA courses: Introduction to Coaching Football · Safeguarding Children · Introduction to First Aid in Football",
      "<b>Step 4 —</b> Your League Secretary enrols you onto the Whole Game System and My Club Hub (MCH)",
      "<b>Step 5 —</b> Read the Club Vision, Mission and Coaching Philosophy — Handbook Section 1"
    ],
    tip:"The club funds your first coaching qualification only. After that it's team or self-funded — or apply to the Coach Development Bursary after two full seasons.",
    contact:"secretary@kingswoodunited.co.uk"
  },
  {
    id:"safeguarding", cat:"Safeguarding & Welfare", icon:"🛡️",
    title:"Safeguarding & Welfare",
    summary:"How to raise a concern, what happens next, and mental health signposting.",
    items:[
      "<b>Raise a concern or complaint —</b> speak to any committee member, or email welfare@kingswoodunited.co.uk. You'll get an acknowledgement within 5 days.",
      "<b>Significant safeguarding risk</b> (abuse or serious risk of harm) goes straight to the Kingswood Sports CIO Safeguarding Team or the Police — this can mean immediate suspension.",
      "<b>Breach of conduct / poor practice —</b> investigated by a neutral committee member. Staged response: warning → warning → warning + mentor referral → one-week suspension → dismissal.",
      "<b>Welfare support</b> (wellbeing, no safeguarding risk) — a Welfare Team member contacts you directly to help.",
      "<b>Mental health —</b> our role is Listen, Support, Signpost. Point of contact: the Club Welfare Officer. Mind · YoungMinds · Childline 0800 1111 · Samaritans 116 123.",
      "<b>Concussion —</b> \"If in doubt, sit them out.\" Remove immediately, get medically assessed, follow the full Graduated Return to Play protocol. No early return, even with parental consent."
    ],
    contact:"welfare@kingswoodunited.co.uk"
  },
  {
    id:"comms", cat:"Communication & Systems", icon:"💬",
    title:"Club Communication Channels",
    summary:"MCH groups, WhatsApp, the Coaches' Social, and how to suggest an improvement.",
    items:[
      "<b>My Club Hub (MCH)</b> is the official channel. Groups: Team &amp; Club Officials · Finance · Pitch Cancellations · Team Communications.",
      "<b>WhatsApp</b> (not official, but fast) — The Coaches Group (all welcome) and the Girls Teams Group. Keep it light-hearted and respectful.",
      "<b>Bi-Monthly Coaches' Social —</b> food from 7.30pm, meeting from 8pm. Every team should send someone.",
      "<b>Got a suggestion?</b> Use the online form or the box at Carole's Café, Kinloss — reviewed monthly at committee, with a direct reply to you."
    ]
  },
  {
    id:"finance", cat:"Finance & Admin", icon:"💷",
    title:"Team Finances, Made Simple",
    summary:"Subs vs. membership fee, invoices, reimbursements and Gift Aid.",
    items:[
      "All club funds legally belong to Kingswood Sports CIO and are held centrally — your team gets its own ring-fenced budget (a P&amp;L), visible in MCH.",
      "Your monthly fee = <b>Club Membership Fee</b> (covers affiliation, insurance, facilities) + <b>Team Subscription</b> (your team's own budget).",
      "<b>Worked example (U9s, 10 players):</b> £25/month subs each = £250 → minus £150 membership (10 × £15) = £120 into your team's P&amp;L, plus Gift Aid can add up to ~20% more.",
      "<b>To pay an invoice —</b> forward it to the Treasurer; paid centrally and deducted from your P&amp;L.",
      "<b>To get reimbursed —</b> complete the Reimbursement Request Form with a photo of your receipt.",
      "Keep a minimum <b>£100 balance</b> for future costs like winter training and kit."
    ],
    tip:"Treasurer aims to reply within 3 days — use the MCH Finance group for the fastest response.",
    contact:"treasurer@kingswoodunited.co.uk"
  },
  {
    id:"mch", cat:"Communication & Systems", icon:"🖥️",
    title:"My Club Hub — Quick Nav",
    summary:"What it's for, and where to find the task you need.",
    items:[
      "MCH covers team management, finances, communication, pitch &amp; fixture booking, player enrolment, consent, emergency info and automated subs.",
      "\"Officials\" (Manager, Coach, Assistant) get full access — a Committee Member enrols you.",
      "<b>Add a player</b> → Members List → Adding a Member",
      "<b>Book a pitch</b> → Booking a Pitch",
      "<b>Check your team balance</b> → Profit &amp; Loss",
      "<b>See who has access to your team</b> → Officials List"
    ],
    tip:"MCH works better in a browser than the app for some features."
  },
  {
    id:"team-building", cat:"Team, Players & Matchday", icon:"👥",
    title:"Building Your Team & Player Development",
    summary:"Squad sizes, the 50% game-time rule, and how player movement works.",
    items:[
      "<b>Game time rule —</b> in the Fundamentals and Foundation phases (ages 6–12), every player gets at least 50% of minimum game time across the season.",
      "<b>Player Development &amp; Movement Policy —</b> players can move between teams in the same age group. It's always led by the Club Development Officer and Chair through a three-way conversation with coaches, parent/guardian and player — never a single coach's call.",
      "Reasons a move happens: a greater challenge, rebuilding confidence, or a better match for team dynamics — always framed around the player's enjoyment and development.",
      "Recommended: run with 2–3 coaches per team, for cover and so you can split into smaller groups — and don't be afraid to ask parents to help with admin, fundraising or stats."
    ]
  },
  {
    id:"squad-sizes", cat:"Team, Players & Matchday", icon:"📋",
    title:"Squad Size Guide",
    summary:"Minimum and maximum squad numbers by age group.",
    items:[
      "<table><thead><tr><th>Age Group</th><th>Min</th><th>Max</th></tr></thead><tbody>" +
      "<tr><td>U7, U8 &amp; U9</td><td>8</td><td>10</td></tr>" +
      "<tr><td>U10 &amp; U11</td><td>10</td><td>12</td></tr>" +
      "<tr><td>U12 &amp; U13</td><td>12</td><td>16</td></tr>" +
      "<tr><td>U14 – U16</td><td>16</td><td>18</td></tr></tbody></table>"
    ]
  },
  {
    id:"registrations", cat:"Team, Players & Matchday", icon:"📝",
    title:"Registering, Leaving & Releasing Players",
    summary:"New players, players leaving, transfers, and coaches leaving.",
    items:[
      "<b>New player —</b> needs a FAN plus a parent FAN, added to the Whole Game System and Papionne. Give your League Secretary: name, DOB, parent details, a passport-style photo and proof of age.",
      "<b>Player leaving your team —</b> ① notify your League Secretary ② notify the Treasurer ③ deregister from MCH. If subs are unpaid, the club can block re-registration elsewhere — contact Welfare if you need support with this.",
      "<b>Releasing / transferring a player —</b> the approaching club must give 7 days' notice through the Player Registration System. Never approach a player directly without consent. Max one approach per player per season, with 28 days between approaches.",
      "<b>Coach leaving —</b> notify the league secretaries immediately (this is a safeguarding step), and post on the MCH Team &amp; Club Officials board so they're removed from every admin and comms channel.",
      "<b>An individual leaving the club —</b> give 2 weeks' notice to your Team Manager, the Chair and Secretary, settle finances and return club kit. The club then de-registers you, free to join elsewhere."
    ]
  },
  {
    id:"equipment", cat:"Equipment & Facilities", icon:"🎒",
    title:"Equipment Checklist",
    summary:"What's in a compliant first aid kit, and the rules on playing kit.",
    items:[
      "<b>First aid kit</b> (mandatory at every match and session): protective gloves, resus face shield, plasters, scissors, tweezers, tape, gauze, ice packs, crepe &amp; triangular bandages, trauma dressings, clinical waste bags, foil blanket, pen &amp; paper, spare injury report forms, sterile water pods, eye pads.",
      "<b>Playing kit —</b> club supplier is Macron via Kingswood Sports CIO. No other brand without committee approval. No names on shirts, no duplicate numbers. Can take up to 12 weeks to arrive, so order early.",
      "<b>Training kit —</b> not mandatory; club-branded wear is available from the club shop.",
      "<b>Match day extras (recommended) —</b> spare balls, whistle, stopwatch, bench, spare goalkeeper gloves and shin pads."
    ],
    contact:"orders@kingswoodsports.co.uk"
  },
  {
    id:"matchday", cat:"Team, Players & Matchday", icon:"⚽",
    title:"Match Day Essentials",
    summary:"Colour clashes, referee fees, sin bins, and postponing a game.",
    items:[
      "<b>Colour clash —</b> the HOME team changes. Goalkeepers must be clearly distinguishable; no player may wear black or dark shirts.",
      "<table><thead><tr><th>Age Group</th><th>Referee Fee</th></tr></thead><tbody>" +
      "<tr><td>U9–U12</td><td>£20</td></tr><tr><td>U13–U14</td><td>£22</td></tr>" +
      "<tr><td>U15–U16</td><td>£24</td></tr><tr><td>U18</td><td>£30</td></tr></tbody></table>plus 30p/mile, split evenly between both teams.",
      "<b>Local rule changes —</b> no deliberate heading U12 and below (indirect free kick); pass-in/dribble-in instead of a throw-in U9 and below; a dissent yellow card = 10-minute sin bin, second caution = sent off.",
      "<b>Postponing —</b> only for an unfit pitch or a school activity (3+ players, a letter, 7 days' notice). You can bring a fixture forward, never push it back.",
      "<b>Friendlies —</b> must match your affiliated format and be sanctioned online first. Unsanctioned means uninsured — and a safeguarding risk."
    ]
  },
  {
    id:"emergency", cat:"Equipment & Facilities", icon:"🚨", critical:true,
    title:"Facilities & Emergency Action Plan",
    summary:"Access codes, the defibrillator, and who to call.",
    items:[
      "<b>Emergency: 999</b> · Non-emergency police: 101 · Non-emergency medical: 111",
      "Bransholme Urgent Treatment Centre: 01482 344665 · Hull Royal Infirmary A&amp;E: 01482 875875",
      "<b>Kinloss Park (HU7 4LY)</b> — defibrillator code <b>C159X</b>. Main electric board near the pedestrian gate; water valve near the bin storage by Carole's Café; no gas on site.",
      "<b>Kingswood Academy (HU7 4WD)</b> — managed by Robertson FM, 24/7 helpdesk 0141 739 0511.",
      "<b>Access &amp; equipment —</b> the Kinloss keypad code is in the coaches' WhatsApp group description. Match equipment (nets, flags, barriers) is stored in labelled trolleys in the white container by the 9v9 pitch — take only your pitch's trolley.",
      "<b>Last one to leave —</b> put all equipment away, lock the containers, and make sure barriers sit at least 2m from the touchline."
    ]
  },
  {
    id:"philosophy", cat:"Philosophy & Support", icon:"🧭",
    title:"Our Coaching Philosophy, By Age",
    summary:"Out Work, Out Think, Out Play — and what it means for each age phase.",
    items:[
      "<b>Out Work —</b> hard work, resilience, teamwork. <b>Out Think —</b> decision-making, game intelligence, players who can self-organise. <b>Out Play —</b> a love of the game, built on the right foundations.",
      "<b>Fundamentals (ages 6–9)</b> — safe, enjoyable, mistakes welcomed. 1v1 actions, love of the ball, small-sided games, lots of repetition.",
      "<b>Foundation (ages 9–12)</b> — introduce competition; refine movement and in/out-of-possession skills; basic tactics in 7v7 / 9v9.",
      "<b>Development (ages 12–16)</b> — transition to 11v11; consolidate game-specific skills; introduce positional roles. This is peak-height-velocity age — mind the physical and psychological load.",
      "Every session, every age: <b>Fun · Excellence · Safe · Family · Inclusive.</b>"
    ]
  },
  {
    id:"support", cat:"Philosophy & Support", icon:"🤝",
    title:"Getting Support — Mentors, County FA & the Bursary",
    summary:"How to get a mentor, free CPD, an in-situ visit, or funding to progress.",
    items:[
      "<b>New to coaching, or want a sounding board?</b> Ask your Age Phase Lead or the Coach Development Team for a mentor.",
      "<b>Want feedback on the grass?</b> The County FA can send a Coach Developer to watch a session and give friendly, informal feedback — free of charge. Ask the Coach Development Team to arrange it.",
      "<b>Free CPD —</b> the County FA runs a menu of club-specific and open CPD events, with extra support if you're female, from an ethnically diverse background, or an \"aspirational\" coach looking to progress.",
      "<b>Want to go further</b> (Level 2, UEFA C, Goalkeeping)? After two full seasons of service, apply in writing to the Football Club Chair for the Coach Development Bursary.",
      "In return for bursary funding, you commit to 12 months' further service — mentoring others, soccer schools, club events. Leaving early means repaying on a pro-rata basis."
    ]
  }
];
