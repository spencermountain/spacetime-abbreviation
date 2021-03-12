module.exports = [
  {
    name: 'Samoa Time',
    abbr: 'SST',
    aliases: ['samoa', 'samoa standard time'],
    ids: ['Pacific/Midway', 'Pacific/Pago_Pago'],
    std: {
      name: 'Samoa Standard Time',
      offset: -11
    },
    dst: {},
    long: '(UTC+13:00) Samoa'
  },
  {
    name: 'Niue Time',
    abbr: null,
    aliases: ['niue'],
    ids: ['Pacific/Niue'],
    std: {
      name: 'Niue Time',
      offset: -11
    },
    dst: {}
  },
  {
    name: 'Cook Islands Time',
    abbr: 'CKT',
    aliases: ['cook'],
    ids: ['Pacific/Rarotonga'],
    std: {
      name: 'Cook Islands Standard Time',
      offset: -10
    },
    dst: {}
  },
  {
    name: 'Tahiti Time',
    abbr: null,
    aliases: ['tahiti'],
    ids: ['Pacific/Tahiti'],
    std: {
      name: 'Tahiti Time',
      offset: -10
    },
    dst: {}
  },
  {
    name: 'Marquesas Time',
    abbr: null,
    aliases: ['marquesas', 'marquesas standard time'],
    ids: ['Pacific/Marquesas'],
    std: {
      name: 'Marquesas Time',
      offset: -9.5
    },
    dst: {},
    long: '(UTC-09:30) Marquesas Islands'
  },
  {
    name: 'Hawaii-Aleutian Time',
    abbr: 'HAT',
    aliases: ['hawaii aleutian', 'aleutian standard time', 'aleutian'],
    ids: ['America/Adak', 'Pacific/Honolulu', 'Pacific/Johnston'],
    std: {
      name: 'Hawaii-Aleutian Standard Time',
      abbr: 'HAST',
      offset: -9
    },
    dst: {
      name: 'Hawaii-Aleutian Daylight Time',
      abbr: 'HADT',
      offset: -8
    },
    long: '(UTC-09:00) Aleutian Islands'
  },
  {
    name: 'Alaska Time',
    abbr: 'AKT',
    aliases: ['alaska', 'alaskan standard time', 'alaskan'],
    ids: [
      'America/Anchorage',
      'America/Juneau',
      'America/Metlakatla',
      'America/Nome',
      'America/Sitka',
      'America/Yakutat'
    ],
    std: {
      name: 'Alaska Standard Time',
      abbr: 'AKST',
      offset: -9
    },
    dst: {
      name: 'Alaska Daylight Time',
      abbr: 'AKDT',
      offset: -8
    },
    long: '(UTC-09:00) Alaska'
  },
  {
    name: 'Gambier Time',
    abbr: null,
    aliases: ['gambier', 'utc-09', 'coordinated universal time-09'],
    ids: ['Pacific/Gambier'],
    std: {
      name: 'Gambier Time',
      offset: -9
    },
    dst: {},
    long: '(UTC-09:00) Coordinated Universal Time-09'
  },
  {
    name: 'Pacific Time',
    abbr: 'PT',
    aliases: ['america pacific', 'pacific standard time', 'pacific'],
    ids: ['America/Los_Angeles', 'America/Tijuana', 'America/Vancouver'],
    std: {
      name: 'Pacific Standard Time',
      abbr: 'PST',
      offset: -8
    },
    dst: {
      name: 'Pacific Daylight Time',
      abbr: 'PDT',
      offset: -7
    },
    long: '(UTC-08:00) Pacific Time (US & Canada)'
  },
  {
    name: 'Pitcairn Time',
    abbr: null,
    aliases: ['pitcairn', 'utc-08', 'coordinated universal time-08'],
    ids: ['Pacific/Pitcairn'],
    std: {
      name: 'Pitcairn Time',
      offset: -8
    },
    dst: {},
    long: '(UTC-08:00) Coordinated Universal Time-08'
  },
  {
    name: 'Mountain Time',
    abbr: 'MT',
    aliases: ['america mountain', 'mountain standard time', 'mountain'],
    ids: [
      'America/Phoenix',
      'America/Boise',
      'America/Cambridge_Bay',
      'America/Creston',
      'America/Dawson',
      'America/Dawson_Creek',
      'America/Denver',
      'America/Edmonton',
      'America/Fort_Nelson',
      'America/Inuvik',
      'America/Ojinaga',
      'America/Whitehorse',
      'America/Yellowknife'
    ],
    std: {
      name: 'Mountain Standard Time',
      abbr: 'MST',
      offset: -7
    },
    dst: {
      name: 'Mountain Daylight Time',
      abbr: 'MDT',
      offset: -6
    },
    long: '(UTC-07:00) Mountain Time (US & Canada)'
  },
  {
    name: 'Mexican Pacific Time',
    abbr: 'HPMX',
    aliases: [
      'mexico pacific',
      'mountain standard time (mexico)',
      'chihuahua',
      'la paz',
      'mazatlan',
      'mountain mexico'
    ],
    ids: ['America/Chihuahua', 'America/Hermosillo', 'America/Mazatlan'],
    std: {
      name: 'Mexican Pacific Standard Time',
      abbr: 'HNPMX',
      offset: -7
    },
    dst: {
      name: 'Mexican Pacific Daylight Time',
      abbr: 'HEPMX',
      offset: -6
    },
    long: '(UTC-07:00) Chihuahua, La Paz, Mazatlan'
  },
  {
    name: 'Central Time',
    abbr: 'CT',
    aliases: ['america central', 'central standard time', 'central'],
    ids: [
      'America/Chicago',
      'America/Bahia_Banderas',
      'America/Belize',
      'America/Costa_Rica',
      'America/El_Salvador',
      'America/Guatemala',
      'America/Indiana/Knox',
      'America/Indiana/Tell_City',
      'America/Managua',
      'America/Matamoros',
      'America/Menominee',
      'America/Merida',
      'America/Mexico_City',
      'America/Monterrey',
      'America/North_Dakota/Beulah',
      'America/North_Dakota/Center',
      'America/North_Dakota/New_Salem',
      'America/Rainy_River',
      'America/Rankin_Inlet',
      'America/Regina',
      'America/Resolute',
      'America/Swift_Current',
      'America/Tegucigalpa',
      'America/Winnipeg',
      'America/Indiana',
      'America/North_Dakota'
    ],
    std: {
      name: 'Central Standard Time',
      abbr: 'CST',
      offset: -6
    },
    dst: {
      name: 'Central Daylight Time',
      abbr: 'CDT',
      offset: -5
    },
    long: '(UTC-06:00) Central Time (US & Canada)'
  },
  {
    name: 'Northwest Mexico Time',
    abbr: 'HNOMX',
    aliases: [
      'mexico northwest',
      'pacific standard time (mexico)',
      'baja california',
      'pacific mexico'
    ],
    ids: ['America/Santa_Isabel'],
    std: {
      name: 'Northwest Mexico Standard Time',
      abbr: 'HNNOMX',
      offset: -6
    },
    dst: {
      name: 'Northwest Mexico Daylight Time',
      abbr: 'HENOMX',
      offset: -5
    },
    long: '(UTC-08:00) Baja California'
  },
  {
    name: 'Easter Island Time',
    abbr: null,
    aliases: ['easter', 'easter island standard time', 'easter island'],
    ids: ['Pacific/Easter'],
    std: {
      name: 'Easter Island Standard Time',
      abbr: 'EAST',
      offset: -6
    },
    dst: {
      name: 'Easter Island Summer Time',
      abbr: 'EASST',
      offset: -5
    },
    long: '(UTC-06:00) Easter Island'
  },
  {
    name: 'Colombia Time',
    abbr: 'COT',
    aliases: ['colombia', 'cost'],
    ids: ['America/Bogota', 'Pacific/Galapagos'],
    std: {
      name: 'Colombia Standard Time',
      abbr: 'COT',
      offset: -5
    },
    dst: {}
  },
  {
    name: 'Eastern Time',
    abbr: 'ET',
    aliases: ['america eastern', 'eastern standard time', 'eastern'],
    ids: [
      'America/New_York',
      'America/Coral_Harbour',
      'America/Detroit',
      'America/Grand_Turk',
      'America/Indiana/Marengo',
      'America/Indiana/Petersburg',
      'America/Indiana/Vevay',
      'America/Indiana/Vincennes',
      'America/Indiana/Winamac',
      'America/Indianapolis',
      'America/Iqaluit',
      'America/Kentucky/Monticello',
      'America/Louisville',
      'America/Nassau',
      'America/Nipigon',
      'America/Pangnirtung',
      'America/Port-au-Prince',
      'America/Thunder_Bay',
      'America/Toronto',
      'America/Montreal',
      'America/Kentucky',
      'America/Cancun', //
      'America/Cayman', //
      'America/Jamaica', //
      'America/Panama' //
    ],
    std: {
      name: 'Eastern Standard Time',
      abbr: 'EST',
      offset: -5
    },
    dst: {
      name: 'Eastern Daylight Time',
      abbr: 'EDT',
      offset: -4
    },
    long: '(UTC-05:00) Eastern Time (US & Canada)'
  },
  {
    name: 'Acre Time',
    abbr: null,
    aliases: ['acre'],
    ids: ['America/Eirunepe', 'America/Rio_Branco'],
    std: {
      name: 'Acre Standard Time',
      offset: -5
    },
    dst: {}
  },
  {
    name: 'Ecuador Time',
    abbr: null,
    aliases: ['ecuador'],
    ids: ['America/Guayaquil'],
    std: {
      name: 'Ecuador Time',
      abbr: 'ECT',
      offset: -5
    },
    dst: {}
  },
  {
    name: 'Cuba Time',
    abbr: 'HCU',
    aliases: ['cuba', 'cuba standard time', 'havana'],
    ids: ['America/Havana'],
    std: {
      name: 'Cuba Standard Time',
      abbr: 'HNCU',
      offset: -5
    },
    dst: {
      name: 'Cuba Daylight Time',
      abbr: 'HECU',
      offset: -4
    },
    long: '(UTC-05:00) Havana'
  },
  {
    name: 'Peru Time',
    abbr: null,
    aliases: ['peru'],
    ids: ['America/Lima'],
    std: {
      name: 'Peru Standard Time',
      offset: -5
    },
    dst: {}
  },
  {
    name: 'Atlantic Time',
    abbr: 'AT',
    aliases: ['atlantic', 'atlantic standard time'],
    ids: [
      'America/Halifax',
      'America/Anguilla',
      'America/Antigua',
      'America/Aruba',
      'America/Barbados',
      'America/Blanc-Sablon',
      'America/Curacao',
      'America/Dominica',
      'America/Glace_Bay',
      'America/Goose_Bay',
      'America/Grenada',
      'America/Guadeloupe',
      'America/Kralendijk',
      'America/Lower_Princes',
      'America/Marigot',
      'America/Martinique',
      'America/Moncton',
      'America/Montserrat',
      'America/Port_of_Spain',
      'America/Puerto_Rico',
      'America/Santo_Domingo',
      'America/St_Barthelemy',
      'America/St_Kitts',
      'America/St_Lucia',
      'America/St_Thomas',
      'America/St_Vincent',
      'America/Thule',
      'America/Tortola',
      'Atlantic/Bermuda'
    ],
    std: {
      name: 'Atlantic Standard Time',
      abbr: 'AST',
      offset: -4
    },
    dst: {
      name: 'Atlantic Daylight Time',
      abbr: 'ADT',
      offset: -3
    },
    long: '(UTC-04:00) Atlantic Time (Canada)'
  },
  {
    name: 'Paraguay Time',
    abbr: null,
    aliases: ['paraguay', 'paraguay standard time', 'asuncion'],
    ids: ['America/Asuncion'],
    std: {
      name: 'Paraguay Standard Time',
      offset: -4
    },
    dst: {
      name: 'Paraguay Summer Time',
      offset: -3
    },
    long: '(UTC-04:00) Asuncion'
  },
  {
    name: 'Amazon Time',
    abbr: null,
    aliases: [
      'amazon',
      'central brazilian standard time',
      'cuiaba',
      'central brazilian',
      'central brazil'
    ],
    ids: [
      'America/Boa_Vista',
      'America/Campo_Grande',
      'America/Cuiaba',
      'America/Manaus',
      'America/Porto_Velho'
    ],
    std: {
      name: 'Amazon Standard Time',
      offset: -4
    },
    dst: {},
    long: '(UTC-04:00) Cuiaba'
  },
  {
    name: 'Venezuela Time',
    abbr: null,
    aliases: ['venezuela', 'venezuela standard time', 'caracas'],
    ids: ['America/Caracas'],
    std: {
      name: 'Venezuela Time',
      abbr: 'VET',
      offset: -4
    },
    dst: {},
    long: '(UTC-04:00) Caracas'
  },
  {
    name: 'Guyana Time',
    abbr: null,
    aliases: ['guyana'],
    ids: ['America/Guyana'],
    std: {
      name: 'Guyana Time',
      abbr: 'GYT',
      offset: -4
    },
    dst: {}
  },
  {
    name: 'Bolivia Time',
    abbr: null,
    aliases: ['bolivia'],
    ids: ['America/La_Paz'],
    std: {
      name: 'Bolivia Time',
      abbr: 'BOT',
      offset: -4
    },
    dst: {}
  },
  {
    name: 'Newfoundland Time',
    abbr: 'HTN',
    aliases: ['newfoundland', 'newfoundland standard time'],
    ids: ['America/St_Johns'],
    std: {
      name: 'Newfoundland Standard Time',
      abbr: 'HNTN',
      offset: -3.5
    },
    dst: {
      name: 'Newfoundland Daylight Time',
      abbr: 'HETN',
      offset: -2.5
    },
    long: '(UTC-03:30) Newfoundland'
  },
  {
    name: 'Brasilia Time',
    abbr: null,
    aliases: ['brasilia', 'e. south america standard time', 'east south america'],
    ids: [
      'America/Sao_Paulo',
      'America/Araguaina',
      'America/Bahia',
      'America/Belem',
      'America/Fortaleza',
      'America/Maceio',
      'America/Recife',
      'America/Santarem'
    ],
    std: {
      name: 'Brasilia Standard Time',
      offset: -3
    },
    dst: {},
    long: '(UTC-03:00) Brasilia'
  },
  {
    name: 'Argentina Time',
    abbr: 'ART',
    aliases: ['argentina', 'arst', 'argentina standard time', 'buenos aires'],
    ids: [
      'America/Buenos_Aires',
      'America/Argentina/La_Rioja',
      'America/Argentina/Rio_Gallegos',
      'America/Argentina/Salta',
      'America/Argentina/San_Juan',
      'America/Argentina/San_Luis',
      'America/Argentina/Tucuman',
      'America/Argentina/Ushuaia',
      'America/Catamarca',
      'America/Cordoba',
      'America/Jujuy',
      'America/Mendoza',
      'Antarctica/Rothera',
      'America/Argentina'
    ],
    std: {
      name: 'Argentina Standard Time',
      abbr: 'ART',
      offset: -3
    },
    dst: {},
    long: '(UTC-03:00) City of Buenos Aires'
  },
  {
    name: 'French Guiana Time',
    abbr: null,
    aliases: ['french guiana'],
    ids: ['America/Cayenne'],
    std: {
      name: 'French Guiana Time',
      abbr: 'GFT',
      offset: -3
    },
    dst: {}
  },
  {
    name: 'West Greenland Time',
    abbr: 'HOG',
    aliases: ['greenland western', 'greenland standard time', 'greenland'],
    ids: ['America/Godthab'],
    std: {
      name: 'West Greenland Standard Time',
      abbr: 'HNOG',
      offset: -3
    },
    dst: {
      name: 'West Greenland Summer Time',
      abbr: 'HEOG',
      offset: -2
    },
    long: '(UTC-03:00) Greenland'
  },
  {
    name: 'St. Pierre & Miquelon Time',
    abbr: 'HPM',
    aliases: [
      'pierre miquelon',
      'saint pierre standard time',
      'saint pierre and miquelon',
      'saint pierre'
    ],
    ids: ['America/Miquelon'],
    std: {
      name: 'St. Pierre & Miquelon Standard Time',
      abbr: 'HNPM',
      offset: -3
    },
    dst: {
      name: 'St. Pierre & Miquelon Daylight Time',
      abbr: 'HEPM',
      offset: -2
    },
    long: '(UTC-03:00) Saint Pierre and Miquelon'
  },
  {
    name: 'Uruguay Time',
    abbr: 'UYT',
    aliases: ['uruguay', 'uyst', 'montevideo standard time', 'montevideo'],
    ids: ['America/Montevideo'],
    std: {
      name: 'Uruguay Standard Time',
      abbr: 'UYT',
      offset: -3
    },
    dst: {},
    long: '(UTC-03:00) Montevideo'
  },
  {
    name: 'Suriname Time',
    abbr: null,
    aliases: ['suriname'],
    ids: ['America/Paramaribo'],
    std: {
      name: 'Suriname Time',
      abbr: 'SRT',
      offset: -3
    },
    dst: {}
  },
  {
    name: 'Chile Time',
    abbr: 'CLT',
    aliases: ['chile'],
    ids: ['America/Santiago', 'America/Punta_Arenas', 'Antarctica/Palmer'],
    std: {
      name: 'Chile Standard Time',
      abbr: 'CLT',
      offset: -3
    },
    dst: {
      name: 'Chile Summer Time',
      abbr: 'CLST',
      offset: -4
    }
  },
  {
    name: 'Falkland Islands Time',
    abbr: 'FKT',
    aliases: ['falkland'],
    ids: ['Atlantic/Stanley'],
    std: {
      abbr: 'FKST',
      name: 'Falkland Islands Summer Time',
      offset: -3
    },
    dst: {}
  },
  {
    name: 'Fernando de Noronha Time',
    abbr: null,
    aliases: ['noronha'],
    ids: ['America/Noronha'],
    std: {
      name: 'Fernando de Noronha Standard Time',
      offset: -2
    },
    dst: {}
  },
  {
    name: 'South Georgia Time',
    abbr: null,
    aliases: ['south georgia'],
    ids: ['Atlantic/South_Georgia'],
    std: {
      name: 'South Georgia Time',
      offset: -2
    },
    dst: {}
  },
  {
    name: 'Azores Time',
    abbr: 'AZOT',
    aliases: ['azores', 'azores standard time'],
    ids: ['Atlantic/Azores'],
    std: {
      name: 'Azores Standard Time',
      offset: -1
    },
    dst: {
      name: 'Azores Summer Time',
      abbr: 'AZOST',
      offset: 0
    },
    long: '(UTC-01:00) Azores'
  },
  {
    name: 'Cape Verde Time',
    abbr: null,
    aliases: ['cape verde', 'cape verde standard time', 'cabo verde'],
    ids: ['Atlantic/Cape_Verde'],
    std: {
      name: 'Cape Verde Standard Time',
      offset: -1
    },
    dst: {},
    long: '(UTC-01:00) Cabo Verde Is.'
  },
  {
    name: 'Greenwich Mean Time',
    abbr: null,
    aliases: ['gmt', 'zulu', 'utc', 'coordinated universal time'],
    ids: [
      'Etc/GMT',
      'Africa/Abidjan',
      'Africa/Accra',
      'Africa/Bamako',
      'Africa/Banjul',
      'Africa/Bissau',
      'Africa/Conakry',
      'Africa/Dakar',
      'Africa/Freetown',
      'Africa/Lome',
      'Africa/Monrovia',
      'Africa/Nouakchott',
      'Africa/Ouagadougou',
      'Africa/Sao_Tome',
      'America/Danmarkshavn',
      'Antarctica/Troll',
      'Atlantic/Reykjavik',
      'Atlantic/St_Helena',
      'Etc/UTC'
    ],
    std: {
      name: 'Greenwich Mean Time',
      abbr: 'GMT',
      offset: 0
    },
    dst: {},
    long: '(UTC) Coordinated Universal Time'
  },
  {
    name: 'British Time',
    abbr: null,
    aliases: ['gmt', 'gmt standard time', 'dublin', 'edinburgh', 'lisbon', 'london'],
    ids: [
      'Europe/London',
      'Europe/Dublin',
      'Europe/Guernsey',
      'Europe/Isle_of_Man',
      'Europe/Jersey'
    ],
    std: {
      name: 'Greenwich Mean Time',
      abbr: 'GMT',
      offset: 0
    },
    dst: {
      name: 'British Summer Time',
      abbr: 'BST',
      offset: 1
    },
    long: '(UTC+00:00) Dublin, Edinburgh, Lisbon, London'
  },
  {
    name: 'Western European Time',
    abbr: null,
    aliases: ['europe western'],
    ids: [
      'Europe/Lisbon',
      'Africa/Casablanca',
      'Africa/El_Aaiun',
      'Atlantic/Canary',
      'Atlantic/Faeroe',
      'Atlantic/Madeira'
    ],
    std: {
      name: 'Western European Standard Time',
      offset: 0
    },
    dst: {
      name: 'Western European Summer Time',
      offset: 1
    }
  },
  {
    name: 'East Greenland Time',
    abbr: 'HEG',
    aliases: ['greenland eastern'],
    ids: ['America/Scoresbysund'],
    std: {
      name: 'East Greenland Standard Time',
      abbr: 'HNEG',
      offset: 0
    },
    dst: {
      name: 'East Greenland Summer Time',
      abbr: 'HEEG',
      offset: 1
    }
  },
  {
    name: 'Central European Time',
    abbr: null,
    aliases: [
      'europe central',
      'romance standard time',
      'brussels',
      'copenhagen',
      'madrid',
      'paris',
      'romance'
    ],
    ids: [
      'Europe/Paris',
      'Africa/Ceuta',
      'Africa/Algiers', //
      'Africa/Tunis', //
      'Arctic/Longyearbyen',
      'Europe/Amsterdam',
      'Europe/Andorra',
      'Europe/Belgrade',
      'Europe/Berlin',
      'Europe/Bratislava',
      'Europe/Brussels',
      'Europe/Budapest',
      'Europe/Busingen',
      'Europe/Copenhagen',
      'Europe/Gibraltar',
      'Europe/Ljubljana',
      'Europe/Luxembourg',
      'Europe/Madrid',
      'Europe/Malta',
      'Europe/Monaco',
      'Europe/Oslo',
      'Europe/Podgorica',
      'Europe/Prague',
      'Europe/Rome',
      'Europe/San_Marino',
      'Europe/Sarajevo',
      'Europe/Skopje',
      'Europe/Stockholm',
      'Europe/Tirane',
      'Europe/Vaduz',
      'Europe/Vatican',
      'Europe/Vienna',
      'Europe/Warsaw',
      'Europe/Zagreb',
      'Europe/Zurich'
    ],
    std: {
      name: 'Central European Standard Time',
      offset: 1
    },
    dst: {
      name: 'Central European Summer Time',
      offset: 2
    },
    long: '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris'
  },
  {
    name: 'West Africa Time',
    abbr: 'WAT',
    aliases: [
      'africa western',
      'wast',
      'western africa',
      'w. central africa standard time',
      'west central africa',
      'w. central africa'
    ],
    ids: [
      'Africa/Lagos',
      'Africa/Bangui',
      'Africa/Brazzaville',
      'Africa/Douala',
      'Africa/Kinshasa',
      'Africa/Libreville',
      'Africa/Luanda',
      'Africa/Malabo',
      'Africa/Ndjamena',
      'Africa/Niamey',
      'Africa/Porto-Novo'
    ],
    std: {
      name: 'West Africa Standard Time',
      abbr: 'WAT',
      offset: 1
    },
    long: '(UTC+01:00) West Central Africa'
  },
  {
    name: 'Central Africa Time',
    abbr: null,
    aliases: ['africa central', 'namibia standard time', 'windhoek', 'namibia'],
    ids: [
      'Africa/Windhoek',
      'Africa/Blantyre',
      'Africa/Bujumbura',
      'Africa/Gaborone',
      'Africa/Harare',
      'Africa/Juba',
      'Africa/Khartoum',
      'Africa/Kigali',
      'Africa/Lubumbashi',
      'Africa/Lusaka',
      'Africa/Maputo'
    ],
    std: {
      name: 'Central Africa Time',
      abbr: 'CAT',
      offset: 2
    },
    dst: {},
    long: '(UTC+02:00) Windhoek'
  },
  {
    name: 'Eastern European Time',
    abbr: null,
    aliases: ['europe eastern'],
    ids: [
      'Asia/Beirut',
      'Africa/Cairo',
      'Africa/Tripoli',
      'Asia/Amman',
      'Asia/Damascus',
      'Asia/Famagusta',
      'Asia/Gaza',
      'Asia/Hebron',
      'Asia/Nicosia',
      'Europe/Athens',
      'Europe/Bucharest',
      'Europe/Chisinau',
      'Europe/Helsinki',
      'Europe/Kaliningrad',
      'Europe/Kiev',
      'Europe/Mariehamn',
      'Europe/Riga',
      'Europe/Sofia',
      'Europe/Tallinn',
      'Europe/Uzhgorod',
      'Europe/Vilnius',
      'Europe/Zaporozhye'
    ],
    std: {
      name: 'Eastern European Standard Time',
      offset: 2
    },
    dst: {
      name: 'Eastern European Summer Time',
      offset: 3
    }
  },
  {
    name: 'South Africa Time',
    abbr: null,
    aliases: [
      'africa southern',
      'south africa standard time',
      'harare',
      'pretoria',
      'south africa'
    ],
    ids: ['Africa/Johannesburg', 'Africa/Maseru', 'Africa/Mbabane'],
    std: {
      name: 'South Africa Standard Time',
      abbr: 'SAST',
      offset: 2
    },
    dst: {},
    long: '(UTC+02:00) Harare, Pretoria'
  },
  {
    name: 'Israel Time',
    abbr: null,
    aliases: ['israel', 'israel standard time', 'jerusalem'],
    ids: ['Asia/Jerusalem'],
    std: {
      name: 'Israel Standard Time',
      offset: 2
    },
    dst: {
      name: 'Israel Daylight Time',
      offset: 3
    },
    long: '(UTC+02:00) Jerusalem'
  },
  {
    name: 'East Africa Time',
    abbr: null,
    aliases: [
      'africa eastern',
      'e. africa standard time',
      'nairobi',
      'east africa',
      'eastern africa'
    ],
    ids: [
      'Africa/Addis_Ababa',
      'Africa/Asmera',
      'Africa/Dar_es_Salaam',
      'Africa/Djibouti',
      'Africa/Kampala',
      'Africa/Mogadishu',
      'Africa/Nairobi',
      'Indian/Antananarivo',
      'Indian/Comoro',
      'Indian/Mayotte'
    ],
    std: {
      name: 'East Africa Time',
      abbr: 'EAT',
      offset: 3
    },
    dst: {},
    long: '(UTC+03:00) Nairobi'
  },
  {
    name: 'Syowa Time',
    abbr: null,
    aliases: ['syowa'],
    ids: ['Antarctica/Syowa'],
    std: {
      name: 'Syowa Time',
      offset: 3
    },
    dst: {}
  },
  {
    name: 'Arabian Time',
    abbr: null,
    aliases: ['arabian', 'arab standard time', 'kuwait', 'riyadh', 'arab', 'arabia', 'arabic'],
    ids: ['Asia/Baghdad', 'Asia/Aden', 'Asia/Bahrain', 'Asia/Kuwait', 'Asia/Qatar', 'Asia/Riyadh'],
    std: {
      name: 'Arabian Standard Time',
      offset: 3
    },
    dst: {},
    long: '(UTC+03:00) Kuwait, Riyadh'
  },
  {
    name: 'Moscow Time',
    abbr: null,
    aliases: ['moscow', 'russian standard time', 'st. petersburg', 'russian'],
    ids: [
      'Europe/Moscow',
      'Europe/Astrakhan',
      'Europe/Minsk',
      'Europe/Simferopol',
      'Europe/Ulyanovsk',
      'Europe/Kirov'
    ],
    std: {
      name: 'Moscow Standard Time',
      offset: 3
    },
    dst: {},
    long: '(UTC+03:00) Moscow, St. Petersburg'
  },
  {
    name: 'Turkey Time',
    abbr: 'TRT',
    aliases: ['turkey', 'turkey standard time', 'istanbul'],
    ids: ['Europe/Istanbul'],
    std: {
      offset: 3
    },
    dst: {},
    long: '(UTC+03:00) Istanbul'
  },
  {
    name: 'Iran Time',
    abbr: null,
    aliases: ['iran', 'iran standard time', 'tehran'],
    ids: ['Asia/Tehran'],
    std: {
      name: 'Iran Standard Time',
      offset: 3.5
    },
    dst: {
      name: 'Iran Daylight Time',
      offset: 4.5
    },
    long: '(UTC+03:30) Tehran'
  },
  {
    name: 'Azerbaijan Time',
    abbr: null,
    aliases: ['azerbaijan', 'azerbaijan standard time', 'baku'],
    ids: ['Asia/Baku'],
    std: {
      name: 'Azerbaijan Standard Time',
      offset: 4
    },
    dst: {},
    long: '(UTC+04:00) Baku'
  },
  {
    name: 'Gulf Time',
    abbr: null,
    aliases: ['gulf', 'arabian standard time', 'abu dhabi', 'muscat', 'arabian'],
    ids: ['Asia/Dubai', 'Asia/Muscat'],
    std: {
      name: 'Gulf Standard Time',
      abbr: 'GST',
      offset: 4
    },
    dst: {},
    long: '(UTC+04:00) Abu Dhabi, Muscat'
  },
  {
    name: 'Georgia Time',
    abbr: 'GET',
    aliases: ['georgia', 'georgian standard time', 'tbilisi', 'georgian'],
    ids: ['Asia/Tbilisi'],
    std: {
      name: 'Georgia Standard Time',
      offset: 4
    },
    dst: {},
    long: '(UTC+04:00) Tbilisi'
  },
  {
    name: 'Armenia Time',
    abbr: 'AMT',
    aliases: ['armenia', 'caucasus standard time', 'yerevan', 'caucasus'],
    ids: ['Asia/Yerevan'],
    std: {
      name: 'Armenia Standard Time',
      offset: 4
    },
    dst: {},
    long: '(UTC+04:00) Yerevan'
  },
  {
    name: 'Samara Time',
    abbr: null,
    aliases: ['samara', 'russia time zone 3', 'izhevsk'],
    ids: ['Europe/Samara', 'Europe/Saratov'],
    std: {
      name: 'Samara Standard Time',
      offset: 4
    },
    dst: {},
    long: '(UTC+04:00) Izhevsk, Samara'
  },
  {
    name: 'Volgograd Time',
    abbr: null,
    aliases: ['volgograd', 'volgograd standard time'],
    ids: ['Europe/Volgograd', 'Asia/Volgograd'],
    std: {
      name: 'Volgograd Standard Time',
      offset: 4
    },
    dst: {},
    long: '(UTC+04:00) Volgograd'
  },
  {
    name: 'Seychelles Time',
    abbr: null,
    aliases: ['seychelles'],
    ids: ['Indian/Mahe'],
    std: {
      name: 'Seychelles Time',
      offset: 4
    },
    dst: {}
  },
  {
    name: 'Mauritius Time',
    abbr: null,
    aliases: ['mauritius', 'mauritius standard time', 'port louis'],
    ids: ['Indian/Mauritius'],
    std: {
      name: 'Mauritius Standard Time',
      offset: 4
    },
    dst: {},
    long: '(UTC+04:00) Port Louis'
  },
  {
    name: 'Réunion Time',
    abbr: null,
    aliases: ['reunion'],
    ids: ['Indian/Reunion'],
    std: {
      name: 'Réunion Time',
      offset: 4
    },
    dst: {}
  },
  {
    name: 'Afghanistan Time',
    abbr: null,
    aliases: ['afghanistan', 'afghanistan standard time', 'kabul'],
    ids: ['Asia/Kabul'],
    std: {
      name: 'Afghanistan Time',
      offset: 4.5
    },
    dst: {},
    long: '(UTC+04:30) Kabul'
  },
  {
    name: 'Mawson Time',
    abbr: null,
    aliases: ['mawson'],
    ids: ['Antarctica/Mawson'],
    std: {
      name: 'Mawson Time',
      offset: 5
    },
    dst: {}
  },
  {
    name: 'West Kazakhstan Time',
    abbr: null,
    aliases: ['kazakhstan western', 'west asia standard time', 'ashgabat', 'tashkent', 'west asia'],
    ids: ['Asia/Aqtau', 'Asia/Aqtobe', 'Asia/Atyrau', 'Asia/Oral', 'Asia/Qyzylorda'],
    std: {
      name: 'West Kazakhstan Time',
      offset: 5
    },
    dst: {},
    long: '(UTC+05:00) Ashgabat, Tashkent'
  },
  {
    name: 'Turkmenistan Time',
    abbr: 'TMT',
    aliases: ['turkmenistan', 'tmst'],
    ids: ['Asia/Ashgabat'],
    std: {
      name: 'Turkmenistan Standard Time',
      abbr: 'TMT',
      offset: 5
    },
    dst: {}
  },
  {
    name: 'Tajikistan Time',
    abbr: null,
    aliases: ['tajikistan'],
    ids: ['Asia/Dushanbe'],
    std: {
      name: 'Tajikistan Time',
      offset: 5
    },
    dst: {}
  },
  {
    name: 'Pakistan Time',
    abbr: null,
    aliases: ['pakistan', 'pakistan standard time', 'islamabad', 'karachi'],
    ids: ['Asia/Karachi'],
    std: {
      name: 'Pakistan Standard Time',
      offset: 5
    },
    dst: {},
    long: '(UTC+05:00) Islamabad, Karachi'
  },
  {
    name: 'Uzbekistan Time',
    abbr: null,
    aliases: ['uzbekistan'],
    ids: ['Asia/Samarkand', 'Asia/Tashkent'],
    std: {
      name: 'Uzbekistan Standard Time',
      offset: 5
    },
    dst: {}
  },
  {
    name: 'Yekaterinburg Time',
    abbr: 'YEKT',
    aliases: ['yekaterinburg', 'ekaterinburg standard time', 'ekaterinburg'],
    ids: ['Asia/Yekaterinburg'],
    std: {
      name: 'Yekaterinburg Standard Time',
      offset: 5
    },
    dst: {},
    long: '(UTC+05:00) Ekaterinburg'
  },
  {
    name: 'French Southern & Antarctic Time',
    abbr: null,
    aliases: ['french southern'],
    ids: ['Indian/Kerguelen'],
    std: {
      name: 'French Southern & Antarctic Time',
      offset: 5
    },
    dst: {}
  },
  {
    name: 'Maldives Time',
    abbr: null,
    aliases: ['maldives'],
    ids: ['Indian/Maldives'],
    std: {
      name: 'Maldives Time',
      offset: 5
    },
    dst: {}
  },
  {
    name: 'India Time',
    abbr: null,
    aliases: ['india', 'india standard time', 'chennai', 'kolkata', 'mumbai', 'new delhi'],
    ids: ['Asia/Calcutta', 'Asia/Colombo'],
    std: {
      name: 'India Standard Time',
      abbr: 'IST',
      offset: 5.5
    },
    dst: {},
    long: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi'
  },
  {
    name: 'Nepal Time',
    abbr: null,
    aliases: ['nepal', 'nepal standard time', 'kathmandu'],
    ids: ['Asia/Katmandu'],
    std: {
      name: 'Nepal Time',
      offset: 5.75
    },
    dst: {},
    long: '(UTC+05:45) Kathmandu'
  },
  {
    name: 'Vostok Time',
    abbr: null,
    aliases: ['vostok'],
    ids: ['Antarctica/Vostok'],
    std: {
      name: 'Vostok Time',
      offset: 6
    },
    dst: {}
  },
  {
    name: 'East Kazakhstan Time',
    abbr: null,
    aliases: ['kazakhstan eastern', 'central asia standard time', 'astana', 'central asia'],
    ids: ['Asia/Almaty', 'Asia/Qostanay'],
    std: {
      name: 'East Kazakhstan Time',
      offset: 6
    },
    dst: {},
    long: '(UTC+06:00) Astana'
  },
  {
    name: 'Kyrgyzstan Time',
    abbr: null,
    aliases: ['kyrgystan'],
    ids: ['Asia/Bishkek'],
    std: {
      name: 'Kyrgyzstan Time',
      offset: 6
    },
    dst: {}
  },
  {
    name: 'Bangladesh Time',
    abbr: 'BST',
    aliases: ['bangladesh', 'bangladesh standard time', 'dhaka'],
    ids: ['Asia/Dhaka'],
    std: {
      name: 'Bangladesh Standard Time',
      offset: 6
    },
    dst: {},
    long: '(UTC+06:00) Dhaka'
  },
  {
    name: 'Omsk Time',
    abbr: null,
    aliases: ['omsk', 'omsk standard time'],
    ids: ['Asia/Omsk', 'Asia/Tomsk'],
    std: {
      name: 'Omsk Standard Time',
      offset: 6
    },
    dst: {},
    long: '(UTC+06:00) Omsk'
  },
  {
    name: 'Bhutan Time',
    abbr: null,
    aliases: ['bhutan'],
    ids: ['Asia/Thimphu'],
    std: {
      name: 'Bhutan Time',
      abbr: 'BT',
      offset: 6
    },
    dst: {}
  },
  {
    name: 'Indian Ocean Time',
    abbr: null,
    aliases: ['indian ocean'],
    ids: ['Indian/Chagos'],
    std: {
      name: 'Indian Ocean Time',
      offset: 6
    },
    dst: {}
  },
  {
    name: 'Myanmar Time',
    abbr: null,
    aliases: ['myanmar', 'myanmar standard time'],
    ids: ['Asia/Rangoon'],
    std: {
      name: 'Myanmar Time',
      offset: 6.5
    },
    dst: {},
    long: '(UTC+06:30) Yangon (Rangoon)'
  },
  {
    name: 'Cocos Islands Time',
    abbr: null,
    aliases: ['cocos'],
    ids: ['Indian/Cocos'],
    std: {
      name: 'Cocos Islands Time',
      offset: 6.5
    },
    dst: {}
  },
  {
    name: 'Davis Time',
    abbr: null,
    aliases: ['davis'],
    ids: ['Antarctica/Davis'],
    std: {
      name: 'Davis Time',
      offset: 7
    },
    dst: {}
  },
  {
    name: 'Indochina Time',
    abbr: null,
    aliases: [
      'indochina',
      'se asia standard time',
      'bangkok',
      'hanoi',
      'jakarta',
      'se asia',
      'south east asia'
    ],
    ids: ['Asia/Bangkok', 'Asia/Phnom_Penh', 'Asia/Saigon', 'Asia/Vientiane'],
    std: {
      name: 'Indochina Time',
      offset: 7
    },
    dst: {},
    long: '(UTC+07:00) Bangkok, Hanoi, Jakarta'
  },
  {
    name: 'Hovd Time',
    abbr: null,
    aliases: ['hovd', 'w. mongolia standard time', 'west mongolia', 'western mongolia'],
    ids: ['Asia/Hovd'],
    std: {
      name: 'Hovd Standard Time',
      offset: 7
    },
    dst: {},
    long: '(UTC+07:00) Hovd'
  },
  {
    name: 'Western Indonesia Time',
    abbr: null,
    aliases: ['indonesia western'],
    ids: ['Asia/Jakarta', 'Asia/Pontianak'],
    std: {
      name: 'Western Indonesia Time',
      abbr: 'WIB',
      offset: 7
    },
    dst: {}
  },
  {
    name: 'Krasnoyarsk Time',
    abbr: null,
    aliases: ['krasnoyarsk', 'north asia standard time', 'north asia'],
    ids: ['Asia/Krasnoyarsk', 'Asia/Novokuznetsk', 'Asia/Barnaul'],
    std: {
      name: 'Krasnoyarsk Standard Time',
      offset: 7
    },
    dst: {},
    long: '(UTC+07:00) Krasnoyarsk'
  },
  {
    name: 'Novosibirsk Time',
    abbr: null,
    aliases: ['novosibirsk', 'n. central asia standard time', 'north central asia'],
    ids: ['Asia/Novosibirsk'],
    std: {
      name: 'Novosibirsk Standard Time',
      offset: 7
    },
    dst: {},
    long: '(UTC+07:00) Novosibirsk'
  },
  {
    name: 'Christmas Island Time',
    abbr: null,
    aliases: ['christmas'],
    ids: ['Indian/Christmas'],
    std: {
      name: 'Christmas Island Time',
      offset: 7
    },
    dst: {}
  },
  {
    name: 'Brunei Darussalam Time',
    abbr: null,
    aliases: ['brunei'],
    ids: ['Asia/Brunei'],
    std: {
      name: 'Brunei Darussalam Time',
      offset: 8
    },
    dst: {}
  },
  {
    name: 'Ulaanbaatar Time',
    abbr: null,
    aliases: ['mongolia', 'ulaanbaatar standard time', 'ulaanbaatar'],
    ids: ['Asia/Ulaanbaatar', 'Asia/Choibalsan'],
    std: {
      name: 'Ulaanbaatar Standard Time',
      offset: 8
    },
    dst: {},
    long: '(UTC+08:00) Ulaanbaatar'
  },
  {
    name: 'Hong Kong Time',
    abbr: 'HKT',
    aliases: ['hong kong', 'hkst'],
    ids: ['Asia/Hong_Kong'],
    std: {
      name: 'Hong Kong Standard Time',
      abbr: 'HKT',
      offset: 8
    },
    dst: {}
  },
  {
    name: 'Irkutsk Time',
    abbr: null,
    aliases: ['irkutsk', 'north asia east standard time', 'north asia east'],
    ids: ['Asia/Irkutsk'],
    std: {
      name: 'Irkutsk Standard Time',
      offset: 8
    },
    dst: {},
    long: '(UTC+08:00) Irkutsk'
  },
  {
    name: 'Malaysia Time',
    abbr: null,
    aliases: ['malaysia'],
    ids: ['Asia/Kuala_Lumpur', 'Asia/Kuching'],
    std: {
      name: 'Malaysia Time',
      abbr: 'MYT',
      offset: 8
    },
    dst: {}
  },
  {
    name: 'China Time',
    abbr: null,
    aliases: ['china', 'china standard time', 'beijing', 'chongqing', 'hong kong', 'urumqi'],
    ids: ['Asia/Shanghai', 'Asia/Macau', 'Asia/Urumqi'],
    std: {
      name: 'China Standard Time',
      offset: 8
    },
    dst: {},
    long: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi'
  },
  {
    name: 'Central Indonesia Time',
    abbr: null,
    aliases: ['indonesia central'],
    ids: ['Asia/Makassar'],
    std: {
      name: 'Central Indonesia Time',
      abbr: 'WITA',
      offset: 8
    },
    dst: {}
  },
  {
    name: 'Philippine Time',
    abbr: null,
    aliases: ['philippines'],
    ids: ['Asia/Manila'],
    std: {
      name: 'Philippine Standard Time',
      offset: 8
    },
    dst: {}
  },
  {
    name: 'Singapore Time',
    abbr: null,
    aliases: ['singapore', 'singapore standard time', 'kuala lumpur'],
    ids: ['Asia/Singapore'],
    std: {
      name: 'Singapore Standard Time',
      abbr: 'SGT',
      offset: 8
    },
    dst: {},
    long: '(UTC+08:00) Kuala Lumpur, Singapore'
  },
  {
    name: 'Taipei Time',
    abbr: null,
    aliases: ['taipei', 'taipei standard time'],
    ids: ['Asia/Taipei'],
    std: {
      name: 'Taipei Standard Time',
      offset: 8
    },
    dst: {},
    long: '(UTC+08:00) Taipei'
  },
  {
    name: 'Western Australia Time',
    abbr: 'AWT',
    aliases: [
      'australia western',
      'awdt',
      'w. australia standard time',
      'perth',
      'western australia',
      'west australia'
    ],
    ids: ['Australia/Perth'],
    std: {
      name: 'Australian Western Standard Time',
      abbr: 'AWST',
      offset: 8
    },
    dst: {},
    long: '(UTC+08:00) Perth'
  },
  {
    name: 'Australian Central Western Time',
    abbr: 'ACWT',
    aliases: [
      'australia centralwestern',
      'acwdt',
      'aus central w. standard time',
      'eucla',
      'aus central west'
    ],
    ids: ['Australia/Eucla'],
    std: {
      name: 'Australian Central Western Standard Time',
      abbr: 'ACWST',
      offset: 8.75
    },
    dst: {},
    long: '(UTC+08:45) Eucla'
  },
  {
    name: 'Yakutsk Time',
    abbr: null,
    aliases: ['yakutsk', 'yakutsk standard time'],
    ids: ['Asia/Yakutsk', 'Asia/Chita', 'Asia/Khandyga'],
    std: {
      name: 'Yakutsk Standard Time',
      offset: 9
    },
    dst: {},
    long: '(UTC+09:00) Yakutsk'
  },
  {
    name: 'East Timor Time',
    abbr: 'TLT',
    aliases: ['east timor'],
    ids: ['Asia/Dili'],
    std: {
      name: 'East Timor Time',
      offset: 9
    },
    dst: {}
  },
  {
    name: 'Eastern Indonesia Time',
    abbr: null,
    aliases: ['indonesia eastern'],
    ids: ['Asia/Jayapura'],
    std: {
      name: 'Eastern Indonesia Time',
      abbr: 'WIT',
      offset: 9
    },
    dst: {}
  },
  {
    name: 'Korean Time',
    abbr: null,
    aliases: ['korea', 'korea standard time', 'seoul'],
    ids: ['Asia/Seoul', 'Asia/Pyongyang'],
    std: {
      name: 'Korean Standard Time',
      offset: 9
    },
    dst: {},
    long: '(UTC+09:00) Seoul'
  },
  {
    name: 'Japan Time',
    abbr: null,
    aliases: ['japan', 'jdt', 'tokyo standard time', 'osaka', 'sapporo', 'tokyo'],
    ids: ['Asia/Tokyo'],
    std: {
      name: 'Japan Standard Time',
      abbr: 'JST',
      offset: 9
    },
    dst: {},
    long: '(UTC+09:00) Osaka, Sapporo, Tokyo'
  },
  {
    name: 'Palau Time',
    abbr: null,
    aliases: ['palau'],
    ids: ['Pacific/Palau'],
    std: {
      name: 'Palau Time',
      offset: 9
    },
    dst: {}
  },
  {
    name: 'Central Australia Time',
    abbr: 'ACT',
    aliases: ['australia central', 'cen. australia standard time', 'adelaide', 'central australia'],
    ids: ['Australia/Adelaide', 'Australia/Broken_Hill', 'Australia/Darwin'],
    std: {
      name: 'Australian Central Standard Time',
      abbr: 'ACST',
      offset: 9.5
    },
    dst: {
      name: 'Australian Central Daylight Time',
      abbr: 'ACDT',
      offset: 10.5
    },
    long: '(UTC+09:30) Adelaide'
  },
  {
    name: 'Dumont-d’Urville Time',
    abbr: null,
    aliases: ['dumontdurville'],
    ids: ['Antarctica/DumontDUrville'],
    std: {
      name: 'Dumont-d’Urville Time',
      offset: 10
    },
    dst: {}
  },
  {
    name: 'Eastern Australia Time',
    abbr: 'AET',
    aliases: [
      'australia eastern',
      'aus eastern standard time',
      'canberra',
      'melbourne',
      'sydney',
      'aus eastern',
      'aus east'
    ],
    ids: [
      'Australia/Sydney',
      'Antarctica/Macquarie',
      'Australia/Brisbane',
      'Australia/Currie',
      'Australia/Hobart',
      'Australia/Lindeman',
      'Australia/Melbourne'
    ],
    std: {
      name: 'Australian Eastern Standard Time',
      abbr: 'AEST',
      offset: 10
    },
    dst: {
      name: 'Australian Eastern Daylight Time',
      abbr: 'AEDT',
      offset: 11
    },
    long: '(UTC+10:00) Canberra, Melbourne, Sydney'
  },
  {
    name: 'Vladivostok Time',
    abbr: null,
    aliases: ['vladivostok', 'vladivostok standard time'],
    ids: ['Asia/Vladivostok', 'Asia/Ust-Nera'],
    std: {
      name: 'Vladivostok Standard Time',
      offset: 10
    },
    dst: {},
    long: '(UTC+10:00) Vladivostok'
  },
  {
    name: 'Chamorro Time',
    abbr: null,
    aliases: [
      'chamorro',
      'west pacific standard time',
      'guam',
      'port moresby',
      'west pacific',
      'western pacific'
    ],
    ids: ['Pacific/Guam', 'Pacific/Saipan'],
    std: {
      name: 'Chamorro Standard Time',
      abbr: 'ChST',
      offset: 10
    },
    dst: {},
    long: '(UTC+10:00) Guam, Port Moresby'
  },
  {
    name: 'Chuuk Time',
    abbr: null,
    aliases: ['truk'],
    ids: ['Pacific/Truk'],
    std: {
      name: 'Chuuk Time',
      offset: 10
    },
    dst: {}
  },
  {
    name: 'Lord Howe Time',
    abbr: 'LHT',
    aliases: ['lord howe', 'lord howe standard time'],
    ids: ['Australia/Lord_Howe'],
    std: {
      name: 'Lord Howe Standard Time',
      abbr: 'LHST',
      offset: 10.5
    },
    dst: {
      name: 'Lord Howe Daylight Time',
      abbr: 'LHDT',
      offset: 11.5
    },
    long: '(UTC+10:30) Lord Howe Island'
  },
  {
    name: 'Casey Time',
    abbr: 'CAST',
    aliases: ['casey'],
    ids: ['Antarctica/Casey'],
    std: {
      name: 'Casey Time',
      offset: 11
    },
    dst: {
      name: 'Casey Summer Time',
      offset: 8
    }
  },
  {
    name: 'Magadan Time',
    abbr: null,
    aliases: ['magadan', 'magadan standard time'],
    ids: ['Asia/Magadan'],
    std: {
      name: 'Magadan Standard Time',
      offset: 11
    },
    dst: {},
    long: '(UTC+11:00) Magadan'
  },
  {
    name: 'Sakhalin Time',
    abbr: null,
    aliases: ['sakhalin', 'sakhalin standard time'],
    ids: ['Asia/Sakhalin'],
    std: {
      name: 'Sakhalin Standard Time',
      offset: 11
    },
    dst: {},
    long: '(UTC+11:00) Sakhalin'
  },
  {
    name: 'Srednekolymsk Time',
    abbr: 'SRET',
    aliases: ['srednekolymsk', 'russia time zone 10', 'chokurdakh'],
    ids: ['Asia/Srednekolymsk'],
    std: {
      name: 'Srednekolymsk Standard Time',
      offset: 11
    },
    dst: {},
    long: '(UTC+11:00) Chokurdakh'
  },
  {
    name: 'Papua New Guinea Time',
    abbr: null,
    aliases: ['papua new_guinea'],
    ids: ['Pacific/Bougainville', 'Pacific/Port_Moresby'],
    std: {
      name: 'Papua New Guinea Time',
      offset: 11
    },
    dst: {}
  },
  {
    name: 'Vanuatu Time',
    abbr: null,
    aliases: ['vanuatu'],
    ids: ['Pacific/Efate'],
    std: {
      name: 'Vanuatu Standard Time',
      offset: 11
    },
    dst: {}
  },
  {
    name: 'Solomon Islands Time',
    abbr: null,
    aliases: ['solomon'],
    ids: ['Pacific/Guadalcanal'],
    std: {
      name: 'Solomon Islands Time',
      offset: 11
    },
    dst: {}
  },
  {
    name: 'Kosrae Time',
    abbr: null,
    aliases: ['kosrae'],
    ids: ['Pacific/Kosrae'],
    std: {
      name: 'Kosrae Time',
      offset: 11
    },
    dst: {}
  },
  {
    name: 'New Caledonia Time',
    abbr: null,
    aliases: ['new caledonia'],
    ids: ['Pacific/Noumea'],
    std: {
      name: 'New Caledonia Standard Time',
      offset: 11
    },
    dst: {
      name: 'New Caledonia Summer Time'
    }
  },
  {
    name: 'Ponape Time',
    abbr: null,
    aliases: ['ponape'],
    ids: ['Pacific/Ponape'],
    std: {
      name: 'Ponape Time',
      offset: 11
    },
    dst: {}
  },
  {
    name: 'New Zealand Time',
    abbr: 'NZT',
    aliases: ['new zealand', 'new zealand standard time', 'auckland', 'wellington'],
    ids: ['Pacific/Auckland', 'Antarctica/McMurdo'],
    std: {
      name: 'New Zealand Standard Time',
      abbr: 'NZST',
      offset: 12
    },
    dst: {
      name: 'New Zealand Daylight Time',
      abbr: 'NZDT',
      offset: 13
    },
    long: '(UTC+12:00) Auckland, Wellington'
  },
  {
    name: 'Anadyr Time',
    abbr: null,
    aliases: ['anadyr', 'russia time zone 11', 'petropavlovsk kamchatsky'],
    ids: ['Asia/Anadyr'],
    std: {
      name: 'Anadyr Standard Time',
      offset: 12
    },
    dst: {},
    long: '(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky'
  },
  {
    name: 'Petropavlovsk-Kamchatski Time',
    abbr: null,
    aliases: ['kamchatka', 'russia time zone 11', 'anadyr', 'petropavlovsk kamchatsky'],
    ids: ['Asia/Kamchatka'],
    std: {
      name: 'Petropavlovsk-Kamchatski Standard Time',
      offset: 12
    },
    dst: {},
    long: '(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky'
  },
  {
    name: 'Fiji Time',
    abbr: 'FJT',
    aliases: ['fiji', 'fiji standard time'],
    ids: ['Pacific/Fiji'],
    std: {
      name: 'Fiji Standard Time',
      offset: 12
    },
    dst: {
      name: 'Fiji Summer Time',
      offset: 13
    },
    long: '(UTC+12:00) Fiji'
  },
  {
    name: 'Tuvalu Time',
    abbr: 'TVT',
    aliases: ['tuvalu'],
    ids: ['Pacific/Funafuti'],
    std: {
      name: 'Tuvalu Time',
      offset: 12
    },
    dst: {}
  },
  {
    name: 'Marshall Islands Time',
    abbr: null,
    aliases: ['marshall islands'],
    ids: ['Pacific/Kwajalein', 'Pacific/Majuro'],
    std: {
      name: 'Marshall Islands Time',
      offset: 12
    },
    dst: {}
  },
  {
    name: 'Nauru Time',
    abbr: null,
    aliases: ['nauru'],
    ids: ['Pacific/Nauru'],
    std: {
      name: 'Nauru Time',
      offset: 12
    },
    dst: {}
  },
  {
    name: 'Norfolk Island Time',
    abbr: null,
    aliases: ['norfolk', 'norfolk standard time', 'norfolk island'],
    ids: ['Pacific/Norfolk'],
    std: {
      abbr: 'NFT',
      name: 'Norfolk Island Standard Time',
      offset: 12
    },
    dst: {
      abbr: 'NFDT',
      name: 'Norfolk Island Daylight Time',
      offset: 11
    },
    long: '(UTC+11:00) Norfolk Island'
  },
  {
    name: 'Gilbert Islands Time',
    abbr: null,
    aliases: ['gilbert islands'],
    ids: ['Pacific/Tarawa'],
    std: {
      name: 'Gilbert Islands Time',
      offset: 12
    },
    dst: {}
  },
  {
    name: 'Wake Island Time',
    abbr: null,
    aliases: ['wake'],
    ids: ['Pacific/Wake'],
    std: {
      name: 'Wake Island Time',
      offset: 12
    },
    dst: {}
  },
  {
    name: 'Wallis & Futuna Time',
    abbr: null,
    aliases: ['wallis'],
    ids: ['Pacific/Wallis'],
    std: {
      name: 'Wallis & Futuna Time',
      offset: 12
    },
    dst: {}
  },
  {
    name: 'Chatham Time',
    abbr: 'CHAT',
    aliases: ['chatham', 'chatham islands standard time', 'chatham islands'],
    ids: ['Pacific/Chatham'],
    std: {
      name: 'Chatham Standard Time',
      abbr: 'CHAST',
      offset: 12.75
    },
    dst: {
      name: 'Chatham Daylight Time',
      abbr: 'CHADT',
      offset: 13.75
    },
    long: '(UTC+12:45) Chatham Islands'
  },
  {
    name: 'West Samoa Time',
    abbr: 'WST',
    aliases: ['apia'],
    ids: ['Pacific/Apia'],
    std: {
      name: 'West Samoa Time',
      offset: 13
    },
    dst: {
      name: 'West Samoa Summer Time',
      offset: 14
    }
  },
  {
    name: 'Phoenix Islands Time',
    abbr: null,
    aliases: ['phoenix islands'],
    ids: ['Pacific/Enderbury'],
    std: {
      name: 'Phoenix Islands Time',
      offset: 13
    },
    dst: {}
  },
  {
    name: 'Tokelau Time',
    abbr: null,
    aliases: ['tokelau'],
    ids: ['Pacific/Fakaofo'],
    std: {
      name: 'Tokelau Time',
      offset: 13
    },
    dst: {}
  },
  {
    name: 'Tonga Time',
    abbr: null,
    aliases: ['tonga', 'tonga standard time', "nuku'alofa"],
    ids: ['Pacific/Tongatapu'],
    std: {
      name: 'Tonga Standard Time',
      offset: 13
    },
    dst: {
      name: 'Tonga Summer Time',
      offset: 14
    },
    long: "(UTC+13:00) Nuku'alofa"
  },
  {
    name: 'Line Islands Time',
    abbr: null,
    aliases: ['line islands', 'line islands standard time', 'kiritimati island'],
    ids: ['Pacific/Kiritimati'],
    std: {
      name: 'Line Islands Time',
      offset: 14
    },
    dst: {},
    long: '(UTC+14:00) Kiritimati Island'
  }
]