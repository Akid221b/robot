basic.forever(function () {
    if (20 < maqueen.Ultrasonic(PingUnit.Centimeters)) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
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
})
