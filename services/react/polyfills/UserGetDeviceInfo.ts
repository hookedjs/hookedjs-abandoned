import {IpgeolocationioKey} from "../config";

export interface Device {
  ip: string;
  continent: string;
  country: string;
  state: string;
  city: string;
  lat: number;
  lon: number;
  is_eu: boolean;
  language: string;
  languages: string;
  geoname: number;
  currency: string;
  tz: string;
  tz_offset: number;
  uagent: string;
}


export interface GeoIntel {
  ip: "71.179.91.210";
  continent_code: "NA";
  continent_name: "North America";
  country_code2: "US";
  country_code3: "USA";
  country_name: "United States";
  country_capital: "Washington";
  state_prov: "Maryland";
  district: "";
  city: "Baltimore";
  zipcode: "21203";
  latitude: "39.2904";
  longitude: "-76.6122";
  is_eu: false;
  calling_code: "+1";
  country_tld: ".us";
  languages: "en-US,es-US,haw,fr";
  country_flag: "https://ipgeolocation.io/static/flags/us_64.png";
  isp: "Verizon Communications";
  connection_type: "fttx";
  organization: "MCI Communications Services Inc. d/b/a Verizon Business";
  geoname_id: "4347778";
  currency: {
    name: "US Dollar";
    code: "USD";
  };
  time_zone: {
    name: "America/New_York";
    offset: -5;
    current_time: "2018-11-12 17:11:53.659-0500";
    current_time_unix: 1542060713.659;
    is_dst: false;
    dst_savings: 1;
  };
}

export const UserGetDeviceInfo = (): Promise<Device> => {
  if (!IpgeolocationioKey) throw new Error("UserGetDeviceInfo: Cannot call without Config.IpgeolocationioKey");
  return fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${IpgeolocationioKey}`, {method: "get"})
    .then(async (response) => {
      if (response.status !== 200) throw new Error("Response not 200.");
      const geoIntel: GeoIntel = await response.json();
      return {
        ip: geoIntel.ip,
        continent: geoIntel.continent_code,
        country: geoIntel.country_code3,
        state: geoIntel.state_prov,
        city: geoIntel.city,
        lat: parseFloat(geoIntel.latitude),
        lon: parseFloat(geoIntel.longitude),
        is_eu: geoIntel.is_eu,
        language: geoIntel.languages.split(",")[0],
        languages: geoIntel.languages,
        geoname: parseInt(geoIntel.geoname_id),
        currency: geoIntel.currency.code,
        tz: geoIntel.time_zone.name,
        tz_offset: geoIntel.time_zone.offset,
        uagent: navigator.userAgent,
      };
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
      throw err;
    });
};
