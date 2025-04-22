import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBook = () => {
    const { id } = useParams(); // URL'den kitap ID'sini al
    const navigate = useNavigate();
    const [book, setBook] = useState({
        title: "",
        author: "",
        genre: "",
        year: ""
    });

    // Kitap bilgilerini çek
    useEffect(() => {
        fetch(`http://localhost:5022/api/books/${id}`)
            .then(response => response.json())
            .then(data => setBook(data))
            .catch(error => console.error("Kitap yüklenemedi:", error));
    }, [id]);

    // Form gönderildiğinde çalışır
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:5022/api/books/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...book, year: parseInt(book.year) })
        });

        if (response.ok) {
            alert("Kitap başarıyla güncellendi!");
            navigate("/"); // Güncelleme sonrası ana sayfaya yönlendirme
        } else {
            alert("Kitap güncellenemedi.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md max-w-md mx-auto">
            <h1 className="text-xl font-bold text-center mb-4">Kitabı Güncelle</h1>
            <input
                type="text"
                placeholder="Title"
                value={book.title}
                onChange={(e) => setBook({ ...book, title: e.target.value })}
                required
                className="border p-2 rounded w-full mb-2"
            />
            <input
                type="text"
                placeholder="Author"
                value={book.author}
                onChange={(e) => setBook({ ...book, author: e.target.value })}
                required
                className="border p-2 rounded w-full mb-2"
            />
            <input
                type="text"
                placeholder="Genre"
                value={book.genre}
                onChange={(e) => setBook({ ...book, genre: e.target.value })}
                required
                className="border p-2 rounded w-full mb-2"
            />
            <input
                type="number"
                placeholder="Year"
                value={book.year}
                onChange={(e) => setBook({ ...book, year: e.target.value })}
                required
                className="border p-2 rounded w-full mb-4"
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
                Güncelle
            </button>
        </form>
    );
};

export default EditBook;
