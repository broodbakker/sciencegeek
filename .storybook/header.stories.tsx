import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Heading } from 'grommet';

const headingFiller = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.
`;

type HProps = {
  size: string
  level: any
}

const H = ({ level, size }: HProps) => (
  <Heading level={level} size={size}>
    {`Heading ${level} ${size}`}
  </Heading>
);

type setProps = {
  size: string
}

const Set = ({ size }: setProps) => (
  <div>
    {[1, 2, 3, 4, 5, 6].map((level) => (
      <H key={level} level={level} size={size} />
    ))}
  </div>
);

Set.propTypes = {
  size: PropTypes.string.isRequired,
};

export const All = () => (
  <>
    <Grid columns="large" gap="medium">
      <Set size="medium" />
      <Set size="small" />
      <Set size="large" />
      <Set size="xlarge" />
    </Grid>
    <Heading fill>{headingFiller}</Heading>
  </>
  // </Grommet>
);

export default {
  title: 'Type/Heading/All',
};