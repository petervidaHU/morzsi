import * as React from "react";
import { baseElements } from "../style/baseElements";
import { FormattedMessage } from 'gatsby-plugin-react-intl';

const Section = baseElements.MySection;

export const MainTopic = () => (
<Section id="section-top">
  <div>
    <FormattedMessage id="main.hero" />
    
  </div>
</Section>);
