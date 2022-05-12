var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.11837885361352463,
        "pitch": 0.019897929224789834,
        "fov": 1.1704996438068975
      },
      "linkHotspots": [
        {
          "yaw": -0.7727720555525632,
          "pitch": -0.009398631450810768,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.756502070505551,
          "pitch": 0.0846166704118474,
          "title": "Welcome",
          "text": "Abandon hope all ye who enters"
        },
        {
          "yaw": -1.3470165158885976,
          "pitch": 0.23071358640141248,
          "title": "Road",
          "text": "Be careful of getting knocked down by vehicles"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.18573551687570955,
        "pitch": -0.1629430891684791,
        "fov": 1.1704996438068975
      },
      "linkHotspots": [
        {
          "yaw": -0.014390344174287861,
          "pitch": 0.04397608276504883,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.72443647543993,
          "pitch": -0.14342968955707214,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2472363563860895,
          "pitch": -0.6973768109913934,
          "title": "A sculpture",
          "text": "The art students are at it again"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.8028902045734725,
        "pitch": 0.029306800275689326,
        "fov": 1.1704996438068975
      },
      "linkHotspots": [
        {
          "yaw": -2.9655288302095606,
          "pitch": -0.11952149555681757,
          "rotation": 3.9269908169872414,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.147114487929306,
          "pitch": -0.24519920607565204,
          "title": "Coffee shop",
          "text": "Queue here for survival drinks"
        }
      ]
    }
  ],
  "name": "NUS area",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
