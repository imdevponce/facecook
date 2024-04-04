import styles from "./post.module.css";
import Image from "next/image";
import Link from "next/link";
interface postProps {
  post: {
    username: string,
    time: string,
    location: string,
    likes: number,
    userId: number,
    userImage: string,
    description: string
    id: number
  }
}

export default function Post({ post }: postProps) {
  return (
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
  );
}
