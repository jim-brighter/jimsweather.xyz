const defaultWeatherResponseWithAlert = {
  'locality': 'Reston, Virginia',
  'air_pollution': {
    'coord': {
      'lon': -77.3649,
      'lat': 38.937
    },
    'list': [
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 600.82,
          'no': 19,
          'no2': 50.72,
          'o3': 0.03,
          'so2': 1.1,
          'pm2_5': 14.34,
          'pm10': 22.03,
          'nh3': 2.34
        },
        'dt': 1671062988
      }
    ]
  },
  'air_pollution_forecast': {
    'coord': {
      'lon': -77.3649,
      'lat': 38.937
    },
    'list': [
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 600.82,
          'no': 19,
          'no2': 50.72,
          'o3': 0.03,
          'so2': 1.1,
          'pm2_5': 14.34,
          'pm10': 22.03,
          'nh3': 2.34
        },
        'dt': 1671062400
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 654.22,
          'no': 21.46,
          'no2': 51.41,
          'o3': 0.01,
          'so2': 0.92,
          'pm2_5': 16.93,
          'pm10': 25.56,
          'nh3': 1.81
        },
        'dt': 1671066000
      },
      {
        'main': {
          'aqi': 3
        },
        'components': {
          'co': 687.6,
          'no': 22.58,
          'no2': 53.47,
          'o3': 0,
          'so2': 0.77,
          'pm2_5': 18.55,
          'pm10': 27.53,
          'nh3': 1.38
        },
        'dt': 1671069600
      },
      {
        'main': {
          'aqi': 4
        },
        'components': {
          'co': 694.28,
          'no': 22.13,
          'no2': 55.52,
          'o3': 0,
          'so2': 0.7,
          'pm2_5': 19.37,
          'pm10': 28.35,
          'nh3': 1.17
        },
        'dt': 1671073200
      },
      {
        'main': {
          'aqi': 5
        },
        'components': {
          'co': 674.25,
          'no': 19.45,
          'no2': 56.89,
          'o3': 0,
          'so2': 0.72,
          'pm2_5': 18.85,
          'pm10': 27.12,
          'nh3': 1.16
        },
        'dt': 1671076800
      },
      {
        'main': {
          'aqi': 5
        },
        'components': {
          'co': 640.87,
          'no': 17.43,
          'no2': 56.21,
          'o3': 0.01,
          'so2': 0.8,
          'pm2_5': 17.91,
          'pm10': 25.07,
          'nh3': 1.27
        },
        'dt': 1671080400
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 594.14,
          'no': 14.98,
          'no2': 54.15,
          'o3': 0.03,
          'so2': 1.33,
          'pm2_5': 16.73,
          'pm10': 22.9,
          'nh3': 1.36
        },
        'dt': 1671084000
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 473.98,
          'no': 2.6,
          'no2': 55.52,
          'o3': 3.76,
          'so2': 6.08,
          'pm2_5': 13.28,
          'pm10': 17.41,
          'nh3': 1.16
        },
        'dt': 1671087600
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 467.3,
          'no': 0.56,
          'no2': 59.63,
          'o3': 3.84,
          'so2': 7.75,
          'pm2_5': 13.44,
          'pm10': 16.53,
          'nh3': 0.9
        },
        'dt': 1671091200
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 487.33,
          'no': 0.43,
          'no2': 63.75,
          'o3': 5.14,
          'so2': 6.91,
          'pm2_5': 13.92,
          'pm10': 16.34,
          'nh3': 0.66
        },
        'dt': 1671094800
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 407.22,
          'no': 0.04,
          'no2': 46.61,
          'o3': 17.35,
          'so2': 5.66,
          'pm2_5': 10.16,
          'pm10': 11.57,
          'nh3': 0.39
        },
        'dt': 1671098400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 340.46,
          'no': 0.02,
          'no2': 32.22,
          'o3': 26.46,
          'so2': 4.53,
          'pm2_5': 7.33,
          'pm10': 8.19,
          'nh3': 0.26
        },
        'dt': 1671102000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 340.46,
          'no': 0.04,
          'no2': 32.22,
          'o3': 25.03,
          'so2': 4.11,
          'pm2_5': 8.1,
          'pm10': 9,
          'nh3': 0.26
        },
        'dt': 1671105600
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 387.19,
          'no': 0.25,
          'no2': 41.13,
          'o3': 15.56,
          'so2': 3.82,
          'pm2_5': 11.08,
          'pm10': 12.13,
          'nh3': 0.3
        },
        'dt': 1671109200
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 433.92,
          'no': 1.47,
          'no2': 47.98,
          'o3': 8.58,
          'so2': 3.4,
          'pm2_5': 13.1,
          'pm10': 14.15,
          'nh3': 0.33
        },
        'dt': 1671112800
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 427.25,
          'no': 3.02,
          'no2': 42.84,
          'o3': 11.8,
          'so2': 2.77,
          'pm2_5': 11.6,
          'pm10': 12.47,
          'nh3': 0.33
        },
        'dt': 1671116400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 373.84,
          'no': 1.96,
          'no2': 34.62,
          'o3': 21.64,
          'so2': 2.33,
          'pm2_5': 8.55,
          'pm10': 9.25,
          'nh3': 0.29
        },
        'dt': 1671120000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 323.77,
          'no': 1.27,
          'no2': 25.71,
          'o3': 34.33,
          'so2': 2.03,
          'pm2_5': 5.41,
          'pm10': 5.95,
          'nh3': 0.27
        },
        'dt': 1671123600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 0.78,
          'no2': 18.85,
          'o3': 44.7,
          'so2': 1.83,
          'pm2_5': 2.6,
          'pm10': 3.01,
          'nh3': 0.25
        },
        'dt': 1671127200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 260.35,
          'no': 0.44,
          'no2': 15.08,
          'o3': 50.07,
          'so2': 1.86,
          'pm2_5': 1.54,
          'pm10': 1.89,
          'nh3': 0.22
        },
        'dt': 1671130800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 253.68,
          'no': 0.18,
          'no2': 13.88,
          'o3': 52.21,
          'so2': 1.97,
          'pm2_5': 1.34,
          'pm10': 1.65,
          'nh3': 0.22
        },
        'dt': 1671134400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 250.34,
          'no': 0.04,
          'no2': 12.17,
          'o3': 52.93,
          'so2': 1.77,
          'pm2_5': 1.23,
          'pm10': 1.49,
          'nh3': 0.22
        },
        'dt': 1671138000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 253.68,
          'no': 0.01,
          'no2': 13.02,
          'o3': 52.21,
          'so2': 1.46,
          'pm2_5': 1.2,
          'pm10': 1.45,
          'nh3': 0.22
        },
        'dt': 1671141600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 263.69,
          'no': 0,
          'no2': 15.94,
          'o3': 50.07,
          'so2': 1.58,
          'pm2_5': 1.31,
          'pm10': 1.6,
          'nh3': 0.21
        },
        'dt': 1671145200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 267.03,
          'no': 0,
          'no2': 15.08,
          'o3': 55.08,
          'so2': 1.68,
          'pm2_5': 1.3,
          'pm10': 1.6,
          'nh3': 0.16
        },
        'dt': 1671148800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 250.34,
          'no': 0,
          'no2': 10.45,
          'o3': 67.95,
          'so2': 1.16,
          'pm2_5': 1.05,
          'pm10': 1.33,
          'nh3': 0.12
        },
        'dt': 1671152400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 243.66,
          'no': 0,
          'no2': 8.31,
          'o3': 78.68,
          'so2': 1.01,
          'pm2_5': 0.93,
          'pm10': 1.22,
          'nh3': 0.13
        },
        'dt': 1671156000
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 243.66,
          'no': 0,
          'no2': 8.14,
          'o3': 80.11,
          'so2': 0.95,
          'pm2_5': 1.07,
          'pm10': 1.39,
          'nh3': 0.12
        },
        'dt': 1671159600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 236.99,
          'no': 0,
          'no2': 7.28,
          'o3': 77.96,
          'so2': 0.89,
          'pm2_5': 0.98,
          'pm10': 1.25,
          'nh3': 0.12
        },
        'dt': 1671163200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 230.31,
          'no': 0,
          'no2': 6.43,
          'o3': 74.39,
          'so2': 0.88,
          'pm2_5': 0.85,
          'pm10': 1.03,
          'nh3': 0.09
        },
        'dt': 1671166800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 233.65,
          'no': 0,
          'no2': 6.68,
          'o3': 71.53,
          'so2': 0.85,
          'pm2_5': 1.13,
          'pm10': 1.27,
          'nh3': 0.07
        },
        'dt': 1671170400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 236.99,
          'no': 0,
          'no2': 5.66,
          'o3': 71.53,
          'so2': 0.61,
          'pm2_5': 1.15,
          'pm10': 1.3,
          'nh3': 0.07
        },
        'dt': 1671174000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 236.99,
          'no': 0,
          'no2': 4.76,
          'o3': 69.38,
          'so2': 0.46,
          'pm2_5': 0.99,
          'pm10': 1.16,
          'nh3': 0.09
        },
        'dt': 1671177600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 233.65,
          'no': 0,
          'no2': 4.41,
          'o3': 66.52,
          'so2': 0.38,
          'pm2_5': 0.95,
          'pm10': 1.15,
          'nh3': 0.1
        },
        'dt': 1671181200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 236.99,
          'no': 0,
          'no2': 4.5,
          'o3': 63.66,
          'so2': 0.32,
          'pm2_5': 1.09,
          'pm10': 1.3,
          'nh3': 0.1
        },
        'dt': 1671184800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 243.66,
          'no': 0,
          'no2': 4.93,
          'o3': 60.08,
          'so2': 0.27,
          'pm2_5': 1.26,
          'pm10': 1.5,
          'nh3': 0.1
        },
        'dt': 1671188400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 253.68,
          'no': 0,
          'no2': 6.43,
          'o3': 56.51,
          'so2': 0.23,
          'pm2_5': 1.61,
          'pm10': 1.98,
          'nh3': 0.11
        },
        'dt': 1671192000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 260.35,
          'no': 0.01,
          'no2': 8.48,
          'o3': 51.5,
          'so2': 0.22,
          'pm2_5': 1.84,
          'pm10': 2.37,
          'nh3': 0.17
        },
        'dt': 1671195600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 260.35,
          'no': 0.52,
          'no2': 8.57,
          'o3': 50.78,
          'so2': 0.26,
          'pm2_5': 1.6,
          'pm10': 2.21,
          'nh3': 0.23
        },
        'dt': 1671199200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 263.69,
          'no': 1.45,
          'no2': 7.37,
          'o3': 52.21,
          'so2': 0.8,
          'pm2_5': 1.67,
          'pm10': 2.4,
          'nh3': 0.23
        },
        'dt': 1671202800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 277.04,
          'no': 2.4,
          'no2': 7.2,
          'o3': 48.64,
          'so2': 3.46,
          'pm2_5': 3.53,
          'pm10': 4.47,
          'nh3': 0.14
        },
        'dt': 1671206400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 287.06,
          'no': 2.82,
          'no2': 7.03,
          'o3': 46.49,
          'so2': 4.41,
          'pm2_5': 5.03,
          'pm10': 6.15,
          'nh3': 0.18
        },
        'dt': 1671210000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 287.06,
          'no': 2.49,
          'no2': 6.51,
          'o3': 47.92,
          'so2': 4.65,
          'pm2_5': 5.71,
          'pm10': 6.89,
          'nh3': 0.21
        },
        'dt': 1671213600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 2.07,
          'no2': 6.6,
          'o3': 50.78,
          'so2': 4.83,
          'pm2_5': 5.92,
          'pm10': 7.1,
          'nh3': 0.27
        },
        'dt': 1671217200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 1.69,
          'no2': 7.63,
          'o3': 50.78,
          'so2': 5.13,
          'pm2_5': 6.04,
          'pm10': 7.24,
          'nh3': 0.36
        },
        'dt': 1671220800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 0.91,
          'no2': 9.85,
          'o3': 48.64,
          'so2': 5.6,
          'pm2_5': 5.95,
          'pm10': 7.18,
          'nh3': 0.46
        },
        'dt': 1671224400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 287.06,
          'no': 0.11,
          'no2': 11.65,
          'o3': 46.49,
          'so2': 5.9,
          'pm2_5': 5.48,
          'pm10': 6.66,
          'nh3': 0.54
        },
        'dt': 1671228000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 0,
          'no2': 10.8,
          'o3': 49.35,
          'so2': 5.36,
          'pm2_5': 4.37,
          'pm10': 5.35,
          'nh3': 0.55
        },
        'dt': 1671231600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 8.31,
          'o3': 53.64,
          'so2': 3.99,
          'pm2_5': 3.21,
          'pm10': 4,
          'nh3': 0.53
        },
        'dt': 1671235200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 277.04,
          'no': 0,
          'no2': 7.2,
          'o3': 54.36,
          'so2': 3.64,
          'pm2_5': 2.97,
          'pm10': 3.69,
          'nh3': 0.52
        },
        'dt': 1671238800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 7.2,
          'o3': 52.21,
          'so2': 3.7,
          'pm2_5': 3.18,
          'pm10': 3.94,
          'nh3': 0.53
        },
        'dt': 1671242400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 0,
          'no2': 7.37,
          'o3': 50.78,
          'so2': 3.73,
          'pm2_5': 3.41,
          'pm10': 4.23,
          'nh3': 0.57
        },
        'dt': 1671246000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 0,
          'no2': 7.71,
          'o3': 48.64,
          'so2': 3.64,
          'pm2_5': 3.51,
          'pm10': 4.36,
          'nh3': 0.56
        },
        'dt': 1671249600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 0,
          'no2': 7.45,
          'o3': 47.92,
          'so2': 3.31,
          'pm2_5': 3.47,
          'pm10': 4.25,
          'nh3': 0.46
        },
        'dt': 1671253200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 6.77,
          'o3': 47.21,
          'so2': 3.01,
          'pm2_5': 3.5,
          'pm10': 4.23,
          'nh3': 0.31
        },
        'dt': 1671256800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 6.26,
          'o3': 46.49,
          'so2': 2.83,
          'pm2_5': 3.58,
          'pm10': 4.29,
          'nh3': 0.23
        },
        'dt': 1671260400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 6.17,
          'o3': 45.78,
          'so2': 2.71,
          'pm2_5': 3.7,
          'pm10': 4.43,
          'nh3': 0.27
        },
        'dt': 1671264000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 5.83,
          'o3': 45.42,
          'so2': 2.59,
          'pm2_5': 4.12,
          'pm10': 4.87,
          'nh3': 0.35
        },
        'dt': 1671267600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 5.18,
          'o3': 45.78,
          'so2': 2.65,
          'pm2_5': 4.7,
          'pm10': 5.45,
          'nh3': 0.67
        },
        'dt': 1671271200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 4.84,
          'o3': 46.49,
          'so2': 2.03,
          'pm2_5': 4.68,
          'pm10': 5.41,
          'nh3': 0.97
        },
        'dt': 1671274800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 287.06,
          'no': 0.01,
          'no2': 6.17,
          'o3': 45.78,
          'so2': 1.55,
          'pm2_5': 4.62,
          'pm10': 5.51,
          'nh3': 1.41
        },
        'dt': 1671278400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 297.07,
          'no': 0.03,
          'no2': 8.74,
          'o3': 43.99,
          'so2': 1.42,
          'pm2_5': 4.59,
          'pm10': 5.63,
          'nh3': 1.82
        },
        'dt': 1671282000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 293.73,
          'no': 0.62,
          'no2': 8.31,
          'o3': 45.78,
          'so2': 1.19,
          'pm2_5': 3.91,
          'pm10': 4.9,
          'nh3': 1.79
        },
        'dt': 1671285600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 277.04,
          'no': 1.13,
          'no2': 5.83,
          'o3': 52.21,
          'so2': 2,
          'pm2_5': 2.76,
          'pm10': 3.59,
          'nh3': 1.76
        },
        'dt': 1671289200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 253.68,
          'no': 0.98,
          'no2': 3.98,
          'o3': 57.94,
          'so2': 5.19,
          'pm2_5': 0.84,
          'pm10': 1.22,
          'nh3': 0.75
        },
        'dt': 1671292800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 247,
          'no': 0.89,
          'no2': 3.81,
          'o3': 58.65,
          'so2': 5.48,
          'pm2_5': 0.5,
          'pm10': 0.8,
          'nh3': 0.47
        },
        'dt': 1671296400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 247,
          'no': 0.74,
          'no2': 3.98,
          'o3': 58.65,
          'so2': 5.54,
          'pm2_5': 0.5,
          'pm10': 0.79,
          'nh3': 0.38
        },
        'dt': 1671300000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 247,
          'no': 0.57,
          'no2': 4.37,
          'o3': 57.22,
          'so2': 5.54,
          'pm2_5': 0.5,
          'pm10': 0.76,
          'nh3': 0.32
        },
        'dt': 1671303600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 250.34,
          'no': 0.38,
          'no2': 5.06,
          'o3': 55.79,
          'so2': 5.36,
          'pm2_5': 0.5,
          'pm10': 0.77,
          'nh3': 0.32
        },
        'dt': 1671307200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 250.34,
          'no': 0.14,
          'no2': 5.91,
          'o3': 53.64,
          'so2': 5.36,
          'pm2_5': 0.5,
          'pm10': 0.79,
          'nh3': 0.34
        },
        'dt': 1671310800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 257.02,
          'no': 0.02,
          'no2': 7.63,
          'o3': 51.5,
          'so2': 5.48,
          'pm2_5': 0.5,
          'pm10': 0.85,
          'nh3': 0.39
        },
        'dt': 1671314400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 260.35,
          'no': 0,
          'no2': 9.25,
          'o3': 49.35,
          'so2': 5.66,
          'pm2_5': 0.5,
          'pm10': 0.93,
          'nh3': 0.45
        },
        'dt': 1671318000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 260.35,
          'no': 0,
          'no2': 9.51,
          'o3': 48.64,
          'so2': 5.42,
          'pm2_5': 0.58,
          'pm10': 1.11,
          'nh3': 0.5
        },
        'dt': 1671321600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0.02,
          'no2': 13.2,
          'o3': 42.2,
          'so2': 4.53,
          'pm2_5': 1.34,
          'pm10': 2.45,
          'nh3': 0.84
        },
        'dt': 1671325200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 307.08,
          'no': 0.06,
          'no2': 17.65,
          'o3': 33.26,
          'so2': 3.58,
          'pm2_5': 2.46,
          'pm10': 4.31,
          'nh3': 1.31
        },
        'dt': 1671328800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 323.77,
          'no': 0.11,
          'no2': 20.05,
          'o3': 27.9,
          'so2': 2.68,
          'pm2_5': 3.33,
          'pm10': 5.74,
          'nh3': 1.65
        },
        'dt': 1671332400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 333.79,
          'no': 0.15,
          'no2': 21.59,
          'o3': 23.96,
          'so2': 1.97,
          'pm2_5': 3.82,
          'pm10': 6.53,
          'nh3': 1.9
        },
        'dt': 1671336000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 333.79,
          'no': 0.12,
          'no2': 20.74,
          'o3': 21.64,
          'so2': 1.39,
          'pm2_5': 3.48,
          'pm10': 5.81,
          'nh3': 1.87
        },
        'dt': 1671339600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 323.77,
          'no': 0.08,
          'no2': 18.68,
          'o3': 20.92,
          'so2': 1.06,
          'pm2_5': 3.15,
          'pm10': 5.13,
          'nh3': 1.84
        },
        'dt': 1671343200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 313.76,
          'no': 0.05,
          'no2': 16.11,
          'o3': 21.28,
          'so2': 0.85,
          'pm2_5': 2.93,
          'pm10': 4.69,
          'nh3': 1.84
        },
        'dt': 1671346800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 303.75,
          'no': 0.04,
          'no2': 13.37,
          'o3': 22.89,
          'so2': 0.78,
          'pm2_5': 2.72,
          'pm10': 4.22,
          'nh3': 1.85
        },
        'dt': 1671350400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 290.39,
          'no': 0.02,
          'no2': 11.14,
          'o3': 25.03,
          'so2': 0.8,
          'pm2_5': 2.6,
          'pm10': 3.88,
          'nh3': 1.92
        },
        'dt': 1671354000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 270.37,
          'no': 0,
          'no2': 7.63,
          'o3': 35.05,
          'so2': 1.09,
          'pm2_5': 2.25,
          'pm10': 3.18,
          'nh3': 1.96
        },
        'dt': 1671357600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 257.02,
          'no': 0,
          'no2': 6.17,
          'o3': 40.77,
          'so2': 1.09,
          'pm2_5': 2.15,
          'pm10': 2.98,
          'nh3': 2.19
        },
        'dt': 1671361200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 257.02,
          'no': 0.01,
          'no2': 6.68,
          'o3': 45.78,
          'so2': 1.42,
          'pm2_5': 2.22,
          'pm10': 3.15,
          'nh3': 2.57
        },
        'dt': 1671364800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 250.34,
          'no': 0.01,
          'no2': 6.86,
          'o3': 53.64,
          'so2': 3.64,
          'pm2_5': 1.63,
          'pm10': 2.4,
          'nh3': 1.82
        },
        'dt': 1671368400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 247,
          'no': 0.36,
          'no2': 6.68,
          'o3': 56.51,
          'so2': 5.19,
          'pm2_5': 1.07,
          'pm10': 1.69,
          'nh3': 1
        },
        'dt': 1671372000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 240.33,
          'no': 0.88,
          'no2': 5.27,
          'o3': 59.37,
          'so2': 5.25,
          'pm2_5': 0.7,
          'pm10': 1.22,
          'nh3': 0.65
        },
        'dt': 1671375600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 230.31,
          'no': 0.77,
          'no2': 3.47,
          'o3': 62.94,
          'so2': 4.47,
          'pm2_5': 0.5,
          'pm10': 0.81,
          'nh3': 0.39
        },
        'dt': 1671379200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 226.97,
          'no': 0.7,
          'no2': 2.91,
          'o3': 63.66,
          'so2': 3.93,
          'pm2_5': 0.5,
          'pm10': 0.75,
          'nh3': 0.3
        },
        'dt': 1671382800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 226.97,
          'no': 0.64,
          'no2': 2.91,
          'o3': 64.37,
          'so2': 3.82,
          'pm2_5': 0.5,
          'pm10': 0.71,
          'nh3': 0.25
        },
        'dt': 1671386400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 226.97,
          'no': 0.61,
          'no2': 3.09,
          'o3': 63.66,
          'so2': 3.7,
          'pm2_5': 0.5,
          'pm10': 0.7,
          'nh3': 0.23
        },
        'dt': 1671390000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 233.65,
          'no': 0.55,
          'no2': 3.43,
          'o3': 62.94,
          'so2': 3.61,
          'pm2_5': 0.5,
          'pm10': 0.72,
          'nh3': 0.26
        },
        'dt': 1671393600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 240.33,
          'no': 0.32,
          'no2': 4.28,
          'o3': 60.08,
          'so2': 3.58,
          'pm2_5': 0.5,
          'pm10': 0.76,
          'nh3': 0.31
        },
        'dt': 1671397200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 250.34,
          'no': 0.05,
          'no2': 5.57,
          'o3': 56.51,
          'so2': 3.55,
          'pm2_5': 0.5,
          'pm10': 0.8,
          'nh3': 0.39
        },
        'dt': 1671400800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 257.02,
          'no': 0,
          'no2': 6.6,
          'o3': 53.64,
          'so2': 3.87,
          'pm2_5': 0.5,
          'pm10': 0.87,
          'nh3': 0.51
        },
        'dt': 1671404400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 260.35,
          'no': 0,
          'no2': 7.03,
          'o3': 52.21,
          'so2': 4.11,
          'pm2_5': 0.5,
          'pm10': 0.96,
          'nh3': 0.59
        },
        'dt': 1671408000
      }
    ]
  },
  'onecall': {
    'lat': 38.937,
    'lon': -77.3649,
    'timezone': 'America/New_York',
    'timezone_offset': -18000,
    'current': {
      'dt': 1671063091,
      'sunrise': 1671020425,
      'sunset': 1671054482,
      'temp': 36.54,
      'feels_like': 31.01,
      'pressure': 1021,
      'humidity': 55,
      'dew_point': 23.07,
      'uvi': 0,
      'clouds': 100,
      'visibility': 10000,
      'wind_speed': 6.91,
      'wind_deg': 40,
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ]
    },
    'minutely': [
      {
        'dt': 1671063120,
        'precipitation': 0
      },
      {
        'dt': 1671063180,
        'precipitation': 0
      },
      {
        'dt': 1671063240,
        'precipitation': 0
      },
      {
        'dt': 1671063300,
        'precipitation': 0
      },
      {
        'dt': 1671063360,
        'precipitation': 0
      },
      {
        'dt': 1671063420,
        'precipitation': 0
      },
      {
        'dt': 1671063480,
        'precipitation': 0
      },
      {
        'dt': 1671063540,
        'precipitation': 0
      },
      {
        'dt': 1671063600,
        'precipitation': 0
      },
      {
        'dt': 1671063660,
        'precipitation': 0
      },
      {
        'dt': 1671063720,
        'precipitation': 0
      },
      {
        'dt': 1671063780,
        'precipitation': 0
      },
      {
        'dt': 1671063840,
        'precipitation': 0
      },
      {
        'dt': 1671063900,
        'precipitation': 0
      },
      {
        'dt': 1671063960,
        'precipitation': 0
      },
      {
        'dt': 1671064020,
        'precipitation': 0
      },
      {
        'dt': 1671064080,
        'precipitation': 0
      },
      {
        'dt': 1671064140,
        'precipitation': 0
      },
      {
        'dt': 1671064200,
        'precipitation': 0
      },
      {
        'dt': 1671064260,
        'precipitation': 0
      },
      {
        'dt': 1671064320,
        'precipitation': 0
      },
      {
        'dt': 1671064380,
        'precipitation': 0
      },
      {
        'dt': 1671064440,
        'precipitation': 0
      },
      {
        'dt': 1671064500,
        'precipitation': 0
      },
      {
        'dt': 1671064560,
        'precipitation': 0
      },
      {
        'dt': 1671064620,
        'precipitation': 0
      },
      {
        'dt': 1671064680,
        'precipitation': 0
      },
      {
        'dt': 1671064740,
        'precipitation': 0
      },
      {
        'dt': 1671064800,
        'precipitation': 0
      },
      {
        'dt': 1671064860,
        'precipitation': 0
      },
      {
        'dt': 1671064920,
        'precipitation': 0
      },
      {
        'dt': 1671064980,
        'precipitation': 0
      },
      {
        'dt': 1671065040,
        'precipitation': 0
      },
      {
        'dt': 1671065100,
        'precipitation': 0
      },
      {
        'dt': 1671065160,
        'precipitation': 0
      },
      {
        'dt': 1671065220,
        'precipitation': 0
      },
      {
        'dt': 1671065280,
        'precipitation': 0
      },
      {
        'dt': 1671065340,
        'precipitation': 0
      },
      {
        'dt': 1671065400,
        'precipitation': 0
      },
      {
        'dt': 1671065460,
        'precipitation': 0
      },
      {
        'dt': 1671065520,
        'precipitation': 0
      },
      {
        'dt': 1671065580,
        'precipitation': 0
      },
      {
        'dt': 1671065640,
        'precipitation': 0
      },
      {
        'dt': 1671065700,
        'precipitation': 0
      },
      {
        'dt': 1671065760,
        'precipitation': 0
      },
      {
        'dt': 1671065820,
        'precipitation': 0
      },
      {
        'dt': 1671065880,
        'precipitation': 0
      },
      {
        'dt': 1671065940,
        'precipitation': 0
      },
      {
        'dt': 1671066000,
        'precipitation': 0
      },
      {
        'dt': 1671066060,
        'precipitation': 0
      },
      {
        'dt': 1671066120,
        'precipitation': 0
      },
      {
        'dt': 1671066180,
        'precipitation': 0
      },
      {
        'dt': 1671066240,
        'precipitation': 0
      },
      {
        'dt': 1671066300,
        'precipitation': 0
      },
      {
        'dt': 1671066360,
        'precipitation': 0
      },
      {
        'dt': 1671066420,
        'precipitation': 0
      },
      {
        'dt': 1671066480,
        'precipitation': 0
      },
      {
        'dt': 1671066540,
        'precipitation': 0
      },
      {
        'dt': 1671066600,
        'precipitation': 0
      },
      {
        'dt': 1671066660,
        'precipitation': 0
      },
      {
        'dt': 1671066720,
        'precipitation': 0
      }
    ],
    'hourly': [
      {
        'dt': 1671062400,
        'temp': 36.54,
        'feels_like': 33.71,
        'pressure': 1021,
        'humidity': 55,
        'dew_point': 23.07,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 3.62,
        'wind_deg': 53,
        'wind_gust': 4.29,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671066000,
        'temp': 35.96,
        'feels_like': 35.96,
        'pressure': 1021,
        'humidity': 53,
        'dew_point': 21.81,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 2.66,
        'wind_deg': 34,
        'wind_gust': 3.18,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671069600,
        'temp': 35.13,
        'feels_like': 32.41,
        'pressure': 1021,
        'humidity': 51,
        'dew_point': 20.32,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 3.36,
        'wind_deg': 56,
        'wind_gust': 4.94,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671073200,
        'temp': 34.45,
        'feels_like': 34.45,
        'pressure': 1022,
        'humidity': 49,
        'dew_point': 18.91,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 2.46,
        'wind_deg': 49,
        'wind_gust': 3.09,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671076800,
        'temp': 33.91,
        'feels_like': 33.91,
        'pressure': 1022,
        'humidity': 47,
        'dew_point': 17.62,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 2.53,
        'wind_deg': 74,
        'wind_gust': 3.33,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671080400,
        'temp': 34.27,
        'feels_like': 34.27,
        'pressure': 1022,
        'humidity': 44,
        'dew_point': 14.43,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 2.59,
        'wind_deg': 93,
        'wind_gust': 4.27,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671084000,
        'temp': 34.99,
        'feels_like': 31.32,
        'pressure': 1021,
        'humidity': 44,
        'dew_point': 15.06,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 4.21,
        'wind_deg': 86,
        'wind_gust': 8.5,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.03
      },
      {
        'dt': 1671087600,
        'temp': 35.37,
        'feels_like': 31.95,
        'pressure': 1022,
        'humidity': 46,
        'dew_point': 16.45,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 4.03,
        'wind_deg': 112,
        'wind_gust': 9.53,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.36
      },
      {
        'dt': 1671091200,
        'temp': 34.56,
        'feels_like': 30.34,
        'pressure': 1021,
        'humidity': 57,
        'dew_point': 21.15,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 4.7,
        'wind_deg': 128,
        'wind_gust': 11.23,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          },
          {
            'id': 613,
            'main': 'Snow',
            'description': 'shower sleet',
            'icon': '13n'
          }
        ],
        'pop': 0.64,
        'rain': {
          '1h': 0.69
        }
      },
      {
        'dt': 1671094800,
        'temp': 33.39,
        'feels_like': 28.92,
        'pressure': 1021,
        'humidity': 74,
        'dew_point': 26.19,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 4.76,
        'wind_deg': 117,
        'wind_gust': 12.82,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          },
          {
            'id': 613,
            'main': 'Snow',
            'description': 'shower sleet',
            'icon': '13n'
          }
        ],
        'pop': 0.84,
        'rain': {
          '1h': 1.43
        }
      },
      {
        'dt': 1671098400,
        'temp': 32.52,
        'feels_like': 26.83,
        'pressure': 1021,
        'humidity': 85,
        'dew_point': 28.78,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 6.02,
        'wind_deg': 106,
        'wind_gust': 14.41,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          },
          {
            'id': 511,
            'main': 'Rain',
            'description': 'freezing rain',
            'icon': '13n'
          }
        ],
        'pop': 0.98,
        'rain': {
          '1h': 1.56
        }
      },
      {
        'dt': 1671102000,
        'temp': 32.05,
        'feels_like': 25.52,
        'pressure': 1020,
        'humidity': 92,
        'dew_point': 30.15,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 7.07,
        'wind_deg': 102,
        'wind_gust': 19.19,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 2.16
        }
      },
      {
        'dt': 1671105600,
        'temp': 31.42,
        'feels_like': 24.4,
        'pressure': 1020,
        'humidity': 98,
        'dew_point': 31.05,
        'uvi': 0,
        'clouds': 100,
        'visibility': 447,
        'wind_speed': 7.58,
        'wind_deg': 104,
        'wind_gust': 21.68,
        'weather': [
          {
            'id': 601,
            'main': 'Snow',
            'description': 'snow',
            'icon': '13n'
          },
          {
            'id': 511,
            'main': 'Rain',
            'description': 'freezing rain',
            'icon': '13n'
          }
        ],
        'pop': 1,
        'snow': {
          '1h': 2.4
        }
      },
      {
        'dt': 1671109200,
        'temp': 31.51,
        'feels_like': 25.39,
        'pressure': 1019,
        'humidity': 98,
        'dew_point': 31.26,
        'uvi': 0,
        'clouds': 100,
        'visibility': 840,
        'wind_speed': 6.33,
        'wind_deg': 113,
        'wind_gust': 23.13,
        'weather': [
          {
            'id': 601,
            'main': 'Snow',
            'description': 'snow',
            'icon': '13d'
          },
          {
            'id': 511,
            'main': 'Rain',
            'description': 'freezing rain',
            'icon': '13d'
          }
        ],
        'pop': 1,
        'snow': {
          '1h': 3.07
        }
      },
      {
        'dt': 1671112800,
        'temp': 31.71,
        'feels_like': 28.44,
        'pressure': 1020,
        'humidity': 99,
        'dew_point': 31.73,
        'uvi': 0.04,
        'clouds': 100,
        'visibility': 611,
        'wind_speed': 3.42,
        'wind_deg': 97,
        'wind_gust': 15.59,
        'weather': [
          {
            'id': 601,
            'main': 'Snow',
            'description': 'snow',
            'icon': '13d'
          },
          {
            'id': 511,
            'main': 'Rain',
            'description': 'freezing rain',
            'icon': '13d'
          }
        ],
        'pop': 1,
        'snow': {
          '1h': 1.4
        }
      },
      {
        'dt': 1671116400,
        'temp': 31.78,
        'feels_like': 28.71,
        'pressure': 1020,
        'humidity': 100,
        'dew_point': 31.95,
        'uvi': 0.1,
        'clouds': 100,
        'visibility': 382,
        'wind_speed': 3.27,
        'wind_deg': 119,
        'wind_gust': 16.24,
        'weather': [
          {
            'id': 601,
            'main': 'Snow',
            'description': 'snow',
            'icon': '13d'
          },
          {
            'id': 511,
            'main': 'Rain',
            'description': 'freezing rain',
            'icon': '13d'
          }
        ],
        'pop': 1,
        'snow': {
          '1h': 2.37
        }
      },
      {
        'dt': 1671120000,
        'temp': 31.89,
        'feels_like': 26.94,
        'pressure': 1019,
        'humidity': 100,
        'dew_point': 32.05,
        'uvi': 0.27,
        'clouds': 100,
        'visibility': 224,
        'wind_speed': 5.01,
        'wind_deg': 97,
        'wind_gust': 22.62,
        'weather': [
          {
            'id': 601,
            'main': 'Snow',
            'description': 'snow',
            'icon': '13d'
          }
        ],
        'pop': 1,
        'snow': {
          '1h': 1.56
        }
      },
      {
        'dt': 1671123600,
        'temp': 32.45,
        'feels_like': 26.47,
        'pressure': 1018,
        'humidity': 100,
        'dew_point': 32.61,
        'uvi': 0.32,
        'clouds': 100,
        'visibility': 145,
        'wind_speed': 6.4,
        'wind_deg': 85,
        'wind_gust': 25.34,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 0.94
        }
      },
      {
        'dt': 1671127200,
        'temp': 32.94,
        'feels_like': 28.22,
        'pressure': 1017,
        'humidity': 100,
        'dew_point': 33.17,
        'uvi': 0.29,
        'clouds': 100,
        'visibility': 125,
        'wind_speed': 4.94,
        'wind_deg': 70,
        'wind_gust': 20.33,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 0.88
        }
      },
      {
        'dt': 1671130800,
        'temp': 33.35,
        'feels_like': 28.71,
        'pressure': 1016,
        'humidity': 100,
        'dew_point': 33.58,
        'uvi': 0.17,
        'clouds': 100,
        'visibility': 96,
        'wind_speed': 4.94,
        'wind_deg': 61,
        'wind_gust': 19.8,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 0.27
        }
      },
      {
        'dt': 1671134400,
        'temp': 33.71,
        'feels_like': 28.53,
        'pressure': 1015,
        'humidity': 100,
        'dew_point': 33.96,
        'uvi': 0.08,
        'clouds': 100,
        'visibility': 103,
        'wind_speed': 5.66,
        'wind_deg': 52,
        'wind_gust': 20.62,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 0.81
        }
      },
      {
        'dt': 1671138000,
        'temp': 34.21,
        'feels_like': 29.1,
        'pressure': 1014,
        'humidity': 100,
        'dew_point': 34.47,
        'uvi': 0.02,
        'clouds': 100,
        'visibility': 114,
        'wind_speed': 5.7,
        'wind_deg': 51,
        'wind_gust': 22.19,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10d'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 2.03
        }
      },
      {
        'dt': 1671141600,
        'temp': 35.13,
        'feels_like': 30.42,
        'pressure': 1013,
        'humidity': 100,
        'dew_point': 35.38,
        'uvi': 0,
        'clouds': 100,
        'visibility': 87,
        'wind_speed': 5.41,
        'wind_deg': 52,
        'wind_gust': 20.78,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 1.02
        }
      },
      {
        'dt': 1671145200,
        'temp': 35.62,
        'feels_like': 30.96,
        'pressure': 1012,
        'humidity': 100,
        'dew_point': 35.87,
        'uvi': 0,
        'clouds': 100,
        'visibility': 73,
        'wind_speed': 5.46,
        'wind_deg': 29,
        'wind_gust': 21.12,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 0.47
        }
      },
      {
        'dt': 1671148800,
        'temp': 35.71,
        'feels_like': 31.53,
        'pressure': 1012,
        'humidity': 100,
        'dew_point': 35.94,
        'uvi': 0,
        'clouds': 100,
        'visibility': 79,
        'wind_speed': 4.88,
        'wind_deg': 345,
        'wind_gust': 16.44,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 1
        }
      },
      {
        'dt': 1671152400,
        'temp': 35.29,
        'feels_like': 29.16,
        'pressure': 1011,
        'humidity': 100,
        'dew_point': 35.53,
        'uvi': 0,
        'clouds': 100,
        'visibility': 99,
        'wind_speed': 7.49,
        'wind_deg': 335,
        'wind_gust': 14.23,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 1.25
        }
      },
      {
        'dt': 1671156000,
        'temp': 35.44,
        'feels_like': 28.71,
        'pressure': 1011,
        'humidity': 100,
        'dew_point': 35.65,
        'uvi': 0,
        'clouds': 100,
        'visibility': 124,
        'wind_speed': 8.59,
        'wind_deg': 338,
        'wind_gust': 17.98,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 1.86
        }
      },
      {
        'dt': 1671159600,
        'temp': 35.06,
        'feels_like': 28.11,
        'pressure': 1010,
        'humidity': 100,
        'dew_point': 35.28,
        'uvi': 0,
        'clouds': 100,
        'visibility': 122,
        'wind_speed': 8.81,
        'wind_deg': 336,
        'wind_gust': 19.24,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 1.22
        }
      },
      {
        'dt': 1671163200,
        'temp': 35.17,
        'feels_like': 27.95,
        'pressure': 1009,
        'humidity': 100,
        'dew_point': 35.37,
        'uvi': 0,
        'clouds': 100,
        'visibility': 119,
        'wind_speed': 9.4,
        'wind_deg': 334,
        'wind_gust': 21.83,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 0.41
        }
      },
      {
        'dt': 1671166800,
        'temp': 35.1,
        'feels_like': 27.36,
        'pressure': 1009,
        'humidity': 100,
        'dew_point': 35.28,
        'uvi': 0,
        'clouds': 100,
        'visibility': 598,
        'wind_speed': 10.42,
        'wind_deg': 325,
        'wind_gust': 23.26,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.8
      },
      {
        'dt': 1671170400,
        'temp': 35.06,
        'feels_like': 27.1,
        'pressure': 1008,
        'humidity': 99,
        'dew_point': 35.13,
        'uvi': 0,
        'clouds': 100,
        'visibility': 2503,
        'wind_speed': 10.89,
        'wind_deg': 321,
        'wind_gust': 24.96,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 0.22
        }
      },
      {
        'dt': 1671174000,
        'temp': 35.35,
        'feels_like': 27.73,
        'pressure': 1008,
        'humidity': 99,
        'dew_point': 35.38,
        'uvi': 0,
        'clouds': 100,
        'visibility': 3294,
        'wind_speed': 10.29,
        'wind_deg': 319,
        'wind_gust': 24.61,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'pop': 0.5,
        'rain': {
          '1h': 0.19
        }
      },
      {
        'dt': 1671177600,
        'temp': 35.4,
        'feels_like': 27.61,
        'pressure': 1008,
        'humidity': 99,
        'dew_point': 35.33,
        'uvi': 0,
        'clouds': 100,
        'visibility': 5536,
        'wind_speed': 10.71,
        'wind_deg': 312,
        'wind_gust': 25.43,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.38
      },
      {
        'dt': 1671181200,
        'temp': 35.67,
        'feels_like': 27.93,
        'pressure': 1008,
        'humidity': 98,
        'dew_point': 35.51,
        'uvi': 0,
        'clouds': 100,
        'visibility': 6938,
        'wind_speed': 10.76,
        'wind_deg': 317,
        'wind_gust': 26.75,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.34
      },
      {
        'dt': 1671184800,
        'temp': 35.98,
        'feels_like': 28.22,
        'pressure': 1008,
        'humidity': 98,
        'dew_point': 35.71,
        'uvi': 0,
        'clouds': 100,
        'visibility': 7527,
        'wind_speed': 10.96,
        'wind_deg': 320,
        'wind_gust': 27.74,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.3
      },
      {
        'dt': 1671188400,
        'temp': 36.32,
        'feels_like': 29.05,
        'pressure': 1009,
        'humidity': 98,
        'dew_point': 35.94,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 10.09,
        'wind_deg': 322,
        'wind_gust': 27.36,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.28
      },
      {
        'dt': 1671192000,
        'temp': 36.39,
        'feels_like': 29.71,
        'pressure': 1009,
        'humidity': 97,
        'dew_point': 35.91,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 8.9,
        'wind_deg': 320,
        'wind_gust': 26.71,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.28
      },
      {
        'dt': 1671195600,
        'temp': 36.09,
        'feels_like': 29.28,
        'pressure': 1010,
        'humidity': 97,
        'dew_point': 35.46,
        'uvi': 0,
        'clouds': 79,
        'visibility': 10000,
        'wind_speed': 9.01,
        'wind_deg': 310,
        'wind_gust': 26.82,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'pop': 0.13
      },
      {
        'dt': 1671199200,
        'temp': 37.08,
        'feels_like': 30.49,
        'pressure': 1010,
        'humidity': 95,
        'dew_point': 36,
        'uvi': 0.41,
        'clouds': 64,
        'visibility': 10000,
        'wind_speed': 9.01,
        'wind_deg': 307,
        'wind_gust': 27.56,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'pop': 0.07
      },
      {
        'dt': 1671202800,
        'temp': 38.7,
        'feels_like': 32.52,
        'pressure': 1010,
        'humidity': 93,
        'dew_point': 37.11,
        'uvi': 0.91,
        'clouds': 51,
        'visibility': 10000,
        'wind_speed': 8.95,
        'wind_deg': 309,
        'wind_gust': 26.51,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'pop': 0.07
      },
      {
        'dt': 1671206400,
        'temp': 39.47,
        'feels_like': 33.15,
        'pressure': 1010,
        'humidity': 91,
        'dew_point': 37.22,
        'uvi': 1.35,
        'clouds': 45,
        'visibility': 10000,
        'wind_speed': 9.64,
        'wind_deg': 307,
        'wind_gust': 24.49,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'pop': 0.05
      },
      {
        'dt': 1671210000,
        'temp': 39.58,
        'feels_like': 33.15,
        'pressure': 1010,
        'humidity': 89,
        'dew_point': 36.79,
        'uvi': 1.61,
        'clouds': 45,
        'visibility': 6525,
        'wind_speed': 9.91,
        'wind_deg': 307,
        'wind_gust': 23.78,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'pop': 0.05
      },
      {
        'dt': 1671213600,
        'temp': 39.76,
        'feels_like': 33.31,
        'pressure': 1009,
        'humidity': 88,
        'dew_point': 36.52,
        'uvi': 1.47,
        'clouds': 44,
        'visibility': 10000,
        'wind_speed': 10.07,
        'wind_deg': 307,
        'wind_gust': 23.62,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'pop': 0.02
      },
      {
        'dt': 1671217200,
        'temp': 39.81,
        'feels_like': 33.53,
        'pressure': 1009,
        'humidity': 87,
        'dew_point': 36.32,
        'uvi': 1.11,
        'clouds': 37,
        'visibility': 10000,
        'wind_speed': 9.71,
        'wind_deg': 309,
        'wind_gust': 23.22,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671220800,
        'temp': 39.65,
        'feels_like': 34.2,
        'pressure': 1010,
        'humidity': 87,
        'dew_point': 36.14,
        'uvi': 0.56,
        'clouds': 37,
        'visibility': 10000,
        'wind_speed': 7.94,
        'wind_deg': 309,
        'wind_gust': 21.39,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671224400,
        'temp': 38.68,
        'feels_like': 34.2,
        'pressure': 1010,
        'humidity': 89,
        'dew_point': 35.92,
        'uvi': 0.17,
        'clouds': 34,
        'visibility': 10000,
        'wind_speed': 5.99,
        'wind_deg': 298,
        'wind_gust': 18.79,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671228000,
        'temp': 35.82,
        'feels_like': 31.69,
        'pressure': 1010,
        'humidity': 92,
        'dew_point': 34.03,
        'uvi': 0,
        'clouds': 32,
        'visibility': 10000,
        'wind_speed': 4.83,
        'wind_deg': 291,
        'wind_gust': 15.08,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671231600,
        'temp': 35.31,
        'feels_like': 30.4,
        'pressure': 1011,
        'humidity': 90,
        'dew_point': 32.86,
        'uvi': 0,
        'clouds': 28,
        'visibility': 10000,
        'wind_speed': 5.7,
        'wind_deg': 296,
        'wind_gust': 20.96,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03n'
          }
        ],
        'pop': 0
      }
    ],
    'daily': [
      {
        'dt': 1671037200,
        'sunrise': 1671020425,
        'sunset': 1671054482,
        'moonrise': 1671075960,
        'moonset': 1671036900,
        'moon_phase': 0.7,
        'temp': {
          'day': 39.63,
          'min': 28.78,
          'max': 41.09,
          'night': 33.91,
          'eve': 36.27,
          'morn': 29.14
        },
        'feels_like': {
          'day': 37.33,
          'night': 33.91,
          'eve': 36.27,
          'morn': 26.08
        },
        'pressure': 1023,
        'humidity': 34,
        'dew_point': 13.98,
        'wind_speed': 5.21,
        'wind_deg': 11,
        'wind_gust': 8.05,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ],
        'clouds': 100,
        'pop': 0,
        'uvi': 1.63
      },
      {
        'dt': 1671123600,
        'sunrise': 1671106866,
        'sunset': 1671140897,
        'moonrise': 1671166020,
        'moonset': 1671124680,
        'moon_phase': 0.73,
        'temp': {
          'day': 32.45,
          'min': 31.42,
          'max': 35.71,
          'night': 35.17,
          'eve': 35.62,
          'morn': 32.05
        },
        'feels_like': {
          'day': 26.47,
          'night': 27.95,
          'eve': 30.96,
          'morn': 25.52
        },
        'pressure': 1018,
        'humidity': 100,
        'dew_point': 32.61,
        'wind_speed': 9.4,
        'wind_deg': 334,
        'wind_gust': 25.34,
        'weather': [
          {
            'id': 616,
            'main': 'Snow',
            'description': 'rain and snow',
            'icon': '13d'
          }
        ],
        'clouds': 100,
        'pop': 1,
        'rain': 18,
        'snow': 10.8,
        'uvi': 0.32
      },
      {
        'dt': 1671210000,
        'sunrise': 1671193306,
        'sunset': 1671227314,
        'moonrise': 0,
        'moonset': 1671212460,
        'moon_phase': 0.75,
        'temp': {
          'day': 39.58,
          'min': 31.95,
          'max': 39.81,
          'night': 31.95,
          'eve': 35.31,
          'morn': 36.32
        },
        'feels_like': {
          'day': 33.15,
          'night': 27.3,
          'eve': 30.4,
          'morn': 29.05
        },
        'pressure': 1010,
        'humidity': 89,
        'dew_point': 36.79,
        'wind_speed': 10.96,
        'wind_deg': 320,
        'wind_gust': 27.74,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': 45,
        'pop': 1,
        'rain': 0.41,
        'uvi': 1.61
      },
      {
        'dt': 1671296400,
        'sunrise': 1671279743,
        'sunset': 1671313733,
        'moonrise': 1671256080,
        'moonset': 1671300240,
        'moon_phase': 0.79,
        'temp': {
          'day': 37.4,
          'min': 29.19,
          'max': 38.66,
          'night': 29.75,
          'eve': 31.64,
          'morn': 29.37
        },
        'feels_like': {
          'day': 30.31,
          'night': 24.78,
          'eve': 28.63,
          'morn': 24.66
        },
        'pressure': 1012,
        'humidity': 63,
        'dew_point': 26.22,
        'wind_speed': 10.27,
        'wind_deg': 295,
        'wind_gust': 20.27,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'clouds': 35,
        'pop': 0,
        'uvi': 1.79
      },
      {
        'dt': 1671382800,
        'sunrise': 1671366180,
        'sunset': 1671400154,
        'moonrise': 1671346320,
        'moonset': 1671388080,
        'moon_phase': 0.83,
        'temp': {
          'day': 35.28,
          'min': 27.7,
          'max': 36.27,
          'night': 27.7,
          'eve': 30.42,
          'morn': 27.91
        },
        'feels_like': {
          'day': 27.55,
          'night': 20.12,
          'eve': 23.47,
          'morn': 22.42
        },
        'pressure': 1017,
        'humidity': 57,
        'dew_point': 21.72,
        'wind_speed': 10.65,
        'wind_deg': 299,
        'wind_gust': 24.61,
        'weather': [
          {
            'id': 801,
            'main': 'Clouds',
            'description': 'few clouds',
            'icon': '02d'
          }
        ],
        'clouds': 24,
        'pop': 0,
        'uvi': 1.46
      },
      {
        'dt': 1671469200,
        'sunrise': 1671452614,
        'sunset': 1671486577,
        'moonrise': 1671436740,
        'moonset': 1671476040,
        'moon_phase': 0.86,
        'temp': {
          'day': 38.34,
          'min': 26.92,
          'max': 38.34,
          'night': 30.69,
          'eve': 31.77,
          'morn': 27
        },
        'feels_like': {
          'day': 31.3,
          'night': 24.04,
          'eve': 25.77,
          'morn': 18.41
        },
        'pressure': 1025,
        'humidity': 49,
        'dew_point': 20.82,
        'wind_speed': 10.74,
        'wind_deg': 298,
        'wind_gust': 27.87,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': 2,
        'pop': 0,
        'uvi': 2
      },
      {
        'dt': 1671555600,
        'sunrise': 1671539046,
        'sunset': 1671573002,
        'moonrise': 1671527400,
        'moonset': 1671564360,
        'moon_phase': 0.9,
        'temp': {
          'day': 35.76,
          'min': 27.64,
          'max': 35.76,
          'night': 27.64,
          'eve': 28.63,
          'morn': 28.58
        },
        'feels_like': {
          'day': 27.36,
          'night': 18.73,
          'eve': 21.7,
          'morn': 19.8
        },
        'pressure': 1027,
        'humidity': 49,
        'dew_point': 18.52,
        'wind_speed': 12.41,
        'wind_deg': 307,
        'wind_gust': 26.89,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'clouds': 69,
        'pop': 0,
        'uvi': 2
      },
      {
        'dt': 1671642000,
        'sunrise': 1671625477,
        'sunset': 1671659429,
        'moonrise': 1671618360,
        'moonset': 1671653160,
        'moon_phase': 0.93,
        'temp': {
          'day': 31.06,
          'min': 24.03,
          'max': 31.06,
          'night': 25.29,
          'eve': 25.86,
          'morn': 24.03
        },
        'feels_like': {
          'day': 21.67,
          'night': 17.76,
          'eve': 18.12,
          'morn': 13.89
        },
        'pressure': 1029,
        'humidity': 43,
        'dew_point': 11.62,
        'wind_speed': 12.73,
        'wind_deg': 310,
        'wind_gust': 23.89,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': 6,
        'pop': 0,
        'uvi': 2
      }
    ],
    'alerts': [
      {
        'sender_name': 'NWS Baltimore/Washington (Washington D.C., Central Maryland, Northern Virginia, Eastern West Virginia)',
        'event': 'Winter Weather Advisory',
        'start': 1671084000,
        'end': 1671127200,
        'description': '...WINTER WEATHER ADVISORY NOW IN EFFECT FROM 1 AM TO 1 PM EST\nTHURSDAY...\n* WHAT...Freezing rain expected. Total ice accumulations of a\nglaze to around one tenth of an inch. Highest ice amounts will\nbe in the northern and western suburbs of Washington and\nBaltimore.\n* WHERE...The Washington and Baltimore Metropolitan areas\nincluding the city of Baltimore and the District of Columbia as\nwell as northeastern and central Maryland.\n* WHEN...From 1 AM to 1 PM EST Thursday.\n* IMPACTS...Difficult travel conditions are possible. The\nhazardous conditions will likely impact the morning commute on\nThursday.\n* ADDITIONAL DETAILS...Wintry precipitation begins overnight and\ncontinues into Thursday morning. Warmer air should push in later\nThursday morning into Thursday afternoon changing the\nprecipitation to rain.',
        'tags': []
      },
      {
        'sender_name': 'NWS Baltimore/Washington (Washington D.C., Central Maryland, Northern Virginia, Eastern West Virginia)',
        'event': 'Winter Weather Advisory',
        'start': 1671084000,
        'end': 1671127200,
        'description': '...WINTER WEATHER ADVISORY NOW IN EFFECT FROM 1 AM TO 1 PM EST\nTHURSDAY...\n* WHAT...Freezing rain expected. Total ice accumulations of a\nglaze to around one tenth of an inch. Highest ice amounts will\nbe in the northern and western suburbs of Washington and\nBaltimore.\n* WHERE...The Washington and Baltimore Metropolitan areas\nincluding the city of Baltimore and the District of Columbia as\nwell as northeastern and central Maryland.\n* WHEN...From 1 AM to 1 PM EST Thursday.\n* IMPACTS...Difficult travel conditions are possible. The\nhazardous conditions will likely impact the morning commute on\nThursday.\n* ADDITIONAL DETAILS...Wintry precipitation begins overnight and\ncontinues into Thursday morning. Warmer air should push in later\nThursday morning into Thursday afternoon changing the\nprecipitation to rain.',
        'tags': []
      }
    ]
  }
}

