import { getPlaylistById } from "@/services/playlist";

const JWPLAYER_API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchPlaylistById = async (playlistId = '', page_limit = 25) => {
    try {
        const response = await getPlaylistById(playlistId, page_limit);
        const data = await response.json();
        return data;
    } catch (err) {
        return err;
    }
}

export const createPlaylistLinkByMediaId = (mediaId = "") => `${JWPLAYER_API_BASE_URL}/v2/media/${mediaId}`;