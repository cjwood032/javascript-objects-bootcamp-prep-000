var playlist = {artist: 'song'}
function updatePlaylist(artistName, songTitle) {
  Object.assign(playlist, artistName, songTitle);
}