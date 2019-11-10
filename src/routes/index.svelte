<script>
	import Header from '../components/Header.svelte' 
	import io from 'socket.io-client'

	let message;
	let placeholder = "Test"
	let chat = [];

	const socket = io();

	const greeting = `You have joined the chat. Use '/nick your_nickname' to set your nickname!`
	let messages = [greeting];

	const handleSubmit = () => {
		socket.emit("Message", message);
		messages = messages.concat(message);
		console.log(messages)
		message = ""
	}

	socket.on("Message", (message) => {
		messages = messages.concat(message)	
	})
</script>

<style>
	h1 {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1><Header text={'Chat App'} /></h1>
{#each messages as text}
	<li>{text}</li>
{/each}

<form action="">
	<input id="m" autocomplete="off" {placeholder} bind:value={message} />
	<button on:click|preventDefault={handleSubmit}>Send</button>
</form>
