<script lang="ts" setup></script>

<template>
  <form>
    <div>
      <label for="category-select"
        >Pick a category<select name="category-select">
          <option value="any-category">Any category</option>
          <option value="11">Enterntainment: Film</option>
          <option value="15">Enterntainment: Video games</option>
          <option value="20">Mythology</option>
          <option value="26">Celebrities</option>
          <option value="23">History</option>
        </select></label
      >
    </div>
    <div>
      <label for="number-questions"
        >Number of questions<input type="number" name="number-questions"
      /></label>
    </div>
    <div>
      <label for="difficulty-level"
        >Select difficulty<input type="range" name="volume" min="1" max="3" step="1" value="2"
      /></label>
    </div>
    <div>
      <span>Choose type of question</span>
      <label for="multiple-type"
        >Multiple choice<input type="checkbox" name="Multiple choice" id="multiple-type"
      /></label>
      <label for="true-false-type">
        True/false<input type="checkbox" name="True/false" id="true-false-type" />
      </label>
    </div>
    <button type="submit">Let’s play!</button>
  </form>
</template>
