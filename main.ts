basic.forever(function () {
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
})
