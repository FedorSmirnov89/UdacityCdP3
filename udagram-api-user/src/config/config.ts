export const config = {
  "username": process.env.PG_USERNAME, 
  "password": process.env.PG_PASSWORD,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  'dialect': 'postgres',
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
