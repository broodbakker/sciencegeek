import Responsive from "./responsiveGrid"

const columns = {
  small: ['auto'],
  medium: ["medium", "medium", "medium", "medium", "medium", "medium",],
  large: ["medium", "medium", "medium", "medium", "medium", "medium",],
};

const rows = {
  small: ['auto', 'auto', "auto", "auto", "auto", "auto"],
  medium: ['auto',],
  large: ['auto',],
};

export const SubjectGrid = (props: any) => (
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