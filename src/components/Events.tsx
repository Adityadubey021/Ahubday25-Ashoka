
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-t-festival-purple h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-festival-purple">{title}</CardTitle>
        <CardDescription className="text-sm font-medium">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-3 border-t">
        <div className="text-festival-purple font-bold">Entry Fee: {price}</div>
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
    roboSumo: `Introduction:
Welcome to Robosumo, an exciting competition where student-designed robots battle it out.
The goal is for a wireless-controlled robot to push its opponents out of the ring to win.

Team & Robot Requirements:
Team Size: Each team can have a maximum of 4 students.
Eligibility: Open to all students from any academic institution.

Robot Specifications:
Weight Limit: The robot must not exceed 8kg.
Power Source:
- The robot must be powered by an onboard battery.
- Power supply must not exceed 24V.
- Only wireless control is allowed; no wired connections during the match.

Dimensions:
No specific size constraints, but the robot must meet weight and structural requirements.

Control System:
- Robots must be controlled wirelessly via Bluetooth, RF communication, or approved wireless method.
- Fully autonomous robots are not allowed; the robot must be controlled by team members.

Competition Rules:
1. The Arena:
The battle takes place in a circular ring (diameter: 3 meters).
The surface will be smooth to ensure fair play.

2. Game Objective:
The goal is to push opponent robots out of the ring within the given time.
Each round consists of three robots competing simultaneously.
If any part of a robot touches the ground outside the ring, it is considered out.

3. Match Duration:
Each round lasts a maximum of 15 minutes.
If no robot is pushed out within the time limit, the winner is decided based on aggression, control, and strategy.

4. Scoring & Winning Criteria:
The last remaining robot in the ring is the winner.
If multiple robots are pushed out simultaneously, the one still inside wins.
If time runs out with multiple robots still in the ring, judges decide the winner based on:
- Aggression (constant attacking or pushing)
- Strategy (effective moves to push others out)
- Control (robot movements and responses)

Robot Restrictions:
Weapons & Hazardous Equipment:
Robots must not have sharp edges, weapons, or harmful mechanisms.
Explosives, sparks, or dangerous materials are strictly prohibited.`,

    roboSoccer: `In this event, participants would be competing against each other in an arena which will be a soccer field. Participants have to use their creative mind to make a robot which plays soccer.

General Overview:
- The event is a robotic soccer competition.
- Teams must build a bot that can move itself and push a tennis ball.
- Teams can have 3-5 members (students only; professionals not allowed).

Arena and Bot Specifications:
- The arena size: 8ft x 4ft x 2ft (±10% variation possible).
- Bot dimensions: Must fit within a 30cm x 30cm x 30cm cube at all times.
- Battery voltage: Cannot exceed 24V.
- Bot weight: Cannot exceed 5kg (excluding remote/wires).
- Ball: A standard tennis ball.
- The bot must not carry the ball continuously; it should keep the ball on the ground.

Match Rules:
- Matches last for 6 minutes (two halves of 3 minutes each with a 1-minute interval).
- Match starts from the center.
- No added time at the end of the halves.
- Goals are valid only if the ball fully crosses the goal line.
- If the ball remains stationary for 10 seconds, play is restarted from the center.
- Intentional ramming without the ball in play results in a penalty.
- Bots cannot fully block the goal for more than 10 seconds.
- If a bot loses a significant part (motor, wheels, etc.), play will be stopped for up to 10-15 minutes for repairs.
- Final decisions rest with the referee.

Penalties:
- Breaking rules results in 3 penalty points deduction per offense.
- Bots cannot corner the ball for more than 5 seconds.
- If a team accumulates too many penalty points, they lose the match automatically.
- Damaging the field, ball, or opponent bot can lead to disqualification.

Judging Criteria:
- Points are awarded based on goals scored and negative penalties.
- The exact scoring system will be revealed at the event.`,

    eSports: `Games: BGMI (Battlegrounds Mobile India) & Free Fire

Team Size: 4 players (+1 substitute allowed)

Match Format:
BGMI: Classic Squad Match (Erangel, Miramar, or Sanhok)
Free Fire: Battle Royale Squad Mode
Maps & match modes will be decided before the event.

Rules & Regulations:
Device & Internet:
- Players must bring their own mobile phones & accessories (headphones, triggers, etc.).
- Stable internet connection is the responsibility of players.
- No emulators or tablets allowed (Mobile only).

Game Rules:
- The tournament will be played in multiple rounds. The top teams will advance based on total points (Kills + Placement).
- Teaming with opponents is strictly prohibited.
- Any use of hacks, scripts, or unfair advantages will result in immediate disqualification.
- Voice chat must not contain offensive language or hate speech.

Scoring System:
- Placement Points + Kill Points will determine the rankings.
- The exact point system will be shared before the event.

Disqualification Criteria:
- Using hacks, third-party software, or cheats.
- Using emulators or playing on non-mobile devices.
- Toxic behavior, hate speech, or abusive language.
- Exceeding time limits for joining matches.

Prize & Recognition:
- The top 3 teams will receive prizes and certificates.
- MVP (Most Valuable Player) awards may be given based on performance.`,

    cCoding: `Individual Event

Languages Allowed:
C, C++, Python, Java

Rules:
- Time limit: 2 hours
- Problems will be based on logic, algorithms, and data structures.
- Code plagiarism will result in disqualification.
- Submissions will be evaluated based on correctness and efficiency.`,

    techDebate: `Team Size: 2 members per team (1 for, 1 against).

Rules:
- Each speaker gets 3 minutes for their argument.
- 1-minute rebuttal round per speaker.
- No personal attacks or inappropriate language.

Judging Criteria:
- Strength of arguments
- Clarity and fluency
- Logical reasoning
- Counterarguments`,

    techQuiz: `Overview
Tech quiz is all about startups, innovations and tech happenings in recent times.

Team Composition:
- Each team may have up to two members. Solo participation is allowed.
- Team members should register together before the event starts.

Conduct:
- Participants must maintain decorum throughout the event.
- Cheating, disruptive behavior, or use of unfair means will result in immediate disqualification.

Time Management:
- All rounds will have specific time limits, and teams must adhere to them.
- Late entries or answers will not be accepted.

Round-wise Rules:
Round 1: MCQ (Multiple Choice Questions)
- Each question will have 4 options, and teams must choose the correct one.
- Teams will have 10 seconds to answer each question.
- Scores will be awarded based on the number of correct answers.

Round 2: Rapid Fire
- Teams will answer as many questions as possible within a set time frame (e.g., 2 minutes).
- Each correct answer awards points.
- Only one team member may respond at a time.

Round 3: Audio-Visual Round
- Teams will be presented with audio or visual clues and must identify or analyze them.
- Each clue will have a set time limit for responses (15–30 seconds depending on complexity).
- Scores will be awarded based on accuracy and speed of answers.`,

    modelPresentation: `Team Size: 1-4 members

Rules:
- Presentation time: 5-7 minutes.
- AI models should align with the theme.
- Demonstrate real-world applications.
- Models should be pre-built.
- 30 minutes will be given to the students to set up their models.

Judging Criteria:
- Creativity and relevance to sustainability
- Technical depth
- Presentation skills`,

    hackathon: `Rules for Hackathon:

Eligibility:
- The hackathon is open to all college students.
- Teams can consist of members from different universities and institutes.

Team Formation:
- Each team can consist of 1 to 4 members.
- Teams must work together to develop their solution.
- Teams can only submit one project for judging.

Judging Criteria:
- Innovation & Creativity (30%): How unique and creative is the solution?
- Technical Execution (30%): How well the solution is implemented?
- Impact (20%): How much value or impact does it bring to the community, users, or industry?
- Presentation (20%): How well the project is presented, including user interface, demo, and clarity in explaining the solution.

Code of Conduct:
- No plagiarism: Participants must work on their own code. Plagiarism or using code from other sources (except for approved libraries/APIs) will lead to disqualification.
- Respect others: Participants should treat their peers, mentors, and organizers with respect.
- No disruptive behavior: Teams should focus on developing their projects and avoid causing unnecessary disruptions.

Submission:
- Each team must submit their project source code in due time.
- Projects must be deployed and functional by the end of the event.`,

    declamation: `Rules and regulations:
- Participants must choose a speech from a well-known personality.
- Time limit: 3-5 minutes.
- Judging Criteria: Content, delivery, pronunciation, fluency, and impact.
- Use of offensive or politically sensitive content is prohibited.
- Exceeding the time limit will result in penalties.

Date: 25/APRIL/2025, 1:30pm – 3:00pm`,

    adMad: `Rules and regulations:
- A team may consist of 4 members.
- The team will be asked to create a marketing plan including creating a full-fledged creative campaign.
- Students have to present a conceptual ad of either a product or a service.
- Students will act out a TV/Radio script and present ideas relevant on creating social awareness, etc.
- The Time allotted for this activity is 3 minutes.

Rules:
- The topics for the Ad Mad Show will be provided 30 minutes prior.
- Topics/Activities performed during Ad Mad show should not relate with Politics and Religions.
- Maximum Time Limit for performing the Ad is 3 minutes.
- The criteria for assessment include content, spontaneity and adherence to the topic, coordination.
- Use of vulgar expression and language will lead to disqualification of the team.

Criteria for Judgement:
- Content-information, Awareness and Humour.
- Spontaneity/expressions/Acting/ fluency.
- Appeal of the Advertisement.
- Overall Script and Play.

Date: 25/APRIL/2025, 11:00am – 12:30pm`,

    treasureHunt: `Rules and regulations:
- Teams of 2-4 members.
- Clues will be provided in a sequential manner.
- Time limit: 120 mins.
- The first team to find the treasure wins; points for each correct clue solved.
- Teams must not tamper with or share clues with others.

Date: 25/APRIL/2025, 9:30am - 11:00am`,

    sinkingShip: `Rules and regulations:
- Participants will be role playing famous historical characters (e.g., Ashoka, Napoleon, Rani Lakshmi Bai, Albert Einstein, Cleopatra, etc.).
- Students can also dress up to be more presentable as the character.
- Each participant must argue why they deserve to be saved from the sinking ship.
- Time limit: 1-2 minutes per participant to present their case.

Judging Criteria:
- Strength of argument
- Creativity and historical accuracy
- Public speaking skills and persuasion
- Relevance to the character's contributions to society
- The audience or a panel of judges will vote on who survives.
- Participants must stay in character and avoid anachronisms.
- Any offensive or factually incorrect portrayal of historical figures will lead to penalties or disqualification.

Date: 26/APRIL/2025, 1:30pm – 3:00pm`,

    poeticBattle: `Rules and regulations:
- Participants perform original poetic pieces (Hindi or English both are allowed)
- Time limit: 2-3 minutes per round.
- Judging Criteria: Rhythm, rhyming, lyrical depth, creativity, and stage presence.
- Use of hate speech or offensive language is strictly prohibited.
- Exceeding time will result in disqualification.

Date: 26/APRIL/2025, 11:00am – 12:30pm`,

    bestShot: `Overview:
This competition encourages participants to explore and capture the relationship between people and architecture. The aim is to celebrate architectural spaces through photography, showcasing how people interact with and celebrate architecture in their daily lives.

Theme: People Celebrating Architecture
The photographs should reflect moments where people are engaging with, celebrating, or enhancing the architectural environment.

Participation Requirements:
- Each participant must capture 5 unique photographs on the spot during the event, adhering to the theme.
- All photographs must be taken within the 120-minute time frame provided during the competition.

Photography Equipment:
- Participants are free to use any medium to capture their photographs.
- Acceptable devices include: Mobile phones, Digital cameras, Tablets, any other photo-capturing devices.

Geotagging Requirement:
- All photographs submitted must be geo-tagged to verify they were taken at the designated location.
- Ensure your device's location services are activated before the event begins.

Time Limit:
- Participants will have a total of 120 minutes to capture all five photographs.
- Late submissions will not be considered for judging.

Judging Criteria:
- Justification of the Theme
- Creativity
- Visual Impact
- Composition and Clarity
- Geotag Accuracy

Date: 26/APRIL/2025, 9:30am – 11:00am`
  };

  const technicalEvents = [
    {
      title: "Robo Sumo – Robo Rumble",
      subtitle: "The Ultimate Showdown",
      price: "₹500",
      description: "Design and build a robot to push the opponent out of the arena. Test your engineering skills and strategic thinking in this exciting competition.",
      details: eventDetailsMap.roboSumo
    },
    {
      title: "Robo Soccer – CuberKick",
      subtitle: "Robo Soccer League",
      price: "₹500",
      description: "Program robots to play soccer against each other. Combine robotics with sports in this thrilling event that tests coding skills and teamwork.",
      details: eventDetailsMap.roboSoccer
    },
    {
      title: "E-Sports – Game On",
      subtitle: "BGMI & FreeFire Championship",
      price: "₹300",
      description: "Compete in popular mobile games BGMI and FreeFire to win exciting prizes. Show off your gaming skills and strategic gameplay.",
      details: eventDetailsMap.eSports
    },
    {
      title: "C-Coding – Code Storm",
      subtitle: "Programming Challenge",
      price: "₹200",
      description: "Solve complex programming problems in C language under time constraints. Test your coding skills, logic, and efficiency.",
      details: eventDetailsMap.cCoding
    },
    {
      title: "Tech Debate – ByteBattles",
      subtitle: "Tech War of Debate",
      price: "₹200",
      description: "Debate on cutting-edge technology topics with other tech enthusiasts. Showcase your knowledge and communication skills.",
      details: eventDetailsMap.techDebate
    },
    {
      title: "Tech Quiz – Quiz Tech Masters",
      subtitle: "Test Your Tech Knowledge",
      price: "₹150",
      description: "Participate in a quiz covering various aspects of technology, from history to latest innovations. Show off your tech awareness.",
      details: eventDetailsMap.techQuiz
    },
    {
      title: "Model Presentation – AI Expo",
      subtitle: "Shaping the Future",
      price: "₹400",
      description: "Present your innovative AI model or concept to judges and attendees. Get feedback and recognition for your innovative ideas.",
      details: eventDetailsMap.modelPresentation
    },
    {
      title: "Hackathon (24 Hrs)",
      subtitle: "Code Marathon",
      price: "₹1000",
      description: "A 24-hour coding marathon to build solutions for real-world problems. Collaborate, innovate, and create working prototypes.",
      details: eventDetailsMap.hackathon
    }
  ];

  const literaryEvents = [
    {
      title: "Declamation",
      subtitle: "Public Speaking Challenge",
      price: "₹150",
      description: "Deliver a powerful speech on a given topic with conviction and eloquence. Demonstrate your oratory skills and persuasive abilities.",
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
      title: "Treasure Hunt",
      subtitle: "Campus-wide Adventure",
      price: "₹300",
      description: "Solve clues and puzzles to find hidden treasures across the campus. Test your problem-solving skills and teamwork.",
      details: eventDetailsMap.treasureHunt
    },
    {
      title: "Sinking Ship",
      subtitle: "Historical Characters Edition",
      price: "₹150",
      description: "Play the role of a historical character and convince judges why you should be saved from a sinking ship. Combine history knowledge with persuasive skills.",
      details: eventDetailsMap.sinkingShip
    },
    {
      title: "Poetic Battle",
      subtitle: "Verse vs. Verse",
      price: "₹100",
      description: "Showcase your poetic talent in this head-to-head poetry competition. Express emotions and creativity through words.",
      details: eventDetailsMap.poeticBattle
    },
    {
      title: "Best Shot on the Spot",
      subtitle: "Impromptu Photography",
      price: "₹250",
      description: "Capture the best moments of the fest with your camera within a time limit. Demonstrate your photography skills and creative eye.",
      details: eventDetailsMap.bestShot
    }
  ];

  return (
    <section id="events" className="py-20 bg-white relative">
      {/* Abhyuday Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <img 
          src="/lovable-uploads/402a0cba-8c65-4177-bcdd-090ce95b7db1.png" 
          alt="Abhyuday Watermark" 
          className="w-3/4 max-w-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-festival-purple font-montserrat">Festival Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Participate in our diverse range of technical and literary events designed to challenge your skills and creativity.</p>
        </div>

        <Tabs defaultValue="technical" className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-festival-light-purple/50">
              <TabsTrigger value="technical" className="text-lg px-8 py-3 data-[state=active]:bg-festival-purple data-[state=active]:text-white">
                Technical
              </TabsTrigger>
              <TabsTrigger value="literary" className="text-lg px-8 py-3 data-[state=active]:bg-festival-purple data-[state=active]:text-white">
                Literary
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
        </Tabs>
      </div>
    </section>
  );
};

export default Events;
