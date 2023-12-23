// ReviewComponent.js
import React from "react";
import styled from "styled-components";
import { reviews } from "../data/reviews";

function getRandomItemsFromArray(array, count) {
    const copyArray = [...array];
    const resultArray = [];
    if (count <= copyArray.length) {
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * copyArray.length);
        resultArray.push(copyArray[randomIndex]);
        copyArray.splice(randomIndex, 1);
      }
      return resultArray;
    } else {
      console.error("Count exceeds the length of the array.");
      return null;
    }
  }

const ReviewContainer = styled.div`.bg-gray-100; .p-4; .rounded-md; .shadow-md;`;
const ReviewAuthor = styled.h3`.text-lg; .font-semibold;`;
const ReviewContent = styled.p`.text-gray-700; .mt-2;`;
const ReviewCourse = styled.p`.text-gray-600; .italic;`;
const ReviewList = styled.div`.grid; .grid-cols-1; .md:grid-cols-2; .lg:grid-cols-3; .gap-8; .lg:p-20; .md:p-10; .p-8;`;
const More = styled.a`.inline-block; .px-4; .py-2; .text-white; .bg-blue-500; .border; .border-blue-500; .rounded; .hover:bg-blue-700;`;

const randomReviews = getRandomItemsFromArray(reviews, 11);
const H1 = styled.h1`
    .text-red-700;
    .text-center;
`;

const Review = () => {
  return (
    <>
    <H1>Reviews by previous Students</H1>
    <ReviewList>
        {reviews.reverse().map(({name, company, course, review}, index) => (
             <ReviewContainer key={index}>
             <ReviewAuthor>{`${name}, ${company ? company : 'Student'}`}</ReviewAuthor>
             <ReviewCourse>{course}</ReviewCourse>
             <ReviewContent>{review}</ReviewContent>
           </ReviewContainer>
        ))}
    </ReviewList>
    </>
   
  );
};

export default Review;
