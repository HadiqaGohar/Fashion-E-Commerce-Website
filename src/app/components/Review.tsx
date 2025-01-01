'use client'
import React, { useState } from 'react';

export default function ProductReview() {
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [reviewSubmitted, setReviewSubmitted] = useState(false);
    const [editingId, setEditingId] = useState(null); // Track if editing a review

    // Handle form submission
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (rating === 0 || comment === '') {
            alert("Please provide both a rating and a comment.");
            return;
        }

        if (editingId) {
            // Edit existing review
            setReviews((prevReviews) =>
                prevReviews.map((review) =>
                    review.id === editingId ? { ...review, rating, comment } : review
                )
            );
            setEditingId(null);
        } else {
            // Add new review
            const newReview = {
                id: reviews.length + 1,
                rating,
                comment,
                date: new Date().toLocaleDateString(),
            };
            setReviews([...reviews, newReview]);
        }

        setRating(0);
        setComment('');
        setReviewSubmitted(true);

        // Reset the submission message after a few seconds
        setTimeout(() => setReviewSubmitted(false), 3000);
    };

    // Handle review edit
    const handleEdit = (id) => {
        const reviewToEdit = reviews.find((review) => review.id === id);
        if (reviewToEdit) {
            setRating(reviewToEdit.rating);
            setComment(reviewToEdit.comment);
            setEditingId(id);
        }
    };

    // Handle review delete
    const handleDelete = (id) => {
        setReviews(reviews.filter((review) => review.id !== id));
    };

    // Render stars based on rating
    const renderStars = (num, editable = false) => {
        return [...Array(5)].map((_, i) => (
            <span
                key={i}
                className={`cursor-pointer text-xl ${i < num ? 'text-yellow-500' : 'text-gray-300'}`}
                onClick={editable ? () => setRating(i + 1) : undefined}
                title={editable ? `Rate ${i + 1} stars` : undefined}
            >
                ★
            </span>
        ));
    };

    return (
        <div className='flex flex-col gap-6 mt-6'>
            <h4 className='font-medium'>Customer Reviews</h4>

            {/* Review Form */}
            <form onSubmit={handleReviewSubmit} className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                    <span className='font-medium'>Rating:</span>
                    {renderStars(rating, true)}
                </div>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder='Write your review...'
                    className='w-full p-2 border border-gray-300 rounded'
                    rows={3}
                />
                <button
                    type='submit'
                    className='self-start px-4 py-2 shadow-lg bg-black text-white rounded-lg'
                >
                    {editingId ? 'Update Review' : 'Submit Review'}
                </button>
                {reviewSubmitted && <p className="text-green-500">Thank you for your review!</p>}
            </form>

            {/* Display Reviews */}
            <div className='mt-4'>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div key={review.id} className='border-b border-gray-300 py-4'>
                            <div className='flex items-center gap-2'>
                                {renderStars(review.rating)} {/* Display the stars based on the review's rating */}
                                <span className='text-gray-500 text-sm'>{review.date}</span>
                            </div>
                            <p className='mt-2'>{review.comment}</p>
                            <div className='flex gap-2 mt-2'>
                                <button
                                    onClick={() => handleEdit(review.id)}
                                    className='px-3 py-1 text-black border border-black rounded bg-gray-100'
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(review.id)}
                                    className='px-3 py-1 text-white border border-black bg-black rounded'
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet. Be the first to review!</p>
                )}
            </div>
        </div>
    );
}
