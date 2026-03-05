import { MongoClient, Db } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const uri: string = process.env.MONGODB_URI;
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

// Helper function to save contact form submission
export async function saveContactToMongoDB(data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  createdAt?: Date; // Optional: ursprüngliches Datum
}) {
  try {
    const client = await clientPromise;
    const db: Db = client.db('morokutti-design');
    const collection = db.collection('contacts');
    
    const result = await collection.insertOne({
      ...data,
      createdAt: data.createdAt || new Date(), // Verwende ursprüngliches Datum oder aktuelles Datum
    });
    
    return result;
  } catch (error) {
    console.error('MongoDB Fehler:', error);
    throw error;
  }
}
