import Responsive from "./responsiveGrid"

const columns = {
  small: ['full'],
  medium: ["1/3", "1/3", "1/3"],
  large: ["auto", "auto", "auto"],
};

const rows = {
  small: ['auto', 'auto', 'auto'],
  medium: ['full'],
  large: ['full'],
};

export const MainPageGrid3 = (props: any) => (
  <Responsive
    rows={rows}
    columns={columns}
    gap="small"
    justifyContent="center"
    margin="small"
  >
    {props.children}
  </Responsive >
);