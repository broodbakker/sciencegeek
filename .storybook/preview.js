import React from 'react';
import { RouterContext } from "next/dist/shared/lib/router-context";

import { Grommet } from 'grommet';

import { GlobalStyle } from '../blocks/shared/global';

import "../styles/globals.css";

import * as NextImage from "next/image";
import { customTheme } from "../blocks/shared/styles"

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

/*
 * Global decorator to apply the styles to all stories
 * Read more about them at:
 * https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
 */
export const decorators = [
  Story => (
    <>
      <Grommet theme={customTheme} >
        <GlobalStyle />
        <Story />
      </Grommet>
    </>
  ),
];



export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },

  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
