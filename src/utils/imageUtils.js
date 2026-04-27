export const DEFAULT_PROFILE_IMAGE = "/img/placeholder-profile.jpg";

/**
 * Returns the provided image source or the default placeholder if src is missing.
 * @param {string} src - The image source URL.
 * @returns {string} - The valid image source URL or placeholder path.
 */
export const getProfileImage = (src) => {
  if (!src || src.trim() === "" || src === "undefined" || src === "null") {
    return DEFAULT_PROFILE_IMAGE;
  }
  return src;
};
