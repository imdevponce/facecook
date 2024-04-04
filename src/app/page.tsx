import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
function generarRandomId() {
  const randomId = Math.floor(Math.random() * 10000000000);
  return randomId;
}
interface postData {
  userName: string,
  time: string,
  location: string,
  likes: number,
  userId: number,
  userImage: string,
  description: string
  id: number
}
const postExample = {
  id: generarRandomId(),
  userName: 'Saray Ponce',
  time: '10 h',
  location: 'Miami, Florida',
  likes: 20,
  userId: 1,
  userImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  description: "Today in my kitchen, we've prepared a delicious recipe of mushroom risotto! 🍄🍚 Fresh mushrooms, Arborio rice, and a touch of Parmesan cheese make this dish a truly comforting experience. Plus, it's super easy to make at home! Want the full recipe? Drop a comment below, and I'll share it with you! 😊"
}
const posts = [
  postExample,
  postExample,
  postExample,
  postExample,
  postExample,
  postExample,
  postExample,
  postExample,
  postExample,
  postExample
]
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
              <Link href={`/profile/${post.userId}`} className={`${styles.postUserName} ${styles.link}`}>
                {post.userName}
              </Link>
              <Link href={`/post/${post.id}`} className={`${styles.postTime} ${styles.link}`}>10 h</Link>
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
