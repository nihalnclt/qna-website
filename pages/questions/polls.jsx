import React from 'react';
import { useDispatch } from 'react-redux';

import { PagesTopNavbar, QuestionsList, SidebarLayout } from '../../components';
import { updateQuestions } from '../../redux/slices/questionSlice';
import { useEnhancedEffect } from '../../utils';
import { qstnPageLinks } from '../../utils/constants';
import { getAllQuestions } from '../../helpers/questionsHelpers';

export default function Polls({ questions }) {
    const dispatch = useDispatch();

    useEnhancedEffect(() => {
        dispatch(updateQuestions(JSON.parse(questions)));
    }, [dispatch, questions]);

    return (
        <main>
            <PagesTopNavbar links={qstnPageLinks} />
            <QuestionsList />
        </main>
    );
}

Polls.getLayout = function (page) {
    return <SidebarLayout>{page}</SidebarLayout>;
};

export async function getServerSideProps() {
    const res = await getAllQuestions({
        polls: 'true',
        sort: 'createdAt:desc',
    });

    return {
        props: {
            questions: JSON.stringify(res),
        },
    };
}
