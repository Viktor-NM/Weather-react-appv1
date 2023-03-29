export interface LocateKey {
    Key: string,
    LocalizedName: string
}

export interface TemperatureSummary {
    Minimum: number,
    Maximum: number
}

export interface CurrentConditions {
    WeatherText: string,
    Temperature: number,
    RealFeelTemperature: number,
    RealFeelTemperatureShade: number,
    Past12HourRange: TemperatureSummary
}