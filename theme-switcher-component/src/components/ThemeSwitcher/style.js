import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
    border-radius: .75rem;
    width: 200px;

    margin: 50% auto;

    &.light {
        background-color: var(--light);

        div {
            background-color: var(--main-bg);
        }

        .light-btn {
            background-color: var(--light);
        }

        button {
            color: var(--dark);
        }
    }

    &.dark {
        background-color: var(--dark);

        div {
            background-color: var(--dark-switcher);
        }

        .dark-btn {
            background-color: var(--dark);
        }

        button {
            color: var(--light);
        }
    }
`

export const Title = styled.p`
    font-size: 1rem;
    color: var(--title);

    border-bottom: 1px solid var(--title);
    padding-bottom: .25rem;
`
export const Switcher = styled.div`
    padding: .25rem;
    border-radius: .5rem;

    display: flex;
    justify-content: space-between;
`

export const Button = styled.button`
    border-radius: .5rem;
    border: 0;
    outline: 0;
    padding: .25rem;
    cursor: pointer;

    width: 5rem;
    height: 2rem;

    font-size: 1rem;
    font-weight: 600;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: transparent;
`