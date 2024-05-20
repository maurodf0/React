import FeedbackItem from "./FeedbackItem";
import { useEffect, useState } from "react";


type Props = {}

const exampleFeedbackItems = [
  {
    upvoteCount: 593,
    badgeLetter: 'B',
    companyName: 'ByteGrad',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis.',
    daysAgo: 4
  }, {
    upvoteCount: 393,
    badgeLetter: 'M',
    companyName: 'MGrad',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis.',
    daysAgo: 2
  }];

export default function FeedbackList({}: Props) {
  const [feedbackItems, setFeedbackItems] = useState([]);

  useEffect(() => {
    fetch('https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks')
      .then(res => res.json())
      .then(data => {
        setFeedbackItems(data.feedbacks);
      })
  }, [])

  return (
    <ol className='feedback-list'>
      {
        feedbackItems.map(feedbackItem => {
          return  <FeedbackItem feedbackItem={feedbackItem}/>
        })
      }
      
    </ol>
  )
}