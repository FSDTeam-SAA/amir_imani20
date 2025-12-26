import MeetOurTeam from '@/components/about/MeetOurTeam'
import OurMission from '@/components/about/OurMission'
import OurStory from '@/components/about/OurStory'
import WhyChooseUs from '@/components/about/WhyChooseUs'

import React from 'react'

const page = () => {
  return (
    <div>
        {/* <WhyChooseUs /> */}
        <OurStory />
        <OurMission />
        <MeetOurTeam />
    </div>
  )
}

export default page