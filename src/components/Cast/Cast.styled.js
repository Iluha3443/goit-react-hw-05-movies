import styled from "styled-components";

export const CastContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 20px;

    img {
        max-width: 100%;
        height: auto;
    }

    .actor-info {
        padding: 10px;
        border: 1px solid #ccc;
        background-color: #f9f9f9;
        text-align: center;

        h2 {
            font-size: 18px;
            margin: 10px 0;
        }
    }

    .no-cast {
        text-align: center;
        margin-top: 20px;
        font-size: 18px;
        color: #999;
    }
`;