const ArtistCardsList = document.querySelector('.artists_cards_list')
async function handleSearchArtists(){
    const busca = await fetch("backend/artists.json");
    const artists = await busca.json();

        artists.artists.forEach((artist) =>{
        console.log(typeof artist)
        ArtistCardsList.innerHTML += `
        <li class="artist_card">
            <div class="close_artist">
                <img class="close_icon" src="images/x.png" alt="">
            </div>
            <div class="artist_profile">
                <img src="./images/default-avatar-icon.jpg" alt="" class="artist_profile_image">
                </div>
                <div class="artist_info">
                    <p class="artist_name">${artist.name}</p>
                    <p class="artist_subtitle">${artist.genre}</p>
                </div>
        </li>
        `;
    });
    const closeBtns = document.querySelectorAll('.close_artist');
    closeBtns.forEach(btn => {
        btn.addEventListener("click", closeArtist)
    })
}

handleSearchArtists()


const searchBar = document.querySelector(".search_input")

searchBar.addEventListener('input' , searchFilter);

function searchFilter(){
    const artists = document.querySelectorAll('.artist_card');
    const filter = searchBar.value.toLocaleLowerCase().trim();

    artists.forEach(artist => {
        const name = artist.querySelector('.artist_name').textContent.toLowerCase()
        
        if (filter != "") {
            if (name.includes(filter)) {
                artist.style.display = "block";
            } else {
                artist.style.display = "none";
            }
        } else {
            artist.style.display = "block";
        }
    });
}

// implementando funcao de fechar o card do artista
function closeArtist(event){
    const card = event.currentTarget.parentNode;
    card.remove()

}
