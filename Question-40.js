// <<<<< QUESTION-40 >>>>>>>
//////////////////////////////////////////////////////////
// NOTE: THIS QUESTION IS DONE WITH THE HELP OF CHATGPT //
//////////////////////////////////////////////////////////
{ // this block is placed due to variables in this program warns that
    function makeAlbum(artist, album, tracks) {
        var albumInfo = {
            artist: artist,
            album: album
        };
        if (tracks) {
            albumInfo.tracks = tracks;
        }
        return albumInfo;
    }
    var album1 = makeAlbum('Atif Aslam', 'Doorie');
    var album2 = makeAlbum('Ali Zafar', 'Huqa Pani');
    var album3 = makeAlbum('Noori', 'Sunno', 10);
    console.log(album1);
    console.log(album2);
    console.log(album3);
}
