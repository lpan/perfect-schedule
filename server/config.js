export const serverConfig = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/perfect-schedule',
  port: process.env.PORT || 8000,
};

export const port = process.env.PORT || 8000;

export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const schools = [
  {
    name: 'marianopolis',
    full: 'Marianopolis College',
    year: '2015',
    term: 'w',
    data: ['details', 'teachers', 'courses', 'codes'],
  },
];
