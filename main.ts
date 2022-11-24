let message = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        message = 2
        basic.showLeds(`
            . . # # .
            . # . . #
            . . . # .
            . . # . .
            . # # # #
            `)
        while (input.buttonIsPressed(Button.B)) {
            break;
        }
    }
    if (input.buttonIsPressed(Button.A)) {
        message = 1
        while (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
                `)
            break;
        }
    }
})
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
        if (1 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        }
        if (0 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        }
        if (1 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 0 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        }
        if (0 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 0 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
        }
    }
})
