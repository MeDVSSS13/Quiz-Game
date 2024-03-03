import React from 'react'
import { useEffect, useState } from 'react';
import { getCategories } from '../../api/category-api';
import { useNavigate } from 'react-router-dom';

export const CategoryList = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
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
        <div>
            <h2>Categories</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <ul>
                {categories.map((category) => (
                    <button onClick={()=> navigate(`categories/${category.id}/questions`)} key={category.id} >{category.name}</button>
                ))}
            </ul>
        </div>
    )
}
