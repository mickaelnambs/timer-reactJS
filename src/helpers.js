import uuid from "uuid";

window.helpers = (function() {
    function newTimer(attrs = {}) {
        const timer = {
            title: attrs.title || "Timer",
            project: attrs.project || "Project",
            // id: uuid.v4(),
            elapsed: 0
        };

        return timer;
    }

    function findById(array, id, cb) {
        array.forEach(element => {
            if (element.id === id) {
                cb(element);
                return;
            }
        });
    }

    function renderElapsedString(elapsed, runningSince) {
        let totalElapsed = elapsed;
        if (runningSince) {
            totalElapsed += Date.now() - runningSince;
        }

        return millisecondsToHuman(totalElapsed);
    }

    function millisecondsToHuman(ms) {
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / 1000 / 60) % 60);
        const hours = Math.floor(ms / 1000 / 60 / 60);

        const humanized = [
            pad(hours.toString(), 2),
            pad(minutes.toString(), 2),
            pad(seconds.toString(), 2)
        ].join(":");

        return humanized;
    }

    function pad(numberString, size) {
        let padded = numberString;
        while (padded.length < size) padded = `0${padded}`;
        return padded;
    }

    return {
        millisecondsToHuman,
        newTimer,
        findById,
        renderElapsedString
    };
})();