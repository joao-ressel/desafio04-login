import styles from "styled-components";

export const Container = styles.main`
    margin: auto 0;
    width: 100%;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginContainer = styles.div`
    width: 80%;
    
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
    border-radius: 1rem;

    background-color: #fff;

    h1{
        color: #000;
    }
`
