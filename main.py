F = input.temperature(TemperatureUnit.FAHRENHEIT)
while True:
    print("temperature " + input.temperature(TemperatureUnit.FAHRENHEIT))
    if F > 70:
        light.set_pixel_color(5, light.rgb(255, 0, 0))
    elif F > 40:
        light.set_pixel_color(5, light.rgb(0, 255, 0))
    else :
        light.set_pixel_color(5, light.rgb(0, 0, 255))
        

