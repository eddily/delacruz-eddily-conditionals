let F = input.temperature(TemperatureUnit.Fahrenheit)
while (true) {
    console.log("temperature " + input.temperature(TemperatureUnit.Fahrenheit))
    if (F > 70) {
        light.setPixelColor(5, light.rgb(255, 0, 0))
    } else if (F > 40) {
        light.setPixelColor(5, light.rgb(0, 255, 0))
    } else {
        light.setPixelColor(5, light.rgb(0, 0, 255))
    }
    
}
