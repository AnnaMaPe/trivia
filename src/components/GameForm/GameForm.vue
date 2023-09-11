<script lang="ts" setup></script>

<template>
  <form class="game-form">
    <div class="game-form__container">
      <div class="game-form__option-group">
        <div class="game-form__option">
          <label for="category-select">Question category</label
          ><select id="category-select">
            <option value="any-category">Any category</option>
            <option value="11">Enterntainment: Film</option>
            <option value="15">Enterntainment: Video games</option>
            <option value="20">Mythology</option>
            <option value="26">Celebrities</option>
            <option value="23">History</option>
          </select>
        </div>
        <div class="game-form__option">
          <label for="number-questions">Number of questions</label>
          <input type="number" id="number-questions" />
        </div>
      </div>
      <div class="game-form__option-group">
        <div class="game-form__option">
          <label for="difficulty-level">Difficulty level</label>
          <input type="range" name="volume" min="1" max="3" step="1" value="2" />
        </div>
        <div class="game-form__option">
          <span>Type of question</span>
          <div class="question-type">
            <label for="multiple-type" class="question-type__type"
              >Multiple choice<input type="checkbox" name="Multiple choice" id="multiple-type"
            /></label>
            <label for="true-false-type" class="question-type__type">
              True/false<input type="checkbox" name="True/false" id="true-false-type" />
            </label>
          </div>
        </div>
      </div>
    </div>
    <button type="submit" class="button game-form__button">Let’s play!</button>
  </form>
</template>

<style scoped lang="scss">
* {
  color: var(--text--acent-color);
}
label,
span {
  font-size: 1.6rem;
}

input,
select,
option,
.question-type__type {
  font-size: 1.2rem;
  margin: 10px 0;
  padding: 15px;
  border-radius: 10px;
  min-height: 60px;
}

.question-type__type {
  padding: 10px 0;

  input {
    margin: 15px;
    min-height: fit-content;
  }
}

.question-type {
  display: flex;
  justify-content: space-between;
}

.game-form {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__button {
    background-color: var(--accent-color);
    font-size: 2rem;
    width: 300px;
    padding: 12px 4px;
    margin: 20px 0;
  }

  &__option {
    display: flex;
    flex-direction: column;
    margin: 15px 0;
  }
}

@media (min-width: 768px) {
  .game-form {
    padding: 15px;
    border: 1px solid var(--text--acent-color);
    border-radius: 20px;
    max-width: 870px;
    align-items: flex-start;

    &__container {
      display: flex;
      gap: 180px;
    }

    &__option-group {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
    }

    &__button {
      align-self: center;
      width: 360px;
      font-size: 2.4rem;
    }
  }
}

@media (max-width: 890px) {
  .game-form__container {
    gap: 90px;
  }
}

@media (max-width: 795px) {
  .game-form__container {
    gap: 50px;
  }
}
</style>
