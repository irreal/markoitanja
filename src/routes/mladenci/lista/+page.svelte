<script lang="ts">
	import { client } from '$lib/supabase';
	import { onMount } from 'svelte';
	import { format, parseISO } from 'date-fns';

	let rows: Record<string, any>[] = [];
	onMount(async () => {
		const { data, error } = await client
			.from('tim_rsvp')
			.select('*')
			.order('created_at', { ascending: true });
		if (error) {
			alert('jbg, sjebalo se nešto u učitavanju. ako neće nikako, zovi Miloša');
			return;
		}
		rows = data;
	});
</script>

<div>
	<div class="overflow-x-auto">
		<table class="table">
			<!-- head -->
			<thead>
				<tr>
					<th></th>
					<th>Ime</th>
					<th>Prezime</th>
					<th>Rb</th>
					<th>Vreme</th>
				</tr>
			</thead>
			<tbody>
				{#each rows as row, i}
					<tr class={`${row.index === 0 ? 'bg-pink-200' : 'bg-pink-100'}`}>
						<th>{i + 1}</th>
						<td>{row.name}</td>
						<td>{row.surname}</td>
						<td>{row.index}</td>
						<td>{format(parseISO(row.created_at), 'dd.MM HH:mm')}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
