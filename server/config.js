export const serverConfig = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/perfect-schedule',
  port: process.env.PORT || 8000,
};

export const schools = [
  {
    name: 'marianopolis',
    year: '2015',
    term: 'w',
    data: ['details', 'teachers', 'courses', 'codes']
  }
];
