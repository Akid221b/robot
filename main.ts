radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        message = 1
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        while (1 == message) {
            break;
        }
    }
    if (2 == receivedNumber) {
        message = 2
        basic.showLeds(`
            . . # # .
            . # . . #
            . . . # .
            . . # . .
            . # # # #
            `)
        while (2 == message) {
            break;
        }
    }
    if (3 == receivedNumber) {
        message = 3
        basic.showLeds(`
            . . # # .
            . # . . #
            . . . # #
            . # . . #
            . . # # .
            `)
        while (3 == message) {
            break;
        }
    }
    if (4 == receivedNumber) {
        message2 = 4
        basic.pause(2000)
        message2 = 0
    }
    if (5 == receivedNumber) {
        message2 = 5
        basic.pause(2000)
        message2 = 0
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
let message2 = 0
let message = 0
message = 0
radio.setGroup(1)
basic.forever(function () {
    if (3 == message) {
        if (20 < maqueen.Ultrasonic(PingUnit.Centimeters)) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        }
        if (20 > maqueen.Ultrasonic(PingUnit.Centimeters) && 5 < maqueen.Ultrasonic(PingUnit.Centimeters)) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
        }
        if (10 > maqueen.Ultrasonic(PingUnit.Centimeters)) {
            maqueen.motorStop(maqueen.Motors.All)
            radio.sendNumber(0)
            if (5 == message2) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 40)
                basic.pause(450)
            }
            if (4 == message2) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 40)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
                basic.pause(450)
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
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 40)
        }
    }
    if (2 == message) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 40)
        basic.pause(450)
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
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 40)
        }
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.playTone(466, music.beat(BeatFraction.Whole))
})
