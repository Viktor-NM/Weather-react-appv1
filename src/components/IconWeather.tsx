import { IconCloud, IconCloudFog, IconCloudRain, IconCloudSnow, IconCloudStorm, IconMoon, IconSun, IconWind } from "@tabler/icons-react";
import { memo } from "react";

interface WeatherIcons {
    [key: string]: React.ComponentType<{ size: number }>;
}




export const getIconWeather = (weather: string) => {
    const weatherIcons: WeatherIcons = {
        "Sunny": IconSun,
        "Mostly sunny": IconSun,
        "Partly sunny": IconSun,
        "Hot": IconSun,
        "Clear": IconMoon,
        "Mostly clear": IconMoon,
        "Partly cloudy": IconMoon,
        "Intermittent clouds": IconCloud,
        "Hazy moonlight": IconCloud,
        "Hazy sunshine": IconCloud,
        "Mostly cloudy": IconCloud,
        "Partly sunny w/ flurries": IconCloud,
        "Flurries": IconCloud,
        "Cloudy": IconCloud,
        "Dreary (overcast)": IconCloud,
        "Mostly cloudy w/ flurries": IconCloud,
        "Fog": IconCloudFog,
        "Showers": IconCloudRain,
        "Mostly cloudy w/ showers": IconCloudRain,
        "Partly sunny w/ showers rain": IconCloudRain,
        "Partly cloudy w/ showers": IconCloudRain,
        "Partly cloudy w/ t-storms": IconCloudRain,
        "T-Storms": IconCloudStorm,
        "Mostly cloudy w/ t-ttorms": IconCloudStorm,
        "Partly sunny w/ t-storms": IconCloudStorm,
        "Sleet": IconCloudSnow,
        "Freezing rain": IconCloudSnow,
        "Rain and snow": IconCloudSnow,
        "Cold": IconCloudSnow,
        "Mostly cloudy w/ snow": IconCloudSnow,
        "Windy": IconWind,
    }
    return weatherIcons.hasOwnProperty(weather) ? weatherIcons[weather] : IconSun;
}

export const IconWeather = memo(({ weather }: { weather: string }) => {
    const Icon = getIconWeather(weather)
    return <Icon size={100} />
})
