import React, { useCallback, useEffect, useState } from "react";
import { getQuestions } from "../../api/questions-api";
import { useParams } from "react-router-dom";
import { QuestionBlock } from "../questionBlock/QuestionBlock";
import { getCategory } from "../../api/category-api";
import { SideBar } from "../sideBar/SideBar";
import { shuffleArray } from "../../utils/HelperFunctions";
import "./questionList.style.scss";
// import { CategoryList } from "../categoryList/CategoryList";

export const QuestionsList = () => {
    // Get the category id from the URL params using the useParams hook
    let { id } = useParams();

    // State to store the questions, loading status, error, and selected question
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState({});
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [Visibility, setVisibility] = useState(false);

    // Function to handle the click event of a question block and set the selected question in the state and set the visibility of the sidebar to true
    const handleQuestionClick = (question) => {
        setSelectedQuestion(question);
        setVisibility(false);
    };

    // Function to handle the close event of the sidebar and set the selected question in the state to null
    const handleQuestionClose = () => {
        setSelectedQuestion(null);
    };

    const fetchQuestions = useCallback(async () => { 
    setLoading(true);
    try {
        const category = await getCategory(id);
        setCategory(category);

        let questions = await getQuestions(id);
        questions = shuffleArray(questions);
        setQuestions(questions);
    } catch (error) {
        setError(error);
    }
    setLoading(false);
}, [id]);

    // Fetch the questions from the API 
useEffect(() => {
    fetchQuestions();
}, [fetchQuestions]);
    
// Reset the selected question when the category changes
    useEffect(() => {
        setSelectedQuestion(null);
    }, [id]);



    return (
        <div>
            <div>
                <h2> {category.name} Questions</h2>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {questions.length === 0 && !loading && <p>No questions available</p>}
            </div>
            
            
        <div className="questionList">
            <div className="questionGrid">

                {/* Map over the questions and display the question blocks */}
                {questions.map((question, index) => (
                    <QuestionBlock
                        key={question.id}
                        number={index + 1}
                        question={question.question}
                        onClick={() => handleQuestionClick(question)}
                    />
                ))}
                </div>
                
                <div className="sidebarContainer">
                    {/* Display the sidebar with the selected question */}
                    {selectedQuestion && (
                        <SideBar
                            question={selectedQuestion.question}
                            answer={selectedQuestion.answer}
                            answerVisibility={Visibility}
                            isOpen={true}
                            onClose={handleQuestionClose}
                        />
                    )}

                </div>
            </div>
        </div>
    );
};
