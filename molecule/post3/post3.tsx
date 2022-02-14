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

type PostProps = {
  post: TypePost,
}

const ImgContainer = styled.div`
  position:relative;
  aspect-ratio: 1 / 1;
  height:100%;
`

const Post3 = ({ post }: PostProps) => {
  //const timeLeft = useTimeLeft(TIME_TILL_HIDDEN_BG)
  const image = post.photos.headerData.image
  return (
    <Box >
      <article>
        <Link href={`/${post.slug}`}>
          <a>
            <Box direction="row" height="xsmall" border={{ side: "bottom", color: "borderColor" }}>
              <Box fill="vertical" width={{
                min: "xsmall",
                max: "xsmall"
              }}>
                {/* {timeLeft !== 0 && <div className="absolute inset-0 w-full h-full object-contain bg-loadingImage"></div>} */}

                {/* image */}
                <ImgContainer >
                  <Img src={image} alt={post.title} />
                </ImgContainer>
              </Box>

              <Box pad={{ horizontal: "small" }}>
                {/* onderwerp */}
                <Onderwerp name={post.onderwerp} color="secondary" />
                {/* title */}
                <Title name={post.title} />
              </Box>
            </Box>

          </a>
        </Link>
      </article>
    </Box >
  )
}

export default Post3;