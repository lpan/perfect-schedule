import React from 'react';
import { linkStyle } from '../../helpers/CommonStyles/TextStyle';

const links = {
  // how does it work link
  how: 'http://lorix-lpan.github.io/perfect-schedule/'
};

const about = {
  priText: 'What is Perfect Schedule',
  secText: 'Perfect Schedule is not simply an online schedule maker...',
  details: [
    {
      title: 'Free as in Freedom',
      text: [
        "We respect your freedom. You are not only welcome to use Perfect Schedule ",
        "for free, but also won't be subjected to ads. Perfect Schedule is designed ",
        "to be built upon the community effort."
      ]
    },
    {
      title: 'Intelligent',
      text: [
        "Perfect Schedule is a smart schedule ",
        "generator which automatically creates a collections of schedules according to ",
        "your preferences. To find out how it works, click ",
        <a style={linkStyle} target="_blank" href={links.how}>here</a>,
        "."
      ]
    },
    {
      title: 'Extensible',
      text: [
        'Since students from all over the world are striving to get the perfect ',
        'schedule, our ultimate goal is to support all colleges in the world. ',
        'Our database, as well as the frontend are designed with scalibility ',
        'in mind.'
      ]
    }
  ]
};

export default about;
