import supabase from '$utils/supabase';
import type { LayoutLoad } from './$types';
import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const load: LayoutLoad = async ({ url }) => {
	const res = await supabase.auth.getSession();
	const data = await res.data;
	const err = await res.error;
	const user = await data.session?.user;
	const token = await data.session?.access_token;
	console.log(user, token);

	let role: string = 'BASIC'

	if (user) {
		const { data: roles, error: e } = await supabase
			.from('admins')
			.select('role')
			.eq('user_id', user?.id);

		if (roles !== undefined && roles !== null) {
			role = roles[0].role;
	    }
    }

	if (data && browser) {
		console.log(token);
		localStorage.setItem('token', token as string);
	}

	if (err) {
		throw error(404, { message: 'Yikes!' });
	}

	//localStorage.setItem("token", token as string)
	//cookies.set("token", token as string)

	return {
		url: url.pathname,
		user: user,
		role: role
	};
};
