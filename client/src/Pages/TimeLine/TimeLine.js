import React from 'react'
import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import TimelineDot from "@mui/lab/TimelineDot"
import {Event} from "@mui/icons-material"
import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';
import Typography from "@mui/material/Typography"
import Link from '@mui/material/Link';

const TimeLine = ({timelines=[]}) => {
  return (
    <div>
      <Timeline position="alternate">
    {
          timelines.map((item,index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent sx={{m:"auto 0"}} align="right" variant="body2" color="text.primary">26/11/1999</TimelineOppositeContent>
                
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <EventTwoToneIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                
                <TimelineContent>
                
                    <Link underline="hover" variant="h6" color = "Black" >Title</Link>
                    <Typography> Discription</Typography>
                    <Typography>Date</Typography>
                </TimelineContent>
              </TimelineItem>
          ))

    }
      </Timeline>
    </div>
  )
}

export default TimeLine
