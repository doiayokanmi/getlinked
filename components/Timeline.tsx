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
    <section className="py-12 border-b md:px-24 px-4 text-white">
        <h1 className="font-semibold md:text-4xl text-xl text-center">
          Timeline
        </h1>
        <p className="md:w-1/2 text-center mx-auto py-4">
        Here is the breakdown of the time we anticipate using for the upcoming event.
        </p>
      <Timeline className="text-white">
        <TimelineItem>
          <TimelineOppositeContent className="text-white"></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector className="bg-primary" />
          </TimelineSeparator>
          <TimelineContent className="text-white"></TimelineContent>
        </TimelineItem>

        <TimelineItem className="">
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

          <TimelineOppositeContent className="text-primary text-start">
            November 18, 2023
          </TimelineOppositeContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent className="text-primary">
            November 18, 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector className="bg-primary" />
          </TimelineSeparator>
          <TimelineContent className="text-white">
            <span className="text-primary">Teams Registration begins</span>
            <p className="text">
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="">
          <TimelineContent className="text-white text-end">
            <span className="text-primary">Teams Registration ends</span>
            <p className="text">
              Interested Participants are no longer Allowed to register
            </p>
          </TimelineContent>

          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector className="bg-primary" />
          </TimelineSeparator>

          <TimelineOppositeContent className="text-primary text-start">
            November 18, 2023
          </TimelineOppositeContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent className="text-primary">
            November 18, 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector className="bg-primary" />
          </TimelineSeparator>
          <TimelineContent className="text-white">
            <span className="text-primary">
              Announcement of the accepted teams and ideas
            </span>
            <p className="text">
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="">
          <TimelineContent className="text-white text-end">
            <span className="text-primary">
              Getlinked Hackathon 1.0 Offically Begins
            </span>
            <p className="text">
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </TimelineContent>

          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector className="bg-primary" />
          </TimelineSeparator>

          <TimelineOppositeContent className="text-primary text-start">
            November 18, 2023
          </TimelineOppositeContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent className="text-primary">
            November 18, 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector className="bg-primary" />
          </TimelineSeparator>
          <TimelineContent className="text-white">
            <span className="text-primary">Demo Day</span>
            <p className="text">
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}
