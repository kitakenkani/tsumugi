import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box mt="20" align="center" opacity={0.4} fontSize="sm" borderTop="2px solid #525252"  paddingTop="4">
      &copy; {new Date().getFullYear()} Kentaro Kitamura. All Rights Reserved.
    </Box>

  )
}

export default Footer