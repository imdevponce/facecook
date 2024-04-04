import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
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
      <div key={post.id} className={styles.postContainer}>
        <div className={styles.postContent}>
          <div className={styles.userImage}>
            <Link href={`/profile/${post.userId}`}>
              <Image fill alt="Profile picture" src={post.userImage} objectFit="cover"/>
            </Link>
          </div>
          <div>
            <div className={styles.postUserData}>
              <Link href={`/profile/${post.userId}`} className={`${styles.postUsername} ${styles.link}`}>
                {post.username}
              </Link>
              <Link href={`/post/${post.id}`} className={`${styles.postTime} ${styles.link}`}>{post.time}</Link>
            </div>
            <p className={styles.postLocation}>{post.location}</p>
          </div>
        </div>
        <p className={styles.postDescription}>{post.description}</p>
        <p>{post.likes} Likes</p>
      </div>
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
