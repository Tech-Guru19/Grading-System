
function gradeCal() {
    var audio = new Audio('Audio/Sound.mp3')
    var audio2 = new Audio('Audio/Noluck.mp3')
    var audio3 = new Audio('Audio/Av.mp3')




    if (gradeInput.value === "") {
        alert("Please enter a grade.");
        return;
    } else if (gradeInput.value >= 70 && gradeInput.value <= 100) {
        Result.innerHTML = "A - Excellent 🎉";
        audio.play();
    } else if (gradeInput.value >= 60 && gradeInput.value < 70) {
        Result.innerHTML = "B - Good 😊";
        audio.play();
    } else if (gradeInput.value >= 50 && gradeInput.value < 60) {
        Result.innerHTML = "C - Average 😐";
        audio3.play();
    } else if (gradeInput.value >= 40 && gradeInput.value < 50) {
        Result.innerHTML = "D - Poor 😞";
        audio3.play();
    } else if (gradeInput.value >= 0 && gradeInput.value < 40) {
        Result.innerHTML = "F - Fail 😡";
        audio2.play();
    }
    else {
        alert("Please enter a valid grade between 0 and 100.");
    }
}

