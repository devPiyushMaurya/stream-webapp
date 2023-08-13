import { get } from "./request";

export const getPlaylistById = (playlistId = '', page_limit = 25) => get(`/v2/playlists/${playlistId}?page_limit=${page_limit}`);