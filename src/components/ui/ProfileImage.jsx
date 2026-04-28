import { getProfileImage, DEFAULT_PROFILE_IMAGE } from "../../utils/imageUtils";

/**
 * A reusable image component with a built-in fallback system for profile images.
 * Handles both missing URLs and load failures.
 */
const ProfileImage = ({ src, alt, className, ...props }) => {
  const handleError = () => {
    if (props.onError) {
      props.onError();
    }
  };

  return (
    <img
      src={getProfileImage(src)}
      alt={alt || "Profile Image"}
      className={className}
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = DEFAULT_PROFILE_IMAGE;
        handleError();
      }}
      {...props}
    />
  );
};

export default ProfileImage;
