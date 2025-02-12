import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSS3Icon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
  },
  {
    title: "Photography",
    emoji: "📷",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Hiking",
    emoji: "🥾",
  },
  {
    title: "Music",
    emoji: "🎧",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
  },
  {
    title: "Reading",
    emoji: "📖",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Glimspe into my world"
          description="Ipsum"
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            />
            <div className="w-40 mx-auto mt-8">
            <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>
          <Card className="h-[320p] p-0">
          <CardHeader
              title="My Toolbox"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
              className="px-6 pt-6"
            />
            <ToolBoxItems items={toolboxItems} />
            <ToolBoxItems items={toolboxItems} />
            
          </Card>
          <Card>
          <CardHeader
              title="Beyond the code"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smile memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
