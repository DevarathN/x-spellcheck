const { useState } = require("react");

const LandingPage = () => {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState(null);
  const customDictionary = {
    teh: "the",

    wrok: "work",

    fot: "for",

    exampl: "example",
  };
  const handleInputChange = (text) => {
    setInputText(text);
    const words = inputText.split(" ");
    const correctedWords = words.map((word, index) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setSuggestedText(firstCorrection || "");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        name=""
        id=""
        value={inputText}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        rows={5}
        cols={40}
        placeholder="Enter text..."
      ></textarea>
      {suggestedText && <p>Did you mean: {suggestedText}?</p>}
    </div>
  );
};
export default LandingPage;
