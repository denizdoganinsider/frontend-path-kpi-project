<template>
  <div class="p-4 max-w-md mx-auto text-center">
    <h1 class="text-xl font-bold mb-4">Asal Sayı Kontrolü</h1>

    <input v-model.number="number" type="number" class="border p-2 rounded w-full mb-4" placeholder="Bir sayı girin" />

    <button @click="checkPrime" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Kontrol Et
    </button>

    <p class="mt-4 text-lg" v-if="result !== null">
      {{ number }} sayısı <strong>{{ result ? 'asal' : 'asal değil' }}</strong>.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const number = ref(null);
const result = ref(null);

const checkPrime = () => {
  const n = number.value;
  if (n <= 1) return (result.value = false);
  if (n === 2) return (result.value = true);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return (result.value = false);
  }

  result.value = true;
};
</script>
