import React from 'react';
import { useDispatch } from 'react-redux';

import axios from '../../axios';
import { PagesTopNavbar, QuestionsList, SidebarLayout } from '../../components';
import { updateQuestions } from '../../redux/slices/questionSlice';
import { qstnPageLinks } from '../../utils/constants';

export default function MostVoted({ questions }) {
    const dispatch = useDispatch();
    dispatch(updateQuestions(questions));

    return (
        <main>
            <PagesTopNavbar links={qstnPageLinks} />
            <QuestionsList />
        </main>
    );
}

MostVoted.getLayout = function (page) {
    return <SidebarLayout>{page}</SidebarLayout>;
};

export async function getServerSideProps() {
    const res = await axios.get(`questions?sort=${'votes:desc'}`);

    return {
        props: {
            questions: res.data,
        },
    };
}