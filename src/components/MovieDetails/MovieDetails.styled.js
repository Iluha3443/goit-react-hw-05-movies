
import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    margin:15px;

    a {
        margin-bottom: 10px;
        text-decoration: none;
        color: #333;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 10px;
    }
`;

export const MovieOverview = styled.div`
    display: flex;
    gap: 20px;
    align-items: flex-start;
`;

export const MovieImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export const ItemImage = styled.div`
    flex-shrink: 0;
`;

export const MovieTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 10px;
`;

export const Overview = styled.h2`
    margin-top: 20px;
`;

export const Ranking = styled.h2`
    margin-top: 20px;
`;

