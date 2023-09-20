import { useState } from "react";
import "./WordDetector.css";

function WordDetector() {
    const [inputText, setInputText] = useState("");
    const [searchWords, setSearchWords] = useState([]);
    const [highlightedText, setHighlightedText] = useState("");
    const [highlightedWordCount, setHighlightedWordCount] = useState(0);

    const highlightWords = () => {
        let highlighted = inputText;
        let wordsCount = 0;
        searchWords.forEach((word) => {
            const regex = new RegExp(word, "gi");
            highlighted = highlighted.replace(regex, (match) => {
                wordsCount++;
                return `<span class="highlighted">${match}</span>`;
            });
        });
        setHighlightedText(highlighted);
        setHighlightedWordCount(wordsCount);
    };

    return (
        <div className="p-3 bg-lime-50 rounded-sm">
            <div className="grid grid-cols-3 gap-3">
                <div className="md:col-span-2 col-span-3">
                    <label htmlFor="longText">Enter your long text</label>
                    <br />
                    <textarea
                        id="longText"
                        rows="10"
                        cols="50"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="text-neutral-950 w-full p-2 border rounded-md my-3"
                    />
                    <br />
                </div>
                <div className="col-span-3 md:col-span-1">
                    <div className="">
                        <label htmlFor="searchWords">
                            Enter words for search
                        </label>
                        <input
                            id="searchWords"
                            type="text"
                            placeholder="Enter words to search for (comma-separated)"
                            value={searchWords.join(",")}
                            onChange={(e) =>
                                setSearchWords(e.target.value.split(","))
                            }
                            className="text-neutral-950 border w-full rounded-md my-3 h-14 px-2"
                        />
                        <br />
                        <button
                            onClick={highlightWords}
                            className="py-2 px-5 border bg-green-600 hover:bg-green-700 duration-300 rounded-sm mt-3 text-white"
                        >
                            Scan
                        </button>
                    </div>
                </div>
            </div>
            <div className="result">
                <h3 className="text-center my-3 font-medium lg:text-3xl text-xl">
                    Result
                </h3>
                <p className="pb-3 font-medium">
                    Total Words Found: {highlightedWordCount}
                </p>
                <hr />
                <div
                    className="highlighted-text col-auto"
                    dangerouslySetInnerHTML={{
                        __html: highlightedText,
                    }}
                />
            </div>
        </div>
    );
}

export default WordDetector;
