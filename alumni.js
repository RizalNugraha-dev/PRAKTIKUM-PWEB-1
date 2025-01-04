 document.getElementById('search').addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        const alumniItems = document.querySelectorAll('#alumni-list li');

        alumniItems.forEach(item => {
            const nameJurusan = item.textContent.toLowerCase();
            if (nameJurusan.includes(searchValue)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });

