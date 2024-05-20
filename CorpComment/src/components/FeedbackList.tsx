import FeedbackItem from "./FeedbackItem"


type Props = {}

const feedbackItems = [
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