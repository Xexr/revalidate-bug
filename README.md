## Getting Started

`npm install` to install all dependencies.
`npm run dev` to start the server.

Open [http://localhost:3000/example](http://localhost:3000/example) with your browser

## The problem

With Next 14.2.3, when I click the revalidate button, the loading icon now appears for the first press.

Hard refresh (F5) to see the behaviour again.

# Expected behavior

Previously, with Next 14.1.4, when I clicked the revalidate button, the data would revalidate 'behind the scenes' and no loading icon would show for the first press or subsequent presses.

# Cause

This now appears to happen where multiple layout.tsx and loading.tsx files are present. Remove one of the loading.tsx files and you will see that behaviour reverts to the expected behaviour.
