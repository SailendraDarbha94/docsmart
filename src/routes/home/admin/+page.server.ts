import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import supabase from '$utils/supabase';
import { toastSignal } from '$lib/store';
interface Subject {
	created_at: string;
	id: number;
	name: string;
	uni: string;
	year: string;
}
export const load: PageServerLoad = async () => {
	const { data: subs, error: err } = await supabase.from('subjects').select('*');
	let subjects: Subject[] = [];
	if (subs) {
		subjects = subs;
	}
	return { subs };
};

export const actions: Actions = {
	question: async ({ cookies, request }) => {
		const formdata = await request.formData();
		const question = await formdata.get('question');
		const subject_id = formdata.get('subject');
		const marks = formdata.get('marks');

		const { data, error } = await supabase
			.from('questions')
			.insert([
                {
                    question: question,
                    marks: marks,
                    subject_id: subject_id,
                }
            ])
			.select();

        if(error) {
            console.error(error)
            toastSignal.update(value => value = "Error occurred")
            return
        }

        if(data) {
            toastSignal.update(value => value = "Question created")
            //console.log(data)
            return { questionUpload : false }
        }
	},

	quiz: async ({ cookies, request }) => {
		const formdata = await request.formData();
		const quiz = await formdata.get('quiz');
		const answer = formdata.get('answer');
		const option_one = formdata.get('option_one');
		const option_two = formdata.get('option_two');
		const option_three = formdata.get('option_three');
		const option_four = formdata.get('option_four');
		const subject_id = formdata.get('subject');

		const { data, error } = await supabase
			.from('quiz')
			.insert([
                {
                    question: quiz,
                    answer: answer,
                    options: [option_one, option_two, option_three, option_four],
					subject_id: subject_id
                }
            ])
			.select();

        if(error) {
            console.error(error)
            toastSignal.update(value => value = "Error occurred")
            return
        }

        if(data) {
            toastSignal.update(value => value = "Quiz created")
            //console.log(data)
            return { quizUpload : false }
        }
	}
};
