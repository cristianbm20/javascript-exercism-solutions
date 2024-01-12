// Concepto: Sets

export const removeDuplicates = playlist =>
  Array.from(new Set(playlist))

export const hasTrack = (playlist, track) =>
  new Set(playlist).has(track)

export const addTrack = (playlist, track) =>
  Array.from(new Set(playlist).add(track))

export const deleteTrack = (playlist, track) => {
  const result = new Set(playlist)
  result.delete(track)
  return Array.from(result)
}

export const listArtists = playlist =>
  Array.from(new Set(playlist.map(track => track.split(' - ')[1])))

const tracks = ['Free Bird - Lynyrd Skynyrd', 'Free Bird - Lynyrd Skynyrd', 'Sweet Home Alabama - Lynyrd Skynyrd', 'Jumpin Jack Flash - The Rolling Stones']
console.log(removeDuplicates(tracks))
console.log(hasTrack(tracks, 'Free Bird - Lynyrd Skynyrd'))
console.log(hasTrack(tracks, 'Sympathy for the Devil - The Rolling Stones'))
console.log(addTrack(tracks, 'cancion de prueba - grupo de prueba'))
console.log(listArtists(tracks))
