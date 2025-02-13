import Card from "./Card";
import React, { useState } from "react";

const Cards = (props) => {
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    // Function to get courses based on category selection
    function getCourses() {
        if (!props.courses) return []; // Prevent undefined errors

        if (category === "All") {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        } else {
            return props.courses[category] || []; // Prevent undefined category errors
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {props.courses ? (
                getCourses().map((course) => (
                    <Card
                        course={course}
                        key={course.id} // Changed from props.courses.id to course.id
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                    />
                ))
            ) : (
                <p className="text-white text-lg">Loading courses...</p>
            )}
        </div>
    );
};

export default Cards;
