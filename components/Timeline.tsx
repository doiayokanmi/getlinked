"use client";

import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

export default function TimelineComp() {
  return (
    <section className="py-12 border-b md:px-24 px-4">
      <Timeline className="text-white">
        <TimelineItem>
          <TimelineOppositeContent className="text-white"></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector className="bg-primary" />
          </TimelineSeparator>
          <TimelineContent className="text-white"></TimelineContent>
        </TimelineItem>
        <TimelineItem className="center">
          <TimelineContent className="text-white text-end">
            <span className="text-primary">Hackathon Announcement</span>
            <p className="text">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </TimelineContent>

          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector className="bg-primary" />
          </TimelineSeparator>
          <TimelineOppositeContent className="text-white">
            09:30 am
          </TimelineOppositeContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>10:00 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector className="bg-primary" />
          </TimelineSeparator>
          <TimelineContent className="text-white">Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>12:00 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector className="bg-primary" />
          </TimelineSeparator>
          <TimelineContent className="text-white">Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>9:00 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
          </TimelineSeparator>
          <TimelineContent className="text-white">Repeat</TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}
