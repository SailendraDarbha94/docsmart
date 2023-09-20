import { toastSignal } from "$lib/store";
import supabase from "$utils/supabase";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

let message:string = ''

export const load: PageServerLoad = async ({ cookies, locals }) => {
    //console.log(locals, cookies)
    return { message, signUp: true }
};

export const actions: Actions = {
    signup: async ({ cookies, request }) => {

        const formData = await request.formData();
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const confirm = formData.get('confirm_password') as string
        //console.log(email, password, confirm)

        if( password !== confirm){
            message = 'Passwords do not match'
            return
        }

        const { data, error: err } = await supabase.auth.signUp({
            email: email,
            password: password
        })
        console.log(data, err)
        if(err) {
            toastSignal.update(value => value = err.message)
            return
        }

        if(data) {
            toastSignal.update(value => value = "User Registered successfully")
            return  
        }
    }
};