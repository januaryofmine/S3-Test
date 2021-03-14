const axios = require("axios");
const { htmlToText } = require("html-to-text");

const url =
  "https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=";

const getRawData = async ({ searchString }) => {
  const wikiRes = await axios.get(`${url}${searchString}`);
  const { text } = wikiRes.data.parse;
  return text['*'];
};

/** Function that count occurrences of a substring in a string;
 * @param {String} string               The string
 * @param {String} subString            The sub string to search for
 * @param {Boolean} [allowOverlapping]  Optional. (Default:false)
 *
 * @author Vitim.us https://gist.github.com/victornpb/7736865
 * @see Unit Test https://jsfiddle.net/Victornpb/5axuh96u/
 * @see http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string/7924240#7924240
 */
 function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

/**
 * Get Number of times the search term topic appears
 * @param {any} {searchString}
 * @returns {number}: number of topic count
 */
const getTopicCount = async ({ topic }) => {
  console.log(`Start get topic count`);
  try {
    let textRaw = await getRawData({
      searchString: topic,
    });

    const text = htmlToText(textRaw);
    console.log(`End get topic count`);
    return occurrences(text.toLowerCase(), topic.toLowerCase());
  } catch (error) {
    console.log(`Error get topic count`);
    console.log(error);
    return { error };
  }
};

getTopicCount({ topic: "job" }).then((rs) => console.log(rs));
