import React, { useState, useEffect } from "react";
import { getProfileImage, DEFAULT_PROFILE_IMAGE } from "../../utils/imageUtils";

/**
 * A reusable image component with a built-in fallback system for profile images.
 * Handles both missing URLs and load failures.
 */
const ProfileImage = ({ src, alt, className, ...props }) => {
  const [imgSrc, setImgSrc] = useState(getProfileImage(src));

  // Update internal state if the src prop changes
  useEffect(() => {
    setImgSrc(getProfileImage(src));
  }, [src]);

  const handleError = () => {
    if (imgSrc !== DEFAULT_PROFILE_IMAGE) {
      setImgSrc(DEFAULT_PROFILE_IMAGE);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt || "Profile Image"}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default ProfileImage;
