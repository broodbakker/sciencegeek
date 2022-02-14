import Responsive from "./responsiveGrid"

const columns = {
  small: ['full'],
  medium: ["auto", "auto"],
  large: ["auto", "auto",],
};

const rows = {
  small: ['auto', 'auto'],
  medium: ['auto',],
  large: ['auto',],
};

export const SubjectHeadpostGrid = (props: any) => (
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