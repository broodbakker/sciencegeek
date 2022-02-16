import SubjectPage from "../components/template/subjectPage"

type SubjectProps = {
}

const Subject = ({ }: SubjectProps) => {
  return (
    <SubjectPage />
  );
};

export async function getStaticPaths() {
  const paths = [{
    params: {
      subject: "history"
    }
  }, {
    params: {
      subject: "nature"
    },
  }, {
    params: {
      subject: "quirky"
    },
  }, {
    params: {
      subject: "space"
    },
  }, {
    params: {
      subject: "tech"
    },
  }, {
    params: {
      subject: "human"
    },
  }
  ]
  return { paths, fallback: false };
}

// params will contain the id for each generated page.
type params = {
  params: { subject: string }

}
export async function getStaticProps({ params }: params) {
  return {
    props: {
      params
    },
  };
}

export default Subject