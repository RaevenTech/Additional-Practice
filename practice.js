// Golf score function

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) {
        return "Hole-in-one!"
    } else if (strokes <= par - 2) {
        return "Eagle"
    } else if (strokes === par - 1) {
        return "Birdie"
    } else if (strokes === par) {
        return "Par"
    } else if (strokes === par + 1) {
        return "Bogey"
    } else if (strokes === par + 2) {
        return "Double Bogey"
    } else if (strokes >= par + 3) {
        return "Go Home!"

    }
}
console.log(golfScore(5, 2));

// Golf score funtion 2
function golfScoreTwo(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes === par - 1) {
        return names[2];
    } else if (strokes === par) {
        return names[3];
    } else if (strokes === par + 1) {
        return names[4];
    } else if (strokes === par + 2) {
        return names[5];
    } else {
        return names[6];
    }

}

console.log(golfScoreTwo(5, 4);