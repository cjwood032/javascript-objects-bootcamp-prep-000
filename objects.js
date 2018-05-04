var playlist = {artistName: 'songTitle'}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
funnnction removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist[artistName]
  return playlist
}