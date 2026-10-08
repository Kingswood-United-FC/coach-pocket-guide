# Coach Pocket Guide

Quick-reference guide for Kingswood United FC coaches and managers: the club Handbook boiled down to what a coach needs mid-week or on the touchline.

**Live site:** https://kingswood-united-fc.github.io/coach-pocket-guide/

## This repository is public

Anyone on the internet can read the site, these files, and every past version of them. Before adding anything, ask: would the club pin this to a public noticeboard?

Never add:

- personal data about players, parents or volunteers
- safeguarding or welfare case details
- door, keypad or alarm codes
- drafts the committee has not approved

Removing something later does not remove it from the history.

## What's in here

| File | What it is | Who edits it |
| --- | --- | --- |
| `topics.js` | All the wording: every card, bullet, tip and contact | Anyone updating content |
| `index.html` | The page itself: layout, colours, search and filters | Only when the design changes |
| `README.md` | This guide | When the process changes |
| `.nojekyll` | Tells GitHub to publish the files as they are | Leave alone |

## Updating the guide

1. Open `topics.js` on GitHub and click the pencil icon.
2. Find the topic and change the text. The notes at the top of the file explain the format.
3. Click **Commit changes** and write one line saying what changed and why, for example "Update referee fees for 2027/28 (committee, 12 June)".
4. The live site updates within a minute or two.

To add a topic, copy an existing block from `{` to `},`, paste it where you want it to appear, and give it a new `id`.

After any content change, update the "last updated" date in the footer of `index.html`.

## Keeping it in step with other documents

- The Handbook is the source of truth. If the Handbook changes, change the guide to match.
- A printable PDF version of this guide exists separately. When a topic changes here, the PDF needs regenerating so the two say the same thing.
- Safeguarding detail belongs in the club's safeguarding hub (separate repository, `safeguarding-hub`); this guide carries only the headline steps.

## History

Every change is recorded under **Commits**, with who made it, when, and the note they wrote. Any earlier version can be viewed or restored from there.

## Ownership

Maintained by the Vice-Chair on behalf of the Kingswood United FC committee. Questions: secretary@kingswoodunited.co.uk
