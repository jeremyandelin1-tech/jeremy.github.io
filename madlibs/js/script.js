// Ensure this file is loaded with <script src="js/script.js" defer></script>
// or wrap in DOMContentLoaded:
document.addEventListener("DOMContentLoaded", () => {
    // Random word lists
    const nouns = ["homies", "gangstas", "wihps", "pitbull", "old english", "ride"];
    const verbs = ["crip walk", "get crunk", "chow down", "rap", "dipset", "roll out"];
    const adjectives = ["juiced", "hyped", "dangerous", "g'd up", "goofy", "fly"];

    // Helpers
    const randomWord = arr => arr[Math.floor(Math.random() * arr.length)];
    const $ = id => document.getElementById(id);

    // Randomize button (must exist in HTML)
    $("randomBtn").addEventListener("click", () => {
        $("n1").value = randomWord(nouns);
        $("n2").value = randomWord(nouns);
        $("v1").value = randomWord(verbs);
        $("v2").value = randomWord(verbs);
        $("dj1").value = randomWord(adjectives);
        $("dj2").value = randomWord(adjectives);
    });

    // Form submit generates the story using current field values
    $("storyForm").addEventListener("submit", event => {
        event.preventDefault();

        const n1 = $("n1").value;
        const n2 = $("n2").value;
        const v1 = $("v1").value;
        const v2 = $("v2").value;
        const dj1 = $("dj1").value;
        const dj2 = $("dj2").value;

        const story = `
      Back in the good ol' days there weren't no ${dj1} ${n1} who didn't like ${v1}.<br>
      Basically ${n1} would ${v2} on a ${dj2} ${n2}.<br>
      By working together they found out they could ${v1} even deep deep in the hood.<br>
      Anyway the ${n2} and the ${n1} decided they were in charge of their own ${dj2} hood.
    `;

        $("output").innerHTML = story;
    });
});
