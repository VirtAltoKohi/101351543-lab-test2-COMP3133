// mission.ts
export interface Mission {
    flight_number: number;
    mission_name: string;
    mission_id: string[];
    upcoming: boolean;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    is_tentative: boolean;
    tentative_max_precision: string;
    tbd: boolean;
    launch_window: number;
    rocket: Rocket;
    ships: string[];
    telemetry: Telemetry;
    launch_site: LaunchSite;
    launch_success: boolean;
    launch_failure_details: LaunchFailureDetails;
    links: Links; // Correct property name
    details: string;
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    timeline: Timeline;
  }
  
  interface Rocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: FirstStage;
    second_stage: SecondStage;
    fairings: Fairings;
  }
  
  interface FirstStage {
    cores: Core[];
  }
  
  interface Core {
    core_serial: string;
    flight: number;
    block: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    land_success: boolean;
    landing_intent: boolean;
    landing_type: string;
    landing_vehicle: string;
  }
  
  interface SecondStage {
    block: number;
    payloads: Payload[];
  }
  
  interface Payload {
    payload_id: string;
    norad_id: number[];
    reused: boolean;
    customers: string[];
    nationality: string;
    manufacturer: string;
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
    orbit: string;
    orbit_params: OrbitParams;
  }
  
  interface OrbitParams {
    reference_system: string;
    regime: string;
    longitude: number;
    semi_major_axis_km: number;
    eccentricity: number;
    periapsis_km: number;
    apoapsis_km: number;
    inclination_deg: number;
    period_min: number;
    lifespan_years: number;
    epoch: string;
    mean_motion: number;
    raan: number;
    arg_of_pericenter: number;
    mean_anomaly: number;
  }
  
  interface Fairings {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ship: string;
  }
  
  interface Telemetry {
    flight_club: string;
  }
  
  interface LaunchSite {
    site_id: string;
    site_name: string;
    site_name_long: string;
  }
  
  interface LaunchFailureDetails {
    time: number;
    altitude: number;
    reason: string;
  }
  
  interface Links {
    mission_patch: string;
    mission_patch_small: string;
    reddit_campaign: string;
    reddit_launch: string;
    reddit_recovery: string;
    reddit_media: string;
    presskit: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
    youtube_id: string;
    flickr_images: string[];
  }
  
  interface Timeline {
    webcast_liftoff: number;
  }
  