// const ArtistCardsList = document.querySelector('.artists_cards_list')
async function handleSearchArtists(){
    const busca = await fetch("backend/artists.json");
    console.log(busca);
    const artists = await busca.json();
    console.log(artists);
    
        artists.forEach((artist) =>{
            ArtistCardsList.innerHTML += `
            <li class="artist_card">
            <div class="artist_profile">
                <img src="./images/beyonce.jpg" alt="" class="artist_profile_image">
            </div>
            <div class="artist_info">
                <p class="artist_name">${artist.name}</p>
                <p class="artist_subtitle">artist</p>
            </div>
            </li>
            `
        })


}
handleSearchArtists()