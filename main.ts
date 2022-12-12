radio.onReceivedNumber(function (receivedNumber) {
    if (2 == receivedNumber) {
        message = 2
        basic.showLeds(`
            . . # # .
            . # . . #
            . . . # .
            . . # . .
            . # # # #
            `)
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Forever)
        while (2 == receivedNumber) {
            break;
        }
    }
    if (1 == receivedNumber) {
        message = 1
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Forever)
        while (1 == receivedNumber) {
            break;
        }
    }
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.No)
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showIcon(IconNames.Angry)
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
})
let message = 0
message = 0
radio.setGroup(1)
basic.forever(function () {
    if (2 == message) {
        if (20 < maqueen.Ultrasonic(PingUnit.Centimeters)) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        }
        if (20 > maqueen.Ultrasonic(PingUnit.Centimeters) && 5 < maqueen.Ultrasonic(PingUnit.Centimeters)) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
        }
        if (5 > maqueen.Ultrasonic(PingUnit.Centimeters)) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            basic.pause(1000)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 10)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.pause(1000)
            if (5 > maqueen.Ultrasonic(PingUnit.Centimeters)) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 10)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 10)
            }
        }
    }
    if (1 == message) {
        if (0 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 0 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        }
        if (0 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        }
        if (1 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 0 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        }
        if (1 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            if (true == Math.randomBoolean()) {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 40)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
            } else {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 40)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
            }
        }
    }
})
