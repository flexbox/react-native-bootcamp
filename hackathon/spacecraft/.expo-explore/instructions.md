Spacecraft is a Star Wars demo app built with React Navigation. It declares no
app links, so reach every screen through the UI.

## Signed out

The app starts on the Login screen: a "SpaceCraft" header, "Email" and
"Password" fields, a "Show Password" checkbox and a "Login" button. Capture it
before signing in.

From Login, tap the text "by login you accept the Terms and Conditions."
(label) to open the "Terms and Conditions" screen. Capture it, then go back
with the back arrow at the top left of its app bar.

Sign-in is a stub: tapping "Login" (label) signs in at once, with the fields
left empty. Do not type anything into Email or Password.

## Signed in

After Login, a bottom tab bar shows "Starships", "Pilots", "Explore" and
"Plus" (labels). Use the first item of each list on both revisions so the
two captures show the same data.

- Starships: a list of starship cards loaded from swapi.py4e.com. While it
  loads the title reads "Loading…"; the screen is ready when the title is
  "Starships" and the first card shows its image. Tap the first card's image
  or title (not its "Buy this ship" button) to open the starship details
  modal: a large ship image with a round white close button (an "×" icon) at
  its top left and a data table below. Capture it, then close it with that
  button.
- Pilots: the title reads "Loading…" over skeleton placeholder rows until
  the data arrives, then "Pilots" with a list of people. Tap the first pilot
  row to open its details, whose title is the pilot's name. Capture it, then
  go back.
- Explore: planets. It shows the text "Loading..." until the data arrives.
  Tap the first planet to open its details, whose title is the planet's name.
  Capture it, then go back.
- Plus: title "Plus" with the items "Do you like Spacecraft?" and "Logout".
  Tap "Do you like Spacecraft?" to reach a screen with the buttons "I love
  Spacecraft" and "I am disappointed" (the tab bar is hidden there). Capture
  it. Tap "I love Spacecraft" to reach the Love screen (a "Give 5 stars to
  Spacecraft" button), capture it, and go back. Tap "I am disappointed" to
  reach the Disappointed screen (a "Not now" button), capture it, then tap
  "Not now" to go back.

## Readiness

All list data comes from the live swapi.py4e.com API. Never capture a
"Loading…" or "Loading..." title, skeleton rows, or an "Error 😕" title as a
screen's state. If a screen shows "Error 😕", tap "Refetch" when it is shown,
or wait a few seconds and open the tab again, at most twice.

## Avoid

- "Buy this ship" and the floating buy button on the details screen only show
  a "Give me the money!" alert. Do not tap them; if that alert appears,
  dismiss it with "OK".
- Do not tap "Give 5 stars to Spacecraft" (it opens the store review
  prompt) or "Give my opinion" (it opens a web browser).
- Tap "Logout" only to get back to the signed-out screens; it returns to
  Login.
