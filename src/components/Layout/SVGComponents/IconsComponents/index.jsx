import { DarkIcon } from "./DarkIcon";
import { LightIcon } from "./LightIcon";
import { GithubIcon } from "./GithubIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { InstagramIcon } from "./InstagramIcon";
import { HomeIcon } from "./HomeIcon";
import { AboutIcon } from "./AboutIcon";
import { ExperienceIcon } from "./ExperienceIcon";
import { ProyectsIcon } from "./ProyectsIcon";
import { SkillsIcon } from "./SkillsIcon";
import { LearnsIcon } from "./LearnsIcon";
function IconsComponents({type,size,color}) {
  const icon = {
      dark: <DarkIcon size={size} color={color} />,
      light: <LightIcon size={size} color={color}/>,
      github: <GithubIcon size={size} color={color}/>,
      linkedin: <LinkedinIcon size={size} color={color}/>,
      instagram: <InstagramIcon size={size} color={color} />,
      home: <HomeIcon size={size} color={color} />,
      about: <AboutIcon size={size} color={color} />,
      experience: <ExperienceIcon size={size} color={color} />,
      proyects: <ProyectsIcon size={size} color={color} />,
      skills: <SkillsIcon size={size} color={color} />,
      learns: <LearnsIcon size={size} color={color} />,      
  };
  return icon[type];
}
export { IconsComponents };