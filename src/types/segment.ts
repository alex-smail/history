import { TimelineEvent } from "./event";

export interface TimelineSegment {
  id: string;
  title: string;
  period: string;
  events: TimelineEvent[];
  active: boolean;
}
