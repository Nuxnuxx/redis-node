import { createClient } from 'redis';


const client = createClient(
	{
		url: 'redis://groupeTP:Legroupe01!@redis-18974.c304.europe-west1-2.gce.cloud.redislabs.com:18974'
	}
);

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

export default client
