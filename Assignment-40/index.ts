// Assignment-40

function makeAlbum (artist : string, title : string): {artist: string; title: string} {
    const uniqueAlbum = {
        artist : artist.charAt(0).toUpperCase() + artist.slice(1),
        title : title.charAt(0).toUpperCase()+ title.slice(1)

    };
    return uniqueAlbum;
}

let Album = makeAlbum ("Usama", "The Fall. Mark EThe Fall. Mark E")
console.log(Album);

Album = makeAlbum("Musaib", "Buckethead")
console.log(Album);

Album = makeAlbum("Yasir", "Elvis Presley")
console.log(Album);


