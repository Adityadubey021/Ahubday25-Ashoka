
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import EventDetails from './EventDetails';

interface EventProps {
  title: string;
  subtitle: string;
  price: string;
  description: string;
  details: string;
}

const EventCard: React.FC<EventProps> = ({ title, subtitle, price, description, details }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-t-festival-orange h-full bg-[#1A1F2C]/50 backdrop-blur-sm text-white border border-white/10">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-festival-orange">{title}</CardTitle>
        <CardDescription className="text-sm font-medium text-gray-300">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-gray-300 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-3 border-t border-gray-700">
        <div className="text-festival-orange font-bold">Entry Fee: {price}</div>
        <EventDetails 
          title={title}
          subtitle={subtitle}
          description={description}
          price={price}
          details={details}
        />
      </CardFooter>
    </Card>
  );
};

const Events = () => {
  const eventDetailsMap = {
    roboSumo: `1. Introduction
Robo sumo is a competitive event where student-designed robots engage in head-to-head matches by pushing
opponents out of a designated arena. The competition is structured to evaluate design precision, strategic
control, and real - time decision making.

2. Team & Robot Requirements
Team Size: Each team may consists of up to 4 members.
Eligibility: All students from accredited academic institutions are eligible to participate.

3. Robot Specifications
Weight Limit: Robots must not weigh more than 8 kg.
Power Source: Robots must operate using onboard batteries with a maximum voltage of 24 V.
Only wireless control is permitted, employing approved methods (such as Bluetooth or RF).
Control: Manual control during matches is mandatory; fully autonomous operation is not allowed.
Dimensions: No fixed size constraints apply, provided the robot complies with weight and structural stability
requirements.

4. Arena & Match Protocol
Arena: The contest is held in a circular ring with a 1.5-meter diameter featuring a smooth surface to ensure fairness.
Game Objective: Robots must force opponent robots out of the ring. Any contact by a robot outside the designated
area will result in elimination.
Match Duration: Matches are limited to a maximum of 15 minutes per round. If no robot is eliminated within this
time, the outcome will be determined by a Judgement panel.

5. Scoring & Progression
Winning Criteria: The robot remaining within the ring at the end of the match is declared the winner. In
the event of simultaneous eliminations, the robot still inside the arena is deemed victorious.
Judgement Parameters: Should the match end without a clear knockout, judges will evaluate performance
based on aggression, strategy, and control.
Stages: The competition on will begin with preliminary group rounds, followed by single-elimination on
knockout rounds leading to the final championship.

6. Robot Restrictions & Safety Measures
Prohibited Equipment: Robots must not incorporate weapons, sharp edges, or any hazardous components.
Movement Mechanism: Allowed mechanisms include wheels, tracks, or legs. Hovercrafts and flying robots are
strictly prohibited.
Disqualification: Any violation of weight, control, or safety regulations—or receiving external assistance
during a match—results in immediate disqualification.

7. Additional Provisions
Teams are responsible for providing their own equipment and spare parts.
All decisions made by the judges and organizing committee are final.
Note : Organisers reserve the right to modify rules as necessary to ensure safety and maintain fair competition.`,

    roboSoccer: `1. Introduction
Robo Soccer is a robotic soccer competition in which teams design and build a robot to maneuver on a designated
soccer field and push a tennis ball to score goals.
The competition emphasizes strategic innovation, manual control, and teamwork.

2. Team & Robot Requirements
Team Size: Each team must consists of 3 to 5 members (students only; professionals are not allowed).
Eligibility: Only students from accredited academic institutions may participate.

3. Bot & Arena Specifications
Arena Dimensions: The playing field measures approximately 8ft x 4ft x 2ft , with a ±10% variation
permitted.
Bot Dimensions: The robot must remain within a 30cm x 30cm x 30cm cubic envelope at all times, with a
±10% variation permitted.
Battery & Weight Constraints:
The battery voltage cannot exceed 24V.
The robot's weight (excluding remote control and wiring) must not exceed 5kg.
Ball Specification: A standard tennis ball is used in the match.
Ball Interaction: The robot must not carry the ball continuously; it must interact with the ball on the
ground.
Control Requirement: Robots must be operated manually by the participating team during the match.

4. Arena & Match Protocol
Match Duration: Each match lasts 15 minutes, divided into two halves of 7.5 minutes each.
Half-Time Break: There is a 2-minute delay between the two halves.
Kickoﬀ: Matches commence from the center of the arena.
Time Regulation: No additional time is granted at the conclusion of either half.
Goal Validity: A goal is counted only when the ball completely crosses the goal line.
Stalled Ball Rule: If the ball remains stationary for 10 seconds, play is restarted from the center.
Foul Play: Intentional ramming when the ball is not in play incurs a penalty, and a robot may not continuously
block the goal for more than 10 seconds.
Repair Protocol: Should a robot lose a significant component (e.g., a motor or wheel), match play will be paused
for 10–15 minutes to allow for repairs.
Referee Authority: Final decisions rest with the referee.

5. Penalties & Disqualification
Penalty Points: Each rule violation results in a deduction of 3 penalty points.
Ball Handling: A robot may not hold or control the ball for more than 5 seconds consecutively.
Accumulated Penalties: If a team accumulates excessive penalty points, they will automatically lose the match.
Damage Provisions: Deliberate damage to the field, tennis ball, or an opponent's robot will lead to disqualification.

6. Judgement Criteria & Scoring
Scoring System: Points are awarded based on valid goals scored, with deductions applied for any penalty
points incurred.
Scoring Details: The detailed scoring mechanism will be disclosed at the event.

7. Additional Provisions
Organizers reserve the right to modify the rules to maintain safety and fair competition.
All decisions made by the referees and Judgement panel are final.

8. Prize & Recognition
The top three teams will receive prizes and certificates.`,

    eSports: `1. Games
The tournament features the following BGMI (Battlegrounds Mobile India)
Free Fire
titles:

2. Team Composition
Each team shall consist of 4 players, with the allowance of one substitute.

3. Match Format
BGMI: Classic Squad Match (Maps: Erangel)
Free Fire: Battle Royale Squad Mode.
The maps and match modes will be confirmed prior to the event.

4. Equipment & Internet Requirements
Players must bring their own mobile devices and accessories (e.g., headphones, triggers).
A stable internet connection is the responsibility of each participant.
Use of emulators or tablets is strictly prohibited—only mobile phones are permitted.

5. Tournament Game Rules
The tournament will be conducted over multiple rounds; advancement is based on total points (Kills + Placement).
Teammates must not team up with opponents under any circumstances.
The utilization of hacks, scripts, or any form of unfair advantage will result in immediate disqualification.
Voice communications must remain free of oﬀensive language and hate speech.

6. Scoring System
Team rankings will be determined by the combined total of Placement Points and Kill Points.
The detailed point system will be disclosed prior to the event.

7. Disqualification Criteria
Use of hacks, unauthorized third-party software, or cheats is strictly forbidden.
Playing on non-mobile devices (emulators or tablets) will result in disqualification.
Toxic behavior, hate speech, or abusive language in voice chat will lead to immediate disqualification.
Failure to join matches within the prescribed time limits may also warrant disqualification.

8. Prize & Recognition
The top three teams will receive prizes and certificates.
Additionally, MVP (Most Valuable Player) awards may be presented based on individual performance.`,

    codeStorm: `1. Introduction
The Individual Coding Event is a competitive programming contest designed to evaluate participants' problem-
solving abilities and coding eﬃciency in an oﬄine environment.

2. Allowed Languages
Participants may use the following programming languages:
1. C
2. C++
3. Java
Use of any language not listed is not permitted.

3. Event Format & Duration
This is an individual contest; each participant competes independently. The contest duration is strictly 1:30 hours.
Problems will focus on logic, algorithms, and data structures.

4. Problem Statement, Environment & Submission
All problem statements will be provided on the day of the contest.
Participants will use provided computers in an oﬄine setting to write and test their code.
The problems are designed to assess skills in logical reasoning, algorithm design, and eﬃcient use of
data structures.

5. Plagiarism & Disqualification
Code plagiarism is strictly prohibited.
Any detection of copied or unauthorized code will result in immediate disqualification from the event.

6. Judgement & Scoring
Submissions will be evaluated based on correctness and eﬃciency.
Points will be awarded according to the accuracy of the solutions and their performance metrics
(time and space eﬃciency).
In the event of a tie, additional criteria such as execution speed may be applied to determine the
final ranking.

7. Additional Provisions
Participants are responsible for ensuring the accuracy and functionality of their code before submission.
Competitors must adhere to all contest rules and guidelines as stated herein.
Organizers reserve the right to modify or clarify any rules as necessary, and all decisions by the judges are
final.`,

    coreSync: `1. Introduction
Core Sync - Bridging Hardware & Software Innovations is a 2-day competition designed to showcase pre-built
projects that integrate hardware and/or software innovations, aligned with the theme of smart, society, and
sustainability.
Projects may be hardware models, software models, or a combination thereof; demonstrating integration is
optional.

2. Team Composition
Teams may consist of 1 to 4 members.

3. Presentation Guidelines
Each team is expected to present their project to the judges for 8 to 10 minutes when the judges arrive.
Presentations should clearly demonstrate the project's alignment with the event theme and its practical, real-
world applicability.

4. Project Preparation and Setup
All projects must be pre-built prior to the event day.
Onsite, each team will be provided with a 30-minute period to set up and prepare their project for
demonstration on the provided equipment.

5. Project Requirements
Projects must align with the theme of smart, society, and sustainability.
Participants may choose to submit a hardware model, a software model, or an integrated solution.
Demonstrating the bridging of hardware and software is optional and should only be included if it adds
significant value to the project.

6. Judgement Criteria
Creativity and Relevance: Assessment of the originality of the concept and its alignment with the theme
(including sustainability aspects).
Technical Depth: Evaluation of the project's technical robustness and sophistication.
Presentation Skills: Assessment of the clarity, organization, and overall eﬀectiveness of the project
demonstration.

7. Additional Provisions
All participants are required to remain at the venue until all events in the annual fest have concluded.
The schedule for when judges will arrive is not fixed; teams must be prepared to present their project during
the designated 8–10-minute presentation slot when requested.
Organizers reserve the right to adjust rules or timelines as necessary to ensure fairness and smooth conduct
of the event.
All decisions made by the judges are final.`,

    thinkInk: `1. Theme - Innovations for a Sustainable and Healthier Future.
The event invites students to present innovative ideas, technologies, and strategies that address sustainability
challenges and promote healthier living. Participation is open to all students from Engineering, Pharmacy, and
Management disciplines.

General Guidelines
1. Eligibility
• Students from Engineering, Pharmacy, and Management disciplines are eligible.
• Each team may have up to 2 members; solo participation is permitted.

2. Poster Specifications
• Posters must be prepared on A1 chart paper in portrait orientation.
• Posters must be pre-designed and printed prior to the event—on-the-spot poster creation is not permitted.
• Participants are required to bring their posters with them to the venue, as materials will not be provided.

3. Submission & Display
• Participants must arrive 30 minutes prior to the event to set up their posters in the assigned display area.
• Teams must remain near their posters during the event for interactions with judges.

4. Content Guidelines
• Posters should align with the theme "Innovations for a Sustainable and Healthier Future."
• Content must be clear, concise, and supported with relevant visuals, such as graphs or diagrams.
• Posters must be original, and plagiarism is strictly prohibited—violations will result in disqualification.

6. Event Schedule
• Date: [Event Date]
• Time: [Event Time]
• Venue: [Event Venue]
• Posters must be submitted 30 minutes before the event starts for setup.

7. Disqualification Criteria
• Late submissions or absence during evaluation.
• Content that is offensive, inappropriate, or irrelevant.
• Use of copyrighted materials without proper permissions.

Important Note for Participants
• All posters must be prepared in advance on A1 chart paper and brought to the event venue.
• No on-site poster creation will be allowed.

Prize Details
• Awards for 1st, 2nd, and 3rd place winners based on judging criteria.
Certificates of participation will be provided to all participants.

JUDGING CRITERIA
CATEGORY POINTS Weight(%)
Relevance To The Theme 20
Innovation and Creativity 20
Visual Appeal and Design 20
Clarity of Content and Message 20
Presentation and Explaination 20`,

    poeticBattle: `Rules and regulations:
• Participants perform original poetic pieces (Hindi or English both are allowed)
• Time limit: 2-3 minutes per round.
• Judgement Criteria:
Rhyming, lyrical depth, creativity, and stage presence.
• Use of hate speech or oﬀensive language is strictly prohibited.
• Exceeding time will result in disqualification.`,

    treasureHunt: `Rules and regulations:
• Teams of 4 members.
• Clues will be provided in a sequential manner.
• Time limit: 120 mins.
• The first team to find the treasure wins; points will be given for each correct clue solved.
• Teams must not tamper with or share clues with others.`,

    declamation: `Rules and regulations:
• Participants must choose a speech from a well-known personality.
• Time limit: 3-5 minutes.
• Judgement Criteria: Content, delivery, pronunciation, fluency, and impact.
• Use of oﬀensive or politically sensitive content is prohibited.
• Exceeding the time limit will result in penalties.`,

    adMad: `Rules and regulations:
• A team may consist of 4 members.
• The team will be asked to create a marketing plan including creating a full-fledged creative campaign.
• Students have to present a conceptual ad of either a product or a service.
• Students will act out a TV/Radio script and present ideas relevant on creating social awareness, etc.
• Maximum Time Limit for performing the Ad is 3 minutes.
• The topics for the Ad Mad Show will be provided 30 minutes prior.
• Topics/Activities performed during Ad Mad show should not relate with Politics and Religions.
• The criteria for assessment include content, spontaneity and adherence to the topic, coordination.
• Use of vulgar expression and language will lead to disqualification of the team.
• Decisions of the judges will be final.`,

    bestShot: `Theme
People Celebrating Architecture:
The photographs should reflect moments where people are engaging with, celebrating, or
enhancing the architectural environment. The architecture itself can be any type of space,
whether indoor or outdoor, public or private, traditional or modern. The interaction between
people and architecture is central to this theme.

Rules and regulations:
• Each participant must capture 5 unique photographs on the spot during the event, adhering to the theme.
• All photographs must be taken within the 120-minute time frame provided during the competition.
• Participants are free to use any medium to capture their photographs.
• Acceptable devices include: Mobile phones, Digital cameras, Tablets, Any other photo-capturing devices.
• All photographs submitted must be geo-tagged to verify that they were taken at the designated location during the competition window. This ensures the authenticity of the "on-the-spot" capture.
• Ensure your device's location services are activated before the event begins.
• Late submissions will not be considered for Judgement.

Judgement Criteria
• Justification of the Theme: The primary focus for Judgement will be how well the photographs align with and express the theme of "People Celebrating Architecture."
• Creativity
• Visual Impact
• Composition and Clarity`,

    sinkingShip: `Rules and Regulations:
• Participants will be role playing famous historical character (e.g., Ashoka, Napoleon, Rani Lakshmi Bai, Albert Einstein, Cleopatra, etc.).
• Students can also dress up to be more presentable as the character.
• Each participant must argue why they deserve to be saved from the sinking ship.
• Time limit: 1-2 minutes per participant to present their case.
• The audience or a panel of judges will vote on who survives.
• Participants must stay in character and avoid anachronisms.
• Any oﬀensive or factually incorrect portrayal of historical figures will lead to penalties or disqualification.

Judgement Criteria:
1. Strength of argument
2. Creativity and historical accuracy
3. Public speaking skills and persuasion
4. Relevance to the character's contributions to society`,

    craftATale: `Creative Story Writing

Description:
Let your imagination take flight! In Craft a Tale, participants will be provided with two distinct images,
and they must weave a single creative story that connects both visuals in a meaningful, engaging, and
original way.

Rules and Guidelines:
• Participants will be shown 2 images at the beginning of the competition.
• The story must creatively combine elements from both images.
• The connection should be clear and central to the storyline.

Submission Requirements:
• Word Limit: 500 – 1000 words.
• Language: English only.
• Format: Typed (if online) or legibly handwritten (if offline).
• Story must have a title.
• Submission must be original and unpublished.

Time Limit:
• Total time: 60 minutes.
• First 5-10 minutes: Image reveal and planning.
• Remaining time: Writing and submission.

Do's and Don'ts:
• Do ensure your story has a beginning, middle, and end.
• Do incorporate both images logically and creatively.
• Don't use inappropriate or offensive content.
• Don't copy from existing works (Plagiarism leads to disqualification)

Judging Criteria:
• Creativity and Originality – Unique plot, imaginative use of images.
• Relevance to Images – How well both images are integrated.
• Language and Grammar – Use of vocabulary, sentence structure.
• Narrative Structure – Flow, coherence, and storytelling style.
• Impact – Emotional, humorous, or dramatic effect.`,

    startupSimulation: `Objective
Teams will be given a mystery image that represents a real-world scene, context, or issue.
Based solely on this visual, teams must:
1. Interpret the image
2. Identify a core problem or opportunity
3. Brainstorm multiple solutions
4. Choose the best one
5. Simulate a start-up around that idea, including Value proposition, business model.

1. Team Composition
Teams must have 2–5 members.
Each team is encouraged to assign functional roles.
Collaboration, delegation, and communication are key to succeeding within time limits.

2. Image-Based Simulation Setup
Image Reveal
All teams receive the same image at the start of the challenge.
The image will be open to interpretation, with no explanation provided.
It may depict a social issue, tech challenge, community setting, urban scene, environmental context, etc.

Problem Discovery
Teams must extract a meaningful problem from the image (e.g., lack of clean water, mobility issues, ineﬃciencies, safety risks).
Multiple interpretations are allowed — creativity is encouraged.

3. Simulation Phases
Each phase has a strict time limit and deliverables.
Time must be managed wisely across idea on, research, and preparation.

Phase 1: Image Analysis & Problem Framing
Time: 15 mins
Goal: Observe the image and define the key issue it presents.
Deliverables:
Problem Statement
Target Users / Aﬀected Stakeholders
Supporting reasoning (Why this problem matters)

Phase 2: Solution Brainstorming & Selection
Time: 15 mins
Goal: Brainstorm at least 3 feasible solutions, then choose the best one to develop further.
Deliverables:
List of 3 possible solutions (briefly described)
Chosen Solution (with justification for selection)

Phase 3: Startup Simulation
Time: 30 mins
Goal: Build a start-up concept around the chosen solution.
Deliverables:
Start-up Name & Mission Statement
Value proposition, Customer pain and gain Analysis, Customer segment
Business Model Canvas or Lean Canvas
Tech Stack (for both software/hardware if relevant)
Financial Plan (basic cost and revenue streams)
Team Roles & Responsibilities

Phase 4: Final Presentation
Time: 5–10 minutes per team.
Goal: Present your full startup simulation to the panel.
Must include:
Problem & Image Interpretation
Solution Chosen
Business Model Overview
Market & Growth Plan
Team Summary

4. Time & Submission Rules
Each phase will be timed and announced.
Late submissions may incur penalties unless prior approval is given.
Final pitch timing is strictly enforced — teams exceeding time may be stopped.

5. Judgement Criteria (100 Points)
CATEGORY POINTS
Image Interpretation & Insight 10
Problem Identification 15
Solution Feasibility 20
Innovation & Creativity 20
Business Model Quality 20
Presentation & Teamwork 15
Bonus (5 pts): For creativity in MVP, marketing, or use of emerging tech.

6. Ethics & Fair Play
All work must be original.
Respect the event space and all participants.
Any form of plagiarism or copying will result in disqualification.
Judges decisions are final.

7. Awards
Awards include: (26.04.2025)
Best Overall Start-up
Most Creative Interpretation
Social Impact Award`,

    pitchDeck: `"An exclusive event for showcasing student startups, innovations, and ideas."

Objective of the Event
The Ashoka Startup Showcase Meet provides a platform for student start-ups to present
their ideas, network with potential mentors, investors, and fellow entrepreneurs, and gain
valuable feedback to further their entrepreneurial journey.

The event aims to:
1. Showcase innovative student startups.
2. Provide a space for networking with mentors and investors.
3. Foster collaboration and feedback from experienced entrepreneurs and the community.
4. Recognize and award top startups for their innovation and execution.

Eligibility:
Open to student startups or early-stage entrepreneurs from diﬀerent institutions
(undergraduate, graduate students, or alumni).
Startup Stage: Teams with an idea, prototype, or minimum viable product (MVP).
Team Composition: Teams must have 2 to 5 members, with at least one member from a
business or technical background.
Solo Founders: Allowed if justified (e.g., solo research or product).
Previous Funding: Teams who have raised over a certain amount of seed funding may be
excluded (optional cap).

Event Structure & Format
Session 1: Startup Presentations
Each startup team will have 5-10 minutes to pitch their idea, followed by 3–5 minutes
for Q&A from the judges and audience.

Pitch Deck: Teams should submit a pitch deck (maximum of 10 slides) that covers:
1. Problem
2. Solution
3. Market Opportunity
4. Product or MVP
5. Business Model
6. Go-to-Market Strategy
7. Team
8. Ask (Funding, partnerships, mentorship)

Session 3: Award Ceremony & Closing Remarks
Awards will be presented to the Top 3 startups

Judgement Criteria (100 Points)
CATEGORY POINTS
Problem Definition 10
Product/Innovation 15
Market Opportunity 15
Business Model & Scalability 15
Go-to-Market Strategy 10
Presentation Quality 10
Team & Execution Potential 10
Social Impact (if applicable) 10
Bonus (5 pts): For creative use of technology, social impact, or innovative approaches

Awards & Recognition
The top 3 teams will receive the following:
1st Place:
Recognition as the best startup.
Mentorship and Networking opportunities.
2nd Place:
Advisory services and marketing support.
3rd Place:
Co-working space access for 3 months and advisory support.

Event Timeline
STAGE DATE
Registration Opens 12.04.2025
Pitch Deck Submission Deadline 24.04.2025
Event Day 26.04.2025
Award Ceremony 26.04.2025

Registration and Participation
Application Process:
Startups must complete an online application form and submit their pitch
deck by [insert deadline].
Registration Link
Registration fee 200/-

Selected teams will be informed via email about their participation.`,

    hackathon: `Rules for Hackathon:

a. Eligibility
The hackathon is open to all college students.
Teams may include members from diﬀerent universities and institutes.

b. Team Formation
Each team can consist of 1 to 4 members.
All team members must collaborate in developing a single project.
Only one project submission is allowed per team for Judgement.

c. Theme – Sustainability
All projects should consider the theme of sustainability.
Participants are encouraged to design solutions that incorporate sustainable
practices or address environmental, social, or economic sustainability challenges.

d. Judgement Criteria
CATEGORY POINTS
Innovation & Creativity 30
Technical Execution 30
Impact 20
Presentation 20

Innovation & Creativity
Evaluation of how unique and creative the solution is, including its
sustainable elements.

Technical Execution
Assessment of the project's implementation, technical robustness, and
overall methodology.

Impact
Measurement of the value or impact the solution brings to the community, users, or
industry—especially in terms of sustainability outcomes.

Presentation
Evaluation of the project presentation, including the quality of the user interface,
demonstration, and clarity in explaining the solution.

Bonus:
Up to 5 additional points may be awarded for exceptional creativity in MVP, marketing,
or the innovative use of emerging technologies.

e. Code of Conduct
Respect Others:
All participants are expected to treat their peers, mentors, and organizers with respect.

No Plagiarism:
Participants must use their own original code. Use of code from external sources
(except for approved libraries/APIs) will lead to disqualification.

No Disruptive Behaviour:
Teams should focus on their projects and refrain from causing any unnecessary disruptions.

f. Submission
Each team must submit their complete project source code within the designated time.
Projects must be deployed and fully functional by the end of the 24-hour event.
Incomplete or non-functional submissions will be penalized.`
  };

  const technicalEvents = [
    {
      title: "Robo Sumo",
      subtitle: "The Ultimate Showdown",
      price: "₹500",
      description: "Design and build a robot to push opponents out of a designated arena. Test your engineering skills and strategic control.",
      details: eventDetailsMap.roboSumo
    },
    {
      title: "Robo Soccer",
      subtitle: "Robotic Soccer Challenge",
      price: "₹500",
      description: "Build a robot to maneuver on a designated soccer field and push a tennis ball to score goals.",
      details: eventDetailsMap.roboSoccer
    },
    {
      title: "E-Sports",
      subtitle: "BGMI & Free Fire Tournament",
      price: "₹300",
      description: "Compete in popular mobile games BGMI and FreeFire to win exciting prizes. Show off your gaming skills and strategic gameplay.",
      details: eventDetailsMap.eSports
    },
    {
      title: "Code Storm",
      subtitle: "Competitive Programming Challenge",
      price: "₹200",
      description: "Solve complex programming problems under time constraints. Test your coding skills, logic, and efficiency.",
      details: eventDetailsMap.codeStorm
    },
    {
      title: "Core Sync",
      subtitle: "Bridging Hardware & Software Innovations",
      price: "₹400",
      description: "Showcase pre-built projects that integrate hardware and/or software innovations aligned with smart, society, and sustainability themes.",
      details: eventDetailsMap.coreSync
    },
    {
      title: "ThinkInk",
      subtitle: "Poster Presentation Competition",
      price: "₹200",
      description: "Present innovative ideas through posters addressing sustainability challenges and promoting healthier living.",
      details: eventDetailsMap.thinkInk
    }
  ];

  const literaryEvents = [
    {
      title: "Poetic Battle",
      subtitle: "Verse vs. Verse",
      price: "₹100",
      description: "Showcase your poetic talent with original pieces in Hindi or English. Express emotions and creativity through words.",
      details: eventDetailsMap.poeticBattle
    },
    {
      title: "Treasure Hunt",
      subtitle: "Campus-wide Adventure",
      price: "₹300",
      description: "Solve clues and puzzles to find hidden treasures across the campus. Test your problem-solving skills and teamwork.",
      details: eventDetailsMap.treasureHunt
    },
    {
      title: "Declamation",
      subtitle: "Public Speaking Challenge",
      price: "₹150",
      description: "Deliver a powerful speech from a well-known personality with conviction and eloquence.",
      details: eventDetailsMap.declamation
    },
    {
      title: "Ad-Mad",
      subtitle: "Advertisement Madness",
      price: "₹200",
      description: "Create and present an advertisement for a given product in the most creative way. Show your marketing skills and creativity.",
      details: eventDetailsMap.adMad
    },
    {
      title: "Best Shot on the Spot",
      subtitle: "People Celebrating Architecture",
      price: "₹250",
      description: "Capture photographs reflecting moments where people interact with architectural environments.",
      details: eventDetailsMap.bestShot
    },
    {
      title: "Sinking Ship",
      subtitle: "Historical Characters Edition",
      price: "₹150",
      description: "Role-play historical characters and argue why you deserve to be saved from a sinking ship.",
      details: eventDetailsMap.sinkingShip
    },
    {
      title: "Craft a Tale",
      subtitle: "Creative Story Writing",
      price: "₹100",
      description: "Weave a creative story connecting two distinct images in a meaningful and original way.",
      details: eventDetailsMap.craftATale
    }
  ];

  const entrepreneurshipEvents = [
    {
      title: "Startup Simulation Challenge",
      subtitle: "Create a Startup Concept",
      price: "₹300",
      description: "Interpret a mystery image, identify a problem, and build a startup concept around your solution.",
      details: eventDetailsMap.startupSimulation
    },
    {
      title: "Pitch Deck Challenge",
      subtitle: "Ashoka Startup Showcase Meet",
      price: "₹200",
      description: "Present your startup idea, network with mentors and investors, and gain valuable feedback.",
      details: eventDetailsMap.pitchDeck
    },
    {
      title: "Kashi Hackathon 2025",
      subtitle: "24-Hour Coding Marathon",
      price: "₹1000",
      description: "Develop sustainable solutions through a 24-hour collaborative development event.",
      details: eventDetailsMap.hackathon
    }
  ];

  return (
    <section id="events" className="py-20 bg-[#121621] relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-festival-orange font-montserrat">Festival Events</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Participate in our diverse range of technical, literary, and entrepreneurship events designed to challenge your skills and creativity.</p>
        </div>

        <Tabs defaultValue="technical" className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-[#1A1F2C]">
              <TabsTrigger value="technical" className="text-lg px-8 py-3 data-[state=active]:bg-festival-orange data-[state=active]:text-white">
                Technical
              </TabsTrigger>
              <TabsTrigger value="literary" className="text-lg px-8 py-3 data-[state=active]:bg-festival-orange data-[state=active]:text-white">
                Literary
              </TabsTrigger>
              <TabsTrigger value="entrepreneurship" className="text-lg px-8 py-3 data-[state=active]:bg-festival-orange data-[state=active]:text-white">
                Entrepreneurship
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="technical" className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalEvents.map((event, index) => (
                <EventCard
                  key={`tech-${index}`}
                  title={event.title}
                  subtitle={event.subtitle}
                  price={event.price}
                  description={event.description}
                  details={event.details}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="literary" className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {literaryEvents.map((event, index) => (
                <EventCard
                  key={`lit-${index}`}
                  title={event.title}
                  subtitle={event.subtitle}
                  price={event.price}
                  description={event.description}
                  details={event.details}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="entrepreneurship" className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {entrepreneurshipEvents.map((event, index) => (
                <EventCard
                  key={`entr-${index}`}
                  title={event.title}
                  subtitle={event.subtitle}
                  price={event.price}
                  description={event.description}
                  details={event.details}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Events;
