import Image from 'next/image'
import Tooltip from '../utils/Tooltip'

function About() {
  return (
    <Tooltip className="text-sm" text="About me">
      <Image src="/icons/about.png" alt="about" width={50} height={50} />
    </Tooltip>
  )
}
export default About
