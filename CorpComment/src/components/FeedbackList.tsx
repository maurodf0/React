import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";


type Props = {}

export default function FeedbackList({}: Props) {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getFeedbacks = async () => {
      setIsLoading(true);

      try {
        
        const response = await fetch('https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks');
        if (!response.ok) {
              throw new Error();
           }
           const data = await response.json();
           setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage('Something went wrong');
      }
      setIsLoading(false);
      
    }
    getFeedbacks();
  }, []);

  // useEffect(() => {
  //   // setIsLoading(true);
  //   // fetch('https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks')
  //   //   .then(res => {
  //   //     if (!res.ok) {
  //   //       throw new Error();
  //   //     }
  //   //     return res.json()
  //   //   })
  //   //   .then(data => {
  //   //     setFeedbackItems(data.feedbacks);
  //   //     setIsLoading(false);
  //   //   })
  //   //   .catch(() => {
  //   //     setErrorMessage('Something went wrong');
  //   //     setIsLoading(false);
  //   //   })
  // }, []);

  return (
    <ol className='feedback-list'>
      {
        isLoading ? <Spinner />  : null
      }

      {
        errorMessage ? <ErrorMessage message={errorMessage} /> : null}

      {
        feedbackItems.map(feedbackItem => {
          return  <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem}/>
        })
      }
      
    </ol>
  )
}