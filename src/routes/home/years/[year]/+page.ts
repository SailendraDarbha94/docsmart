import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import supabase from '$utils/supabase';
import { page } from '$app/stores';

export const load: PageLoad = async ({ params }) => {
	const year:string = params.year
	const { data: notices, error: e } = await supabase
	.from('notices')
	.select("*")
	.in('year', [ year, 'all'])
	//.in('years', ['all', year])
	// Filters
	// .eq('column', 'Equal to')
	// .gt('column', 'Greater than')
	// .lt('column', 'Less than')
	// .gte('column', 'Greater than or equal to')
	// .lte('column', 'Less than or equal to')
	// .like('column', '%CaseSensitive%')
	// .ilike('column', '%CaseInsensitive%')
	// .is('column', null)
	//.in('year', ['all', year])
	//.neq('column', 'Not equal to')
	
	// Arrays
	//.cs('years', ['', 'contains'])
	// .cd('array_column', ['contained', 'by'])
	console.log(notices, e)
  


	
	const { data: subjects, error: err } = await supabase
		.from('subjects')
		.select('*')
		.eq('year', year);

	if (subjects) {
		if (subjects.length == 0) {
			throw error(404, { message: 'Fuck Off!' });
		}
	}

	return { subjects, notices };
};
