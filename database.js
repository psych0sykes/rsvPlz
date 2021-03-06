import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const connectString = "mongodb://localhost:27017"

const client = new MongoClient(connectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('firstdb');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;