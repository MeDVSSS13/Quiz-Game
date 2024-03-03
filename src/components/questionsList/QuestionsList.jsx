import React from 'react';
import { useEffect, useState } from 'react';
import { getQuestions } from '../../api/questions-api';
import { useParams } from 'react-router-dom';

export const QuestionsList = () => {
    let { id } = useParams();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchQuestions = async () => {
        setLoading(true);
        try {
            const questions = await getQuestions(id);
            console.log(questions);
            setQuestions(questions);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchQuestions();
    } , []);
  return (
      <div>
            <h2>Questions</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <ul>
                {questions.map((question) => (
                    <li key={question.id}>{question.question}</li>
                ))}
            </ul>
    </div>
  )
}
