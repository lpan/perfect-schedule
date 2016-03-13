import React from 'react';

import { linkStyle } from '../../helpers/CommonStyles/TextStyle';

const links = {
  specifications: 'https://github.com/lorix-lpan/perfect-schedule-schools#readme',
  here: 'https://github.com/lorix-lpan/perfect-schedule-schools',
  hack: 'https://github.com/lorix-lpan/converter-marianopolis',
  donate: '',
};

const contribute = {
  priTitle: 'If you are...',
  details: [
    {
      title: 'A Developer',
      text: [
        `Want your school to be supported?
        Supply your school's course data according to the `,
        <a style={linkStyle} target="_blank" href={links.specifications}>specifications</a>,
        ' ',
        <a href={links.here} target="_blank" style={linkStyle}>here</a>,
        `. Talk to your school's
        representatives or `,
        <a href={links.hack} target="_blank" style={linkStyle}>hack</a>,
        " your school's course offering PDF. It is all up to you!",
      ],
    },
    {
      title: 'Not a Developer',
      text: [
        `We need your help too if you do not know how to code! In order to provide
        the best user experience as possible, we do not put ads on our website.
        However, as you probably know, hosting and domain name cost money. If you
        like this project, share it on your favourite social media or`,
        <a href={links.donate} target="_blank" style={linkStyle}>Donate</a>,
        '.',
      ],
    },
  ],
};

export default contribute;
