import styled from "styled-components";

export const ReviewsContainer = styled.div`
    margin-top: 20px;

    .review {
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 20px;

        h3 {
            font-size: 18px;
            margin-bottom: 5px;
        }

        p {
            font-size: 16px;
        }
    }

    .no-reviews {
        text-align: center;
        margin-top: 20px;
        font-size: 18px;
        color: #999;
    }
`;
