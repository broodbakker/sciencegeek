//grommet
import { Box, Heading } from "grommet"

type PostlistProps = {
  name: string
  size?: string;
};

const Postlist_title = ({ name, size = "small" }: PostlistProps) => (
  <Box flex={false} pad={{ vertical: "xsmall" }} border={{ side: "bottom", color: "secondary", size: "small" }} margin={{ bottom: "small" }}>
    <Heading responsive={false} level="3" size={size} textAlign="center" alignSelf="center" color="headingColor">{name}</Heading>
  </Box>
);

export default Postlist_title;