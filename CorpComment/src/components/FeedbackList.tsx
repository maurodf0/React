import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";


type Props = {}

export default function FeedbackList({}: Props) {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks')
      .then(res => res.json())
      .then(data => {
        setFeedbackItems(data.feedbacks);
        setIsLoading(false);
      })
  }, [])

  return (
    <ol className='feedback-list'>
      {
        isLoading ? <Spinner />  : null
      }

      {
        feedbackItems.map(feedbackItem => {
          return  <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem}/>
        })
      }
      
    </ol>
  )
}