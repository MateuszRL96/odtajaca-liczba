<template>
  <div class="input-form-container">
    <div class="input-form-box">
      <h1>Podaj liczby oddzielone przecinkami</h1>
      <input v-model="numbers" placeholder="2,4,0,100,4,11,2602,36" />
      <button @click="findOutlier">Wyszukaj</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: "",
    };
  },
  methods: {
    findOutlier() {
      if (!this.numbers) {
        alert("Wprowadź liczby oddzielone przecinkami.");
        return;
      }

      const nums = this.numbers.split(",").map(Number);

      if (nums.some(isNaN)) {
        alert("Wszystkie wartości muszą być liczbami.");
        return;
      }

      const odd = nums.filter((n) => n % 2 !== 0);
      const even = nums.filter((n) => n % 2 === 0);

      if (odd.length === nums.length || even.length === nums.length) {
        alert(
          "Nie znaleziono liczby odstającej. Wszystkie liczby są parzyste lub nieparzyste."
        );
        return;
      }
      const outlier = odd.length === 1 ? odd[0] : even[0];

      this.$router.push({ name: "ResultView", params: { outlier } });
    },
  },
};
</script>

<style scoped>
.input-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
}

.input-form-box {
  width: 400px;
  padding: 30px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

input {
  width: 90%;
  padding: 10px;
  font-size: 1.2rem;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
