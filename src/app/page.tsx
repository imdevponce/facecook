import styles from "./page.module.css";
import Post from "@/components/Post";
import { posts } from "@/mocks/postsData";
interface postData {
  username: string,
  time: string,
  location: string,
  likes: number,
  userId: number,
  userImage: string,
  description: string
  id: number
}

const renderPosts = (posts: postData[]): any => {
  if (posts.length) {
    return posts.map((post) => (
      <Post key={post.id} post={post}/>
    ))
}
    return null
}
export default function Home() {
  return (
    <div className={styles.container}>
      {renderPosts(posts)}
    </div>
  );
}
