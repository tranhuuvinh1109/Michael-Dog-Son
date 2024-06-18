export type HeroItemType = {
  title: string;
  content: string;
  footer: string;
};

export type RoadmapItemType = {
  title: string;
  content: RoadmapItemContentType[];
};

export type RoadmapItemContentType = {
  label: string;
  text: string;
};

export type TimelineItemType = {
  title: string;
  text: string[];
};

export type TagItemType = {
  color: string;
  text: string;
  percent: string;
};
