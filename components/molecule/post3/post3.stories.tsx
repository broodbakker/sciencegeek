import { Post3 } from './index';
import { post as postData } from "../../../shared/data"

export default {
  title: 'Blocks/Post3',
  component: Post3
};

const Template = () => (
  <Post3 post={postData} />
);

export const Default = Template.bind({});