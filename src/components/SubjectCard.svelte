<script lang="ts">
    // your script goes here

	interface Subject {
		created_at: string;
		id: number;
		name: string;
		uni: string;
		year: string;
	}

    export let subject:Subject;
</script>

<div class="card card-hover w-full md:w-2/5 m-4 dark:bg-blue-300 dark:text-black">
    <header class="card-header">
        <h2 class="h3 text-center">{subject.name}</h2>
    </header>
    <section class="p-2 mb-2">
        <p class="text-center">{subject.year} Year, {subject.uni}</p>
    </section>
    <footer class="card-footer flex justify-around">
        <a
            href="/home/subjects/theory/{subject.id}"
            class="w-2/5 rounded-lg shadow-xl bg-blue-300 dark:bg-blue-800 dark:text-white m-2 p-4 text-center"
        >
            Theory
        </a>
        <a
            href="/home/subjects/practical/{subject.id}"
            class="w-2/5 rounded-lg shadow-xl bg-blue-300 dark:bg-blue-800 dark:text-white m-2 p-4 text-center"
        >
            Practical
        </a>
    </footer>
</div>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->