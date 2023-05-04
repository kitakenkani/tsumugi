import { HStack, IconButton, Tooltip } from "@chakra-ui/react";
import { IoLogoTwitter, IoLogoFacebook } from "react-icons/io5";

const ShareButtons = ({path, title}) => {
    const url = encodeURIComponent(path);
    const shareTitle = encodeURIComponent(title);
    const shareText = encodeURIComponent(title);
  
    const shareToTwitter = () => {
      const twitterURL = `https://twitter.com/intent/tweet?url=${url}&text=${shareText}&hashtags=マンドリンオーケストラ紬`;
      window.open(twitterURL, "_blank");
    };
  
    const shareToFacebook = () => {
      const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${shareTitle}`;
      window.open(facebookURL, "_blank");
    };
  
    return (
      <HStack spacing={4}>
      <Tooltip label="Twitterでシェア">
        <IconButton
          icon={<IoLogoTwitter />}
          color="gray.500"
          bg="transparent"
          _hover={{ color: "purple.600" }}
          onClick={shareToTwitter}
          aria-label="Twitterでシェア"
          fontSize="1.5em"
          
        />
      </Tooltip>
      <Tooltip label="Facebookでシェア">
        <IconButton
          icon={<IoLogoFacebook />}
          color="gray.500"
          bg="transparent"
          _hover={{ color: "purple.600" }}
          onClick={shareToFacebook}
          aria-label="Facebookでシェア"
          fontSize="1.5em"
        />
      </Tooltip>
    </HStack>
    );
  }
  
  export default ShareButtons;
  