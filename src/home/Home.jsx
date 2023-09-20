import WordDetector from "./../wordDetector/WordDetector";
const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
                <h1 className="my-4 lg:my-10 pb-5 text-3xl font-semibold text-center uppercase text-yellow-600">
                    Word Detector
                </h1>
                <div className="word-detector">
                    <WordDetector></WordDetector>
                </div>
            </div>
        </div>
    );
};

export default Home;
