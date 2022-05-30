import React from 'react';
import { useDispatch } from 'react-redux';

import axios from '../../axios';
import { PagesTopNavbar, QuestionsList, SidebarLayout } from '../../components';
import { updateQuestions } from '../../redux/slices/questionSlice';
import { useEnhancedEffect } from '../../utils';
import { qstnPageLinks } from '../../utils/constants';

export default function RecentQuestions({ questions }) {
    const dispatch = useDispatch();

    useEnhancedEffect(() => {
        dispatch(updateQuestions(questions));
    }, [dispatch, questions]);

    return (
        <main>
            <PagesTopNavbar links={qstnPageLinks} />
            <QuestionsList questions={questions} />
        </main>
    );
}

RecentQuestions.getLayout = function (page) {
    return <SidebarLayout>{page}</SidebarLayout>;
};

export async function getServerSideProps() {
    const res = await axios.get(`questions?sort=createdAt:desc`);

    return {
        props: {
            questions: res.data,
        },
    };
}