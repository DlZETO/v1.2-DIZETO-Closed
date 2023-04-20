import React from "react";
import { FaRegThumbsUp, FaBriefcase, FaUserAlt } from "react-icons/fa";
import Tracker from "./parts/Tracker";
import DisplayDateTime from "./parts/DisplayDateTime";

export default function TrackRecord() {
  return (
    <section className="bg-gray-100/50 dark:bg-dark/50">
      <div className="mx-auto flex items-center justify-center px-5 py-12">
        <Tracker icon={<FaRegThumbsUp />} number="48" value="Happy Client" />
        <div className="grey-line-v"></div>
        <Tracker icon={<FaBriefcase />} number="50" value="Completed Projects" />
        <div className="grey-line-v"></div>
        <Tracker icon={<FaUserAlt />} number="8" value="Subscriber" />
        <div className="grey-line-v hidden md:block"></div>
        <DisplayDateTime />
      </div>
    </section>
  );
}
