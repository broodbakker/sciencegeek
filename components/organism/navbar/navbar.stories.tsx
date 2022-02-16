import Navbar from './index';
//data
import { NAV_LINKS } from "../../../shared/data"
//functions
import { isRoute } from "../../../utils"

export default {
  title: 'Components/Navbar',
  component: Navbar
};

const Template = () => (
  <Navbar
    isRoute={isRoute("/history", NAV_LINKS)}
  />
);

export const second = () => (
  <Navbar
    isRoute={isRoute("/", NAV_LINKS)}
  />
);




export const Default = Template.bind({});