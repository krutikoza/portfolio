import React, {useEffect, useState} from 'react'
import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import TimelineDot from "@mui/lab/TimelineDot"
import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';

import { useInView } from 'react-intersection-observer'
import {useAnimation, motion} from 'framer-motion'

import './TimeLine.css'

const TimeLine = ({timelines}) => {


  const {ref, inView} = useInView();

  const animation = useAnimation();


  useEffect(() => {
    if(inView){
      animation.start({
        
        transition:{
          type: 'linear', duration: 1.5, 
        },
        x: 0,
        opacity:1,
      });
    }


  },[inView]);

  return (
    <div ref={ref} className="timeline">
      <b className="timelineTitle"> TIMELINE</b>
      <motion.div animate={animation} className="inTimeline" initial={{x:"-150px"}}>
      <Timeline position="alternate">
    {
          timelines.map((item,index) => (
            
              <TimelineItem key={index}>
                <TimelineOppositeContent sx={{m:"auto 0"}} align="right" variant="body2" color="text.primary">{item.date}</TimelineOppositeContent>
                
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <EventTwoToneIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="discription">
                    <typography className="itemTitle" underline="hover" variant="h6" color = "Black" >{item.title}</typography>
                    <typography className="itemDiscription"> {item.description}</typography>
                  </div>
                </TimelineContent>
              </TimelineItem>
          ))

    }
      </Timeline>
      </motion.div>
    </div>
  )
}

export default TimeLine
