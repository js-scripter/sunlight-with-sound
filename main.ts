basic.forever(function () {
    basic.pause(2000)
    if (input.lightLevel() > 20) {
        basic.showString("D")
        radio.sendString("DAY")
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    }
    if (input.lightLevel() < 20) {
        radio.sendString("NIGHT")
        basic.showString("N")
    }
})
