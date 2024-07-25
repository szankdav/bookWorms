import type { Book } from "@/models/Book";
import { ref, watchEffect } from "vue";

const baseURL = 'https://backend-shy-dew-2743.fly.dev/books'

export function useGetBooks() {
    const books = ref<Book[]>([])

    const resetBooksRef = () => {
        books.value = []
    }

    fetch(baseURL, {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
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
