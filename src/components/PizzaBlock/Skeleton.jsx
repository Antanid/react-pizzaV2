import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
<ContentLoader 
    speed={2}
    width={300}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="100" ry="100" width="230" height="230" /> 
    <rect x="0" y="250" rx="12" ry="12" width="230" height="30" /> 
    <rect x="0" y="300" rx="12" ry="12" width="230" height="71" /> 
    <rect x="0" y="389" rx="20" ry="20" width="113" height="38" /> 
    <rect x="115" y="389" rx="17" ry="17" width="110" height="38" />
  </ContentLoader>
)

export default Skeleton;