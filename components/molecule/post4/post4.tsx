import Link from 'next/link'
import styled from "styled-components"
//typescript
import { Post as TypePost } from "../../../typescript"
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
}

const Post4 = ({ post }: PostProps) => {
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

            <ContentHeight pad={{ vertical: "small" }}>
              {/* onderwerp */}
              <Onderwerp name={post.onderwerp} size="small" />
              {/* title */}
              <Title name={post.title} level={3} />
            </ContentHeight>
          </a>
        </Link>

      </article>

    </Container >
  )
}

export default Post4;