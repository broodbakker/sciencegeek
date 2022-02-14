import NetBinnenPage from "../../../template/net-binnenPage"

type NetBinnenProps = {

}

const NetBinnen = ({ }: NetBinnenProps) => {
  return (
    <NetBinnenPage />
  )
}

export async function getStaticPaths() {
  const paths = [{
    params: {
      subject: "quirky",
      id: "1"
    }
  }, {
    params: {
      subject: "history",
      id: "2"
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
export default NetBinnen

