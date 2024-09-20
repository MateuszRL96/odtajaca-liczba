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

      let outlier = ""; // Domyślna wartość

      // Sprawdzenie, czy jest odstająca liczba
      if (odd.length === 0) {
        outlier = even[0]; // Przypadek: wszystkie parzyste, zwracamy pierwszą parzystą
      } else if (even.length === 0) {
        outlier = odd[0]; // Przypadek: wszystkie nieparzyste, zwracamy pierwszą nieparzystą
      } else if (odd.length === 1) {
        outlier = odd[0]; // Przypadek: jedna nieparzysta
      } else {
        outlier = even[0]; // Przypadek: jedna parzysta
      }

      // Przekazujemy parametr outlier i komunikat
      const message =
        odd.length === 1 || even.length === 1
          ? ""
          : "Nie ma odstającej liczby.";
      this.$router.push({ name: "ResultView", params: { outlier, message } });
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
  width: 100%;
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
