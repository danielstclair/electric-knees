import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const style = {
  paddingRight: 0
};

const fontStyle = {
  fontSize: 32
};

const Placeholder = () => (
  <Card>
    <CardHeader
      textStyle={style}
      titleStyle={fontStyle}
      title="Electric Knees"
      subtitle="We All Want To Believe" />
    <CardText>
      Coming soon...
    </CardText>
  </Card>
);

export default Placeholder;
