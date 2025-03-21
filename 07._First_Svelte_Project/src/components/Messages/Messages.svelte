<script>
  import FirstMessage from "./FirstMessage.svelte";

    let messages = $state([]);

    let messageInput = $state("");

    function addMessage (){
        messages.push(messageInput)
        messageInput = ""
    }

</script>

<h1>Messages</h1>

<p>{messages}</p>

<input bind:value={messageInput} placeholder="Type your message...">

<button onclick={addMessage}>Submit Message</button>
<FirstMessage firstMessage={messages[0]}></FirstMessage>