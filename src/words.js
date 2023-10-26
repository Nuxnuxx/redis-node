import axios from "axios"
import client from "./db.js";

const tags = "littiere";

async function fetchWord(word) {
	try {
		const response = await axios.get(`https://apidico.oa.r.appspot.com/repo/${word}`);
		return response.data
	} catch (error) {
		return error
	}
}

// check hash map and delete the first inserted if 10 of length
export async function checkHistorySize() {
  const history = await client.hGetAll(tags);
  const historyKeys = Object.keys(history);
	console.log(history)

  if (historyKeys.length >= 10) {
    const keysToRemove = historyKeys.slice(0, historyKeys.length - 9);
    await client.hDel(tags, ...keysToRemove);
  }
}


// fetch word and put it in the db
export async function processWordInput(word) {
  const response = await fetchWord(word);
  await client.hSet(tags, word, response);
}
