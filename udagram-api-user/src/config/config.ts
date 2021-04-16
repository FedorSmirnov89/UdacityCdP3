export const config = {
  "username": process.env.PG_USERNAME, 
  "password": process.env.PG_PASSWORD,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  'dialect': 'postgres',
  'aws_region': "us-east-1",
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
