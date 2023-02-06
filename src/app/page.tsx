import React from "react";
import s from "./page.module.scss";

function Header() {
  return (
    <header>
      <h1>Vasylyna Biletska</h1>
      <div>Junior Data Analyst</div>
    </header>
  );
}

function Pair({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label>{title}</label>
      <div>{children}</div>
    </div>
  );
}

function Contacts() {
  return (
    <section>
      <Pair title="Address">Lviv</Pair>
      <Pair title="Email">
        <a href="mailto:vasylynabiletskaa@gmail.com">
          vasylynabiletskaa@gmail.com
        </a>
      </Pair>
      <Pair title="Links">
        <a href="linkedin.com/in/biletskaaa"></a>
      </Pair>
    </section>
  );
}

function ResumeSection({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3>
        {number} {title}
      </h3>
      {children}
    </section>
  );
}

function Profile({ number }: { number: number }) {
  return (
    <ResumeSection number={number} title="Profile">
      <ul>
        <li>
          Have reduced the time spent on the existing reports by 8-10 times,
          automating a lot of manual work.
        </li>
        <li>
          Implemented Looker (Google Data Studio) in work and developed
          automated dashboards. Redesigned methods of reporting and simplified
          data collection.
        </li>
        <li>Optimized website event tracking</li>
        <li>
          My scientific area of interest is recommender systems and their impact
          on people. That is why my university thesis project was related to the
          construction of recommendation systems (alogrithms and metrics) and
          some exploratory data analysis using Pythong libraries.
        </li>
      </ul>
    </ResumeSection>
  );
}
function HistoryItem({
  range,
  title,
  children,
}: {
  range: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section>
      <label>{range}</label>
      <main>
        <h4>{title}</h4>
        {children}
      </main>
    </section>
  );
}

function EmploymentHistory({ number }: { number: number }) {
  return (
    <ResumeSection number={number} title="Employment History">
      <HistoryItem
        range="10/2021 - Present"
        title="Web Marketing Analyst at ams.agency"
      >
        <p>
          At my current job. I work in a digital agency with many clients, and
          for each of them, I perform analythical tasks such as:
        </p>
        <ol>
          <li>
            The definition of critical metrics and commercial conversions, which
            uses to monitor the effectiveness of advertising campaigns.
          </li>
          <li>
            Setting up events through Google Tag Manager to track conversions to
            the Google Analytics system and tracking heat maps.
          </li>
          <li>
            Direct data analytics, monthly and ad-hoc, which include:
            <ul>
              <li>
                identification of the most and least effective campaigns and
                creatives for each of them
              </li>
              <li>analysis of user behavior on the site</li>
              <li>
                analysis of the quality of traffic from each advertising
                campaign
              </li>
              <li>identifying causes of abrupt changes in metrics</li>
              <li>conclusions and recommendations for the client</li>
            </ul>
          </li>
          <li>Creating new reports using the Looker tool with SQL queries</li>
        </ol>
      </HistoryItem>
      <HistoryItem
        range="03/2019 - 09/2019"
        title="Assistant Research Analyst at Top Lead"
      >
        <p>
          In this position, I worked with data &quot;manually&quot; and my job
          was to:
        </p>
        <ol>
          <li>search for data on a given topic from verified sources.</li>
          <li>
            gathering, processing, and organizing this data in Excel and their
            recheck.
          </li>
          <li>
            visualize processed data in PowerPoint for a designer of informative
            FB posts.
          </li>
        </ol>
      </HistoryItem>
    </ResumeSection>
  );
}
function Education({ number }: { number: number }) {
  return (
    <ResumeSection number={number} title="Employment History">
      <HistoryItem
        range="Sep 2017 - Jun 2021"
        title="Kyiv National Econommics University"
      >
        <p>Economic cybernetics</p>
      </HistoryItem>
    </ResumeSection>
  );
}
function Progress({
  value,
  max,
  className,
}: {
  value: number;
  max: number;
  className?: string;
}) {
  const dots = [];
  for (let i = 0; i < max; i++) {
    dots.push(<div key={i} className={i < value ? s.active : s.inactive} />);
  }
  return <div className={className}>{dots}</div>;
}

function Skill({ title, value }: { title: string; value: number }) {
  return (
    <div>
      <label>{title}</label>
      <Progress value={value} max={5} />
    </div>
  );
}

function Skills({ number }: { number: number }) {
  return (
    <ResumeSection number={number} title="Employment History">
      <Skill title="SQL" value={5} />
      <Skill title="Looker (BI tool)" value={5} />
      <Skill title="Microsoft Excel" value={5} />
      <Skill title="Python" value={2} />
      <Skill title="Detail Oriented" value={5} />
      <Skill title="Tableau" value={3} />
      <Skill title="Google Analytics" value={4} />
      <Skill title="Data Analysis" value={3} />
    </ResumeSection>
  );
}
function Languages({ number }: { number: number }) {
  return (
    <ResumeSection number={number} title="Employment History">
      <Skill title="English" value={3} />
    </ResumeSection>
  );
}

const SECTIONS = [Profile, EmploymentHistory, Education, Skills, Languages];

export default function Home() {
  return (
    <main className={s.main}>
      <Header />
      <Contacts />
      {SECTIONS.map((Section, ind) => (
        <Section number={ind + 1} key={Section.name} />
      ))}
    </main>
  );
}
