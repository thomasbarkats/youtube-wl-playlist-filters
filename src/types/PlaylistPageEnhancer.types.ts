export interface CurrentFilters {
  channel: string;
  channelSearch: string;
  titleSearch: string;
  duration: string;
}

export interface VideoStats {
  count: number;
  duration: string;
}

export interface DurationThreshold {
  min?: number;
  max?: number;
}

export interface DurationThresholds {
  [key: string]: DurationThreshold;
}
