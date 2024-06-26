export interface WeatherDetails {
    id: string
    "v3-wx-forecast-daily-15day-cognitiveHealth": V3WxForecastDaily15dayCognitiveHealth
    "v3-wx-conditions-historical-dailysummary-30day": V3WxConditionsHistoricalDailysummary30day
    "v3-wx-forecast-hourly-10day": V3WxForecastHourly10day
    "v3-wx-lightning-15minute-mobile": any
    "v3-wx-skiconditions": V3WxSkiconditions
    "v3-wx-globalAirQuality": V3WxGlobalAirQuality
    "v3-wx-observations-current": V3WxObservationsCurrent
    "v3-wx-forecast-daily-15day": V3WxForecastDaily15day
    vt1idxBreathingDaypart: Vt1idxBreathingDaypart
    vt1wwir: Vt1wwir
    vt1nowcast: Vt1nowcast
    v2idxRunDaypart5: V2idxRunDaypart5
    vt1pastpollen: any
    vt1contentMode: Vt1contentMode
    "v3-location-point": V3LocationPoint
    vt1pollenobs: Vt1pollenobs
    vt1currentTides: any
    v2idxDrySkinDaypart15: V2idxDrySkinDaypart15
    v2idxMosquitoDaily15: V2idxMosquitoDaily15
    v3alertsHeadlines: V3alertsHeadlines
    vt1idxPollenDaypart: Vt1idxPollenDaypart
    vt1precipitation: Vt1precipitation
    vt1runweatherhourly: Vt1runweatherhourly
  }
  
  export interface V3WxForecastDaily15dayCognitiveHealth {
    migraine: Migraine
    coldAndFlu: ColdAndFlu
    pain: Pain
    allergies: Allergies
  }
  
  export interface Migraine {
    riskLevel: any[]
    expirationTimeUtc: any[]
    validTimeUtc: any[]
  }
  
  export interface ColdAndFlu {
    riskLevel: number[]
    expirationTimeUtc: number[]
    validTimeUtc: number[]
  }
  
  export interface Pain {
    riskLevel: any[]
    expirationTimeUtc: any[]
    validTimeUtc: any[]
  }
  
  export interface Allergies {
    riskLevel: number[]
    expirationTimeUtc: number[]
    validTimeUtc: number[]
  }
  
  export interface V3WxConditionsHistoricalDailysummary30day {
    dayOfWeek: string[]
    iconCodeDay: number[]
    iconCodeExtendDay: number[]
    iconCodeExtendNight: number[]
    iconCodeNight: number[]
    precip24Hour: number[]
    rain24Hour: number[]
    snow24Hour: number[]
    temperatureMax: number[]
    temperatureMin: number[]
    validTimeLocal: string[]
    validTimeUtc: number[]
    wxPhraseLongDay: string[]
    wxPhraseLongNight: string[]
  }
  
  export interface V3WxForecastHourly10day {
    cloudCover: number[]
    dayOfWeek: string[]
    dayOrNight: string[]
    expirationTimeUtc: number[]
    iconCode: number[]
    iconCodeExtend: number[]
    precipChance: number[]
    precipType: string[]
    pressureMeanSeaLevel: number[]
    qpf: number[]
    qpfSnow: number[]
    relativeHumidity: number[]
    temperature: number[]
    temperatureDewPoint: number[]
    temperatureFeelsLike: number[]
    temperatureHeatIndex: number[]
    temperatureWindChill: number[]
    uvDescription: string[]
    uvIndex: number[]
    validTimeLocal: string[]
    validTimeUtc: number[]
    visibility: number[]
    windDirection: number[]
    windDirectionCardinal: string[]
    windGust: number | undefined[]
    windSpeed: number[]
    wxPhraseLong: string[]
    wxPhraseShort: string[]
    wxSeverity: number[]
  }
  
  export interface V3WxSkiconditions {
    adminDistrict: string
    adminDistrictCode: string
    attribution: string
    conditionsValidTimeLocal: string
    countryCode: string
    countryName: string
    event: any
    expireTimeLocal: string
    expireTimeUtc: number
    hasNightSkiing: any
    hasNordic: string
    hasSkiing: string
    hasTerrainPark: any
    hasTubing: any
    latitude: number
    liftsOpen: number
    longitude: number
    nordicFacilities: any
    nordicOpenDistance: any
    nordicSkateGroomedDistance: any
    nordicTotalDistance: any
    nordicTracksetDistance: any
    nordicTrailsDistance: any
    percentLiftsOpen: number
    percentTerrainOpen: any
    projectedClosureDate: string
    projectedOpenDate: string
    resortAcres: number
    resortAcresOpen: any
    resortEmail: any
    resortLifts: number
    resortName: string
    resortNameShort: string
    resortOpenDistance: any
    resortOperatingStatus: string
    resortPhone: any
    resortRuns: number
    resortTrailSlopesOpen: any
    resortWebsite: string
    ski: number
    snowDepthBase: any
    snowDepthTop: any
    snowFall24hours: number
    snowFall48hours: number
    snowFall72hours: number
    snowMaking: any
    snowParkReshapeDate: any
    snowPipesRecultureDate: any
    surfacePrimary: string
    surfaceSecondary: string
    terrainFeaturesCount: any
  }
  
  export interface V3WxGlobalAirQuality {
    globalairquality: Globalairquality
  }
  
  export interface Globalairquality {
    latitude: number
    longitude: number
    source: string
    disclaimer: string
    airQualityIndex: number
    airQualityCategory: string
    airQualityCategoryIndex: number
    airQualityCategoryIndexColor: string
    primaryPollutant: string
    pollutants: Pollutants
    messages: Messages
    expireTimeGmt: number
  }
  
  export interface Pollutants {
    CO: Co
    NO2: No2
    O3: O3
    PM10: Pm10
    "PM2.5": Pm25
    SO2: So2
  }
  
  export interface Co {
    name: string
    phrase: string
    amount: number
    unit: string
    category: string
    categoryIndex: number
    index: number
  }
  
  export interface No2 {
    name: string
    phrase: string
    amount: number
    unit: string
    category: string
    categoryIndex: number
    index: number
  }
  
  export interface O3 {
    name: string
    phrase: string
    amount: number
    unit: string
    category: string
    categoryIndex: number
    index: number
  }
  
  export interface Pm10 {
    name: string
    phrase: string
    amount: number
    unit: string
    category: string
    categoryIndex: number
    index: number
  }
  
  export interface Pm25 {
    name: string
    phrase: string
    amount: number
    unit: string
    category: string
    categoryIndex: number
    index: number
  }
  
  export interface So2 {
    name: string
    phrase: string
    amount: number
    unit: string
    category: string
    categoryIndex: number
    index: number
  }
  
  export interface Messages {
    General: General
    "Sensitive Group": SensitiveGroup
  }
  
  export interface General {
    title: string
    text: string
  }
  
  export interface SensitiveGroup {
    title: string
    text: string
  }
  
  export interface V3WxObservationsCurrent {
    cloudCeiling: any
    cloudCoverPhrase: string
    dayOfWeek: string
    dayOrNight: string
    expirationTimeUtc: number
    iconCode: number
    iconCodeExtend: number
    obsQualifierCode: string
    obsQualifierSeverity: number
    precip1Hour: number
    precip6Hour: number
    precip24Hour: number
    pressureAltimeter: number
    pressureChange: number
    pressureMeanSeaLevel: number
    pressureTendencyCode: number
    pressureTendencyTrend: string
    relativeHumidity: number
    snow1Hour: number
    snow6Hour: number
    snow24Hour: number
    sunriseTimeLocal: string
    sunriseTimeUtc: number
    sunsetTimeLocal: string
    sunsetTimeUtc: number
    temperature: number
    temperatureChange24Hour: number
    temperatureDewPoint: number
    temperatureFeelsLike: number
    temperatureHeatIndex: number
    temperatureMax24Hour: number
    temperatureMaxSince7Am: number
    temperatureMin24Hour: number
    temperatureWindChill: number
    uvDescription: string
    uvIndex: number
    validTimeLocal: string
    validTimeUtc: number
    visibility: number
    windDirection: number
    windDirectionCardinal: string
    windGust: number
    windSpeed: number
    wxPhraseLong: string
    wxPhraseMedium: string
    wxPhraseShort: string
  }
  
  export interface V3WxForecastDaily15day {
    calendarDayTemperatureMax: number[]
    calendarDayTemperatureMin: number[]
    dayOfWeek: string[]
    expirationTimeUtc: number[]
    moonPhase: string[]
    moonPhaseCode: string[]
    moonPhaseDay: number[]
    moonriseTimeLocal: string[]
    moonriseTimeUtc: number | undefined[]
    moonsetTimeLocal: string[]
    moonsetTimeUtc: number[]
    narrative: string[]
    qpf: number[]
    qpfSnow: number[]
    sunriseTimeLocal: string[]
    sunriseTimeUtc: number[]
    sunsetTimeLocal: string[]
    sunsetTimeUtc: number[]
    temperatureMax: number[]
    temperatureMin: number[]
    validTimeLocal: string[]
    validTimeUtc: number[]
    daypart: Daypart[]
  }
  
  export interface Daypart {
    cloudCover: number[]
    dayOrNight: string[]
    daypartName: string[]
    iconCode: number[]
    iconCodeExtend: number[]
    narrative: string[]
    precipChance: number[]
    precipType: string[]
    qpf: number[]
    qpfSnow: number[]
    qualifierCode: string | undefined[]
    qualifierPhrase: string | undefined[]
    relativeHumidity: number[]
    snowRange: string[]
    temperature: number[]
    temperatureHeatIndex: number[]
    temperatureWindChill: number[]
    thunderCategory: string[]
    thunderIndex: number[]
    uvDescription: string[]
    uvIndex: number[]
    windDirection: number[]
    windDirectionCardinal: string[]
    windPhrase: string[]
    windSpeed: number[]
    wxPhraseLong: string[]
    wxPhraseShort: string[]
  }
  
  export interface Vt1idxBreathingDaypart {
    day: Day
    night: Night
  }
  
  export interface Day {
    fcstValid: number[]
    fcstValidLocal: string[]
    dayInd: string[]
    num: number[]
    daypartName: string[]
    breathingIndex: number[]
    breathingCategory: string[]
  }
  
  export interface Night {
    fcstValid: number[]
    fcstValidLocal: string[]
    dayInd: string[]
    num: number[]
    daypartName: string[]
    breathingIndex: number[]
    breathingCategory: string[]
  }
  
  export interface Vt1wwir {
    processTime: string
    overallType: number
    phrase: string
    tersePhrase: string
    phraseTemplate: string
    tersePhraseTemplate: string
    precipDay: any
    precipTime24hr: any
    precipTime12hr: any
    precipTimeIso: any
    timeZoneAbbreviation: string
  }
  
  export interface Vt1nowcast {
    icon: number
    narrative128Char: string
    narrative256Char: string
    narrative32Char: string
    narrative512Char: string
    peakSeverity: number
    peakWind: number
    processTime: string
    precipAmt: number
  }
  
  export interface V2idxRunDaypart5 {
    metadata: Metadata
    runWeatherIndex12hour: RunWeatherIndex12hour
  }
  
  export interface Metadata {
    language: string
    transactionId: string
    version: string
    latitude: number
    longitude: number
    expireTimeGmt: number
    statusCode: number
  }
  
  export interface RunWeatherIndex12hour {
    fcstValid: number[]
    fcstValidLocal: string[]
    dayInd: string[]
    num: number[]
    daypartName: string[]
    longRunWeatherIndex: number[]
    longRunWeatherCategory: string[]
    shortRunWeatherIndex: number[]
    shortRunWeatherCategory: string[]
  }
  
  export interface Vt1contentMode {
    mode: string
    effectiveDateTime: string
    eventName: string
  }
  
  export interface V3LocationPoint {
    location: Location
  }
  
  export interface Location {
    latitude: number
    longitude: number
    city: string
    locale: Locale
    neighborhood: string
    adminDistrict: string
    adminDistrictCode: string
    postalCode: string
    postalKey: string
    country: string
    countryCode: string
    ianaTimeZone: string
    displayName: string
    dstEnd: string
    dstStart: string
    dmaCd: string
    placeId: string
    disputedArea: boolean
    disputedCountries: any
    disputedCountryCodes: any
    disputedCustomers: any
    disputedShowCountry: boolean[]
    canonicalCityId: string
    countyId: string
    locId: string
    locationCategory: any
    pollenId: string
    pwsId: string
    regionalSatellite: string
    tideId: any
    type: string
    zoneId: string
    displayContext: string
  }
  
  export interface Locale {
    locale1: string
    locale2: string
    locale3: any
    locale4: string
  }
  
  export interface Vt1pollenobs {
    reportDate: string
    totalPollenCount: any
    tree: number
    grass: number
    weed: number
    mold: any
  }
  
  export interface V2idxDrySkinDaypart15 {
    metadata: Metadata2
    drySkinIndex12hour: DrySkinIndex12hour
  }
  
  export interface Metadata2 {
    language: string
    transactionId: string
    version: string
    latitude: number
    longitude: number
    expireTimeGmt: number
    statusCode: number
  }
  
  export interface DrySkinIndex12hour {
    fcstValid: number[]
    fcstValidLocal: string[]
    dayInd: string[]
    num: number[]
    daypartName: string[]
    drySkinIndex: number[]
    drySkinCategory: string[]
  }
  
  export interface V2idxMosquitoDaily15 {
    metadata: Metadata3
    mosquitoIndex12hour: MosquitoIndex12hour
    mosquitoIndex24hour: MosquitoIndex24hour
  }
  
  export interface Metadata3 {
    language: string
    transactionId: string
    version: string
    latitude: number
    longitude: number
    expireTimeGmt: number
    statusCode: number
  }
  
  export interface MosquitoIndex12hour {
    fcstValid: number[]
    fcstValidLocal: string[]
    dayInd: string[]
    num: number[]
    daypartName: string[]
    mosquitoIndex: number[]
    mosquitoCategory: string[]
  }
  
  export interface MosquitoIndex24hour {
    fcstValid: number[]
    fcstValidLocal: string[]
    dow: string[]
    num: number[]
    eveningMosquitoIndex: number[]
    eveningMosquitoCategory: string[]
  }
  
  export interface V3alertsHeadlines {
    metadata: Metadata4
    alerts: Alert[]
  }
  
  export interface Metadata4 {
    next: any
  }
  
  export interface Alert {
    detailKey: string
    messageTypeCode: number
    messageType: string
    productIdentifier: string
    phenomena: string
    significance: string
    eventTrackingNumber: string
    officeCode: string
    officeName: string
    officeAdminDistrict: string
    officeAdminDistrictCode: string
    officeCountryCode: string
    eventDescription: string
    severityCode: number
    severity: string
    categories: Category[]
    responseTypes: ResponseType[]
    urgency: string
    urgencyCode: number
    certainty: string
    certaintyCode: number
    effectiveTimeLocal: string
    effectiveTimeLocalTimeZone: string
    expireTimeLocal: string
    expireTimeLocalTimeZone: string
    expireTimeUTC: number
    onsetTimeLocal: string
    onsetTimeLocalTimeZone: string
    flood: any
    areaTypeCode: string
    latitude: number
    longitude: number
    areaId: string
    areaName: string
    ianaTimeZone: string
    adminDistrictCode: any
    adminDistrict: any
    countryCode: string
    countryName: string
    headlineText: string
    source: string
    disclaimer: any
    issueTimeLocal: string
    issueTimeLocalTimeZone: string
    identifier: string
    processTimeUTC: number
    endTimeLocal: string
    endTimeLocalTimeZone: string
    endTimeUTC: number
    displayRank: number
  }
  
  export interface Category {
    category: string
    categoryCode: number
  }
  
  export interface ResponseType {
    responseType: string
    responseTypeCode: number
  }
  
  export interface Vt1idxPollenDaypart {
    day: Day2
    night: Night2
  }
  
  export interface Day2 {
    fcstValid: number[]
    fcstValidLocal: string[]
    dayInd: string[]
    num: number[]
    daypartName: string[]
    grassPollenIndex: number[]
    grassPollenCategory: string[]
    treePollenIndex: number[]
    treePollenCategory: string[]
    ragweedPollenIndex: number[]
    ragweedPollenCategory: string[]
  }
  
  export interface Night2 {
    fcstValid: number[]
    fcstValidLocal: string[]
    dayInd: string[]
    num: number[]
    daypartName: string[]
    grassPollenIndex: number[]
    grassPollenCategory: string[]
    treePollenIndex: number[]
    treePollenCategory: string[]
    ragweedPollenIndex: number[]
    ragweedPollenCategory: string[]
  }
  
  export interface Vt1precipitation {
    characteristic: number[]
    startTime: string[]
    endTime: string[]
    eventType: number[]
    forecastedRainAmount: number[]
    forecastedSnowAmount: number[]
    intensity: number[]
    severity: number[]
    imminence: number[]
  }
  
  export interface Vt1runweatherhourly {
    fcstValid: number[]
    fcstValidLocal: string[]
    dow: string[]
    dayInd: string[]
    longRunWeatherIndex: number[]
    shortRunWeatherIndex: number[]
    temperature: number[]
    precipPct: number[]
    dewPoint: number[]
    cloudPct: number[]
    windSpeed: number[]
  }
  