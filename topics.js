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
  site keypad or alarm codes, or anything the club would not put on a noticeboard.
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
      "<b>Immediate danger —</b> call 999 first. Don't wait to fill in a form or speak to the club.",
      "<b>Raise a concern —</b> use the <a href=\"https://forms.gle/k6hz9jeQwVFTM2Ue9\">Safeguarding Concern / Incident Report Form</a>, call the welfare contact for your age group, or email welfare@kingswoodunited.co.uk. You'll get an acknowledgement within 5 days.",
      "<b>Someone tells you about a concern —</b> point them to the form. If they can't or won't complete it, fill it in for them the same day.",
      "<b>Significant safeguarding risk</b> (abuse or serious risk of harm) is referred straight to the County FA, children's social care or the Police — this can mean immediate suspension.",
      "<b>Breach of conduct / poor practice —</b> investigated by a neutral committee member. Staged response: warning → warning → warning + welfare referral → one-week suspension → dismissal.",
      "<b>Welfare support</b> (wellbeing, no safeguarding risk) — a Welfare Team member contacts you directly to help.",
      "<b>Mental health —</b> our role is Listen, Support, Signpost. Point of contact: the welfare team. Mind · YoungMinds · Childline 0800 1111 · Samaritans 116 123.",
      "<b>Concussion —</b> \"If in doubt, sit them out.\" Remove immediately, get medically assessed, follow the full Graduated Return to Play protocol. No early return, even with parental consent.",
      "<b>For parents and players —</b> share the <a href=\"https://kingswood-united-fc.github.io/safeguarding-hub/\">Safeguarding Hub</a>: who to tell, how to report, and every club policy."
    ],
    contact:"welfare@kingswoodunited.co.uk"
  },
  {
    id:"escalations", cat:"Safeguarding & Welfare", icon:"🔄",
    title:"Welfare & Safeguarding Escalations Pathway",
    summary:"Who owns a concern for your age group, how it is graded, and what you'll hear back.",
    items:[
      "<b>First question, every time —</b> is anyone in immediate danger? If yes: call 999, and you can call the NSPCC on 0808 800 5000 for guidance. Tell the Lead Welfare Officer once everyone is safe.",
      "<b>Everything else goes on the report form.</b> A call, a text or a word at training still ends up on the form — completed by the person reporting, or by you on their behalf.",
      "<table><thead><tr><th>Age group</th><th>Welfare contact</th></tr></thead><tbody>" +
      "<tr><td>U3–U6 &amp; programmes</td><td>Luke Shearsmith · 07375 486569</td></tr>" +
      "<tr><td>U7–U9</td><td>Alex Seddon (Lead) · 07590 475115</td></tr>" +
      "<tr><td>U10–U12</td><td>Becki Gregory · 07934 348671</td></tr>" +
      "<tr><td>U13–U15</td><td>Emma-Leigh Fairclough · 07888 181864</td></tr>" +
      "<tr><td>16+ &amp; open age</td><td>Charlotte Edmondson · 07840 038469</td></tr></tbody></table>",
      "<b>Green — club level.</b> Poor practice or a lower-level concern, handled inside the club.",
      "<b>Amber — County FA advice.</b> Possible risk of harm, or poor practice that keeps happening. The welfare team consults the East Riding County FA Designated Safeguarding Officer.",
      "<b>Red — referred on.</b> A serious safeguarding breach or a disclosure of abuse goes immediately to the County FA, children's social care or the Police.",
      "<b>What you'll hear back —</b> an acknowledgement within 5 days, then updates on a need-to-know basis. A concern is only closed once the Lead Welfare Officer has checked the record, the actions and that everyone involved has been updated.",
      "<b>Never promise to keep it secret.</b> Explain that it may need to be shared to keep someone safe. Don't discuss concerns in WhatsApp groups.",
      "<b>Concern about the welfare team or a committee member —</b> Paul Richardson (CIO Safeguarding Lead and Club Chair), then Tom Lee (Vice-Chair). You can also go to the East Riding County FA at any time: safeguarding@eastridingfa.com."
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
      "MCH covers team management, finances, communication, player enrolment, consent, emergency info and automated subs.",
      "\"Officials\" (Manager, Coach, Assistant) get full access — a Committee Member enrols you.",
      "<b>Add a player</b> → Members List → Adding a Member",
      "<b>Book a pitch</b> → no longer in MCH. See the “Booking a Pitch” card.",
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
    title:"Registering Players & People Leaving",
    summary:"New players, players leaving, approaches from other clubs, and coaches leaving.",
    items:[
      "<b>New player —</b> needs a FAN plus a parent FAN, added to the Whole Game System and Papionne. Give your League Secretary: name, DOB, parent details, a passport-style photo and proof of age.",
      "<b>Player or parent wants to leave —</b> ① notify your League Secretary ② notify the Treasurer, who works out any fees due ③ the player is de-registered from My Club Hub and the league portal. Fees are settled and club kit returned before de-registration is confirmed.",
      "<b>Another club wants one of our players —</b> they must lodge a Notice of Approach through the Player Registration System, giving 7 days' written notice before contacting the player or parent. A club may approach the same player only once a season, and only one Kingswood United player at a time.",
      "<b>You want to release a player —</b> never on your own. See the “Releasing a Player” card.",
      "<b>Coach leaving —</b> notify the league secretaries immediately (this is a safeguarding step), and post on the MCH Team &amp; Club Officials board so they're removed from every admin and comms channel.",
      "<b>An individual leaving the club —</b> give 2 weeks' notice to your Team Manager, the Chair and Secretary, settle finances and return club kit. The club then de-registers you, free to join elsewhere."
    ]
  },
  {
    id:"player-release", cat:"Team, Players & Matchday", icon:"📤",
    title:"Releasing a Player",
    summary:"The rules for every release: who must be involved, how the conversation is held, and the four routes.",
    items:[
      "<b>Never act alone.</b> Speak to the Club Secretary and the Club Welfare Officer before any conversation with a player or family. No coach releases a player on their own.",
      "<b>Rule out welfare first.</b> A sudden drop in attendance, commitment or behaviour can mean something difficult is happening in a child's life.",
      "<b>The conversation —</b> face to face, in a quiet, neutral place, with at least two club officials and, for under-18s, a parent or guardian. Never by text, email or WhatsApp alone.",
      "<b>Language —</b> honest, age-appropriate and about development. Avoid “failed”, “cut”, “dropped” or “not good enough”. Wherever possible, help the player find another team or session.",
      "<b>Ability, squad size or format change —</b> a developmental decision only, never a way round the conduct process. The 50% game-time commitment (ages 6–12) must have been honoured first. Needs approval from the Secretary and Welfare Officer.",
      "<b>Commitment —</b> start with an informal, supportive chat with the parent. If nothing changes and there is no welfare issue, it follows the conduct stages.",
      "<b>Behaviour —</b> Stage 1.1 first warning → 1.2 second warning → 1.3 third warning + welfare referral → Stage 2 final warning and one-week suspension → Stage 3 release. A release needs a majority Committee vote. Appeals in writing within 10 working days.",
      "<b>Significant safeguarding risk —</b> skips all of this and goes straight to the safeguarding process.",
      "<b>Fees —</b> worked out pro-rata by day. When the club starts the release, the family is never charged for any time after the release conversation.",
      "<b>Afterwards —</b> the Secretary de-registers the player on WGS, the league portal and My Club Hub within 48 hours, and the Welfare Team logs the release confidentially."
    ],
    tip:"Monthly fee and notice period are set out in the club's Fees Schedule. The Team Manager's Compliance Checklist (KUFC-TMC-01) walks you through each step.",
    contact:"welfare@kingswoodunited.co.uk"
  },
  {
    id:"trialists", cat:"Team, Players & Matchday", icon:"👋",
    title:"Trialists",
    summary:"Inviting a player on trial, what to collect first, and how a trial ends.",
    items:[
      "<b>A trial is short and time-boxed</b> — agree the length with the family at the start and confirm it with the Trialist Invitation Letter.",
      "<b>Before the first session —</b> collect contact, emergency and any relevant medical details. An under-18 comes to their first session with a parent or guardian.",
      "<b>Same duty of care —</b> trialists follow the same Codes of Conduct and get the same safeguarding standards as registered players.",
      "<b>Fees —</b> a reduced per-session trial fee, never the full monthly membership. No deposit or advance payment during a trial.",
      "<b>Offering a place —</b> confirm in person, then in writing with the Trial Outcome Letter. The family completes registration and consent through the Parent Portal before the first competitive fixture. Membership fees start from the registration date, never backdated.",
      "<b>Not offering a place —</b> get sign-off from the Club Secretary first. Tell the family in person or by phone, never by text or WhatsApp alone, and suggest a next step wherever you can.",
      "<b>Don't let a trial drift.</b> If it runs past the agreed window without a decision, tell the Club Secretary."
    ],
    tip:"Trial length and the session fee are set out in the club's Fees Schedule.",
    contact:"secretary@kingswoodunited.co.uk"
  },
  {
    id:"teams-leaving", cat:"Team, Players & Matchday", icon:"🚪",
    title:"When a Whole Team Leaves",
    summary:"Who to tell, what happens to team funds, and what must be returned.",
    items:[
      "<b>Tell the club first —</b> the Team Manager notifies the Club Secretary and Executive Committee in writing as soon as the decision is made, and before players and parents where possible.",
      "<b>What happens next —</b> the Secretary notifies the league. The Treasurer schedules a financial reconciliation and an asset audit before the leaving date.",
      "<b>Team funds stay with the club.</b> Subs, sponsorship, donations and Gift Aid are charitable funds of Kingswood Sports CIO. The balance can't be transferred to another club, taken as cash or refunded.",
      "<b>Settle up —</b> outstanding player fees, referee fees, facility hire, league fines, kit orders and sponsor invoices are settled before departure.",
      "<b>Return all match kit —</b> it is club property, even where parents contributed to the cost. Return it clean to the Treasurer or a nominated committee member.",
      "<b>Return start-up equipment —</b> first aid kit, match and training balls, cones and training equipment, and coaches' clothing. Lost or damaged items are replaced by the departing team.",
      "<b>Players' welfare —</b> tell the Club Welfare Officer where under-18s are affected. No child is told about a change to their team without a parent or guardian present, and never by message alone.",
      "<b>If this isn't followed —</b> the Committee can withhold final sign-off with the league and pursue the value of unreturned kit or unsettled money."
    ],
    tip:"Draft policy (KUFC-TDR-01), awaiting committee approval.",
    contact:"secretary@kingswoodunited.co.uk"
  },
  {
    id:"equipment", cat:"Equipment & Facilities", icon:"🎒",
    title:"Equipment Checklist",
    summary:"What's in a compliant first aid kit, and the rules on playing kit.",
    items:[
      "<b>First aid kit</b> (mandatory at every match and session): protective gloves, resus face shield, plasters, scissors, tweezers, tape, gauze, ice packs, crepe &amp; triangular bandages, trauma dressings, clinical waste bags, foil blanket, pen &amp; paper, spare injury report forms, sterile water pods, eye pads.",
      "<b>Playing kit —</b> club supplier is Macron via Kingswood Sports CIO. No other brand without committee approval. No names on shirts, no duplicate numbers. Order through the online Match Day Kit form — see the “Ordering Kit” card.",
      "<b>Training kit —</b> not mandatory; club-branded wear is available from the online Club Shop.",
      "<b>Match day extras (recommended) —</b> spare balls, whistle, stopwatch, bench, spare goalkeeper gloves and shin pads."
    ],
    contact:"orders@kingswoodsports.co.uk"
  },
  {
    id:"kit-orders", cat:"Equipment & Facilities", icon:"👕",
    title:"Ordering Kit — Club Shop & Match Day Kit",
    summary:"All Macron kit is ordered online now: no paper forms or chasing payments.",
    items:[
      "<b>Club Shop —</b> training and leisure wear, packs, socks and bags. <a href=\"https://script.google.com/a/macros/kingswoodsports.co.uk/s/AKfycbwRidNv-fpV17E9ObHoLboPDT8KPE-pAaCe7pixVafUVkfSuo_3bxdW__fZXz5S7fCA6g/exec\">Open the Club Shop</a>.",
      "<b>Match Day Kit —</b> home (amber), away (white), third (blue) and goalkeeper (purple, green or sky blue / pink). <a href=\"https://script.google.com/a/macros/kingswoodsports.co.uk/s/AKfycbwRidNv-fpV17E9ObHoLboPDT8KPE-pAaCe7pixVafUVkfSuo_3bxdW__fZXz5S7fCA6g/exec?kit\">Open the Match Day Kit form</a>.",
      "<table><thead><tr><th>Match day kit</th><th>Price</th></tr></thead><tbody>" +
      "<tr><td>Full kit, junior (up to size S)</td><td>£35</td></tr>" +
      "<tr><td>Full kit, senior (size M and up)</td><td>£42</td></tr>" +
      "<tr><td>Shirt only (replacement)</td><td>£25</td></tr>" +
      "<tr><td>Shorts only (replacement)</td><td>£12</td></tr></tbody></table>A full kit is shirt, shorts, socks and squad number. Sizes 3XS–5XL.",
      "<b>Sponsors printed free</b> on match kit: front, back, both sleeves and both shorts legs. A £20 redraw fee applies only if the artwork isn't usable.",
      "<b>Topping up a squad? —</b> choose “Match a previous order” on the form so the new kits match the team name and sponsor.",
      "<b>Sleeves —</b> one sleeve length for all outfield shirts; goalkeepers choose their own.",
      "<b>Club Shop extras —</b> initials or a number printed free on tops; sponsor logos £3–£5. Junior price up to size S, senior from size M.",
      "<b>Ordering and paying —</b> order from your phone in a few minutes, any time. You get an instant confirmation email with a copy of your order, then updates when it's confirmed and when it's ready. Pay by bank transfer or straight from your team account.",
      "<b>Collection —</b> all kit is collected from Kinloss. Samples are available to try on in the community room at Kinloss — just ask.",
      "<b>Refunds —</b> customised kit and items are non-refundable, so check sizes before ordering.",
      "<b>Share with parents —</b> Club Shop <a href=\"pdf/club-shop-brochure-2026-27.pdf\">brochure</a> and <a href=\"pdf/club-shop-poster-2026-27.pdf\">poster</a> · Match Day Kit <a href=\"pdf/match-day-kit-brochure-2026-27.pdf\">brochure</a> and <a href=\"pdf/match-day-kit-poster-2026-27.pdf\">poster</a>. Forward them to your parents' groups."
    ],
    tip:"Enquiries: Paul Richardson, 07775 916403.",
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
    id:"pitch-booking", cat:"Team, Players & Matchday", icon:"📅",
    title:"Booking a Pitch",
    summary:"How to request a pitch at Kinloss Garth, Winifred Holtby or Kingswood Academy, and check bookings.",
    items:[
      "<b>Request a pitch —</b> complete the <a href=\"https://docs.google.com/forms/d/e/1FAIpQLSeHKep6g56JPJrKFT5KhBH0hxX9DrwWSpaQLyXVdrfD4TKucg/viewform\">Pitch Booking Request form</a> with your fixture details. It covers every venue we use.",
      "<b>Use a real email address</b> on the form. You'll be emailed if the slot you've asked for isn't available.",
      "<b>Check all bookings —</b> the <a href=\"https://docs.google.com/spreadsheets/d/14Ee9CpfDdUQYgjZyvv9kNTbeud_KtkTq1QUmhPYKQpo/edit?usp=sharing\">Pitch Bookings sheet</a> is read-only and shows every slot by venue, pitch and date.",
      "<b>Status colours —</b> each fixture on the sheet is colour-coded as pending, confirmed or declined. Don't treat a slot as yours until it shows confirmed.",
      "<b>Priority —</b> cup games take priority over league games, and league and cup games over friendlies. Teams are limited to 2 home friendlies in pre-season.",
      "<b>Friendlies —</b> must still be sanctioned online first (see Match Day Essentials)."
    ]
  },
  {
    id:"emergency", cat:"Equipment & Facilities", icon:"🚨", critical:true,
    title:"Emergency Action Plan",
    summary:"999, the defibrillator, ambulance access, and what to do in the first minutes.",
    items:[
      "<b>Call 999 if in any doubt.</b> Address: Kinloss Garth Sports Field, Kinloss Garth, Hull <b>HU7 4LY</b>. Give the casualty's age and what happened.",
      "<b>Defibrillator —</b> on the wall next to the Tea Bar at Kinloss. Access code <b>C159X</b>. If someone is unresponsive and not breathing normally, start CPR and send someone for it.",
      "<b>Ambulance access —</b> the main gate at the bottom of Kinloss Garth. Send an adult to the gate to meet the crew, and keep the yellow hatched area clear.",
      "<b>Head, neck or back injury —</b> don't move the casualty. There is no stretcher on site; wait for the ambulance.",
      "<b>Never leave a child alone.</b> Contact the parent or carer. If a child goes to hospital before a parent arrives, a DBS-checked coach or team official goes with them, and the rest of the group stays supervised.",
      "<b>Missing child —</b> keep the group supervised, search the site and contact the parent or carer. Not found within 15 minutes, or any concern for their safety: call 999 and tell the Club Welfare Officer.",
      "<b>Thunder or lightning —</b> stop play, clear the pitches and shelter. Don't restart until 30 minutes after the last thunder or lightning.",
      "<b>Fire or evacuation —</b> call 999 and move everyone to the assembly point: the garages on Kinloss Garth, on the left outside the main gates. Take a head count against your register.",
      "<b>Kingswood Academy (HU7 4WD) —</b> call 999 and give the venue and postcode. Site managed by Robertson FM, 24/7 helpdesk 0141 739 0511.",
      "<b>Bude Park, Bude Road, HU7 6EF —</b> call 999 and give the park name and postcode. The park is reached from Bude Road or Ennerdale, so tell the call handler which entrance to come to.",
      "<b>Not life-threatening —</b> Bransholme Urgent Treatment Centre, Goodhart Road, HU7 4DW: 01482 344665 (X-ray has limited hours, so call ahead or ring 111) · Hull Royal Infirmary A&amp;E, Anlaby Road, HU3 2JZ, about 20 minutes by car · NHS 111 · Police non-emergency 101.",
      "<b>Afterwards —</b> tell the Health &amp; Safety Officer, Paul Richardson, the same day on 07775 916403. Complete an accident or incident report within 24 hours, including near misses. Don't share details in WhatsApp groups or on social media."
    ],
    tip:"Every team should have a first-aid-qualified coach or manager, and a first aid kit, at every session and fixture."
  },
  {
    id:"facilities", cat:"Equipment & Facilities", icon:"🏟️",
    title:"Facilities & Site Access",
    summary:"Kinloss utilities, Kingswood Academy rules, match equipment and locking up.",
    items:[
      "<b>Kinloss Garth (HU7 4LY) —</b> main electric board near the pedestrian gate; water valve near the bin storage by the café; no gas on site.",
      "<b>Kinloss access —</b> the keypad code is in the coaches' WhatsApp group description.",
      "<b>Kingswood Academy (HU7 4WD) —</b> managed by Robertson FM for the school, 24/7 helpdesk 0141 739 0511. Follow the school's site rules and share the Visitor Guidance with the away team. All visitors stand outside the cage at the all-weather pitch.",
      "<b>Match equipment —</b> nets, flags and respect barriers are stored in labelled trolleys in the white container by the 9v9 pitch at Kinloss. Take only your pitch's trolley.",
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
