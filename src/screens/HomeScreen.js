import React from "react";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContainer}></div>
        <div className={styles.whiteContainer}>
          <h1 className={styles.headingOne}>Imagine Software</h1>
          <div className={styles.headingOneContainer}>
            <p className={styles.headingOnePar}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className={styles.headingOnePar}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className={styles.goalContainerHeading}>
          <h2 className={styles.goalHeading}>Our Goals</h2>
        </div>
        <div className={styles.goalsContainer}>
          <div className={styles.individualGoalContainer}>
            <h3>Agile Environment</h3>
            <p>
              Agile is a project management method that prioritizes flexibility
              and collaboration in software development. It is based on the
              Agile Manifesto, which outlines four core values: individuals and
              interactions over processes and tools, working software over
              comprehensive documentation, customer collaboration over contract
              negotiation, and responding to change over following a plan.
            </p>
          </div>
          <div className={styles.individualGoalContainer}>
            <h3>Real Projects</h3>
            <p>
              One of the key benefits of an Agile environment is its ability to
              handle changing requirements and shifting priorities. Rather than
              adhering to a rigid plan, Agile teams are able to respond to new
              information and adjust their approach as needed. This is
              particularly important in today's fast-paced business world, where
              requirements and technologies can change rapidly.
            </p>
          </div>
          <div className={styles.individualGoalContainer}>
            <h3>Have Fun</h3>
            <p>
              In conclusion, an Agile environment is a dynamic and flexible
              approach to software development that prioritizes collaboration,
              adaptation, and continuous delivery of value. While it can be
              challenging, it is a valuable method for organizations looking to
              stay ahead in a rapidly changing world.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.yellowContainer}>
        <div className={styles.smallerSideBannerContainer}>
          <h3>Join Us</h3>
          <p>
            In conclusion, an Agile environment is a dynamic and flexible
            approach to software development that prioritizes collaboration,
            adaptation, and continuous delivery of value
          </p>
        </div>
        <div className={styles.sideBannerContainer}>
          <h3>Meet Our Team</h3>
          <p>
            In conclusion, an Agile environment is a dynamic and flexible
            approach to software development that prioritizes collaboration,
            adaptation, and continuous delivery of value
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
