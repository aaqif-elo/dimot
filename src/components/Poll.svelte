<script>
  export let question;
  export let choices;
  export let totalVotes;
  export let creator;
  export let createdAt;

  // Function to calculate the percentage of votes for a choice
  function getPercentage(votes) {
    return totalVotes > 0 ? (votes / totalVotes) * 100 : 0;
  }

  // Function to format the date
  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
</script>

<div class="poll">
  <h2>{question}</h2>
  <div class="meta-info">
    <p>Created by: {creator}</p>
    <p>Date: {formatDate(createdAt)}</p>
    <p>Total Votes: {totalVotes}</p>
  </div>
  <div class="choices">
    {#each choices as choice}
      <div class="choice">
        <div class="choice-text">{choice.text}</div>
        <div class="choice-bar">
          <div class="bar" style="width: {getPercentage(choice.votes)}%"></div>
        </div>
        <div class="choice-votes">
          {choice.votes} votes ({getPercentage(choice.votes).toFixed(1)}%)
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .poll {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  h2 {
    margin-top: 0;
  }

  .meta-info {
    font-size: 0.9em;
    color: #666;
    margin-bottom: 20px;
  }

  .choices {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .choice {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .choice-text {
    flex: 1;
  }

  .choice-bar {
    flex: 2;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
  }

  .bar {
    height: 100%;
    background-color: #4caf50;
  }

  .choice-votes {
    flex: 1;
    text-align: right;
    font-size: 0.9em;
  }
</style>
