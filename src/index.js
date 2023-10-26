import {checkHistorySize, processWordInput} from './words.js';
import rl from './interface.js';


// iife start function immediatly when define
(async function () {
  while (true) {
		// get word from user
    const word = await new Promise((resolve) => {
      rl.question('Donne un mot: ', resolve);
    });

    await checkHistorySize();
    await processWordInput(word);
  }
})();
