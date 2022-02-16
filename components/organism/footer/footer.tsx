import React from 'react';
import styled from "styled-components"
import {
  Grommet as GrommetIcon,
  FacebookOption,
  Instagram,
  Twitter,
} from 'grommet-icons';
import { Anchor, Box, Footer as GromFooter, Text } from 'grommet';
//data
import { footerData } from "../../../shared/data"

export const Footer = () => (
  < >
    <Box background="light-2" pad="medium" gap="large" direction="row" justify="around">
      <FooterContent />
    </Box>

    <GromFooter background="light-4" pad="small">
      <FooterMedia />
    </GromFooter>
  </>
);

const FooterContent = () => {
  return (
    <>
      {
        footerData.map(item => (
          <Box gap="medium" key={item[0]}>

            {/* headFooter */}
            <Text weight="bold" size="small" alignSelf="center">
              {item[0]}
            </Text>
            <Box >
              {/* linkFooter */}
              {[1, 2, 3, 4].map(i => (
                <FooterAnchor key={item[i]}>{item[i]}</FooterAnchor>
              ))}
            </Box>
          </Box>
        ))
      }
    </>
  )
}

const FooterMedia = () =>
  <Box align="center" direction="row" gap="xsmall">
    <GrommetIcon color="brand" size="medium" />
    <Text alignSelf="center" color="brand" size="small">
      Grommet
    </Text>

    <Media />
    <Text textAlign="center" size="xsmall">
      © 2022 - ScienceGeek
    </Text>
  </Box>


const FooterAnchor = ({ ...rest }) => (
  <StyledAnchor href="/" size="small" color="black-3" alignSelf="center"{...rest} />
);

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      a11yTitle="Share feedback on Github"
      href="https://www.instagram.com/"
      icon={<Instagram color='plain' />}
    />
    <Anchor
      a11yTitle="Chat with us on Slack"
      href="https://www.facebook.com/"
      icon={<FacebookOption color='plain' />}
    />
    <Anchor
      a11yTitle="Follow us on Twitter"
      href="https://twitter.com/"
      icon={<Twitter color='plain' />}
    />
  </Box>
);

const StyledAnchor = styled(Anchor)`
  font-weight: 200;
`;


export default Footer;