import Link from 'next/link'
import styled from "styled-components"
//typescript
import { Post as TypePost } from "../../typescript"
//grommet
import { Box } from "grommet"
//atoms
import { Img } from "../../atom/image"
import { Onderwerp } from '../../atom/post_onderwerp/index';
import { Title } from '../../atom/post_title/index';

const Container = styled(Box)`
position:relative;
`
const ImageContainer = styled(Box)`
position:relative;
`
const ContentHeight = styled(Box)`

`

type PostProps = {
  post: TypePost,
  color?:string
}

const Post2 = ({ post,color }: PostProps) => {
  //const timeLeft = useTimeLeft(TIME_TILL_HIDDEN_BG)
  const image = post.photos.headerData.image
  return (
    <Container fill >
      <article>
        <Link href={`/${post.slug}`}>
          <a>
            <ImageContainer fill="horizontal" height={{
              min: "small",
              max: "large"
            }}>
              {/* {timeLeft !== 0 && <div className="absolute inset-0 w-full h-full object-contain bg-loadingImage"></div>} */}
              {/* image */}
              <Img src={image} alt={post.title} />
            </ImageContainer>

            <ContentHeight pad={{top: "small",bottom: "medium" }}>
              {/* onderwerp */}
              <Onderwerp name={post.onderwerp} />
              {/* title */}
              <Title name={post.title} color={color}/>
            </ContentHeight>
          </a>
        </Link>

      </article>
      <YellowLine />
    </Container >
  )
}

const LineHor = styled(Box)`
  position:absolute;
  bottom:0;
  right:0;
  height:2px;
`
const LineVert = styled(Box)`
  position:absolute;
  bottom:0;
  right:0;
  width:2px;
`

const YellowLine = () =>
  <>
    <LineHor width="xxsmall" background="secondary" />
    <LineVert height="xxsmall" background="secondary" />
  </>

export default Post2;