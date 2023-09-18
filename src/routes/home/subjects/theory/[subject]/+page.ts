import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import supabase from '$utils/supabase';
import { page } from '$app/stores';

export const load: PageLoad = async ({ params }) => {
	const { subject } = params;
	const { data: questions, error: err } = await supabase
		.from('questions')
		.select('*')
		.eq('subject_id', Number(subject));
	if (err) {
		throw redirect(302, '/home')
	}
	if (questions) {
		if (questions.length == 0) {
			throw error(404, { message: 'Fuck Off!' });
		}
	}
	return { questions }
};
