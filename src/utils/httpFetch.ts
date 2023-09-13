import { env } from "$env/dynamic/public"


const httpReq = async (method:string, path:string) => {
    //const token = await localStorage.getItem('token')
    const token = "eyJhbGciOiJIUzI1NiIsImtpZCI6IllNWVlmU1BCb1dXL1Z2UU4iLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjk0MDk5MDA5LCJpYXQiOjE2OTQwOTU0MDksImlzcyI6Imh0dHBzOi8vc2hnaWl5cnZlaWxzZWdqbnl2dWYuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImUxNjY1YjI2LWQ1ZTctNDAxOS1iMDQ1LTc0ZTg0YjJhZGE5MSIsImVtYWlsIjoic2FpbGVuZHJhLmRhcmJoYUBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6Imdvb2dsZSIsInByb3ZpZGVycyI6WyJkaXNjb3JkIiwiZ29vZ2xlIl19LCJ1c2VyX21ldGFkYXRhIjp7ImF2YXRhcl91cmwiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRlTkdkejFjVFZmeEUxQTY5RFc2SXQ5WkEtc0dza2kzUWpEWjZod0tBZXM9czk2LWMiLCJlbWFpbCI6InNhaWxlbmRyYS5kYXJiaGFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6IlNhaWxlbmRyYSBEYXJiaGEiLCJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYW1lIjoiU2FpbGVuZHJhIERhcmJoYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRlTkdkejFjVFZmeEUxQTY5RFc2SXQ5WkEtc0dza2kzUWpEWjZod0tBZXM9czk2LWMiLCJwcm92aWRlcl9pZCI6IjExNjUyOTgzNjk0MjkxNTU2NjU1MCIsInN1YiI6IjExNjUyOTgzNjk0MjkxNTU2NjU1MCJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im9hdXRoIiwidGltZXN0YW1wIjoxNjk0MDk1NDA5fV0sInNlc3Npb25faWQiOiI0MDYzNTk1ZS0yMGNiLTQ0MjktYjI5YS00NGYwZGY1Yjg2ZDgifQ._CrWwY1268yxJEnU6H4quvGXaM0EAgx09b-XClwmm8Q"
    const req = await fetch(`${env.PUBLIC_BACKEND_URL}${path}`, {
        method: method,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + `${token}`,
            'Content-Type': 'application/json'
        }
    }).catch(err => {
        return err
    })

    const data = await req.json()
    return data
}

export default httpReq