const defaultWeatherResponseWithNoAlert = {
  'locality': 'Reston, Virginia',
  'air_pollution': {
    'coord': {
      'lon': -77.3649,
      'lat': 38.937
    },
    'list': [
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 600.82,
          'no': 19,
          'no2': 50.72,
          'o3': 0.03,
          'so2': 1.1,
          'pm2_5': 14.34,
          'pm10': 22.03,
          'nh3': 2.34
        },
        'dt': 1671062988
      }
    ]
  },
  'air_pollution_forecast': {
    'coord': {
      'lon': -77.3649,
      'lat': 38.937
    },
    'list': [
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 600.82,
          'no': 19,
          'no2': 50.72,
          'o3': 0.03,
          'so2': 1.1,
          'pm2_5': 14.34,
          'pm10': 22.03,
          'nh3': 2.34
        },
        'dt': 1671062400
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 654.22,
          'no': 21.46,
          'no2': 51.41,
          'o3': 0.01,
          'so2': 0.92,
          'pm2_5': 16.93,
          'pm10': 25.56,
          'nh3': 1.81
        },
        'dt': 1671066000
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 687.6,
          'no': 22.58,
          'no2': 53.47,
          'o3': 0,
          'so2': 0.77,
          'pm2_5': 18.55,
          'pm10': 27.53,
          'nh3': 1.38
        },
        'dt': 1671069600
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 694.28,
          'no': 22.13,
          'no2': 55.52,
          'o3': 0,
          'so2': 0.7,
          'pm2_5': 19.37,
          'pm10': 28.35,
          'nh3': 1.17
        },
        'dt': 1671073200
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 674.25,
          'no': 19.45,
          'no2': 56.89,
          'o3': 0,
          'so2': 0.72,
          'pm2_5': 18.85,
          'pm10': 27.12,
          'nh3': 1.16
        },
        'dt': 1671076800
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 640.87,
          'no': 17.43,
          'no2': 56.21,
          'o3': 0.01,
          'so2': 0.8,
          'pm2_5': 17.91,
          'pm10': 25.07,
          'nh3': 1.27
        },
        'dt': 1671080400
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 594.14,
          'no': 14.98,
          'no2': 54.15,
          'o3': 0.03,
          'so2': 1.33,
          'pm2_5': 16.73,
          'pm10': 22.9,
          'nh3': 1.36
        },
        'dt': 1671084000
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 473.98,
          'no': 2.6,
          'no2': 55.52,
          'o3': 3.76,
          'so2': 6.08,
          'pm2_5': 13.28,
          'pm10': 17.41,
          'nh3': 1.16
        },
        'dt': 1671087600
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 467.3,
          'no': 0.56,
          'no2': 59.63,
          'o3': 3.84,
          'so2': 7.75,
          'pm2_5': 13.44,
          'pm10': 16.53,
          'nh3': 0.9
        },
        'dt': 1671091200
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 487.33,
          'no': 0.43,
          'no2': 63.75,
          'o3': 5.14,
          'so2': 6.91,
          'pm2_5': 13.92,
          'pm10': 16.34,
          'nh3': 0.66
        },
        'dt': 1671094800
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 407.22,
          'no': 0.04,
          'no2': 46.61,
          'o3': 17.35,
          'so2': 5.66,
          'pm2_5': 10.16,
          'pm10': 11.57,
          'nh3': 0.39
        },
        'dt': 1671098400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 340.46,
          'no': 0.02,
          'no2': 32.22,
          'o3': 26.46,
          'so2': 4.53,
          'pm2_5': 7.33,
          'pm10': 8.19,
          'nh3': 0.26
        },
        'dt': 1671102000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 340.46,
          'no': 0.04,
          'no2': 32.22,
          'o3': 25.03,
          'so2': 4.11,
          'pm2_5': 8.1,
          'pm10': 9,
          'nh3': 0.26
        },
        'dt': 1671105600
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 387.19,
          'no': 0.25,
          'no2': 41.13,
          'o3': 15.56,
          'so2': 3.82,
          'pm2_5': 11.08,
          'pm10': 12.13,
          'nh3': 0.3
        },
        'dt': 1671109200
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 433.92,
          'no': 1.47,
          'no2': 47.98,
          'o3': 8.58,
          'so2': 3.4,
          'pm2_5': 13.1,
          'pm10': 14.15,
          'nh3': 0.33
        },
        'dt': 1671112800
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 427.25,
          'no': 3.02,
          'no2': 42.84,
          'o3': 11.8,
          'so2': 2.77,
          'pm2_5': 11.6,
          'pm10': 12.47,
          'nh3': 0.33
        },
        'dt': 1671116400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 373.84,
          'no': 1.96,
          'no2': 34.62,
          'o3': 21.64,
          'so2': 2.33,
          'pm2_5': 8.55,
          'pm10': 9.25,
          'nh3': 0.29
        },
        'dt': 1671120000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 323.77,
          'no': 1.27,
          'no2': 25.71,
          'o3': 34.33,
          'so2': 2.03,
          'pm2_5': 5.41,
          'pm10': 5.95,
          'nh3': 0.27
        },
        'dt': 1671123600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 0.78,
          'no2': 18.85,
          'o3': 44.7,
          'so2': 1.83,
          'pm2_5': 2.6,
          'pm10': 3.01,
          'nh3': 0.25
        },
        'dt': 1671127200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 260.35,
          'no': 0.44,
          'no2': 15.08,
          'o3': 50.07,
          'so2': 1.86,
          'pm2_5': 1.54,
          'pm10': 1.89,
          'nh3': 0.22
        },
        'dt': 1671130800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 253.68,
          'no': 0.18,
          'no2': 13.88,
          'o3': 52.21,
          'so2': 1.97,
          'pm2_5': 1.34,
          'pm10': 1.65,
          'nh3': 0.22
        },
        'dt': 1671134400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 250.34,
          'no': 0.04,
          'no2': 12.17,
          'o3': 52.93,
          'so2': 1.77,
          'pm2_5': 1.23,
          'pm10': 1.49,
          'nh3': 0.22
        },
        'dt': 1671138000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 253.68,
          'no': 0.01,
          'no2': 13.02,
          'o3': 52.21,
          'so2': 1.46,
          'pm2_5': 1.2,
          'pm10': 1.45,
          'nh3': 0.22
        },
        'dt': 1671141600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 263.69,
          'no': 0,
          'no2': 15.94,
          'o3': 50.07,
          'so2': 1.58,
          'pm2_5': 1.31,
          'pm10': 1.6,
          'nh3': 0.21
        },
        'dt': 1671145200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 267.03,
          'no': 0,
          'no2': 15.08,
          'o3': 55.08,
          'so2': 1.68,
          'pm2_5': 1.3,
          'pm10': 1.6,
          'nh3': 0.16
        },
        'dt': 1671148800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 250.34,
          'no': 0,
          'no2': 10.45,
          'o3': 67.95,
          'so2': 1.16,
          'pm2_5': 1.05,
          'pm10': 1.33,
          'nh3': 0.12
        },
        'dt': 1671152400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 243.66,
          'no': 0,
          'no2': 8.31,
          'o3': 78.68,
          'so2': 1.01,
          'pm2_5': 0.93,
          'pm10': 1.22,
          'nh3': 0.13
        },
        'dt': 1671156000
      },
      {
        'main': {
          'aqi': 2
        },
        'components': {
          'co': 243.66,
          'no': 0,
          'no2': 8.14,
          'o3': 80.11,
          'so2': 0.95,
          'pm2_5': 1.07,
          'pm10': 1.39,
          'nh3': 0.12
        },
        'dt': 1671159600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 236.99,
          'no': 0,
          'no2': 7.28,
          'o3': 77.96,
          'so2': 0.89,
          'pm2_5': 0.98,
          'pm10': 1.25,
          'nh3': 0.12
        },
        'dt': 1671163200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 230.31,
          'no': 0,
          'no2': 6.43,
          'o3': 74.39,
          'so2': 0.88,
          'pm2_5': 0.85,
          'pm10': 1.03,
          'nh3': 0.09
        },
        'dt': 1671166800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 233.65,
          'no': 0,
          'no2': 6.68,
          'o3': 71.53,
          'so2': 0.85,
          'pm2_5': 1.13,
          'pm10': 1.27,
          'nh3': 0.07
        },
        'dt': 1671170400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 236.99,
          'no': 0,
          'no2': 5.66,
          'o3': 71.53,
          'so2': 0.61,
          'pm2_5': 1.15,
          'pm10': 1.3,
          'nh3': 0.07
        },
        'dt': 1671174000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 236.99,
          'no': 0,
          'no2': 4.76,
          'o3': 69.38,
          'so2': 0.46,
          'pm2_5': 0.99,
          'pm10': 1.16,
          'nh3': 0.09
        },
        'dt': 1671177600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 233.65,
          'no': 0,
          'no2': 4.41,
          'o3': 66.52,
          'so2': 0.38,
          'pm2_5': 0.95,
          'pm10': 1.15,
          'nh3': 0.1
        },
        'dt': 1671181200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 236.99,
          'no': 0,
          'no2': 4.5,
          'o3': 63.66,
          'so2': 0.32,
          'pm2_5': 1.09,
          'pm10': 1.3,
          'nh3': 0.1
        },
        'dt': 1671184800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 243.66,
          'no': 0,
          'no2': 4.93,
          'o3': 60.08,
          'so2': 0.27,
          'pm2_5': 1.26,
          'pm10': 1.5,
          'nh3': 0.1
        },
        'dt': 1671188400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 253.68,
          'no': 0,
          'no2': 6.43,
          'o3': 56.51,
          'so2': 0.23,
          'pm2_5': 1.61,
          'pm10': 1.98,
          'nh3': 0.11
        },
        'dt': 1671192000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 260.35,
          'no': 0.01,
          'no2': 8.48,
          'o3': 51.5,
          'so2': 0.22,
          'pm2_5': 1.84,
          'pm10': 2.37,
          'nh3': 0.17
        },
        'dt': 1671195600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 260.35,
          'no': 0.52,
          'no2': 8.57,
          'o3': 50.78,
          'so2': 0.26,
          'pm2_5': 1.6,
          'pm10': 2.21,
          'nh3': 0.23
        },
        'dt': 1671199200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 263.69,
          'no': 1.45,
          'no2': 7.37,
          'o3': 52.21,
          'so2': 0.8,
          'pm2_5': 1.67,
          'pm10': 2.4,
          'nh3': 0.23
        },
        'dt': 1671202800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 277.04,
          'no': 2.4,
          'no2': 7.2,
          'o3': 48.64,
          'so2': 3.46,
          'pm2_5': 3.53,
          'pm10': 4.47,
          'nh3': 0.14
        },
        'dt': 1671206400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 287.06,
          'no': 2.82,
          'no2': 7.03,
          'o3': 46.49,
          'so2': 4.41,
          'pm2_5': 5.03,
          'pm10': 6.15,
          'nh3': 0.18
        },
        'dt': 1671210000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 287.06,
          'no': 2.49,
          'no2': 6.51,
          'o3': 47.92,
          'so2': 4.65,
          'pm2_5': 5.71,
          'pm10': 6.89,
          'nh3': 0.21
        },
        'dt': 1671213600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 2.07,
          'no2': 6.6,
          'o3': 50.78,
          'so2': 4.83,
          'pm2_5': 5.92,
          'pm10': 7.1,
          'nh3': 0.27
        },
        'dt': 1671217200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 1.69,
          'no2': 7.63,
          'o3': 50.78,
          'so2': 5.13,
          'pm2_5': 6.04,
          'pm10': 7.24,
          'nh3': 0.36
        },
        'dt': 1671220800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 0.91,
          'no2': 9.85,
          'o3': 48.64,
          'so2': 5.6,
          'pm2_5': 5.95,
          'pm10': 7.18,
          'nh3': 0.46
        },
        'dt': 1671224400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 287.06,
          'no': 0.11,
          'no2': 11.65,
          'o3': 46.49,
          'so2': 5.9,
          'pm2_5': 5.48,
          'pm10': 6.66,
          'nh3': 0.54
        },
        'dt': 1671228000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 0,
          'no2': 10.8,
          'o3': 49.35,
          'so2': 5.36,
          'pm2_5': 4.37,
          'pm10': 5.35,
          'nh3': 0.55
        },
        'dt': 1671231600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 8.31,
          'o3': 53.64,
          'so2': 3.99,
          'pm2_5': 3.21,
          'pm10': 4,
          'nh3': 0.53
        },
        'dt': 1671235200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 277.04,
          'no': 0,
          'no2': 7.2,
          'o3': 54.36,
          'so2': 3.64,
          'pm2_5': 2.97,
          'pm10': 3.69,
          'nh3': 0.52
        },
        'dt': 1671238800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 7.2,
          'o3': 52.21,
          'so2': 3.7,
          'pm2_5': 3.18,
          'pm10': 3.94,
          'nh3': 0.53
        },
        'dt': 1671242400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 0,
          'no2': 7.37,
          'o3': 50.78,
          'so2': 3.73,
          'pm2_5': 3.41,
          'pm10': 4.23,
          'nh3': 0.57
        },
        'dt': 1671246000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 0,
          'no2': 7.71,
          'o3': 48.64,
          'so2': 3.64,
          'pm2_5': 3.51,
          'pm10': 4.36,
          'nh3': 0.56
        },
        'dt': 1671249600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 283.72,
          'no': 0,
          'no2': 7.45,
          'o3': 47.92,
          'so2': 3.31,
          'pm2_5': 3.47,
          'pm10': 4.25,
          'nh3': 0.46
        },
        'dt': 1671253200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 6.77,
          'o3': 47.21,
          'so2': 3.01,
          'pm2_5': 3.5,
          'pm10': 4.23,
          'nh3': 0.31
        },
        'dt': 1671256800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 6.26,
          'o3': 46.49,
          'so2': 2.83,
          'pm2_5': 3.58,
          'pm10': 4.29,
          'nh3': 0.23
        },
        'dt': 1671260400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 6.17,
          'o3': 45.78,
          'so2': 2.71,
          'pm2_5': 3.7,
          'pm10': 4.43,
          'nh3': 0.27
        },
        'dt': 1671264000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 5.83,
          'o3': 45.42,
          'so2': 2.59,
          'pm2_5': 4.12,
          'pm10': 4.87,
          'nh3': 0.35
        },
        'dt': 1671267600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 5.18,
          'o3': 45.78,
          'so2': 2.65,
          'pm2_5': 4.7,
          'pm10': 5.45,
          'nh3': 0.67
        },
        'dt': 1671271200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0,
          'no2': 4.84,
          'o3': 46.49,
          'so2': 2.03,
          'pm2_5': 4.68,
          'pm10': 5.41,
          'nh3': 0.97
        },
        'dt': 1671274800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 287.06,
          'no': 0.01,
          'no2': 6.17,
          'o3': 45.78,
          'so2': 1.55,
          'pm2_5': 4.62,
          'pm10': 5.51,
          'nh3': 1.41
        },
        'dt': 1671278400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 297.07,
          'no': 0.03,
          'no2': 8.74,
          'o3': 43.99,
          'so2': 1.42,
          'pm2_5': 4.59,
          'pm10': 5.63,
          'nh3': 1.82
        },
        'dt': 1671282000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 293.73,
          'no': 0.62,
          'no2': 8.31,
          'o3': 45.78,
          'so2': 1.19,
          'pm2_5': 3.91,
          'pm10': 4.9,
          'nh3': 1.79
        },
        'dt': 1671285600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 277.04,
          'no': 1.13,
          'no2': 5.83,
          'o3': 52.21,
          'so2': 2,
          'pm2_5': 2.76,
          'pm10': 3.59,
          'nh3': 1.76
        },
        'dt': 1671289200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 253.68,
          'no': 0.98,
          'no2': 3.98,
          'o3': 57.94,
          'so2': 5.19,
          'pm2_5': 0.84,
          'pm10': 1.22,
          'nh3': 0.75
        },
        'dt': 1671292800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 247,
          'no': 0.89,
          'no2': 3.81,
          'o3': 58.65,
          'so2': 5.48,
          'pm2_5': 0.5,
          'pm10': 0.8,
          'nh3': 0.47
        },
        'dt': 1671296400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 247,
          'no': 0.74,
          'no2': 3.98,
          'o3': 58.65,
          'so2': 5.54,
          'pm2_5': 0.5,
          'pm10': 0.79,
          'nh3': 0.38
        },
        'dt': 1671300000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 247,
          'no': 0.57,
          'no2': 4.37,
          'o3': 57.22,
          'so2': 5.54,
          'pm2_5': 0.5,
          'pm10': 0.76,
          'nh3': 0.32
        },
        'dt': 1671303600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 250.34,
          'no': 0.38,
          'no2': 5.06,
          'o3': 55.79,
          'so2': 5.36,
          'pm2_5': 0.5,
          'pm10': 0.77,
          'nh3': 0.32
        },
        'dt': 1671307200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 250.34,
          'no': 0.14,
          'no2': 5.91,
          'o3': 53.64,
          'so2': 5.36,
          'pm2_5': 0.5,
          'pm10': 0.79,
          'nh3': 0.34
        },
        'dt': 1671310800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 257.02,
          'no': 0.02,
          'no2': 7.63,
          'o3': 51.5,
          'so2': 5.48,
          'pm2_5': 0.5,
          'pm10': 0.85,
          'nh3': 0.39
        },
        'dt': 1671314400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 260.35,
          'no': 0,
          'no2': 9.25,
          'o3': 49.35,
          'so2': 5.66,
          'pm2_5': 0.5,
          'pm10': 0.93,
          'nh3': 0.45
        },
        'dt': 1671318000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 260.35,
          'no': 0,
          'no2': 9.51,
          'o3': 48.64,
          'so2': 5.42,
          'pm2_5': 0.58,
          'pm10': 1.11,
          'nh3': 0.5
        },
        'dt': 1671321600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 280.38,
          'no': 0.02,
          'no2': 13.2,
          'o3': 42.2,
          'so2': 4.53,
          'pm2_5': 1.34,
          'pm10': 2.45,
          'nh3': 0.84
        },
        'dt': 1671325200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 307.08,
          'no': 0.06,
          'no2': 17.65,
          'o3': 33.26,
          'so2': 3.58,
          'pm2_5': 2.46,
          'pm10': 4.31,
          'nh3': 1.31
        },
        'dt': 1671328800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 323.77,
          'no': 0.11,
          'no2': 20.05,
          'o3': 27.9,
          'so2': 2.68,
          'pm2_5': 3.33,
          'pm10': 5.74,
          'nh3': 1.65
        },
        'dt': 1671332400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 333.79,
          'no': 0.15,
          'no2': 21.59,
          'o3': 23.96,
          'so2': 1.97,
          'pm2_5': 3.82,
          'pm10': 6.53,
          'nh3': 1.9
        },
        'dt': 1671336000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 333.79,
          'no': 0.12,
          'no2': 20.74,
          'o3': 21.64,
          'so2': 1.39,
          'pm2_5': 3.48,
          'pm10': 5.81,
          'nh3': 1.87
        },
        'dt': 1671339600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 323.77,
          'no': 0.08,
          'no2': 18.68,
          'o3': 20.92,
          'so2': 1.06,
          'pm2_5': 3.15,
          'pm10': 5.13,
          'nh3': 1.84
        },
        'dt': 1671343200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 313.76,
          'no': 0.05,
          'no2': 16.11,
          'o3': 21.28,
          'so2': 0.85,
          'pm2_5': 2.93,
          'pm10': 4.69,
          'nh3': 1.84
        },
        'dt': 1671346800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 303.75,
          'no': 0.04,
          'no2': 13.37,
          'o3': 22.89,
          'so2': 0.78,
          'pm2_5': 2.72,
          'pm10': 4.22,
          'nh3': 1.85
        },
        'dt': 1671350400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 290.39,
          'no': 0.02,
          'no2': 11.14,
          'o3': 25.03,
          'so2': 0.8,
          'pm2_5': 2.6,
          'pm10': 3.88,
          'nh3': 1.92
        },
        'dt': 1671354000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 270.37,
          'no': 0,
          'no2': 7.63,
          'o3': 35.05,
          'so2': 1.09,
          'pm2_5': 2.25,
          'pm10': 3.18,
          'nh3': 1.96
        },
        'dt': 1671357600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 257.02,
          'no': 0,
          'no2': 6.17,
          'o3': 40.77,
          'so2': 1.09,
          'pm2_5': 2.15,
          'pm10': 2.98,
          'nh3': 2.19
        },
        'dt': 1671361200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 257.02,
          'no': 0.01,
          'no2': 6.68,
          'o3': 45.78,
          'so2': 1.42,
          'pm2_5': 2.22,
          'pm10': 3.15,
          'nh3': 2.57
        },
        'dt': 1671364800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 250.34,
          'no': 0.01,
          'no2': 6.86,
          'o3': 53.64,
          'so2': 3.64,
          'pm2_5': 1.63,
          'pm10': 2.4,
          'nh3': 1.82
        },
        'dt': 1671368400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 247,
          'no': 0.36,
          'no2': 6.68,
          'o3': 56.51,
          'so2': 5.19,
          'pm2_5': 1.07,
          'pm10': 1.69,
          'nh3': 1
        },
        'dt': 1671372000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 240.33,
          'no': 0.88,
          'no2': 5.27,
          'o3': 59.37,
          'so2': 5.25,
          'pm2_5': 0.7,
          'pm10': 1.22,
          'nh3': 0.65
        },
        'dt': 1671375600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 230.31,
          'no': 0.77,
          'no2': 3.47,
          'o3': 62.94,
          'so2': 4.47,
          'pm2_5': 0.5,
          'pm10': 0.81,
          'nh3': 0.39
        },
        'dt': 1671379200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 226.97,
          'no': 0.7,
          'no2': 2.91,
          'o3': 63.66,
          'so2': 3.93,
          'pm2_5': 0.5,
          'pm10': 0.75,
          'nh3': 0.3
        },
        'dt': 1671382800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 226.97,
          'no': 0.64,
          'no2': 2.91,
          'o3': 64.37,
          'so2': 3.82,
          'pm2_5': 0.5,
          'pm10': 0.71,
          'nh3': 0.25
        },
        'dt': 1671386400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 226.97,
          'no': 0.61,
          'no2': 3.09,
          'o3': 63.66,
          'so2': 3.7,
          'pm2_5': 0.5,
          'pm10': 0.7,
          'nh3': 0.23
        },
        'dt': 1671390000
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 233.65,
          'no': 0.55,
          'no2': 3.43,
          'o3': 62.94,
          'so2': 3.61,
          'pm2_5': 0.5,
          'pm10': 0.72,
          'nh3': 0.26
        },
        'dt': 1671393600
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 240.33,
          'no': 0.32,
          'no2': 4.28,
          'o3': 60.08,
          'so2': 3.58,
          'pm2_5': 0.5,
          'pm10': 0.76,
          'nh3': 0.31
        },
        'dt': 1671397200
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 250.34,
          'no': 0.05,
          'no2': 5.57,
          'o3': 56.51,
          'so2': 3.55,
          'pm2_5': 0.5,
          'pm10': 0.8,
          'nh3': 0.39
        },
        'dt': 1671400800
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 257.02,
          'no': 0,
          'no2': 6.6,
          'o3': 53.64,
          'so2': 3.87,
          'pm2_5': 0.5,
          'pm10': 0.87,
          'nh3': 0.51
        },
        'dt': 1671404400
      },
      {
        'main': {
          'aqi': 1
        },
        'components': {
          'co': 260.35,
          'no': 0,
          'no2': 7.03,
          'o3': 52.21,
          'so2': 4.11,
          'pm2_5': 0.5,
          'pm10': 0.96,
          'nh3': 0.59
        },
        'dt': 1671408000
      }
    ]
  },
  'onecall': {
    'lat': 38.937,
    'lon': -77.3649,
    'timezone': 'America/New_York',
    'timezone_offset': -18000,
    'current': {
      'dt': 1671063091,
      'sunrise': 1671020425,
      'sunset': 1671054482,
      'temp': 36.54,
      'feels_like': 31.01,
      'pressure': 1021,
      'humidity': 55,
      'dew_point': 23.07,
      'uvi': 0,
      'clouds': 100,
      'visibility': 10000,
      'wind_speed': 6.91,
      'wind_deg': 40,
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n'
        }
      ]
    },
    'minutely': [
      {
        'dt': 1671063120,
        'precipitation': 0
      },
      {
        'dt': 1671063180,
        'precipitation': 0
      },
      {
        'dt': 1671063240,
        'precipitation': 0
      },
      {
        'dt': 1671063300,
        'precipitation': 0
      },
      {
        'dt': 1671063360,
        'precipitation': 0
      },
      {
        'dt': 1671063420,
        'precipitation': 0
      },
      {
        'dt': 1671063480,
        'precipitation': 0
      },
      {
        'dt': 1671063540,
        'precipitation': 0
      },
      {
        'dt': 1671063600,
        'precipitation': 0
      },
      {
        'dt': 1671063660,
        'precipitation': 0
      },
      {
        'dt': 1671063720,
        'precipitation': 0
      },
      {
        'dt': 1671063780,
        'precipitation': 0
      },
      {
        'dt': 1671063840,
        'precipitation': 0
      },
      {
        'dt': 1671063900,
        'precipitation': 0
      },
      {
        'dt': 1671063960,
        'precipitation': 0
      },
      {
        'dt': 1671064020,
        'precipitation': 0
      },
      {
        'dt': 1671064080,
        'precipitation': 0
      },
      {
        'dt': 1671064140,
        'precipitation': 0
      },
      {
        'dt': 1671064200,
        'precipitation': 0
      },
      {
        'dt': 1671064260,
        'precipitation': 0
      },
      {
        'dt': 1671064320,
        'precipitation': 0
      },
      {
        'dt': 1671064380,
        'precipitation': 0
      },
      {
        'dt': 1671064440,
        'precipitation': 0
      },
      {
        'dt': 1671064500,
        'precipitation': 0
      },
      {
        'dt': 1671064560,
        'precipitation': 0
      },
      {
        'dt': 1671064620,
        'precipitation': 0
      },
      {
        'dt': 1671064680,
        'precipitation': 0
      },
      {
        'dt': 1671064740,
        'precipitation': 0
      },
      {
        'dt': 1671064800,
        'precipitation': 0
      },
      {
        'dt': 1671064860,
        'precipitation': 0
      },
      {
        'dt': 1671064920,
        'precipitation': 0
      },
      {
        'dt': 1671064980,
        'precipitation': 0
      },
      {
        'dt': 1671065040,
        'precipitation': 0
      },
      {
        'dt': 1671065100,
        'precipitation': 0
      },
      {
        'dt': 1671065160,
        'precipitation': 0
      },
      {
        'dt': 1671065220,
        'precipitation': 0
      },
      {
        'dt': 1671065280,
        'precipitation': 0
      },
      {
        'dt': 1671065340,
        'precipitation': 0
      },
      {
        'dt': 1671065400,
        'precipitation': 0
      },
      {
        'dt': 1671065460,
        'precipitation': 0
      },
      {
        'dt': 1671065520,
        'precipitation': 0
      },
      {
        'dt': 1671065580,
        'precipitation': 0
      },
      {
        'dt': 1671065640,
        'precipitation': 0
      },
      {
        'dt': 1671065700,
        'precipitation': 0
      },
      {
        'dt': 1671065760,
        'precipitation': 0
      },
      {
        'dt': 1671065820,
        'precipitation': 0
      },
      {
        'dt': 1671065880,
        'precipitation': 0
      },
      {
        'dt': 1671065940,
        'precipitation': 0
      },
      {
        'dt': 1671066000,
        'precipitation': 0
      },
      {
        'dt': 1671066060,
        'precipitation': 0
      },
      {
        'dt': 1671066120,
        'precipitation': 0
      },
      {
        'dt': 1671066180,
        'precipitation': 0
      },
      {
        'dt': 1671066240,
        'precipitation': 0
      },
      {
        'dt': 1671066300,
        'precipitation': 0
      },
      {
        'dt': 1671066360,
        'precipitation': 0
      },
      {
        'dt': 1671066420,
        'precipitation': 0
      },
      {
        'dt': 1671066480,
        'precipitation': 0
      },
      {
        'dt': 1671066540,
        'precipitation': 0
      },
      {
        'dt': 1671066600,
        'precipitation': 0
      },
      {
        'dt': 1671066660,
        'precipitation': 0
      },
      {
        'dt': 1671066720,
        'precipitation': 0
      }
    ],
    'hourly': [
      {
        'dt': 1671062400,
        'temp': 36.54,
        'feels_like': 33.71,
        'pressure': 1021,
        'humidity': 55,
        'dew_point': 23.07,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 3.62,
        'wind_deg': 53,
        'wind_gust': 4.29,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671066000,
        'temp': 35.96,
        'feels_like': 35.96,
        'pressure': 1021,
        'humidity': 53,
        'dew_point': 21.81,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 2.66,
        'wind_deg': 34,
        'wind_gust': 3.18,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671069600,
        'temp': 35.13,
        'feels_like': 32.41,
        'pressure': 1021,
        'humidity': 51,
        'dew_point': 20.32,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 3.36,
        'wind_deg': 56,
        'wind_gust': 4.94,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671073200,
        'temp': 34.45,
        'feels_like': 34.45,
        'pressure': 1022,
        'humidity': 49,
        'dew_point': 18.91,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 2.46,
        'wind_deg': 49,
        'wind_gust': 3.09,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671076800,
        'temp': 33.91,
        'feels_like': 33.91,
        'pressure': 1022,
        'humidity': 47,
        'dew_point': 17.62,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 2.53,
        'wind_deg': 74,
        'wind_gust': 3.33,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671080400,
        'temp': 34.27,
        'feels_like': 34.27,
        'pressure': 1022,
        'humidity': 44,
        'dew_point': 14.43,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 2.59,
        'wind_deg': 93,
        'wind_gust': 4.27,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671084000,
        'temp': 34.99,
        'feels_like': 31.32,
        'pressure': 1021,
        'humidity': 44,
        'dew_point': 15.06,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 4.21,
        'wind_deg': 86,
        'wind_gust': 8.5,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.03
      },
      {
        'dt': 1671087600,
        'temp': 35.37,
        'feels_like': 31.95,
        'pressure': 1022,
        'humidity': 46,
        'dew_point': 16.45,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 4.03,
        'wind_deg': 112,
        'wind_gust': 9.53,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.36
      },
      {
        'dt': 1671091200,
        'temp': 34.56,
        'feels_like': 30.34,
        'pressure': 1021,
        'humidity': 57,
        'dew_point': 21.15,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 4.7,
        'wind_deg': 128,
        'wind_gust': 11.23,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          },
          {
            'id': 613,
            'main': 'Snow',
            'description': 'shower sleet',
            'icon': '13n'
          }
        ],
        'pop': 0.64,
        'rain': {
          '1h': 0.69
        }
      },
      {
        'dt': 1671094800,
        'temp': 33.39,
        'feels_like': 28.92,
        'pressure': 1021,
        'humidity': 74,
        'dew_point': 26.19,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 4.76,
        'wind_deg': 117,
        'wind_gust': 12.82,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          },
          {
            'id': 613,
            'main': 'Snow',
            'description': 'shower sleet',
            'icon': '13n'
          }
        ],
        'pop': 0.84,
        'rain': {
          '1h': 1.43
        }
      },
      {
        'dt': 1671098400,
        'temp': 32.52,
        'feels_like': 26.83,
        'pressure': 1021,
        'humidity': 85,
        'dew_point': 28.78,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 6.02,
        'wind_deg': 106,
        'wind_gust': 14.41,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          },
          {
            'id': 511,
            'main': 'Rain',
            'description': 'freezing rain',
            'icon': '13n'
          }
        ],
        'pop': 0.98,
        'rain': {
          '1h': 1.56
        }
      },
      {
        'dt': 1671102000,
        'temp': 32.05,
        'feels_like': 25.52,
        'pressure': 1020,
        'humidity': 92,
        'dew_point': 30.15,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 7.07,
        'wind_deg': 102,
        'wind_gust': 19.19,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 2.16
        }
      },
      {
        'dt': 1671105600,
        'temp': 31.42,
        'feels_like': 24.4,
        'pressure': 1020,
        'humidity': 98,
        'dew_point': 31.05,
        'uvi': 0,
        'clouds': 100,
        'visibility': 447,
        'wind_speed': 7.58,
        'wind_deg': 104,
        'wind_gust': 21.68,
        'weather': [
          {
            'id': 601,
            'main': 'Snow',
            'description': 'snow',
            'icon': '13n'
          },
          {
            'id': 511,
            'main': 'Rain',
            'description': 'freezing rain',
            'icon': '13n'
          }
        ],
        'pop': 1,
        'snow': {
          '1h': 2.4
        }
      },
      {
        'dt': 1671109200,
        'temp': 31.51,
        'feels_like': 25.39,
        'pressure': 1019,
        'humidity': 98,
        'dew_point': 31.26,
        'uvi': 0,
        'clouds': 100,
        'visibility': 840,
        'wind_speed': 6.33,
        'wind_deg': 113,
        'wind_gust': 23.13,
        'weather': [
          {
            'id': 601,
            'main': 'Snow',
            'description': 'snow',
            'icon': '13d'
          },
          {
            'id': 511,
            'main': 'Rain',
            'description': 'freezing rain',
            'icon': '13d'
          }
        ],
        'pop': 1,
        'snow': {
          '1h': 3.07
        }
      },
      {
        'dt': 1671112800,
        'temp': 31.71,
        'feels_like': 28.44,
        'pressure': 1020,
        'humidity': 99,
        'dew_point': 31.73,
        'uvi': 0.04,
        'clouds': 100,
        'visibility': 611,
        'wind_speed': 3.42,
        'wind_deg': 97,
        'wind_gust': 15.59,
        'weather': [
          {
            'id': 601,
            'main': 'Snow',
            'description': 'snow',
            'icon': '13d'
          },
          {
            'id': 511,
            'main': 'Rain',
            'description': 'freezing rain',
            'icon': '13d'
          }
        ],
        'pop': 1,
        'snow': {
          '1h': 1.4
        }
      },
      {
        'dt': 1671116400,
        'temp': 31.78,
        'feels_like': 28.71,
        'pressure': 1020,
        'humidity': 100,
        'dew_point': 31.95,
        'uvi': 0.1,
        'clouds': 100,
        'visibility': 382,
        'wind_speed': 3.27,
        'wind_deg': 119,
        'wind_gust': 16.24,
        'weather': [
          {
            'id': 601,
            'main': 'Snow',
            'description': 'snow',
            'icon': '13d'
          },
          {
            'id': 511,
            'main': 'Rain',
            'description': 'freezing rain',
            'icon': '13d'
          }
        ],
        'pop': 1,
        'snow': {
          '1h': 2.37
        }
      },
      {
        'dt': 1671120000,
        'temp': 31.89,
        'feels_like': 26.94,
        'pressure': 1019,
        'humidity': 100,
        'dew_point': 32.05,
        'uvi': 0.27,
        'clouds': 100,
        'visibility': 224,
        'wind_speed': 5.01,
        'wind_deg': 97,
        'wind_gust': 22.62,
        'weather': [
          {
            'id': 601,
            'main': 'Snow',
            'description': 'snow',
            'icon': '13d'
          }
        ],
        'pop': 1,
        'snow': {
          '1h': 1.56
        }
      },
      {
        'dt': 1671123600,
        'temp': 32.45,
        'feels_like': 26.47,
        'pressure': 1018,
        'humidity': 100,
        'dew_point': 32.61,
        'uvi': 0.32,
        'clouds': 100,
        'visibility': 145,
        'wind_speed': 6.4,
        'wind_deg': 85,
        'wind_gust': 25.34,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 0.94
        }
      },
      {
        'dt': 1671127200,
        'temp': 32.94,
        'feels_like': 28.22,
        'pressure': 1017,
        'humidity': 100,
        'dew_point': 33.17,
        'uvi': 0.29,
        'clouds': 100,
        'visibility': 125,
        'wind_speed': 4.94,
        'wind_deg': 70,
        'wind_gust': 20.33,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 0.88
        }
      },
      {
        'dt': 1671130800,
        'temp': 33.35,
        'feels_like': 28.71,
        'pressure': 1016,
        'humidity': 100,
        'dew_point': 33.58,
        'uvi': 0.17,
        'clouds': 100,
        'visibility': 96,
        'wind_speed': 4.94,
        'wind_deg': 61,
        'wind_gust': 19.8,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 0.27
        }
      },
      {
        'dt': 1671134400,
        'temp': 33.71,
        'feels_like': 28.53,
        'pressure': 1015,
        'humidity': 100,
        'dew_point': 33.96,
        'uvi': 0.08,
        'clouds': 100,
        'visibility': 103,
        'wind_speed': 5.66,
        'wind_deg': 52,
        'wind_gust': 20.62,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 0.81
        }
      },
      {
        'dt': 1671138000,
        'temp': 34.21,
        'feels_like': 29.1,
        'pressure': 1014,
        'humidity': 100,
        'dew_point': 34.47,
        'uvi': 0.02,
        'clouds': 100,
        'visibility': 114,
        'wind_speed': 5.7,
        'wind_deg': 51,
        'wind_gust': 22.19,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10d'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 2.03
        }
      },
      {
        'dt': 1671141600,
        'temp': 35.13,
        'feels_like': 30.42,
        'pressure': 1013,
        'humidity': 100,
        'dew_point': 35.38,
        'uvi': 0,
        'clouds': 100,
        'visibility': 87,
        'wind_speed': 5.41,
        'wind_deg': 52,
        'wind_gust': 20.78,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 1.02
        }
      },
      {
        'dt': 1671145200,
        'temp': 35.62,
        'feels_like': 30.96,
        'pressure': 1012,
        'humidity': 100,
        'dew_point': 35.87,
        'uvi': 0,
        'clouds': 100,
        'visibility': 73,
        'wind_speed': 5.46,
        'wind_deg': 29,
        'wind_gust': 21.12,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 0.47
        }
      },
      {
        'dt': 1671148800,
        'temp': 35.71,
        'feels_like': 31.53,
        'pressure': 1012,
        'humidity': 100,
        'dew_point': 35.94,
        'uvi': 0,
        'clouds': 100,
        'visibility': 79,
        'wind_speed': 4.88,
        'wind_deg': 345,
        'wind_gust': 16.44,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 1
        }
      },
      {
        'dt': 1671152400,
        'temp': 35.29,
        'feels_like': 29.16,
        'pressure': 1011,
        'humidity': 100,
        'dew_point': 35.53,
        'uvi': 0,
        'clouds': 100,
        'visibility': 99,
        'wind_speed': 7.49,
        'wind_deg': 335,
        'wind_gust': 14.23,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 1.25
        }
      },
      {
        'dt': 1671156000,
        'temp': 35.44,
        'feels_like': 28.71,
        'pressure': 1011,
        'humidity': 100,
        'dew_point': 35.65,
        'uvi': 0,
        'clouds': 100,
        'visibility': 124,
        'wind_speed': 8.59,
        'wind_deg': 338,
        'wind_gust': 17.98,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 1.86
        }
      },
      {
        'dt': 1671159600,
        'temp': 35.06,
        'feels_like': 28.11,
        'pressure': 1010,
        'humidity': 100,
        'dew_point': 35.28,
        'uvi': 0,
        'clouds': 100,
        'visibility': 122,
        'wind_speed': 8.81,
        'wind_deg': 336,
        'wind_gust': 19.24,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 1.22
        }
      },
      {
        'dt': 1671163200,
        'temp': 35.17,
        'feels_like': 27.95,
        'pressure': 1009,
        'humidity': 100,
        'dew_point': 35.37,
        'uvi': 0,
        'clouds': 100,
        'visibility': 119,
        'wind_speed': 9.4,
        'wind_deg': 334,
        'wind_gust': 21.83,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 0.41
        }
      },
      {
        'dt': 1671166800,
        'temp': 35.1,
        'feels_like': 27.36,
        'pressure': 1009,
        'humidity': 100,
        'dew_point': 35.28,
        'uvi': 0,
        'clouds': 100,
        'visibility': 598,
        'wind_speed': 10.42,
        'wind_deg': 325,
        'wind_gust': 23.26,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.8
      },
      {
        'dt': 1671170400,
        'temp': 35.06,
        'feels_like': 27.1,
        'pressure': 1008,
        'humidity': 99,
        'dew_point': 35.13,
        'uvi': 0,
        'clouds': 100,
        'visibility': 2503,
        'wind_speed': 10.89,
        'wind_deg': 321,
        'wind_gust': 24.96,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'pop': 1,
        'rain': {
          '1h': 0.22
        }
      },
      {
        'dt': 1671174000,
        'temp': 35.35,
        'feels_like': 27.73,
        'pressure': 1008,
        'humidity': 99,
        'dew_point': 35.38,
        'uvi': 0,
        'clouds': 100,
        'visibility': 3294,
        'wind_speed': 10.29,
        'wind_deg': 319,
        'wind_gust': 24.61,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'pop': 0.5,
        'rain': {
          '1h': 0.19
        }
      },
      {
        'dt': 1671177600,
        'temp': 35.4,
        'feels_like': 27.61,
        'pressure': 1008,
        'humidity': 99,
        'dew_point': 35.33,
        'uvi': 0,
        'clouds': 100,
        'visibility': 5536,
        'wind_speed': 10.71,
        'wind_deg': 312,
        'wind_gust': 25.43,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.38
      },
      {
        'dt': 1671181200,
        'temp': 35.67,
        'feels_like': 27.93,
        'pressure': 1008,
        'humidity': 98,
        'dew_point': 35.51,
        'uvi': 0,
        'clouds': 100,
        'visibility': 6938,
        'wind_speed': 10.76,
        'wind_deg': 317,
        'wind_gust': 26.75,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.34
      },
      {
        'dt': 1671184800,
        'temp': 35.98,
        'feels_like': 28.22,
        'pressure': 1008,
        'humidity': 98,
        'dew_point': 35.71,
        'uvi': 0,
        'clouds': 100,
        'visibility': 7527,
        'wind_speed': 10.96,
        'wind_deg': 320,
        'wind_gust': 27.74,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.3
      },
      {
        'dt': 1671188400,
        'temp': 36.32,
        'feels_like': 29.05,
        'pressure': 1009,
        'humidity': 98,
        'dew_point': 35.94,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 10.09,
        'wind_deg': 322,
        'wind_gust': 27.36,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.28
      },
      {
        'dt': 1671192000,
        'temp': 36.39,
        'feels_like': 29.71,
        'pressure': 1009,
        'humidity': 97,
        'dew_point': 35.91,
        'uvi': 0,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 8.9,
        'wind_deg': 320,
        'wind_gust': 26.71,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.28
      },
      {
        'dt': 1671195600,
        'temp': 36.09,
        'feels_like': 29.28,
        'pressure': 1010,
        'humidity': 97,
        'dew_point': 35.46,
        'uvi': 0,
        'clouds': 79,
        'visibility': 10000,
        'wind_speed': 9.01,
        'wind_deg': 310,
        'wind_gust': 26.82,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'pop': 0.13
      },
      {
        'dt': 1671199200,
        'temp': 37.08,
        'feels_like': 30.49,
        'pressure': 1010,
        'humidity': 95,
        'dew_point': 36,
        'uvi': 0.41,
        'clouds': 64,
        'visibility': 10000,
        'wind_speed': 9.01,
        'wind_deg': 307,
        'wind_gust': 27.56,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'pop': 0.07
      },
      {
        'dt': 1671202800,
        'temp': 38.7,
        'feels_like': 32.52,
        'pressure': 1010,
        'humidity': 93,
        'dew_point': 37.11,
        'uvi': 0.91,
        'clouds': 51,
        'visibility': 10000,
        'wind_speed': 8.95,
        'wind_deg': 309,
        'wind_gust': 26.51,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'pop': 0.07
      },
      {
        'dt': 1671206400,
        'temp': 39.47,
        'feels_like': 33.15,
        'pressure': 1010,
        'humidity': 91,
        'dew_point': 37.22,
        'uvi': 1.35,
        'clouds': 45,
        'visibility': 10000,
        'wind_speed': 9.64,
        'wind_deg': 307,
        'wind_gust': 24.49,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'pop': 0.05
      },
      {
        'dt': 1671210000,
        'temp': 39.58,
        'feels_like': 33.15,
        'pressure': 1010,
        'humidity': 89,
        'dew_point': 36.79,
        'uvi': 1.61,
        'clouds': 45,
        'visibility': 6525,
        'wind_speed': 9.91,
        'wind_deg': 307,
        'wind_gust': 23.78,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'pop': 0.05
      },
      {
        'dt': 1671213600,
        'temp': 39.76,
        'feels_like': 33.31,
        'pressure': 1009,
        'humidity': 88,
        'dew_point': 36.52,
        'uvi': 1.47,
        'clouds': 44,
        'visibility': 10000,
        'wind_speed': 10.07,
        'wind_deg': 307,
        'wind_gust': 23.62,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'pop': 0.02
      },
      {
        'dt': 1671217200,
        'temp': 39.81,
        'feels_like': 33.53,
        'pressure': 1009,
        'humidity': 87,
        'dew_point': 36.32,
        'uvi': 1.11,
        'clouds': 37,
        'visibility': 10000,
        'wind_speed': 9.71,
        'wind_deg': 309,
        'wind_gust': 23.22,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671220800,
        'temp': 39.65,
        'feels_like': 34.2,
        'pressure': 1010,
        'humidity': 87,
        'dew_point': 36.14,
        'uvi': 0.56,
        'clouds': 37,
        'visibility': 10000,
        'wind_speed': 7.94,
        'wind_deg': 309,
        'wind_gust': 21.39,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671224400,
        'temp': 38.68,
        'feels_like': 34.2,
        'pressure': 1010,
        'humidity': 89,
        'dew_point': 35.92,
        'uvi': 0.17,
        'clouds': 34,
        'visibility': 10000,
        'wind_speed': 5.99,
        'wind_deg': 298,
        'wind_gust': 18.79,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671228000,
        'temp': 35.82,
        'feels_like': 31.69,
        'pressure': 1010,
        'humidity': 92,
        'dew_point': 34.03,
        'uvi': 0,
        'clouds': 32,
        'visibility': 10000,
        'wind_speed': 4.83,
        'wind_deg': 291,
        'wind_gust': 15.08,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1671231600,
        'temp': 35.31,
        'feels_like': 30.4,
        'pressure': 1011,
        'humidity': 90,
        'dew_point': 32.86,
        'uvi': 0,
        'clouds': 28,
        'visibility': 10000,
        'wind_speed': 5.7,
        'wind_deg': 296,
        'wind_gust': 20.96,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03n'
          }
        ],
        'pop': 0
      }
    ],
    'daily': [
      {
        'dt': 1671037200,
        'sunrise': 1671020425,
        'sunset': 1671054482,
        'moonrise': 1671075960,
        'moonset': 1671036900,
        'moon_phase': 0.7,
        'temp': {
          'day': 39.63,
          'min': 28.78,
          'max': 41.09,
          'night': 33.91,
          'eve': 36.27,
          'morn': 29.14
        },
        'feels_like': {
          'day': 37.33,
          'night': 33.91,
          'eve': 36.27,
          'morn': 26.08
        },
        'pressure': 1023,
        'humidity': 34,
        'dew_point': 13.98,
        'wind_speed': 5.21,
        'wind_deg': 11,
        'wind_gust': 8.05,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ],
        'clouds': 100,
        'pop': 0,
        'uvi': 1.63
      },
      {
        'dt': 1671123600,
        'sunrise': 1671106866,
        'sunset': 1671140897,
        'moonrise': 1671166020,
        'moonset': 1671124680,
        'moon_phase': 0.73,
        'temp': {
          'day': 32.45,
          'min': 31.42,
          'max': 35.71,
          'night': 35.17,
          'eve': 35.62,
          'morn': 32.05
        },
        'feels_like': {
          'day': 26.47,
          'night': 27.95,
          'eve': 30.96,
          'morn': 25.52
        },
        'pressure': 1018,
        'humidity': 100,
        'dew_point': 32.61,
        'wind_speed': 9.4,
        'wind_deg': 334,
        'wind_gust': 25.34,
        'weather': [
          {
            'id': 616,
            'main': 'Snow',
            'description': 'rain and snow',
            'icon': '13d'
          }
        ],
        'clouds': 100,
        'pop': 1,
        'rain': 18,
        'snow': 10.8,
        'uvi': 0.32
      },
      {
        'dt': 1671210000,
        'sunrise': 1671193306,
        'sunset': 1671227314,
        'moonrise': 0,
        'moonset': 1671212460,
        'moon_phase': 0.75,
        'temp': {
          'day': 39.58,
          'min': 31.95,
          'max': 39.81,
          'night': 31.95,
          'eve': 35.31,
          'morn': 36.32
        },
        'feels_like': {
          'day': 33.15,
          'night': 27.3,
          'eve': 30.4,
          'morn': 29.05
        },
        'pressure': 1010,
        'humidity': 89,
        'dew_point': 36.79,
        'wind_speed': 10.96,
        'wind_deg': 320,
        'wind_gust': 27.74,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': 45,
        'pop': 1,
        'rain': 0.41,
        'uvi': 1.61
      },
      {
        'dt': 1671296400,
        'sunrise': 1671279743,
        'sunset': 1671313733,
        'moonrise': 1671256080,
        'moonset': 1671300240,
        'moon_phase': 0.79,
        'temp': {
          'day': 37.4,
          'min': 29.19,
          'max': 38.66,
          'night': 29.75,
          'eve': 31.64,
          'morn': 29.37
        },
        'feels_like': {
          'day': 30.31,
          'night': 24.78,
          'eve': 28.63,
          'morn': 24.66
        },
        'pressure': 1012,
        'humidity': 63,
        'dew_point': 26.22,
        'wind_speed': 10.27,
        'wind_deg': 295,
        'wind_gust': 20.27,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'clouds': 35,
        'pop': 0,
        'uvi': 1.79
      },
      {
        'dt': 1671382800,
        'sunrise': 1671366180,
        'sunset': 1671400154,
        'moonrise': 1671346320,
        'moonset': 1671388080,
        'moon_phase': 0.83,
        'temp': {
          'day': 35.28,
          'min': 27.7,
          'max': 36.27,
          'night': 27.7,
          'eve': 30.42,
          'morn': 27.91
        },
        'feels_like': {
          'day': 27.55,
          'night': 20.12,
          'eve': 23.47,
          'morn': 22.42
        },
        'pressure': 1017,
        'humidity': 57,
        'dew_point': 21.72,
        'wind_speed': 10.65,
        'wind_deg': 299,
        'wind_gust': 24.61,
        'weather': [
          {
            'id': 801,
            'main': 'Clouds',
            'description': 'few clouds',
            'icon': '02d'
          }
        ],
        'clouds': 24,
        'pop': 0,
        'uvi': 1.46
      },
      {
        'dt': 1671469200,
        'sunrise': 1671452614,
        'sunset': 1671486577,
        'moonrise': 1671436740,
        'moonset': 1671476040,
        'moon_phase': 0.86,
        'temp': {
          'day': 38.34,
          'min': 26.92,
          'max': 38.34,
          'night': 30.69,
          'eve': 31.77,
          'morn': 27
        },
        'feels_like': {
          'day': 31.3,
          'night': 24.04,
          'eve': 25.77,
          'morn': 18.41
        },
        'pressure': 1025,
        'humidity': 49,
        'dew_point': 20.82,
        'wind_speed': 10.74,
        'wind_deg': 298,
        'wind_gust': 27.87,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': 2,
        'pop': 0,
        'uvi': 2
      },
      {
        'dt': 1671555600,
        'sunrise': 1671539046,
        'sunset': 1671573002,
        'moonrise': 1671527400,
        'moonset': 1671564360,
        'moon_phase': 0.9,
        'temp': {
          'day': 35.76,
          'min': 27.64,
          'max': 35.76,
          'night': 27.64,
          'eve': 28.63,
          'morn': 28.58
        },
        'feels_like': {
          'day': 27.36,
          'night': 18.73,
          'eve': 21.7,
          'morn': 19.8
        },
        'pressure': 1027,
        'humidity': 49,
        'dew_point': 18.52,
        'wind_speed': 12.41,
        'wind_deg': 307,
        'wind_gust': 26.89,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'clouds': 69,
        'pop': 0,
        'uvi': 2
      },
      {
        'dt': 1671642000,
        'sunrise': 1671625477,
        'sunset': 1671659429,
        'moonrise': 1671618360,
        'moonset': 1671653160,
        'moon_phase': 0.93,
        'temp': {
          'day': 31.06,
          'min': 24.03,
          'max': 31.06,
          'night': 25.29,
          'eve': 25.86,
          'morn': 24.03
        },
        'feels_like': {
          'day': 21.67,
          'night': 17.76,
          'eve': 18.12,
          'morn': 13.89
        },
        'pressure': 1029,
        'humidity': 43,
        'dew_point': 11.62,
        'wind_speed': 12.73,
        'wind_deg': 310,
        'wind_gust': 23.89,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': 6,
        'pop': 0,
        'uvi': 2
      }
    ],
    'alerts': []
  }
}

export {
  defaultWeatherResponseWithAlert,
  defaultWeatherResponseWithNoAlert
}
