import Post from './index';
import { post as postData } from "../../../shared/data"

export default {
  title: 'Blocks/Post',
  component: Post
};

const Template = () => (
  <Post post={postData} />
);

export const Default = Template.bind({});