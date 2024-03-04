// Code to display the list of categories and navigate to the questions of the selected category
import React from 'react'
import { useEffect, useState } from 'react';
import { getCategories } from '../../api/category-api';
import { useNavigate } from 'react-router-dom';
import './categoryList.style.scss';

export const CategoryList = () => {
    // Use the useNavigate hook to navigate to the questions of the selected category
    const navigate = useNavigate();

    // State to store the categories, loading status, and error
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    // Fetch the categories from the API
    const fetchCategories = async () => {
        setLoading(true);
        try {
            const categories = await getCategories();
            setCategories(categories);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCategories();
    }, []);
    

    return (
        // Display the list of categories and navigate to the questions of the selected category
        <div className='category-list'>
            <h2>Categories</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <ul>
                {categories.map((category) => (
                    <button onClick={()=> navigate(`/categories/${category.id}/questions`)} key={category.id} >{category.name}</button>
                ))}
            </ul>
        </div>
    )
}
