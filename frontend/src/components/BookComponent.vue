<script setup lang="ts">
import { useGetBooks } from '@/composables/apiService/useApiService';
const { books } = useGetBooks();
</script>

<template>
    <h1>Books:</h1>
    <ul>
        <li v-for="book in books">
            Title: {{ book.title }}, Description: {{ book.description }}
        </li>
    </ul>
</template>

<style scoped>

</style>
