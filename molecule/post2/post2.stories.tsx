import Post2 from './index';
import { post as postData } from "../../shared/data"

export default {
  title: 'Blocks/Post2',
  component: Post2
};

const Template = () => (
  <Post2 post={postData} />
);

export const Default = Template.bind({});