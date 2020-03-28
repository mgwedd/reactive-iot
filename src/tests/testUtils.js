import { LoremIpsum } from "lorem-ipsum"

/**
 * @function mockText — produce lorum ipsum for tests
 * @see https://www.npmjs.com/package/lorem-ipsum
 */
const mockText = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

export default {
  mockText,
}
