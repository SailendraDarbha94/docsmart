import { writable } from "svelte/store"

export const INTROTEXT: string   = "Welcome to AmpDent, your ultimate destination for comprehensive knowledge and interactive learning experiences in the field of Bachelor of Dental Surgery (BDS). AmpDent is not just a website; it's your gateway to a world of dental expertise and education. Our platform is meticulously crafted to provide aspiring dental professionals with a wealth of information, engaging learning activities, real-time online tests, insightful blogs, and a vibrant community of students through personalized accounts and discussion forums. Whether you're a budding dentist looking to enhance your understanding of dental subjects or a seasoned professional seeking to stay updated with the latest developments, AmpDent is your one-stop resource for all things related to BDS. Join us on this journey of dental discovery, education, and collaboration at AmpDent!"

export const toastSignal = writable<string>()

export const emailRegExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/