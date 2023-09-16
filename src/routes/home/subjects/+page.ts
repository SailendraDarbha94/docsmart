import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import supabase from "$utils/supabase";

export const load: PageLoad = async () => {
    //const { subject } = params;
	// const { data: subjects, error: err } = await supabase
	// 	.from('subjects')
	// 	.select('*')
    
    const { data: subjects, error: err } = await supabase
    .from('subjects')
    .select('*')

	if (subjects) {
        if(subjects.length == 0){
            throw error(404, "No subjects")
        }
	}

    if(err){
        throw error(404, "Alas! The Page was not found")
    }
	return { subjects }
};