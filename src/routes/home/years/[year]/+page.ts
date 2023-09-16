import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import supabase from '$utils/supabase';
import { page } from '$app/stores';

export const load: PageLoad = async ({ params }) => {
	const year:string = params.year
	const { data: subjects, error: err } = await supabase
		.from('subjects')
		.select('*')
		.eq('year', year);

	if (subjects) {
		if (subjects.length == 0) {
			throw error(404, { message: 'Fuck Off!' });
		}
	}

	return { subjects };
};
