<script setup lang="ts">
import { useGetBooks } from '@/composables/apiService/useApiService';
const { books } = useGetBooks();
</script>

<template>


    <!--Cardok-->
    <div v-for="book in books" class="card" style="width: 18rem;">
        <!--<img src="..." class="card-img-top" alt="...">-->
        <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text">{{ book.description }}</p>
            <a id="erdekelGomb">Érdekel</a>
        </div>
    </div>


    <!--Modal-->
    <div class="modal fade" id="erdekelModal" tabindex="-1" aria-labelledby="erdekelModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="erdekelModalLabel">Jelentkezés</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div>
                    <label for="nev">Név</label>
                    <input placeholder="Név" type="text" id="nev" name="nev">
                </div>
                <div>
                    <label for="email">E-mail</label>
                    <input placeholder="E-mail" type="text" id="e-mail" name="e-mail">
                </div>
                <div>
                    <label for="motivlev">Motivációs levél</label>
                    <textarea placeholder="Motivációs levél" type="text" id="motivlev" name="motivlev"></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Vissza</button>
                <button type="button" class="btn btn-success">Küldés</button>
            </div>
            </div>
        </div>
    </div>


   


</template>


<!--Style-->
    <style scoped>

    </style>