import HeadpostView from "./headPost"
//constants
import { TIME_TILL_HIDDEN_BG } from "../../../shared/data"
//hooks
import useTimeLeft from "../../../hooks/useTimeLeft"

type HeadPostProps = {
  src: string
  alt: string
  title: string
}

const HeadPost = (props:HeadPostProps) => {
  const timeLeft = useTimeLeft(TIME_TILL_HIDDEN_BG)
  return (
    <HeadpostView timeLeft={timeLeft} {...props}/>
  )
}

export default HeadPost