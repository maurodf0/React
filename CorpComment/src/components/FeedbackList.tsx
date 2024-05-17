import { TriangleUpIcon } from "@radix-ui/react-icons"

type Props = {}

export default function FeedbackList({}: Props) {
  return (
    <ol className='feedback-list'>
      <li className='feedback'>
        <button>
        <TriangleUpIcon />
          <span>593</span>
        </button>

        <div>
          <p>B</p>
        </div>

        <div>
          <p>ByteGrad</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae blanditiis necessitatibus quas quidem minus perferendis?</p>
        </div>

        <p>4d</p>
      </li>
    </ol>
  )
}