import type { Book } from "@/models/Book";
import { ref, watchEffect } from "vue";

const baseURL = 'https://backend-thrumming-sky-6429.fly.dev/books'

export function useGetBooks() {
    const books = ref<Book[]>([])

    const resetBooksRef = () => {
        books.value = []
    }

    fetch(baseURL, {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "https://frontend-quiet-night-5362.fly.dev",
            "Accept": "application/json"
        }
    }).then(res => res.json())
        .then((res) => {
            books.value = res
        }).catch(err => {
            console.log(err)
        })

    watchEffect(() => {
        resetBooksRef();
    })

    return { books }
}
