import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Title from './Title';

const stories = storiesOf('Title', module);

stories.add(
    'Normal',
    () => <Title>This is a title</Title>,
    { info: { inline: true } },
);
