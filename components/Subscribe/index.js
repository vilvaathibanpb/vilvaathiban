import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
.flex;
.justify-center;
.items-center;
.flex-col;
.lg:flex-row;
.my-4;
.p-4;
font-weight: 700;
font-size: 24px;
`;

export const SubscribeButton = styled.div`
    .p-4;
    .bg-pdark;
    .text-pwhite;
    border-radius: 10px;
    .m-4;
`;

const Subscribe = () => {
    return (
        <Container>
            Be informed about my contents, courses, paid and free workshops:
        <a href="http://eepurl.com/hoFrmf" target="_blank">
            <SubscribeButton>Subscribe</SubscribeButton>
        </a>
        </Container>
    )
}

export default Subscribe