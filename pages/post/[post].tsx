import PostPage from "../../template/postPage"

type PostProps = {
}

const Post = ({ }: PostProps) => {
  return (
    <PostPage />
  );
};

export async function getStaticPaths() {
  const paths = [{
    params: {
      post: "1"
    }
  }, {
    params: {
      post: "2"
    }
  }]
  return { paths, fallback: false };
}

// params will contain the id for each generated page.
type params = {
  params: { post: string }

}
export async function getStaticProps({ params }: params) {
  return {
    props: {
      params
    },
  };
}

export default Post