<template>
  <div class="result-view-container">
    <div class="result-box">
      <h1 v-if="outlier !== ''">{{ outlier }}</h1>
      <p v-if="message">{{ message }}</p>
      <p v-else-if="outlier !== ''">Odstająca liczba: {{ outlier }}</p>
      <p v-else>Brak wartości odstającej.</p>
    </div>
    <button @click="goBack">Wróć</button>
  </div>
</template>

<script>
export default {
  props: ["outlier", "message"],
  methods: {
    goBack() {
      this.$router.push({ name: "InputForm" });
    },
  },
};
</script>

<style scoped>
.result-view-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
}

.result-box {
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #2196f3;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

h1 {
  font-size: 3rem;
  color: #2196f3;
  margin: 0 0 10px;
}

p {
  font-size: 1.2rem;
  color: #666;
  margin: 5px 0;
  text-align: center;
}

button {
  padding: 12px 24px;
  font-size: 1.2rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}
</style>
