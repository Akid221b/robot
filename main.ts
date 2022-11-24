input.onGesture(Gesture.FreeFall, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 43)
})
basic.forever(function () {
    if (input.soundLevel() < 200) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
