// <<<<< QUESTION-40 >>>>>>>

//////////////////////////////////////////////////////////
// NOTE: THIS QUESTION IS DONE WITH THE HELP OF CHATGPT //
//////////////////////////////////////////////////////////


{ // this block is placed due to variables in this program warns that
    // these variables are already declared in previous programs
  
    interface Album {
        artist: string
        album: string
        tracks?: number
      }
      
      function makeAlbum(artist: string, album: string, tracks?: number)//: Album 
      {
        const albumInfo: Album = {
          artist,
          album
        }
        if (tracks) {
          albumInfo.tracks = tracks
        }
        return albumInfo
      }
      
      const album1: Album = makeAlbum('Atif Aslam', 'Doorie')
      const album2: Album = makeAlbum('Ali Zafar', 'Huqa Pani')
      const album3: Album = makeAlbum('Noori', 'Sunno', 10)
      
      console.log(album1)
      console.log(album2)
      console.log(album3)
      

}