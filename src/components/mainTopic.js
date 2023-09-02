import * as React from "react";
import { baseElements } from "../style/baseElements";
import { FormattedMessage } from 'gatsby-plugin-react-intl';

const { MySection, BasicDiv } = baseElements;

export const MainTopic = () => (
  <MySection id="section-top">
    <BasicDiv>
      <FormattedMessage id="main.hero" />
    </BasicDiv>
  </MySection>);
