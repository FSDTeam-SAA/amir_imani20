import MeetOurTeam from '@/components/about/MeetOurTeam'
import OurMission from '@/components/about/OurMission'
import OurStory from '@/components/about/OurStory'
import WhyChooseUs from '@/components/about/WhyChooseUs'
import GetInTouch from '@/components/shared/GetInTouch'

import React from 'react'

const page = () => {
  return (
    <div>
        {/* <WhyChooseUs /> */}
        <OurStory />
        <OurMission />
        <MeetOurTeam />
            <GetInTouch />
    </div>
  )
}

export default page