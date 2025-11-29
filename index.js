function shuffleArray(arr) {
  	arr.sort(function (a, b) {
    	return Math.random() - 0.5;
  	})
    return arr
}

// Add random faces
const NUM_FACES = 6
for (var i=0; i<NUM_FACES; i++) {
    const n = Math.floor(Math.random() * 6873)
    $(".candidates.phase-1").append(`<img src="people/${n}.jpg" draggable="false">`)
    $(".candidates.phase-2").append(`<img src="people/${n}.jpg" draggable="false">`)
    $(".candidates.phase-3").append(`<img src="people/${n}.jpg" draggable="false">`)
}

// Remove the hidden face
const hidden = $(".candidates.phase-2 img")[Math.floor(Math.random() * NUM_FACES)]
$(".missing").append(hidden)

// Shuffle phase 2 faces 
var arr = $(".candidates.phase-2 img")
arr.remove()
for (const e of shuffleArray(arr)) $(".candidates.phase-2").append(e)

$(".start-phase-2").on("click", () => {
    $("body").attr("phase", "2")
})
$(".start-phase-3").on("click", () => {
    $("body").attr("phase", "3")
    $("textarea.phase-3").val(
        $("textarea.phase-2").val()
    )
})

