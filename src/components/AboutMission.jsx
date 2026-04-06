import React from "react";

const AboutMission = () => {
  return (
    <section id="about-mission" className="about-mission-section py-20 px-4 md:px-0">
      <div className="about-mission-container mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center">
        {/* Left — Image composition */}
        <div className="about-mission-left">
          {/* Small decorative diamonds */}
          <svg
            className="about-mission-diamond about-mission-diamond--top"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            aria-hidden="true"
          >
            <rect
              x="9"
              y="0"
              width="12"
              height="12"
              rx="2"
              transform="rotate(45 9 0)"
              fill="#ff7301"
              opacity="0.15"
            />
          </svg>
          <svg
            className="about-mission-diamond about-mission-diamond--bottom"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            aria-hidden="true"
          >
            <rect
              x="9"
              y="0"
              width="12"
              height="12"
              rx="2"
              transform="rotate(45 9 0)"
              fill="#ff7301"
              opacity="0.12"
            />
          </svg>

          <img
            src="/about/left-about.png"
            alt="Our experienced team collaborating in a modern workspace"
            className="about-mission-image"
          />
        </div>

        {/* Right — Text content */}
        <div className="about-mission-right">
          <span className="about-mission-label">ABOUT US</span>

          <h2 className="about-mission-title">
            Your Satisfaction,
            <br />
            Our Mission
          </h2>

          <p className="about-mission-text">
            Virasat Solutions A Leading And Skilled LMS, ELearning &amp;
            ECommerce Application Development Company. We, At Virasat
            Solutions, Have Dedicated And Passionate Teams To Cater To Each
            And Every Aspect Of Your ELearning &amp; ECommerce Business.
          </p>

          <p className="about-mission-text">
            Whether Be It LMS{" "}
            <span className="about-mission-highlight">
              (Learning Management System)
            </span>{" "}
            Design And Development, E-Commerce Web And Mobile Applications
            Development, Moodle Development, PHP Frameworks &amp; CMS
            Development, Etc. We Will Assist You On All The Areas.
          </p>

          <p className="about-mission-text">
            And We Also Offer The Best Maintenance And Support Solutions
            According To The Client's Requirements Like Custom Theme
            Development, Plugin Development, Migration, Integration, And
            Customization Services.
          </p>
        </div>
      </div>

      {/* Decorative dot grid — bottom right */}
      <div className="about-mission-dots" aria-hidden="true">
        {[...Array(49)].map((_, i) => (
          <span key={i} className="about-mission-dot" />
        ))}
      </div>
    </section>
  );
};

export default AboutMission;
