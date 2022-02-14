import Responsive from "./responsiveGrid"

const columns = {
  small: ['auto'],
  medium: ['auto', 'auto'],
  large: ["auto", "auto", "auto",],
};

const rows = {
  small: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
  medium: ['auto', 'auto', 'auto'],
  large: ['auto', 'auto'],
};

export const MainPageGrid4 = (props: any) => (
  <Responsive
    rows={rows}
    columns={columns}
    gap="small"
    justifyContent="center"
    margin=""
  >
    {props.children}
  </Responsive >
);