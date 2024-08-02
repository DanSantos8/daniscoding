import { GmailIcon, LinkedinIcon } from "./Icons"

const icons = {
  gmail: GmailIcon,
  linkedin: LinkedinIcon,
}

type IconProps = {
  name: keyof typeof icons
}
export default function Icon({ name }: IconProps) {
  const Component = icons[name]

  return <Component />
}
