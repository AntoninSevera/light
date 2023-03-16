function ping (
    trig: DigitalPin,
    echo: DigitalPin,
    maxCmDistance = 500): number {
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2)
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10)
        pins.digitalWritePin(trig, 0);
        let duration = pins.pulseIn(echo, PulseValue.High, 1/340 * 10)

        return duration
    }

basic.forever(function() {
    console.logValue("d", ping(DigitalPin.P8, DigitalPin.P15))  
})






// let strip = neopixel.create(DigitalPin.P16, 20, NeoPixelMode.RGB)

// strip.showColor(neopixel.hsl(100, 0, 1));
// strip.show();
// basic.forever(function() {
//     strip.showRainbow(0,359)
//     strip.rotate(1)
//     basic.pause(10)
// })



