import LaatsteNieuws from "./laatsteNieuws"
//data
import { posts as postData } from "../../../shared/data"

export default {
  title: 'Components/LaatsteNieuws',
  component: LaatsteNieuws
};

const Template = () => (
  <LaatsteNieuws
    posts={postData}
    title="Het laatste nieuws op ScienceGeek!"
    link="/"
    linkText="meer net binnen" />
);

export const Default = Template.bind({});