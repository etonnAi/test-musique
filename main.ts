input.onButtonPressed(Button.A, function () {
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Quarter))
})
basic.forever(function () {
	
})
