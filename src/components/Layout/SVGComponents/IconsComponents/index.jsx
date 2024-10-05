import { DarkIcon } from "./DarkIcon";
import { LightIcon } from "./LightIcon";
import { GithubIcon } from "./GithubIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { InstagramIcon } from "./InstagramIcon";
function IconsComponents({type,size,color}) {
  const icon = {
      dark: <DarkIcon size={size} color={color} />,
      light: <LightIcon size={size} color={color}/>,
      github: <GithubIcon size={size} color={color}/>,
      linkedin: <LinkedinIcon size={size} color={color}/>,
      instagram: <InstagramIcon size={size} color={color} />,
        
  };
  return icon[type];
}
export { IconsComponents };