import React from "react"
import Img from "gatsby-image"

// export const InstagramPosts = ({ nodes }) => {
//   const size = useContext(ResponsiveContext)
//   return (
//     <Grid
//       justifyContent="start"
//       gap="none"
//       columns={
//         size === `small`
//           ? [`1fr`]
//           : size === `medium`
//           ? [`1fr`, `1fr`]
//           : `350px`
//       }
//     >
//       {nodes.edges.map(instagram => (
//         <Node key={instagram.node.id} node={instagram.node} />
//       ))}
//     </Grid>
//   )
// }

function chunk(array, size = 1) {
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }
  return result
}

const InstagramPosts = ({ nodes }) => {
  const groups = chunk(nodes.edges, 3);
  console.log("Groups", groups);
  return groups.map(group => (
    <div className="tile is-ancestor">
      {group.map(node => (
        <div className="tile is-parent">
          <div className="tile is-child">
            <a href={`https://www.instagram.com/p/${node.node.id}/`}>
              <Img fluid={node.node.localFile.childImageSharp.fluid} />
            </a>
          </div>
        </div>
      ))}
    </div>
    )
  )
}

export default InstagramPosts