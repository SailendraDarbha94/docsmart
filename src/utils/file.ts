import { env } from '$env/dynamic/public';

export async function upload_file(file: File) {
	const formData = new FormData();
	//console.log(file);
	const token: string = localStorage.getItem('token') as string;
		//console.log('uploading file');
	formData.append('upload_file', file);

	const res = await fetch(`${env.PUBLIC_BACKEND_URL}/files/upload_file/`, {
		method: 'POST',
		body: formData,
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${token}`
		}
	})

	const data = await res.json();

	if (data) {
		return data;
	}
}

export default upload_file;
